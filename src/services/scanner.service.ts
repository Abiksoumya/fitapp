import OpenAI from 'openai';
import { v2 as cloudinary } from 'cloudinary';
import env from '../config/env';
import { AppError } from '../utils/errors.utils';
import { ScanResult } from '../models/nutrition.model';
import '../config/cloudinary';

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

const SCAN_PROMPT = `You are a world-class nutrition expert with comprehensive knowledge of all global cuisines including Indian, Chinese, Italian, American, Mexican, Japanese, and all other cuisines worldwide.

Analyze this food image carefully and provide accurate nutritional information for ANY type of food including:
- Fresh fruits and vegetables
- Packaged and processed foods
- Baked goods (cakes, biscuits, bread, pastries)
- Indian dishes (Dal, Biryani, Roti, Idli etc.)
- Fast food (burgers, pizza, fries etc.)
- Beverages (juices, smoothies, drinks)
- Snacks and street food
- Restaurant meals from any cuisine
- Home cooked meals

Respond ONLY with a valid JSON object — no markdown, no backticks, no extra text:
{
  "dishName": "Exact name of the food item",
  "calories": 320,
  "protein": 14,
  "carbs": 48,
  "fat": 8,
  "servingSize": "1 serving (approximately 100g)",
  "confidence": "high"
}

Important rules:
- Identify ALL types of food — fruits, vegetables, snacks, meals, beverages, baked goods
- For fruits: "1 medium apple (182g)" or "1 banana (118g)"
- For baked goods: "1 slice chocolate cake (80g)" or "2 biscuits (30g)"
- For packaged foods: estimate based on visible portion
- Estimate nutrition for ONE standard serving visible in the image
- If multiple items visible, analyze the entire plate/portion combined
- confidence must be: "high", "medium" or "low"
- If image is not food, return: {"error": "Not a food image"}
- Return ONLY the JSON object, nothing else`;

const uploadToCloudinary = (
  buffer: Buffer,
): Promise<{ secure_url: string }> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder:        'fitness-app/food-scans',
        resource_type: 'image',
        transformation: [
          { quality: 'auto', fetch_format: 'auto' },
          { width: 1024, crop: 'limit' },
        ],
      },
      (error, result) => {
        if (error || !result) {
          reject(new AppError('Image upload to Cloudinary failed', 500));
        } else {
          resolve(result as { secure_url: string });
        }
      },
    );
    stream.end(buffer);
  });
};

const analyzeWithGPT = async (imageUrl: string): Promise<any> => {
  const response = await openai.chat.completions.create({
    model:      'gpt-4o',
    max_tokens: 300,
    messages: [
      {
        role:    'user',
        content: [
          {
            type:      'image_url',
            image_url: {
              url:    imageUrl,
              detail: 'high',
            },
          },
          {
            type: 'text',
            text: SCAN_PROMPT,
          },
        ],
      },
    ],
  });

  const raw = response.choices[0]?.message?.content?.trim();
  if (!raw) throw new AppError('No response from AI', 500);

  // Strip markdown code blocks if GPT adds them anyway
  const cleaned = raw
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .trim();

  return JSON.parse(cleaned);
};

export const ScannerService = {
  analyzeFood: async (
    imageBuffer: Buffer,
    _mimeType: string,
  ): Promise<ScanResult> => {
    // Step 1 — Upload image to Cloudinary
    let imageUrl: string;
    try {
      const uploaded = await uploadToCloudinary(imageBuffer);
      imageUrl = uploaded.secure_url;
    } catch (err) {
      throw new AppError('Failed to upload image. Please try again.', 500);
    }

    // Step 2 — Analyze with GPT-4o Vision
    let parsed: any;
    try {
      parsed = await analyzeWithGPT(imageUrl);
    } catch (err) {
      if (err instanceof AppError) throw err;
      throw new AppError('AI analysis failed. Please try again.', 500);
    }

    // Step 3 — Check for error response from GPT
    if (parsed.error) {
      throw new AppError(parsed.error, 400);
    }

    // Step 4 — Validate required fields
    if (!parsed.dishName || parsed.calories === undefined) {
      throw new AppError('Could not identify food in image', 400);
    }

    return {
      dishName:    parsed.dishName,
      calories:    Number(parsed.calories)  || 0,
      protein:     Number(parsed.protein)   || 0,
      carbs:       Number(parsed.carbs)     || 0,
      fat:         Number(parsed.fat)       || 0,
      servingSize: parsed.servingSize       || '1 serving',
      confidence:  parsed.confidence        || 'medium',
      imageUrl,
    };
  },
};