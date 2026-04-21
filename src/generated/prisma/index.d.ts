
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model ScanQuota
 * 
 */
export type ScanQuota = $Result.DefaultSelection<Prisma.$ScanQuotaPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model TopUpPack
 * 
 */
export type TopUpPack = $Result.DefaultSelection<Prisma.$TopUpPackPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model WaterLog
 * 
 */
export type WaterLog = $Result.DefaultSelection<Prisma.$WaterLogPayload>
/**
 * Model StepLog
 * 
 */
export type StepLog = $Result.DefaultSelection<Prisma.$StepLogPayload>
/**
 * Model CycleLog
 * 
 */
export type CycleLog = $Result.DefaultSelection<Prisma.$CycleLogPayload>
/**
 * Model Symptom
 * 
 */
export type Symptom = $Result.DefaultSelection<Prisma.$SymptomPayload>
/**
 * Model WorkoutLog
 * 
 */
export type WorkoutLog = $Result.DefaultSelection<Prisma.$WorkoutLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanQuota`: Exposes CRUD operations for the **ScanQuota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanQuotas
    * const scanQuotas = await prisma.scanQuota.findMany()
    * ```
    */
  get scanQuota(): Prisma.ScanQuotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topUpPack`: Exposes CRUD operations for the **TopUpPack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopUpPacks
    * const topUpPacks = await prisma.topUpPack.findMany()
    * ```
    */
  get topUpPack(): Prisma.TopUpPackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterLog`: Exposes CRUD operations for the **WaterLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterLogs
    * const waterLogs = await prisma.waterLog.findMany()
    * ```
    */
  get waterLog(): Prisma.WaterLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stepLog`: Exposes CRUD operations for the **StepLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StepLogs
    * const stepLogs = await prisma.stepLog.findMany()
    * ```
    */
  get stepLog(): Prisma.StepLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cycleLog`: Exposes CRUD operations for the **CycleLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CycleLogs
    * const cycleLogs = await prisma.cycleLog.findMany()
    * ```
    */
  get cycleLog(): Prisma.CycleLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.symptom`: Exposes CRUD operations for the **Symptom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Symptoms
    * const symptoms = await prisma.symptom.findMany()
    * ```
    */
  get symptom(): Prisma.SymptomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutLog`: Exposes CRUD operations for the **WorkoutLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutLogs
    * const workoutLogs = await prisma.workoutLog.findMany()
    * ```
    */
  get workoutLog(): Prisma.WorkoutLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subscription: 'Subscription',
    ScanQuota: 'ScanQuota',
    Payment: 'Payment',
    TopUpPack: 'TopUpPack',
    RefreshToken: 'RefreshToken',
    Meal: 'Meal',
    WaterLog: 'WaterLog',
    StepLog: 'StepLog',
    CycleLog: 'CycleLog',
    Symptom: 'Symptom',
    WorkoutLog: 'WorkoutLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription" | "scanQuota" | "payment" | "topUpPack" | "refreshToken" | "meal" | "waterLog" | "stepLog" | "cycleLog" | "symptom" | "workoutLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      ScanQuota: {
        payload: Prisma.$ScanQuotaPayload<ExtArgs>
        fields: Prisma.ScanQuotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanQuotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanQuotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          findFirst: {
            args: Prisma.ScanQuotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanQuotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          findMany: {
            args: Prisma.ScanQuotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>[]
          }
          create: {
            args: Prisma.ScanQuotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          createMany: {
            args: Prisma.ScanQuotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanQuotaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>[]
          }
          delete: {
            args: Prisma.ScanQuotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          update: {
            args: Prisma.ScanQuotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          deleteMany: {
            args: Prisma.ScanQuotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanQuotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanQuotaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>[]
          }
          upsert: {
            args: Prisma.ScanQuotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanQuotaPayload>
          }
          aggregate: {
            args: Prisma.ScanQuotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanQuota>
          }
          groupBy: {
            args: Prisma.ScanQuotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanQuotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanQuotaCountArgs<ExtArgs>
            result: $Utils.Optional<ScanQuotaCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      TopUpPack: {
        payload: Prisma.$TopUpPackPayload<ExtArgs>
        fields: Prisma.TopUpPackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopUpPackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopUpPackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          findFirst: {
            args: Prisma.TopUpPackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopUpPackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          findMany: {
            args: Prisma.TopUpPackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>[]
          }
          create: {
            args: Prisma.TopUpPackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          createMany: {
            args: Prisma.TopUpPackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopUpPackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>[]
          }
          delete: {
            args: Prisma.TopUpPackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          update: {
            args: Prisma.TopUpPackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          deleteMany: {
            args: Prisma.TopUpPackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopUpPackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopUpPackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>[]
          }
          upsert: {
            args: Prisma.TopUpPackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopUpPackPayload>
          }
          aggregate: {
            args: Prisma.TopUpPackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopUpPack>
          }
          groupBy: {
            args: Prisma.TopUpPackGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopUpPackGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopUpPackCountArgs<ExtArgs>
            result: $Utils.Optional<TopUpPackCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      WaterLog: {
        payload: Prisma.$WaterLogPayload<ExtArgs>
        fields: Prisma.WaterLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findFirst: {
            args: Prisma.WaterLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          findMany: {
            args: Prisma.WaterLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          create: {
            args: Prisma.WaterLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          createMany: {
            args: Prisma.WaterLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaterLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          delete: {
            args: Prisma.WaterLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          update: {
            args: Prisma.WaterLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          deleteMany: {
            args: Prisma.WaterLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaterLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>[]
          }
          upsert: {
            args: Prisma.WaterLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterLogPayload>
          }
          aggregate: {
            args: Prisma.WaterLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterLog>
          }
          groupBy: {
            args: Prisma.WaterLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaterLogCountArgs<ExtArgs>
            result: $Utils.Optional<WaterLogCountAggregateOutputType> | number
          }
        }
      }
      StepLog: {
        payload: Prisma.$StepLogPayload<ExtArgs>
        fields: Prisma.StepLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          findFirst: {
            args: Prisma.StepLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          findMany: {
            args: Prisma.StepLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>[]
          }
          create: {
            args: Prisma.StepLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          createMany: {
            args: Prisma.StepLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>[]
          }
          delete: {
            args: Prisma.StepLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          update: {
            args: Prisma.StepLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          deleteMany: {
            args: Prisma.StepLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>[]
          }
          upsert: {
            args: Prisma.StepLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepLogPayload>
          }
          aggregate: {
            args: Prisma.StepLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStepLog>
          }
          groupBy: {
            args: Prisma.StepLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepLogCountArgs<ExtArgs>
            result: $Utils.Optional<StepLogCountAggregateOutputType> | number
          }
        }
      }
      CycleLog: {
        payload: Prisma.$CycleLogPayload<ExtArgs>
        fields: Prisma.CycleLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CycleLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CycleLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          findFirst: {
            args: Prisma.CycleLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CycleLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          findMany: {
            args: Prisma.CycleLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>[]
          }
          create: {
            args: Prisma.CycleLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          createMany: {
            args: Prisma.CycleLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CycleLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>[]
          }
          delete: {
            args: Prisma.CycleLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          update: {
            args: Prisma.CycleLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          deleteMany: {
            args: Prisma.CycleLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CycleLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CycleLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>[]
          }
          upsert: {
            args: Prisma.CycleLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CycleLogPayload>
          }
          aggregate: {
            args: Prisma.CycleLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCycleLog>
          }
          groupBy: {
            args: Prisma.CycleLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CycleLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CycleLogCountArgs<ExtArgs>
            result: $Utils.Optional<CycleLogCountAggregateOutputType> | number
          }
        }
      }
      Symptom: {
        payload: Prisma.$SymptomPayload<ExtArgs>
        fields: Prisma.SymptomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SymptomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SymptomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findFirst: {
            args: Prisma.SymptomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SymptomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findMany: {
            args: Prisma.SymptomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          create: {
            args: Prisma.SymptomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          createMany: {
            args: Prisma.SymptomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SymptomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          delete: {
            args: Prisma.SymptomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          update: {
            args: Prisma.SymptomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          deleteMany: {
            args: Prisma.SymptomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SymptomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SymptomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          upsert: {
            args: Prisma.SymptomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          aggregate: {
            args: Prisma.SymptomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSymptom>
          }
          groupBy: {
            args: Prisma.SymptomGroupByArgs<ExtArgs>
            result: $Utils.Optional<SymptomGroupByOutputType>[]
          }
          count: {
            args: Prisma.SymptomCountArgs<ExtArgs>
            result: $Utils.Optional<SymptomCountAggregateOutputType> | number
          }
        }
      }
      WorkoutLog: {
        payload: Prisma.$WorkoutLogPayload<ExtArgs>
        fields: Prisma.WorkoutLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findFirst: {
            args: Prisma.WorkoutLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          findMany: {
            args: Prisma.WorkoutLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          create: {
            args: Prisma.WorkoutLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          createMany: {
            args: Prisma.WorkoutLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          delete: {
            args: Prisma.WorkoutLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          update: {
            args: Prisma.WorkoutLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkoutLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>[]
          }
          upsert: {
            args: Prisma.WorkoutLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutLogPayload>
          }
          aggregate: {
            args: Prisma.WorkoutLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutLog>
          }
          groupBy: {
            args: Prisma.WorkoutLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutLogCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscription?: SubscriptionOmit
    scanQuota?: ScanQuotaOmit
    payment?: PaymentOmit
    topUpPack?: TopUpPackOmit
    refreshToken?: RefreshTokenOmit
    meal?: MealOmit
    waterLog?: WaterLogOmit
    stepLog?: StepLogOmit
    cycleLog?: CycleLogOmit
    symptom?: SymptomOmit
    workoutLog?: WorkoutLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meals: number
    waterLogs: number
    stepLogs: number
    cycleLogs: number
    symptoms: number
    workoutLogs: number
    refreshTokens: number
    payments: number
    topUpPacks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | UserCountOutputTypeCountMealsArgs
    waterLogs?: boolean | UserCountOutputTypeCountWaterLogsArgs
    stepLogs?: boolean | UserCountOutputTypeCountStepLogsArgs
    cycleLogs?: boolean | UserCountOutputTypeCountCycleLogsArgs
    symptoms?: boolean | UserCountOutputTypeCountSymptomsArgs
    workoutLogs?: boolean | UserCountOutputTypeCountWorkoutLogsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    topUpPacks?: boolean | UserCountOutputTypeCountTopUpPacksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCycleLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSymptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTopUpPacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopUpPackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    dailyStepGoal: number | null
    dailyCalGoal: number | null
    dailyWaterGoal: number | null
    weightKg: number | null
    heightCm: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    dailyStepGoal: number | null
    dailyCalGoal: number | null
    dailyWaterGoal: number | null
    weightKg: number | null
    heightCm: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: string | null
    fitnessLevel: string | null
    fitnessGoal: string | null
    dailyStepGoal: number | null
    dailyCalGoal: number | null
    dailyWaterGoal: number | null
    weightKg: number | null
    heightCm: number | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: string | null
    fitnessLevel: string | null
    fitnessGoal: string | null
    dailyStepGoal: number | null
    dailyCalGoal: number | null
    dailyWaterGoal: number | null
    weightKg: number | null
    heightCm: number | null
    units: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    age: number
    gender: number
    fitnessLevel: number
    fitnessGoal: number
    dailyStepGoal: number
    dailyCalGoal: number
    dailyWaterGoal: number
    weightKg: number
    heightCm: number
    units: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    dailyStepGoal?: true
    dailyCalGoal?: true
    dailyWaterGoal?: true
    weightKg?: true
    heightCm?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    dailyStepGoal?: true
    dailyCalGoal?: true
    dailyWaterGoal?: true
    weightKg?: true
    heightCm?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    fitnessLevel?: true
    fitnessGoal?: true
    dailyStepGoal?: true
    dailyCalGoal?: true
    dailyWaterGoal?: true
    weightKg?: true
    heightCm?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    fitnessLevel?: true
    fitnessGoal?: true
    dailyStepGoal?: true
    dailyCalGoal?: true
    dailyWaterGoal?: true
    weightKg?: true
    heightCm?: true
    units?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    fitnessLevel?: true
    fitnessGoal?: true
    dailyStepGoal?: true
    dailyCalGoal?: true
    dailyWaterGoal?: true
    weightKg?: true
    heightCm?: true
    units?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    age: number | null
    gender: string
    fitnessLevel: string
    fitnessGoal: string
    dailyStepGoal: number
    dailyCalGoal: number
    dailyWaterGoal: number
    weightKg: number | null
    heightCm: number | null
    units: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    fitnessGoal?: boolean
    dailyStepGoal?: boolean
    dailyCalGoal?: boolean
    dailyWaterGoal?: boolean
    weightKg?: boolean
    heightCm?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meals?: boolean | User$mealsArgs<ExtArgs>
    waterLogs?: boolean | User$waterLogsArgs<ExtArgs>
    stepLogs?: boolean | User$stepLogsArgs<ExtArgs>
    cycleLogs?: boolean | User$cycleLogsArgs<ExtArgs>
    symptoms?: boolean | User$symptomsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    scanQuota?: boolean | User$scanQuotaArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    topUpPacks?: boolean | User$topUpPacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    fitnessGoal?: boolean
    dailyStepGoal?: boolean
    dailyCalGoal?: boolean
    dailyWaterGoal?: boolean
    weightKg?: boolean
    heightCm?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    fitnessGoal?: boolean
    dailyStepGoal?: boolean
    dailyCalGoal?: boolean
    dailyWaterGoal?: boolean
    weightKg?: boolean
    heightCm?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    fitnessLevel?: boolean
    fitnessGoal?: boolean
    dailyStepGoal?: boolean
    dailyCalGoal?: boolean
    dailyWaterGoal?: boolean
    weightKg?: boolean
    heightCm?: boolean
    units?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "age" | "gender" | "fitnessLevel" | "fitnessGoal" | "dailyStepGoal" | "dailyCalGoal" | "dailyWaterGoal" | "weightKg" | "heightCm" | "units" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | User$mealsArgs<ExtArgs>
    waterLogs?: boolean | User$waterLogsArgs<ExtArgs>
    stepLogs?: boolean | User$stepLogsArgs<ExtArgs>
    cycleLogs?: boolean | User$cycleLogsArgs<ExtArgs>
    symptoms?: boolean | User$symptomsArgs<ExtArgs>
    workoutLogs?: boolean | User$workoutLogsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    scanQuota?: boolean | User$scanQuotaArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    topUpPacks?: boolean | User$topUpPacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      meals: Prisma.$MealPayload<ExtArgs>[]
      waterLogs: Prisma.$WaterLogPayload<ExtArgs>[]
      stepLogs: Prisma.$StepLogPayload<ExtArgs>[]
      cycleLogs: Prisma.$CycleLogPayload<ExtArgs>[]
      symptoms: Prisma.$SymptomPayload<ExtArgs>[]
      workoutLogs: Prisma.$WorkoutLogPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      scanQuota: Prisma.$ScanQuotaPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      topUpPacks: Prisma.$TopUpPackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      age: number | null
      gender: string
      fitnessLevel: string
      fitnessGoal: string
      dailyStepGoal: number
      dailyCalGoal: number
      dailyWaterGoal: number
      weightKg: number | null
      heightCm: number | null
      units: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meals<T extends User$mealsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waterLogs<T extends User$waterLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$waterLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stepLogs<T extends User$stepLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$stepLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cycleLogs<T extends User$cycleLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$cycleLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    symptoms<T extends User$symptomsArgs<ExtArgs> = {}>(args?: Subset<T, User$symptomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workoutLogs<T extends User$workoutLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$workoutLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scanQuota<T extends User$scanQuotaArgs<ExtArgs> = {}>(args?: Subset<T, User$scanQuotaArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topUpPacks<T extends User$topUpPacksArgs<ExtArgs> = {}>(args?: Subset<T, User$topUpPacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'String'>
    readonly fitnessLevel: FieldRef<"User", 'String'>
    readonly fitnessGoal: FieldRef<"User", 'String'>
    readonly dailyStepGoal: FieldRef<"User", 'Int'>
    readonly dailyCalGoal: FieldRef<"User", 'Int'>
    readonly dailyWaterGoal: FieldRef<"User", 'Float'>
    readonly weightKg: FieldRef<"User", 'Float'>
    readonly heightCm: FieldRef<"User", 'Float'>
    readonly units: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.meals
   */
  export type User$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * User.waterLogs
   */
  export type User$waterLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    cursor?: WaterLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * User.stepLogs
   */
  export type User$stepLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    where?: StepLogWhereInput
    orderBy?: StepLogOrderByWithRelationInput | StepLogOrderByWithRelationInput[]
    cursor?: StepLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepLogScalarFieldEnum | StepLogScalarFieldEnum[]
  }

  /**
   * User.cycleLogs
   */
  export type User$cycleLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    where?: CycleLogWhereInput
    orderBy?: CycleLogOrderByWithRelationInput | CycleLogOrderByWithRelationInput[]
    cursor?: CycleLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CycleLogScalarFieldEnum | CycleLogScalarFieldEnum[]
  }

  /**
   * User.symptoms
   */
  export type User$symptomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    where?: SymptomWhereInput
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    cursor?: SymptomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * User.workoutLogs
   */
  export type User$workoutLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    cursor?: WorkoutLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.scanQuota
   */
  export type User$scanQuotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    where?: ScanQuotaWhereInput
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.topUpPacks
   */
  export type User$topUpPacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    where?: TopUpPackWhereInput
    orderBy?: TopUpPackOrderByWithRelationInput | TopUpPackOrderByWithRelationInput[]
    cursor?: TopUpPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopUpPackScalarFieldEnum | TopUpPackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    status: string | null
    razorpaySubId: string | null
    razorpayOrderId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: string | null
    status: string | null
    razorpaySubId: string | null
    razorpayOrderId: string | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    razorpaySubId: number
    razorpayOrderId: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpaySubId?: true
    razorpayOrderId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpaySubId?: true
    razorpayOrderId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    razorpaySubId?: true
    razorpayOrderId?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: string
    status: string
    razorpaySubId: string | null
    razorpayOrderId: string | null
    currentPeriodStart: Date
    currentPeriodEnd: Date | null
    cancelledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubId?: boolean
    razorpayOrderId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubId?: boolean
    razorpayOrderId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubId?: boolean
    razorpayOrderId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    razorpaySubId?: boolean
    razorpayOrderId?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "status" | "razorpaySubId" | "razorpayOrderId" | "currentPeriodStart" | "currentPeriodEnd" | "cancelledAt" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: string
      status: string
      razorpaySubId: string | null
      razorpayOrderId: string | null
      currentPeriodStart: Date
      currentPeriodEnd: Date | null
      cancelledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly razorpaySubId: FieldRef<"Subscription", 'String'>
    readonly razorpayOrderId: FieldRef<"Subscription", 'String'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelledAt: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model ScanQuota
   */

  export type AggregateScanQuota = {
    _count: ScanQuotaCountAggregateOutputType | null
    _avg: ScanQuotaAvgAggregateOutputType | null
    _sum: ScanQuotaSumAggregateOutputType | null
    _min: ScanQuotaMinAggregateOutputType | null
    _max: ScanQuotaMaxAggregateOutputType | null
  }

  export type ScanQuotaAvgAggregateOutputType = {
    scansUsed: number | null
    scansLimit: number | null
    extraScans: number | null
  }

  export type ScanQuotaSumAggregateOutputType = {
    scansUsed: number | null
    scansLimit: number | null
    extraScans: number | null
  }

  export type ScanQuotaMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scansUsed: number | null
    scansLimit: number | null
    extraScans: number | null
    periodStart: Date | null
    periodEnd: Date | null
    updatedAt: Date | null
  }

  export type ScanQuotaMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scansUsed: number | null
    scansLimit: number | null
    extraScans: number | null
    periodStart: Date | null
    periodEnd: Date | null
    updatedAt: Date | null
  }

  export type ScanQuotaCountAggregateOutputType = {
    id: number
    userId: number
    scansUsed: number
    scansLimit: number
    extraScans: number
    periodStart: number
    periodEnd: number
    updatedAt: number
    _all: number
  }


  export type ScanQuotaAvgAggregateInputType = {
    scansUsed?: true
    scansLimit?: true
    extraScans?: true
  }

  export type ScanQuotaSumAggregateInputType = {
    scansUsed?: true
    scansLimit?: true
    extraScans?: true
  }

  export type ScanQuotaMinAggregateInputType = {
    id?: true
    userId?: true
    scansUsed?: true
    scansLimit?: true
    extraScans?: true
    periodStart?: true
    periodEnd?: true
    updatedAt?: true
  }

  export type ScanQuotaMaxAggregateInputType = {
    id?: true
    userId?: true
    scansUsed?: true
    scansLimit?: true
    extraScans?: true
    periodStart?: true
    periodEnd?: true
    updatedAt?: true
  }

  export type ScanQuotaCountAggregateInputType = {
    id?: true
    userId?: true
    scansUsed?: true
    scansLimit?: true
    extraScans?: true
    periodStart?: true
    periodEnd?: true
    updatedAt?: true
    _all?: true
  }

  export type ScanQuotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanQuota to aggregate.
     */
    where?: ScanQuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanQuotas to fetch.
     */
    orderBy?: ScanQuotaOrderByWithRelationInput | ScanQuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanQuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanQuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanQuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanQuotas
    **/
    _count?: true | ScanQuotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanQuotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanQuotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanQuotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanQuotaMaxAggregateInputType
  }

  export type GetScanQuotaAggregateType<T extends ScanQuotaAggregateArgs> = {
        [P in keyof T & keyof AggregateScanQuota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanQuota[P]>
      : GetScalarType<T[P], AggregateScanQuota[P]>
  }




  export type ScanQuotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanQuotaWhereInput
    orderBy?: ScanQuotaOrderByWithAggregationInput | ScanQuotaOrderByWithAggregationInput[]
    by: ScanQuotaScalarFieldEnum[] | ScanQuotaScalarFieldEnum
    having?: ScanQuotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanQuotaCountAggregateInputType | true
    _avg?: ScanQuotaAvgAggregateInputType
    _sum?: ScanQuotaSumAggregateInputType
    _min?: ScanQuotaMinAggregateInputType
    _max?: ScanQuotaMaxAggregateInputType
  }

  export type ScanQuotaGroupByOutputType = {
    id: string
    userId: string
    scansUsed: number
    scansLimit: number
    extraScans: number
    periodStart: Date
    periodEnd: Date
    updatedAt: Date
    _count: ScanQuotaCountAggregateOutputType | null
    _avg: ScanQuotaAvgAggregateOutputType | null
    _sum: ScanQuotaSumAggregateOutputType | null
    _min: ScanQuotaMinAggregateOutputType | null
    _max: ScanQuotaMaxAggregateOutputType | null
  }

  type GetScanQuotaGroupByPayload<T extends ScanQuotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanQuotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanQuotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanQuotaGroupByOutputType[P]>
            : GetScalarType<T[P], ScanQuotaGroupByOutputType[P]>
        }
      >
    >


  export type ScanQuotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scansUsed?: boolean
    scansLimit?: boolean
    extraScans?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanQuota"]>

  export type ScanQuotaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scansUsed?: boolean
    scansLimit?: boolean
    extraScans?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanQuota"]>

  export type ScanQuotaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scansUsed?: boolean
    scansLimit?: boolean
    extraScans?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scanQuota"]>

  export type ScanQuotaSelectScalar = {
    id?: boolean
    userId?: boolean
    scansUsed?: boolean
    scansLimit?: boolean
    extraScans?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    updatedAt?: boolean
  }

  export type ScanQuotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scansUsed" | "scansLimit" | "extraScans" | "periodStart" | "periodEnd" | "updatedAt", ExtArgs["result"]["scanQuota"]>
  export type ScanQuotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScanQuotaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ScanQuotaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ScanQuotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanQuota"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scansUsed: number
      scansLimit: number
      extraScans: number
      periodStart: Date
      periodEnd: Date
      updatedAt: Date
    }, ExtArgs["result"]["scanQuota"]>
    composites: {}
  }

  type ScanQuotaGetPayload<S extends boolean | null | undefined | ScanQuotaDefaultArgs> = $Result.GetResult<Prisma.$ScanQuotaPayload, S>

  type ScanQuotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanQuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanQuotaCountAggregateInputType | true
    }

  export interface ScanQuotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanQuota'], meta: { name: 'ScanQuota' } }
    /**
     * Find zero or one ScanQuota that matches the filter.
     * @param {ScanQuotaFindUniqueArgs} args - Arguments to find a ScanQuota
     * @example
     * // Get one ScanQuota
     * const scanQuota = await prisma.scanQuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanQuotaFindUniqueArgs>(args: SelectSubset<T, ScanQuotaFindUniqueArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanQuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanQuotaFindUniqueOrThrowArgs} args - Arguments to find a ScanQuota
     * @example
     * // Get one ScanQuota
     * const scanQuota = await prisma.scanQuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanQuotaFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanQuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanQuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaFindFirstArgs} args - Arguments to find a ScanQuota
     * @example
     * // Get one ScanQuota
     * const scanQuota = await prisma.scanQuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanQuotaFindFirstArgs>(args?: SelectSubset<T, ScanQuotaFindFirstArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanQuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaFindFirstOrThrowArgs} args - Arguments to find a ScanQuota
     * @example
     * // Get one ScanQuota
     * const scanQuota = await prisma.scanQuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanQuotaFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanQuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanQuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanQuotas
     * const scanQuotas = await prisma.scanQuota.findMany()
     * 
     * // Get first 10 ScanQuotas
     * const scanQuotas = await prisma.scanQuota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanQuotaWithIdOnly = await prisma.scanQuota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanQuotaFindManyArgs>(args?: SelectSubset<T, ScanQuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanQuota.
     * @param {ScanQuotaCreateArgs} args - Arguments to create a ScanQuota.
     * @example
     * // Create one ScanQuota
     * const ScanQuota = await prisma.scanQuota.create({
     *   data: {
     *     // ... data to create a ScanQuota
     *   }
     * })
     * 
     */
    create<T extends ScanQuotaCreateArgs>(args: SelectSubset<T, ScanQuotaCreateArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanQuotas.
     * @param {ScanQuotaCreateManyArgs} args - Arguments to create many ScanQuotas.
     * @example
     * // Create many ScanQuotas
     * const scanQuota = await prisma.scanQuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanQuotaCreateManyArgs>(args?: SelectSubset<T, ScanQuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanQuotas and returns the data saved in the database.
     * @param {ScanQuotaCreateManyAndReturnArgs} args - Arguments to create many ScanQuotas.
     * @example
     * // Create many ScanQuotas
     * const scanQuota = await prisma.scanQuota.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanQuotas and only return the `id`
     * const scanQuotaWithIdOnly = await prisma.scanQuota.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanQuotaCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanQuotaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanQuota.
     * @param {ScanQuotaDeleteArgs} args - Arguments to delete one ScanQuota.
     * @example
     * // Delete one ScanQuota
     * const ScanQuota = await prisma.scanQuota.delete({
     *   where: {
     *     // ... filter to delete one ScanQuota
     *   }
     * })
     * 
     */
    delete<T extends ScanQuotaDeleteArgs>(args: SelectSubset<T, ScanQuotaDeleteArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanQuota.
     * @param {ScanQuotaUpdateArgs} args - Arguments to update one ScanQuota.
     * @example
     * // Update one ScanQuota
     * const scanQuota = await prisma.scanQuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanQuotaUpdateArgs>(args: SelectSubset<T, ScanQuotaUpdateArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanQuotas.
     * @param {ScanQuotaDeleteManyArgs} args - Arguments to filter ScanQuotas to delete.
     * @example
     * // Delete a few ScanQuotas
     * const { count } = await prisma.scanQuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanQuotaDeleteManyArgs>(args?: SelectSubset<T, ScanQuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanQuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanQuotas
     * const scanQuota = await prisma.scanQuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanQuotaUpdateManyArgs>(args: SelectSubset<T, ScanQuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanQuotas and returns the data updated in the database.
     * @param {ScanQuotaUpdateManyAndReturnArgs} args - Arguments to update many ScanQuotas.
     * @example
     * // Update many ScanQuotas
     * const scanQuota = await prisma.scanQuota.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanQuotas and only return the `id`
     * const scanQuotaWithIdOnly = await prisma.scanQuota.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanQuotaUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanQuotaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanQuota.
     * @param {ScanQuotaUpsertArgs} args - Arguments to update or create a ScanQuota.
     * @example
     * // Update or create a ScanQuota
     * const scanQuota = await prisma.scanQuota.upsert({
     *   create: {
     *     // ... data to create a ScanQuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanQuota we want to update
     *   }
     * })
     */
    upsert<T extends ScanQuotaUpsertArgs>(args: SelectSubset<T, ScanQuotaUpsertArgs<ExtArgs>>): Prisma__ScanQuotaClient<$Result.GetResult<Prisma.$ScanQuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanQuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaCountArgs} args - Arguments to filter ScanQuotas to count.
     * @example
     * // Count the number of ScanQuotas
     * const count = await prisma.scanQuota.count({
     *   where: {
     *     // ... the filter for the ScanQuotas we want to count
     *   }
     * })
    **/
    count<T extends ScanQuotaCountArgs>(
      args?: Subset<T, ScanQuotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanQuotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanQuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanQuotaAggregateArgs>(args: Subset<T, ScanQuotaAggregateArgs>): Prisma.PrismaPromise<GetScanQuotaAggregateType<T>>

    /**
     * Group by ScanQuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanQuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanQuotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanQuotaGroupByArgs['orderBy'] }
        : { orderBy?: ScanQuotaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanQuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanQuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanQuota model
   */
  readonly fields: ScanQuotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanQuota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanQuotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanQuota model
   */
  interface ScanQuotaFieldRefs {
    readonly id: FieldRef<"ScanQuota", 'String'>
    readonly userId: FieldRef<"ScanQuota", 'String'>
    readonly scansUsed: FieldRef<"ScanQuota", 'Int'>
    readonly scansLimit: FieldRef<"ScanQuota", 'Int'>
    readonly extraScans: FieldRef<"ScanQuota", 'Int'>
    readonly periodStart: FieldRef<"ScanQuota", 'DateTime'>
    readonly periodEnd: FieldRef<"ScanQuota", 'DateTime'>
    readonly updatedAt: FieldRef<"ScanQuota", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScanQuota findUnique
   */
  export type ScanQuotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter, which ScanQuota to fetch.
     */
    where: ScanQuotaWhereUniqueInput
  }

  /**
   * ScanQuota findUniqueOrThrow
   */
  export type ScanQuotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter, which ScanQuota to fetch.
     */
    where: ScanQuotaWhereUniqueInput
  }

  /**
   * ScanQuota findFirst
   */
  export type ScanQuotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter, which ScanQuota to fetch.
     */
    where?: ScanQuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanQuotas to fetch.
     */
    orderBy?: ScanQuotaOrderByWithRelationInput | ScanQuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanQuotas.
     */
    cursor?: ScanQuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanQuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanQuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanQuotas.
     */
    distinct?: ScanQuotaScalarFieldEnum | ScanQuotaScalarFieldEnum[]
  }

  /**
   * ScanQuota findFirstOrThrow
   */
  export type ScanQuotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter, which ScanQuota to fetch.
     */
    where?: ScanQuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanQuotas to fetch.
     */
    orderBy?: ScanQuotaOrderByWithRelationInput | ScanQuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanQuotas.
     */
    cursor?: ScanQuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanQuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanQuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanQuotas.
     */
    distinct?: ScanQuotaScalarFieldEnum | ScanQuotaScalarFieldEnum[]
  }

  /**
   * ScanQuota findMany
   */
  export type ScanQuotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter, which ScanQuotas to fetch.
     */
    where?: ScanQuotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanQuotas to fetch.
     */
    orderBy?: ScanQuotaOrderByWithRelationInput | ScanQuotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanQuotas.
     */
    cursor?: ScanQuotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanQuotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanQuotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanQuotas.
     */
    distinct?: ScanQuotaScalarFieldEnum | ScanQuotaScalarFieldEnum[]
  }

  /**
   * ScanQuota create
   */
  export type ScanQuotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * The data needed to create a ScanQuota.
     */
    data: XOR<ScanQuotaCreateInput, ScanQuotaUncheckedCreateInput>
  }

  /**
   * ScanQuota createMany
   */
  export type ScanQuotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanQuotas.
     */
    data: ScanQuotaCreateManyInput | ScanQuotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanQuota createManyAndReturn
   */
  export type ScanQuotaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * The data used to create many ScanQuotas.
     */
    data: ScanQuotaCreateManyInput | ScanQuotaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanQuota update
   */
  export type ScanQuotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * The data needed to update a ScanQuota.
     */
    data: XOR<ScanQuotaUpdateInput, ScanQuotaUncheckedUpdateInput>
    /**
     * Choose, which ScanQuota to update.
     */
    where: ScanQuotaWhereUniqueInput
  }

  /**
   * ScanQuota updateMany
   */
  export type ScanQuotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanQuotas.
     */
    data: XOR<ScanQuotaUpdateManyMutationInput, ScanQuotaUncheckedUpdateManyInput>
    /**
     * Filter which ScanQuotas to update
     */
    where?: ScanQuotaWhereInput
    /**
     * Limit how many ScanQuotas to update.
     */
    limit?: number
  }

  /**
   * ScanQuota updateManyAndReturn
   */
  export type ScanQuotaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * The data used to update ScanQuotas.
     */
    data: XOR<ScanQuotaUpdateManyMutationInput, ScanQuotaUncheckedUpdateManyInput>
    /**
     * Filter which ScanQuotas to update
     */
    where?: ScanQuotaWhereInput
    /**
     * Limit how many ScanQuotas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanQuota upsert
   */
  export type ScanQuotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * The filter to search for the ScanQuota to update in case it exists.
     */
    where: ScanQuotaWhereUniqueInput
    /**
     * In case the ScanQuota found by the `where` argument doesn't exist, create a new ScanQuota with this data.
     */
    create: XOR<ScanQuotaCreateInput, ScanQuotaUncheckedCreateInput>
    /**
     * In case the ScanQuota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanQuotaUpdateInput, ScanQuotaUncheckedUpdateInput>
  }

  /**
   * ScanQuota delete
   */
  export type ScanQuotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
    /**
     * Filter which ScanQuota to delete.
     */
    where: ScanQuotaWhereUniqueInput
  }

  /**
   * ScanQuota deleteMany
   */
  export type ScanQuotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanQuotas to delete
     */
    where?: ScanQuotaWhereInput
    /**
     * Limit how many ScanQuotas to delete.
     */
    limit?: number
  }

  /**
   * ScanQuota without action
   */
  export type ScanQuotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanQuota
     */
    select?: ScanQuotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanQuota
     */
    omit?: ScanQuotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanQuotaInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: string | null
    type: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number | null
    currency: string | null
    status: string | null
    type: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    amount: number
    currency: number
    status: number
    type: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    type?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    type?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amount?: true
    currency?: true
    status?: true
    type?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amount: number
    currency: string
    status: string
    type: string
    plan: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    type?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    type?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    type?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    type?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "razorpayOrderId" | "razorpayPaymentId" | "razorpaySignature" | "amount" | "currency" | "status" | "type" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      razorpayOrderId: string
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      amount: number
      currency: string
      status: string
      type: string
      plan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly razorpayOrderId: FieldRef<"Payment", 'String'>
    readonly razorpayPaymentId: FieldRef<"Payment", 'String'>
    readonly razorpaySignature: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly type: FieldRef<"Payment", 'String'>
    readonly plan: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model TopUpPack
   */

  export type AggregateTopUpPack = {
    _count: TopUpPackCountAggregateOutputType | null
    _avg: TopUpPackAvgAggregateOutputType | null
    _sum: TopUpPackSumAggregateOutputType | null
    _min: TopUpPackMinAggregateOutputType | null
    _max: TopUpPackMaxAggregateOutputType | null
  }

  export type TopUpPackAvgAggregateOutputType = {
    scansAdded: number | null
    amount: number | null
  }

  export type TopUpPackSumAggregateOutputType = {
    scansAdded: number | null
    amount: number | null
  }

  export type TopUpPackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    scansAdded: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TopUpPackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    scansAdded: number | null
    amount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type TopUpPackCountAggregateOutputType = {
    id: number
    userId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    scansAdded: number
    amount: number
    status: number
    createdAt: number
    _all: number
  }


  export type TopUpPackAvgAggregateInputType = {
    scansAdded?: true
    amount?: true
  }

  export type TopUpPackSumAggregateInputType = {
    scansAdded?: true
    amount?: true
  }

  export type TopUpPackMinAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    scansAdded?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TopUpPackMaxAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    scansAdded?: true
    amount?: true
    status?: true
    createdAt?: true
  }

  export type TopUpPackCountAggregateInputType = {
    id?: true
    userId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    scansAdded?: true
    amount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TopUpPackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopUpPack to aggregate.
     */
    where?: TopUpPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUpPacks to fetch.
     */
    orderBy?: TopUpPackOrderByWithRelationInput | TopUpPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopUpPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUpPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUpPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopUpPacks
    **/
    _count?: true | TopUpPackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopUpPackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopUpPackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopUpPackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopUpPackMaxAggregateInputType
  }

  export type GetTopUpPackAggregateType<T extends TopUpPackAggregateArgs> = {
        [P in keyof T & keyof AggregateTopUpPack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopUpPack[P]>
      : GetScalarType<T[P], AggregateTopUpPack[P]>
  }




  export type TopUpPackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopUpPackWhereInput
    orderBy?: TopUpPackOrderByWithAggregationInput | TopUpPackOrderByWithAggregationInput[]
    by: TopUpPackScalarFieldEnum[] | TopUpPackScalarFieldEnum
    having?: TopUpPackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopUpPackCountAggregateInputType | true
    _avg?: TopUpPackAvgAggregateInputType
    _sum?: TopUpPackSumAggregateInputType
    _min?: TopUpPackMinAggregateInputType
    _max?: TopUpPackMaxAggregateInputType
  }

  export type TopUpPackGroupByOutputType = {
    id: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId: string | null
    scansAdded: number
    amount: number
    status: string
    createdAt: Date
    _count: TopUpPackCountAggregateOutputType | null
    _avg: TopUpPackAvgAggregateOutputType | null
    _sum: TopUpPackSumAggregateOutputType | null
    _min: TopUpPackMinAggregateOutputType | null
    _max: TopUpPackMaxAggregateOutputType | null
  }

  type GetTopUpPackGroupByPayload<T extends TopUpPackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopUpPackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopUpPackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopUpPackGroupByOutputType[P]>
            : GetScalarType<T[P], TopUpPackGroupByOutputType[P]>
        }
      >
    >


  export type TopUpPackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    scansAdded?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topUpPack"]>

  export type TopUpPackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    scansAdded?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topUpPack"]>

  export type TopUpPackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    scansAdded?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topUpPack"]>

  export type TopUpPackSelectScalar = {
    id?: boolean
    userId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    scansAdded?: boolean
    amount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TopUpPackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "razorpayOrderId" | "razorpayPaymentId" | "scansAdded" | "amount" | "status" | "createdAt", ExtArgs["result"]["topUpPack"]>
  export type TopUpPackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TopUpPackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TopUpPackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TopUpPackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopUpPack"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      razorpayOrderId: string
      razorpayPaymentId: string | null
      scansAdded: number
      amount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["topUpPack"]>
    composites: {}
  }

  type TopUpPackGetPayload<S extends boolean | null | undefined | TopUpPackDefaultArgs> = $Result.GetResult<Prisma.$TopUpPackPayload, S>

  type TopUpPackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopUpPackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopUpPackCountAggregateInputType | true
    }

  export interface TopUpPackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopUpPack'], meta: { name: 'TopUpPack' } }
    /**
     * Find zero or one TopUpPack that matches the filter.
     * @param {TopUpPackFindUniqueArgs} args - Arguments to find a TopUpPack
     * @example
     * // Get one TopUpPack
     * const topUpPack = await prisma.topUpPack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopUpPackFindUniqueArgs>(args: SelectSubset<T, TopUpPackFindUniqueArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopUpPack that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopUpPackFindUniqueOrThrowArgs} args - Arguments to find a TopUpPack
     * @example
     * // Get one TopUpPack
     * const topUpPack = await prisma.topUpPack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopUpPackFindUniqueOrThrowArgs>(args: SelectSubset<T, TopUpPackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopUpPack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackFindFirstArgs} args - Arguments to find a TopUpPack
     * @example
     * // Get one TopUpPack
     * const topUpPack = await prisma.topUpPack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopUpPackFindFirstArgs>(args?: SelectSubset<T, TopUpPackFindFirstArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopUpPack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackFindFirstOrThrowArgs} args - Arguments to find a TopUpPack
     * @example
     * // Get one TopUpPack
     * const topUpPack = await prisma.topUpPack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopUpPackFindFirstOrThrowArgs>(args?: SelectSubset<T, TopUpPackFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopUpPacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopUpPacks
     * const topUpPacks = await prisma.topUpPack.findMany()
     * 
     * // Get first 10 TopUpPacks
     * const topUpPacks = await prisma.topUpPack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topUpPackWithIdOnly = await prisma.topUpPack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopUpPackFindManyArgs>(args?: SelectSubset<T, TopUpPackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopUpPack.
     * @param {TopUpPackCreateArgs} args - Arguments to create a TopUpPack.
     * @example
     * // Create one TopUpPack
     * const TopUpPack = await prisma.topUpPack.create({
     *   data: {
     *     // ... data to create a TopUpPack
     *   }
     * })
     * 
     */
    create<T extends TopUpPackCreateArgs>(args: SelectSubset<T, TopUpPackCreateArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopUpPacks.
     * @param {TopUpPackCreateManyArgs} args - Arguments to create many TopUpPacks.
     * @example
     * // Create many TopUpPacks
     * const topUpPack = await prisma.topUpPack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopUpPackCreateManyArgs>(args?: SelectSubset<T, TopUpPackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopUpPacks and returns the data saved in the database.
     * @param {TopUpPackCreateManyAndReturnArgs} args - Arguments to create many TopUpPacks.
     * @example
     * // Create many TopUpPacks
     * const topUpPack = await prisma.topUpPack.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopUpPacks and only return the `id`
     * const topUpPackWithIdOnly = await prisma.topUpPack.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopUpPackCreateManyAndReturnArgs>(args?: SelectSubset<T, TopUpPackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopUpPack.
     * @param {TopUpPackDeleteArgs} args - Arguments to delete one TopUpPack.
     * @example
     * // Delete one TopUpPack
     * const TopUpPack = await prisma.topUpPack.delete({
     *   where: {
     *     // ... filter to delete one TopUpPack
     *   }
     * })
     * 
     */
    delete<T extends TopUpPackDeleteArgs>(args: SelectSubset<T, TopUpPackDeleteArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopUpPack.
     * @param {TopUpPackUpdateArgs} args - Arguments to update one TopUpPack.
     * @example
     * // Update one TopUpPack
     * const topUpPack = await prisma.topUpPack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopUpPackUpdateArgs>(args: SelectSubset<T, TopUpPackUpdateArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopUpPacks.
     * @param {TopUpPackDeleteManyArgs} args - Arguments to filter TopUpPacks to delete.
     * @example
     * // Delete a few TopUpPacks
     * const { count } = await prisma.topUpPack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopUpPackDeleteManyArgs>(args?: SelectSubset<T, TopUpPackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopUpPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopUpPacks
     * const topUpPack = await prisma.topUpPack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopUpPackUpdateManyArgs>(args: SelectSubset<T, TopUpPackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopUpPacks and returns the data updated in the database.
     * @param {TopUpPackUpdateManyAndReturnArgs} args - Arguments to update many TopUpPacks.
     * @example
     * // Update many TopUpPacks
     * const topUpPack = await prisma.topUpPack.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopUpPacks and only return the `id`
     * const topUpPackWithIdOnly = await prisma.topUpPack.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopUpPackUpdateManyAndReturnArgs>(args: SelectSubset<T, TopUpPackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopUpPack.
     * @param {TopUpPackUpsertArgs} args - Arguments to update or create a TopUpPack.
     * @example
     * // Update or create a TopUpPack
     * const topUpPack = await prisma.topUpPack.upsert({
     *   create: {
     *     // ... data to create a TopUpPack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopUpPack we want to update
     *   }
     * })
     */
    upsert<T extends TopUpPackUpsertArgs>(args: SelectSubset<T, TopUpPackUpsertArgs<ExtArgs>>): Prisma__TopUpPackClient<$Result.GetResult<Prisma.$TopUpPackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopUpPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackCountArgs} args - Arguments to filter TopUpPacks to count.
     * @example
     * // Count the number of TopUpPacks
     * const count = await prisma.topUpPack.count({
     *   where: {
     *     // ... the filter for the TopUpPacks we want to count
     *   }
     * })
    **/
    count<T extends TopUpPackCountArgs>(
      args?: Subset<T, TopUpPackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopUpPackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopUpPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopUpPackAggregateArgs>(args: Subset<T, TopUpPackAggregateArgs>): Prisma.PrismaPromise<GetTopUpPackAggregateType<T>>

    /**
     * Group by TopUpPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopUpPackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopUpPackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopUpPackGroupByArgs['orderBy'] }
        : { orderBy?: TopUpPackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopUpPackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopUpPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopUpPack model
   */
  readonly fields: TopUpPackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopUpPack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopUpPackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopUpPack model
   */
  interface TopUpPackFieldRefs {
    readonly id: FieldRef<"TopUpPack", 'String'>
    readonly userId: FieldRef<"TopUpPack", 'String'>
    readonly razorpayOrderId: FieldRef<"TopUpPack", 'String'>
    readonly razorpayPaymentId: FieldRef<"TopUpPack", 'String'>
    readonly scansAdded: FieldRef<"TopUpPack", 'Int'>
    readonly amount: FieldRef<"TopUpPack", 'Int'>
    readonly status: FieldRef<"TopUpPack", 'String'>
    readonly createdAt: FieldRef<"TopUpPack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TopUpPack findUnique
   */
  export type TopUpPackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter, which TopUpPack to fetch.
     */
    where: TopUpPackWhereUniqueInput
  }

  /**
   * TopUpPack findUniqueOrThrow
   */
  export type TopUpPackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter, which TopUpPack to fetch.
     */
    where: TopUpPackWhereUniqueInput
  }

  /**
   * TopUpPack findFirst
   */
  export type TopUpPackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter, which TopUpPack to fetch.
     */
    where?: TopUpPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUpPacks to fetch.
     */
    orderBy?: TopUpPackOrderByWithRelationInput | TopUpPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopUpPacks.
     */
    cursor?: TopUpPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUpPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUpPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUpPacks.
     */
    distinct?: TopUpPackScalarFieldEnum | TopUpPackScalarFieldEnum[]
  }

  /**
   * TopUpPack findFirstOrThrow
   */
  export type TopUpPackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter, which TopUpPack to fetch.
     */
    where?: TopUpPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUpPacks to fetch.
     */
    orderBy?: TopUpPackOrderByWithRelationInput | TopUpPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopUpPacks.
     */
    cursor?: TopUpPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUpPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUpPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUpPacks.
     */
    distinct?: TopUpPackScalarFieldEnum | TopUpPackScalarFieldEnum[]
  }

  /**
   * TopUpPack findMany
   */
  export type TopUpPackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter, which TopUpPacks to fetch.
     */
    where?: TopUpPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopUpPacks to fetch.
     */
    orderBy?: TopUpPackOrderByWithRelationInput | TopUpPackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopUpPacks.
     */
    cursor?: TopUpPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopUpPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopUpPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopUpPacks.
     */
    distinct?: TopUpPackScalarFieldEnum | TopUpPackScalarFieldEnum[]
  }

  /**
   * TopUpPack create
   */
  export type TopUpPackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * The data needed to create a TopUpPack.
     */
    data: XOR<TopUpPackCreateInput, TopUpPackUncheckedCreateInput>
  }

  /**
   * TopUpPack createMany
   */
  export type TopUpPackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopUpPacks.
     */
    data: TopUpPackCreateManyInput | TopUpPackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopUpPack createManyAndReturn
   */
  export type TopUpPackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * The data used to create many TopUpPacks.
     */
    data: TopUpPackCreateManyInput | TopUpPackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopUpPack update
   */
  export type TopUpPackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * The data needed to update a TopUpPack.
     */
    data: XOR<TopUpPackUpdateInput, TopUpPackUncheckedUpdateInput>
    /**
     * Choose, which TopUpPack to update.
     */
    where: TopUpPackWhereUniqueInput
  }

  /**
   * TopUpPack updateMany
   */
  export type TopUpPackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopUpPacks.
     */
    data: XOR<TopUpPackUpdateManyMutationInput, TopUpPackUncheckedUpdateManyInput>
    /**
     * Filter which TopUpPacks to update
     */
    where?: TopUpPackWhereInput
    /**
     * Limit how many TopUpPacks to update.
     */
    limit?: number
  }

  /**
   * TopUpPack updateManyAndReturn
   */
  export type TopUpPackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * The data used to update TopUpPacks.
     */
    data: XOR<TopUpPackUpdateManyMutationInput, TopUpPackUncheckedUpdateManyInput>
    /**
     * Filter which TopUpPacks to update
     */
    where?: TopUpPackWhereInput
    /**
     * Limit how many TopUpPacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopUpPack upsert
   */
  export type TopUpPackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * The filter to search for the TopUpPack to update in case it exists.
     */
    where: TopUpPackWhereUniqueInput
    /**
     * In case the TopUpPack found by the `where` argument doesn't exist, create a new TopUpPack with this data.
     */
    create: XOR<TopUpPackCreateInput, TopUpPackUncheckedCreateInput>
    /**
     * In case the TopUpPack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopUpPackUpdateInput, TopUpPackUncheckedUpdateInput>
  }

  /**
   * TopUpPack delete
   */
  export type TopUpPackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
    /**
     * Filter which TopUpPack to delete.
     */
    where: TopUpPackWhereUniqueInput
  }

  /**
   * TopUpPack deleteMany
   */
  export type TopUpPackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopUpPacks to delete
     */
    where?: TopUpPackWhereInput
    /**
     * Limit how many TopUpPacks to delete.
     */
    limit?: number
  }

  /**
   * TopUpPack without action
   */
  export type TopUpPackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopUpPack
     */
    select?: TopUpPackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopUpPack
     */
    omit?: TopUpPackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopUpPackInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fibre: number | null
  }

  export type MealSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fibre: number | null
  }

  export type MealMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    mealType: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fibre: number | null
    imageUrl: string | null
    aiScanned: boolean | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    mealType: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fibre: number | null
    imageUrl: string | null
    aiScanned: boolean | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    mealType: number
    calories: number
    protein: number
    carbs: number
    fat: number
    fibre: number
    imageUrl: number
    aiScanned: number
    loggedAt: number
    createdAt: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fibre?: true
  }

  export type MealSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fibre?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    mealType?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fibre?: true
    imageUrl?: true
    aiScanned?: true
    loggedAt?: true
    createdAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    mealType?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fibre?: true
    imageUrl?: true
    aiScanned?: true
    loggedAt?: true
    createdAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    mealType?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fibre?: true
    imageUrl?: true
    aiScanned?: true
    loggedAt?: true
    createdAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: string
    userId: string
    name: string
    mealType: string
    calories: number
    protein: number
    carbs: number
    fat: number
    fibre: number
    imageUrl: string | null
    aiScanned: boolean
    loggedAt: Date
    createdAt: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    mealType?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fibre?: boolean
    imageUrl?: boolean
    aiScanned?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    mealType?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fibre?: boolean
    imageUrl?: boolean
    aiScanned?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    mealType?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fibre?: boolean
    imageUrl?: boolean
    aiScanned?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    mealType?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fibre?: boolean
    imageUrl?: boolean
    aiScanned?: boolean
    loggedAt?: boolean
    createdAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "mealType" | "calories" | "protein" | "carbs" | "fat" | "fibre" | "imageUrl" | "aiScanned" | "loggedAt" | "createdAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      mealType: string
      calories: number
      protein: number
      carbs: number
      fat: number
      fibre: number
      imageUrl: string | null
      aiScanned: boolean
      loggedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'String'>
    readonly userId: FieldRef<"Meal", 'String'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly mealType: FieldRef<"Meal", 'String'>
    readonly calories: FieldRef<"Meal", 'Float'>
    readonly protein: FieldRef<"Meal", 'Float'>
    readonly carbs: FieldRef<"Meal", 'Float'>
    readonly fat: FieldRef<"Meal", 'Float'>
    readonly fibre: FieldRef<"Meal", 'Float'>
    readonly imageUrl: FieldRef<"Meal", 'String'>
    readonly aiScanned: FieldRef<"Meal", 'Boolean'>
    readonly loggedAt: FieldRef<"Meal", 'DateTime'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model WaterLog
   */

  export type AggregateWaterLog = {
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  export type WaterLogAvgAggregateOutputType = {
    glasses: number | null
  }

  export type WaterLogSumAggregateOutputType = {
    glasses: number | null
  }

  export type WaterLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    glasses: number | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type WaterLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    glasses: number | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type WaterLogCountAggregateOutputType = {
    id: number
    userId: number
    glasses: number
    loggedAt: number
    createdAt: number
    _all: number
  }


  export type WaterLogAvgAggregateInputType = {
    glasses?: true
  }

  export type WaterLogSumAggregateInputType = {
    glasses?: true
  }

  export type WaterLogMinAggregateInputType = {
    id?: true
    userId?: true
    glasses?: true
    loggedAt?: true
    createdAt?: true
  }

  export type WaterLogMaxAggregateInputType = {
    id?: true
    userId?: true
    glasses?: true
    loggedAt?: true
    createdAt?: true
  }

  export type WaterLogCountAggregateInputType = {
    id?: true
    userId?: true
    glasses?: true
    loggedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WaterLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLog to aggregate.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterLogs
    **/
    _count?: true | WaterLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterLogMaxAggregateInputType
  }

  export type GetWaterLogAggregateType<T extends WaterLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterLog[P]>
      : GetScalarType<T[P], AggregateWaterLog[P]>
  }




  export type WaterLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterLogWhereInput
    orderBy?: WaterLogOrderByWithAggregationInput | WaterLogOrderByWithAggregationInput[]
    by: WaterLogScalarFieldEnum[] | WaterLogScalarFieldEnum
    having?: WaterLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterLogCountAggregateInputType | true
    _avg?: WaterLogAvgAggregateInputType
    _sum?: WaterLogSumAggregateInputType
    _min?: WaterLogMinAggregateInputType
    _max?: WaterLogMaxAggregateInputType
  }

  export type WaterLogGroupByOutputType = {
    id: string
    userId: string
    glasses: number
    loggedAt: Date
    createdAt: Date
    _count: WaterLogCountAggregateOutputType | null
    _avg: WaterLogAvgAggregateOutputType | null
    _sum: WaterLogSumAggregateOutputType | null
    _min: WaterLogMinAggregateOutputType | null
    _max: WaterLogMaxAggregateOutputType | null
  }

  type GetWaterLogGroupByPayload<T extends WaterLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
            : GetScalarType<T[P], WaterLogGroupByOutputType[P]>
        }
      >
    >


  export type WaterLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    glasses?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    glasses?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    glasses?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waterLog"]>

  export type WaterLogSelectScalar = {
    id?: boolean
    userId?: boolean
    glasses?: boolean
    loggedAt?: boolean
    createdAt?: boolean
  }

  export type WaterLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "glasses" | "loggedAt" | "createdAt", ExtArgs["result"]["waterLog"]>
  export type WaterLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaterLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WaterLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WaterLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      glasses: number
      loggedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["waterLog"]>
    composites: {}
  }

  type WaterLogGetPayload<S extends boolean | null | undefined | WaterLogDefaultArgs> = $Result.GetResult<Prisma.$WaterLogPayload, S>

  type WaterLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterLogCountAggregateInputType | true
    }

  export interface WaterLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterLog'], meta: { name: 'WaterLog' } }
    /**
     * Find zero or one WaterLog that matches the filter.
     * @param {WaterLogFindUniqueArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterLogFindUniqueArgs>(args: SelectSubset<T, WaterLogFindUniqueArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterLogFindUniqueOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterLogFindFirstArgs>(args?: SelectSubset<T, WaterLogFindFirstArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindFirstOrThrowArgs} args - Arguments to find a WaterLog
     * @example
     * // Get one WaterLog
     * const waterLog = await prisma.waterLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterLogs
     * const waterLogs = await prisma.waterLog.findMany()
     * 
     * // Get first 10 WaterLogs
     * const waterLogs = await prisma.waterLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterLogFindManyArgs>(args?: SelectSubset<T, WaterLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterLog.
     * @param {WaterLogCreateArgs} args - Arguments to create a WaterLog.
     * @example
     * // Create one WaterLog
     * const WaterLog = await prisma.waterLog.create({
     *   data: {
     *     // ... data to create a WaterLog
     *   }
     * })
     * 
     */
    create<T extends WaterLogCreateArgs>(args: SelectSubset<T, WaterLogCreateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterLogs.
     * @param {WaterLogCreateManyArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterLogCreateManyArgs>(args?: SelectSubset<T, WaterLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaterLogs and returns the data saved in the database.
     * @param {WaterLogCreateManyAndReturnArgs} args - Arguments to create many WaterLogs.
     * @example
     * // Create many WaterLogs
     * const waterLog = await prisma.waterLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaterLogs and only return the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaterLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WaterLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaterLog.
     * @param {WaterLogDeleteArgs} args - Arguments to delete one WaterLog.
     * @example
     * // Delete one WaterLog
     * const WaterLog = await prisma.waterLog.delete({
     *   where: {
     *     // ... filter to delete one WaterLog
     *   }
     * })
     * 
     */
    delete<T extends WaterLogDeleteArgs>(args: SelectSubset<T, WaterLogDeleteArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterLog.
     * @param {WaterLogUpdateArgs} args - Arguments to update one WaterLog.
     * @example
     * // Update one WaterLog
     * const waterLog = await prisma.waterLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterLogUpdateArgs>(args: SelectSubset<T, WaterLogUpdateArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterLogs.
     * @param {WaterLogDeleteManyArgs} args - Arguments to filter WaterLogs to delete.
     * @example
     * // Delete a few WaterLogs
     * const { count } = await prisma.waterLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterLogDeleteManyArgs>(args?: SelectSubset<T, WaterLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterLogs
     * const waterLog = await prisma.waterLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterLogUpdateManyArgs>(args: SelectSubset<T, WaterLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterLogs and returns the data updated in the database.
     * @param {WaterLogUpdateManyAndReturnArgs} args - Arguments to update many WaterLogs.
     * @example
     * // Update many WaterLogs
     * const waterLog = await prisma.waterLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaterLogs and only return the `id`
     * const waterLogWithIdOnly = await prisma.waterLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaterLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WaterLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaterLog.
     * @param {WaterLogUpsertArgs} args - Arguments to update or create a WaterLog.
     * @example
     * // Update or create a WaterLog
     * const waterLog = await prisma.waterLog.upsert({
     *   create: {
     *     // ... data to create a WaterLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterLog we want to update
     *   }
     * })
     */
    upsert<T extends WaterLogUpsertArgs>(args: SelectSubset<T, WaterLogUpsertArgs<ExtArgs>>): Prisma__WaterLogClient<$Result.GetResult<Prisma.$WaterLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaterLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogCountArgs} args - Arguments to filter WaterLogs to count.
     * @example
     * // Count the number of WaterLogs
     * const count = await prisma.waterLog.count({
     *   where: {
     *     // ... the filter for the WaterLogs we want to count
     *   }
     * })
    **/
    count<T extends WaterLogCountArgs>(
      args?: Subset<T, WaterLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaterLogAggregateArgs>(args: Subset<T, WaterLogAggregateArgs>): Prisma.PrismaPromise<GetWaterLogAggregateType<T>>

    /**
     * Group by WaterLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaterLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterLogGroupByArgs['orderBy'] }
        : { orderBy?: WaterLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaterLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterLog model
   */
  readonly fields: WaterLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WaterLog model
   */
  interface WaterLogFieldRefs {
    readonly id: FieldRef<"WaterLog", 'String'>
    readonly userId: FieldRef<"WaterLog", 'String'>
    readonly glasses: FieldRef<"WaterLog", 'Int'>
    readonly loggedAt: FieldRef<"WaterLog", 'DateTime'>
    readonly createdAt: FieldRef<"WaterLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaterLog findUnique
   */
  export type WaterLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findUniqueOrThrow
   */
  export type WaterLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog findFirst
   */
  export type WaterLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findFirstOrThrow
   */
  export type WaterLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLog to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog findMany
   */
  export type WaterLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter, which WaterLogs to fetch.
     */
    where?: WaterLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterLogs to fetch.
     */
    orderBy?: WaterLogOrderByWithRelationInput | WaterLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterLogs.
     */
    cursor?: WaterLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterLogs.
     */
    distinct?: WaterLogScalarFieldEnum | WaterLogScalarFieldEnum[]
  }

  /**
   * WaterLog create
   */
  export type WaterLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterLog.
     */
    data: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
  }

  /**
   * WaterLog createMany
   */
  export type WaterLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaterLog createManyAndReturn
   */
  export type WaterLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * The data used to create many WaterLogs.
     */
    data: WaterLogCreateManyInput | WaterLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterLog update
   */
  export type WaterLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterLog.
     */
    data: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
    /**
     * Choose, which WaterLog to update.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog updateMany
   */
  export type WaterLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterLogs.
     */
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyInput>
    /**
     * Filter which WaterLogs to update
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to update.
     */
    limit?: number
  }

  /**
   * WaterLog updateManyAndReturn
   */
  export type WaterLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * The data used to update WaterLogs.
     */
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyInput>
    /**
     * Filter which WaterLogs to update
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WaterLog upsert
   */
  export type WaterLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterLog to update in case it exists.
     */
    where: WaterLogWhereUniqueInput
    /**
     * In case the WaterLog found by the `where` argument doesn't exist, create a new WaterLog with this data.
     */
    create: XOR<WaterLogCreateInput, WaterLogUncheckedCreateInput>
    /**
     * In case the WaterLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterLogUpdateInput, WaterLogUncheckedUpdateInput>
  }

  /**
   * WaterLog delete
   */
  export type WaterLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
    /**
     * Filter which WaterLog to delete.
     */
    where: WaterLogWhereUniqueInput
  }

  /**
   * WaterLog deleteMany
   */
  export type WaterLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterLogs to delete
     */
    where?: WaterLogWhereInput
    /**
     * Limit how many WaterLogs to delete.
     */
    limit?: number
  }

  /**
   * WaterLog without action
   */
  export type WaterLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterLog
     */
    select?: WaterLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterLog
     */
    omit?: WaterLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterLogInclude<ExtArgs> | null
  }


  /**
   * Model StepLog
   */

  export type AggregateStepLog = {
    _count: StepLogCountAggregateOutputType | null
    _avg: StepLogAvgAggregateOutputType | null
    _sum: StepLogSumAggregateOutputType | null
    _min: StepLogMinAggregateOutputType | null
    _max: StepLogMaxAggregateOutputType | null
  }

  export type StepLogAvgAggregateOutputType = {
    steps: number | null
    distance: number | null
    calories: number | null
    activeMin: number | null
  }

  export type StepLogSumAggregateOutputType = {
    steps: number | null
    distance: number | null
    calories: number | null
    activeMin: number | null
  }

  export type StepLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    steps: number | null
    distance: number | null
    calories: number | null
    activeMin: number | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type StepLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    steps: number | null
    distance: number | null
    calories: number | null
    activeMin: number | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type StepLogCountAggregateOutputType = {
    id: number
    userId: number
    steps: number
    distance: number
    calories: number
    activeMin: number
    loggedAt: number
    createdAt: number
    _all: number
  }


  export type StepLogAvgAggregateInputType = {
    steps?: true
    distance?: true
    calories?: true
    activeMin?: true
  }

  export type StepLogSumAggregateInputType = {
    steps?: true
    distance?: true
    calories?: true
    activeMin?: true
  }

  export type StepLogMinAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    distance?: true
    calories?: true
    activeMin?: true
    loggedAt?: true
    createdAt?: true
  }

  export type StepLogMaxAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    distance?: true
    calories?: true
    activeMin?: true
    loggedAt?: true
    createdAt?: true
  }

  export type StepLogCountAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    distance?: true
    calories?: true
    activeMin?: true
    loggedAt?: true
    createdAt?: true
    _all?: true
  }

  export type StepLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepLog to aggregate.
     */
    where?: StepLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepLogs to fetch.
     */
    orderBy?: StepLogOrderByWithRelationInput | StepLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StepLogs
    **/
    _count?: true | StepLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepLogMaxAggregateInputType
  }

  export type GetStepLogAggregateType<T extends StepLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStepLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStepLog[P]>
      : GetScalarType<T[P], AggregateStepLog[P]>
  }




  export type StepLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepLogWhereInput
    orderBy?: StepLogOrderByWithAggregationInput | StepLogOrderByWithAggregationInput[]
    by: StepLogScalarFieldEnum[] | StepLogScalarFieldEnum
    having?: StepLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepLogCountAggregateInputType | true
    _avg?: StepLogAvgAggregateInputType
    _sum?: StepLogSumAggregateInputType
    _min?: StepLogMinAggregateInputType
    _max?: StepLogMaxAggregateInputType
  }

  export type StepLogGroupByOutputType = {
    id: string
    userId: string
    steps: number
    distance: number
    calories: number
    activeMin: number
    loggedAt: Date
    createdAt: Date
    _count: StepLogCountAggregateOutputType | null
    _avg: StepLogAvgAggregateOutputType | null
    _sum: StepLogSumAggregateOutputType | null
    _min: StepLogMinAggregateOutputType | null
    _max: StepLogMaxAggregateOutputType | null
  }

  type GetStepLogGroupByPayload<T extends StepLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepLogGroupByOutputType[P]>
            : GetScalarType<T[P], StepLogGroupByOutputType[P]>
        }
      >
    >


  export type StepLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    steps?: boolean
    distance?: boolean
    calories?: boolean
    activeMin?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepLog"]>

  export type StepLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    steps?: boolean
    distance?: boolean
    calories?: boolean
    activeMin?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepLog"]>

  export type StepLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    steps?: boolean
    distance?: boolean
    calories?: boolean
    activeMin?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stepLog"]>

  export type StepLogSelectScalar = {
    id?: boolean
    userId?: boolean
    steps?: boolean
    distance?: boolean
    calories?: boolean
    activeMin?: boolean
    loggedAt?: boolean
    createdAt?: boolean
  }

  export type StepLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "steps" | "distance" | "calories" | "activeMin" | "loggedAt" | "createdAt", ExtArgs["result"]["stepLog"]>
  export type StepLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StepLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StepLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StepLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      steps: number
      distance: number
      calories: number
      activeMin: number
      loggedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["stepLog"]>
    composites: {}
  }

  type StepLogGetPayload<S extends boolean | null | undefined | StepLogDefaultArgs> = $Result.GetResult<Prisma.$StepLogPayload, S>

  type StepLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepLogCountAggregateInputType | true
    }

  export interface StepLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StepLog'], meta: { name: 'StepLog' } }
    /**
     * Find zero or one StepLog that matches the filter.
     * @param {StepLogFindUniqueArgs} args - Arguments to find a StepLog
     * @example
     * // Get one StepLog
     * const stepLog = await prisma.stepLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepLogFindUniqueArgs>(args: SelectSubset<T, StepLogFindUniqueArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StepLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepLogFindUniqueOrThrowArgs} args - Arguments to find a StepLog
     * @example
     * // Get one StepLog
     * const stepLog = await prisma.stepLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StepLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogFindFirstArgs} args - Arguments to find a StepLog
     * @example
     * // Get one StepLog
     * const stepLog = await prisma.stepLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepLogFindFirstArgs>(args?: SelectSubset<T, StepLogFindFirstArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StepLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogFindFirstOrThrowArgs} args - Arguments to find a StepLog
     * @example
     * // Get one StepLog
     * const stepLog = await prisma.stepLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StepLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StepLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StepLogs
     * const stepLogs = await prisma.stepLog.findMany()
     * 
     * // Get first 10 StepLogs
     * const stepLogs = await prisma.stepLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepLogWithIdOnly = await prisma.stepLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepLogFindManyArgs>(args?: SelectSubset<T, StepLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StepLog.
     * @param {StepLogCreateArgs} args - Arguments to create a StepLog.
     * @example
     * // Create one StepLog
     * const StepLog = await prisma.stepLog.create({
     *   data: {
     *     // ... data to create a StepLog
     *   }
     * })
     * 
     */
    create<T extends StepLogCreateArgs>(args: SelectSubset<T, StepLogCreateArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StepLogs.
     * @param {StepLogCreateManyArgs} args - Arguments to create many StepLogs.
     * @example
     * // Create many StepLogs
     * const stepLog = await prisma.stepLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepLogCreateManyArgs>(args?: SelectSubset<T, StepLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StepLogs and returns the data saved in the database.
     * @param {StepLogCreateManyAndReturnArgs} args - Arguments to create many StepLogs.
     * @example
     * // Create many StepLogs
     * const stepLog = await prisma.stepLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StepLogs and only return the `id`
     * const stepLogWithIdOnly = await prisma.stepLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StepLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StepLog.
     * @param {StepLogDeleteArgs} args - Arguments to delete one StepLog.
     * @example
     * // Delete one StepLog
     * const StepLog = await prisma.stepLog.delete({
     *   where: {
     *     // ... filter to delete one StepLog
     *   }
     * })
     * 
     */
    delete<T extends StepLogDeleteArgs>(args: SelectSubset<T, StepLogDeleteArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StepLog.
     * @param {StepLogUpdateArgs} args - Arguments to update one StepLog.
     * @example
     * // Update one StepLog
     * const stepLog = await prisma.stepLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepLogUpdateArgs>(args: SelectSubset<T, StepLogUpdateArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StepLogs.
     * @param {StepLogDeleteManyArgs} args - Arguments to filter StepLogs to delete.
     * @example
     * // Delete a few StepLogs
     * const { count } = await prisma.stepLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepLogDeleteManyArgs>(args?: SelectSubset<T, StepLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StepLogs
     * const stepLog = await prisma.stepLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepLogUpdateManyArgs>(args: SelectSubset<T, StepLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StepLogs and returns the data updated in the database.
     * @param {StepLogUpdateManyAndReturnArgs} args - Arguments to update many StepLogs.
     * @example
     * // Update many StepLogs
     * const stepLog = await prisma.stepLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StepLogs and only return the `id`
     * const stepLogWithIdOnly = await prisma.stepLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepLogUpdateManyAndReturnArgs>(args: SelectSubset<T, StepLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StepLog.
     * @param {StepLogUpsertArgs} args - Arguments to update or create a StepLog.
     * @example
     * // Update or create a StepLog
     * const stepLog = await prisma.stepLog.upsert({
     *   create: {
     *     // ... data to create a StepLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StepLog we want to update
     *   }
     * })
     */
    upsert<T extends StepLogUpsertArgs>(args: SelectSubset<T, StepLogUpsertArgs<ExtArgs>>): Prisma__StepLogClient<$Result.GetResult<Prisma.$StepLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StepLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogCountArgs} args - Arguments to filter StepLogs to count.
     * @example
     * // Count the number of StepLogs
     * const count = await prisma.stepLog.count({
     *   where: {
     *     // ... the filter for the StepLogs we want to count
     *   }
     * })
    **/
    count<T extends StepLogCountArgs>(
      args?: Subset<T, StepLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StepLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepLogAggregateArgs>(args: Subset<T, StepLogAggregateArgs>): Prisma.PrismaPromise<GetStepLogAggregateType<T>>

    /**
     * Group by StepLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepLogGroupByArgs['orderBy'] }
        : { orderBy?: StepLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StepLog model
   */
  readonly fields: StepLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StepLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StepLog model
   */
  interface StepLogFieldRefs {
    readonly id: FieldRef<"StepLog", 'String'>
    readonly userId: FieldRef<"StepLog", 'String'>
    readonly steps: FieldRef<"StepLog", 'Int'>
    readonly distance: FieldRef<"StepLog", 'Float'>
    readonly calories: FieldRef<"StepLog", 'Float'>
    readonly activeMin: FieldRef<"StepLog", 'Int'>
    readonly loggedAt: FieldRef<"StepLog", 'DateTime'>
    readonly createdAt: FieldRef<"StepLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StepLog findUnique
   */
  export type StepLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter, which StepLog to fetch.
     */
    where: StepLogWhereUniqueInput
  }

  /**
   * StepLog findUniqueOrThrow
   */
  export type StepLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter, which StepLog to fetch.
     */
    where: StepLogWhereUniqueInput
  }

  /**
   * StepLog findFirst
   */
  export type StepLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter, which StepLog to fetch.
     */
    where?: StepLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepLogs to fetch.
     */
    orderBy?: StepLogOrderByWithRelationInput | StepLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepLogs.
     */
    cursor?: StepLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepLogs.
     */
    distinct?: StepLogScalarFieldEnum | StepLogScalarFieldEnum[]
  }

  /**
   * StepLog findFirstOrThrow
   */
  export type StepLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter, which StepLog to fetch.
     */
    where?: StepLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepLogs to fetch.
     */
    orderBy?: StepLogOrderByWithRelationInput | StepLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StepLogs.
     */
    cursor?: StepLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepLogs.
     */
    distinct?: StepLogScalarFieldEnum | StepLogScalarFieldEnum[]
  }

  /**
   * StepLog findMany
   */
  export type StepLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter, which StepLogs to fetch.
     */
    where?: StepLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StepLogs to fetch.
     */
    orderBy?: StepLogOrderByWithRelationInput | StepLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StepLogs.
     */
    cursor?: StepLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StepLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StepLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StepLogs.
     */
    distinct?: StepLogScalarFieldEnum | StepLogScalarFieldEnum[]
  }

  /**
   * StepLog create
   */
  export type StepLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StepLog.
     */
    data: XOR<StepLogCreateInput, StepLogUncheckedCreateInput>
  }

  /**
   * StepLog createMany
   */
  export type StepLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StepLogs.
     */
    data: StepLogCreateManyInput | StepLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StepLog createManyAndReturn
   */
  export type StepLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * The data used to create many StepLogs.
     */
    data: StepLogCreateManyInput | StepLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepLog update
   */
  export type StepLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StepLog.
     */
    data: XOR<StepLogUpdateInput, StepLogUncheckedUpdateInput>
    /**
     * Choose, which StepLog to update.
     */
    where: StepLogWhereUniqueInput
  }

  /**
   * StepLog updateMany
   */
  export type StepLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StepLogs.
     */
    data: XOR<StepLogUpdateManyMutationInput, StepLogUncheckedUpdateManyInput>
    /**
     * Filter which StepLogs to update
     */
    where?: StepLogWhereInput
    /**
     * Limit how many StepLogs to update.
     */
    limit?: number
  }

  /**
   * StepLog updateManyAndReturn
   */
  export type StepLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * The data used to update StepLogs.
     */
    data: XOR<StepLogUpdateManyMutationInput, StepLogUncheckedUpdateManyInput>
    /**
     * Filter which StepLogs to update
     */
    where?: StepLogWhereInput
    /**
     * Limit how many StepLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StepLog upsert
   */
  export type StepLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StepLog to update in case it exists.
     */
    where: StepLogWhereUniqueInput
    /**
     * In case the StepLog found by the `where` argument doesn't exist, create a new StepLog with this data.
     */
    create: XOR<StepLogCreateInput, StepLogUncheckedCreateInput>
    /**
     * In case the StepLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepLogUpdateInput, StepLogUncheckedUpdateInput>
  }

  /**
   * StepLog delete
   */
  export type StepLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
    /**
     * Filter which StepLog to delete.
     */
    where: StepLogWhereUniqueInput
  }

  /**
   * StepLog deleteMany
   */
  export type StepLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StepLogs to delete
     */
    where?: StepLogWhereInput
    /**
     * Limit how many StepLogs to delete.
     */
    limit?: number
  }

  /**
   * StepLog without action
   */
  export type StepLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StepLog
     */
    select?: StepLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StepLog
     */
    omit?: StepLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepLogInclude<ExtArgs> | null
  }


  /**
   * Model CycleLog
   */

  export type AggregateCycleLog = {
    _count: CycleLogCountAggregateOutputType | null
    _avg: CycleLogAvgAggregateOutputType | null
    _sum: CycleLogSumAggregateOutputType | null
    _min: CycleLogMinAggregateOutputType | null
    _max: CycleLogMaxAggregateOutputType | null
  }

  export type CycleLogAvgAggregateOutputType = {
    cycleLength: number | null
  }

  export type CycleLogSumAggregateOutputType = {
    cycleLength: number | null
  }

  export type CycleLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    cycleLength: number | null
    createdAt: Date | null
  }

  export type CycleLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    cycleLength: number | null
    createdAt: Date | null
  }

  export type CycleLogCountAggregateOutputType = {
    id: number
    userId: number
    periodStart: number
    periodEnd: number
    cycleLength: number
    createdAt: number
    _all: number
  }


  export type CycleLogAvgAggregateInputType = {
    cycleLength?: true
  }

  export type CycleLogSumAggregateInputType = {
    cycleLength?: true
  }

  export type CycleLogMinAggregateInputType = {
    id?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    cycleLength?: true
    createdAt?: true
  }

  export type CycleLogMaxAggregateInputType = {
    id?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    cycleLength?: true
    createdAt?: true
  }

  export type CycleLogCountAggregateInputType = {
    id?: true
    userId?: true
    periodStart?: true
    periodEnd?: true
    cycleLength?: true
    createdAt?: true
    _all?: true
  }

  export type CycleLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleLog to aggregate.
     */
    where?: CycleLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleLogs to fetch.
     */
    orderBy?: CycleLogOrderByWithRelationInput | CycleLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CycleLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CycleLogs
    **/
    _count?: true | CycleLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CycleLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CycleLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CycleLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CycleLogMaxAggregateInputType
  }

  export type GetCycleLogAggregateType<T extends CycleLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCycleLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCycleLog[P]>
      : GetScalarType<T[P], AggregateCycleLog[P]>
  }




  export type CycleLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CycleLogWhereInput
    orderBy?: CycleLogOrderByWithAggregationInput | CycleLogOrderByWithAggregationInput[]
    by: CycleLogScalarFieldEnum[] | CycleLogScalarFieldEnum
    having?: CycleLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CycleLogCountAggregateInputType | true
    _avg?: CycleLogAvgAggregateInputType
    _sum?: CycleLogSumAggregateInputType
    _min?: CycleLogMinAggregateInputType
    _max?: CycleLogMaxAggregateInputType
  }

  export type CycleLogGroupByOutputType = {
    id: string
    userId: string
    periodStart: Date
    periodEnd: Date | null
    cycleLength: number
    createdAt: Date
    _count: CycleLogCountAggregateOutputType | null
    _avg: CycleLogAvgAggregateOutputType | null
    _sum: CycleLogSumAggregateOutputType | null
    _min: CycleLogMinAggregateOutputType | null
    _max: CycleLogMaxAggregateOutputType | null
  }

  type GetCycleLogGroupByPayload<T extends CycleLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CycleLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CycleLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CycleLogGroupByOutputType[P]>
            : GetScalarType<T[P], CycleLogGroupByOutputType[P]>
        }
      >
    >


  export type CycleLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cycleLength?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleLog"]>

  export type CycleLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cycleLength?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleLog"]>

  export type CycleLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cycleLength?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cycleLog"]>

  export type CycleLogSelectScalar = {
    id?: boolean
    userId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    cycleLength?: boolean
    createdAt?: boolean
  }

  export type CycleLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "periodStart" | "periodEnd" | "cycleLength" | "createdAt", ExtArgs["result"]["cycleLog"]>
  export type CycleLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CycleLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CycleLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CycleLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CycleLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      periodStart: Date
      periodEnd: Date | null
      cycleLength: number
      createdAt: Date
    }, ExtArgs["result"]["cycleLog"]>
    composites: {}
  }

  type CycleLogGetPayload<S extends boolean | null | undefined | CycleLogDefaultArgs> = $Result.GetResult<Prisma.$CycleLogPayload, S>

  type CycleLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CycleLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CycleLogCountAggregateInputType | true
    }

  export interface CycleLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CycleLog'], meta: { name: 'CycleLog' } }
    /**
     * Find zero or one CycleLog that matches the filter.
     * @param {CycleLogFindUniqueArgs} args - Arguments to find a CycleLog
     * @example
     * // Get one CycleLog
     * const cycleLog = await prisma.cycleLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CycleLogFindUniqueArgs>(args: SelectSubset<T, CycleLogFindUniqueArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CycleLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CycleLogFindUniqueOrThrowArgs} args - Arguments to find a CycleLog
     * @example
     * // Get one CycleLog
     * const cycleLog = await prisma.cycleLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CycleLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CycleLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CycleLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogFindFirstArgs} args - Arguments to find a CycleLog
     * @example
     * // Get one CycleLog
     * const cycleLog = await prisma.cycleLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CycleLogFindFirstArgs>(args?: SelectSubset<T, CycleLogFindFirstArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CycleLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogFindFirstOrThrowArgs} args - Arguments to find a CycleLog
     * @example
     * // Get one CycleLog
     * const cycleLog = await prisma.cycleLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CycleLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CycleLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CycleLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CycleLogs
     * const cycleLogs = await prisma.cycleLog.findMany()
     * 
     * // Get first 10 CycleLogs
     * const cycleLogs = await prisma.cycleLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cycleLogWithIdOnly = await prisma.cycleLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CycleLogFindManyArgs>(args?: SelectSubset<T, CycleLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CycleLog.
     * @param {CycleLogCreateArgs} args - Arguments to create a CycleLog.
     * @example
     * // Create one CycleLog
     * const CycleLog = await prisma.cycleLog.create({
     *   data: {
     *     // ... data to create a CycleLog
     *   }
     * })
     * 
     */
    create<T extends CycleLogCreateArgs>(args: SelectSubset<T, CycleLogCreateArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CycleLogs.
     * @param {CycleLogCreateManyArgs} args - Arguments to create many CycleLogs.
     * @example
     * // Create many CycleLogs
     * const cycleLog = await prisma.cycleLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CycleLogCreateManyArgs>(args?: SelectSubset<T, CycleLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CycleLogs and returns the data saved in the database.
     * @param {CycleLogCreateManyAndReturnArgs} args - Arguments to create many CycleLogs.
     * @example
     * // Create many CycleLogs
     * const cycleLog = await prisma.cycleLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CycleLogs and only return the `id`
     * const cycleLogWithIdOnly = await prisma.cycleLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CycleLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CycleLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CycleLog.
     * @param {CycleLogDeleteArgs} args - Arguments to delete one CycleLog.
     * @example
     * // Delete one CycleLog
     * const CycleLog = await prisma.cycleLog.delete({
     *   where: {
     *     // ... filter to delete one CycleLog
     *   }
     * })
     * 
     */
    delete<T extends CycleLogDeleteArgs>(args: SelectSubset<T, CycleLogDeleteArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CycleLog.
     * @param {CycleLogUpdateArgs} args - Arguments to update one CycleLog.
     * @example
     * // Update one CycleLog
     * const cycleLog = await prisma.cycleLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CycleLogUpdateArgs>(args: SelectSubset<T, CycleLogUpdateArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CycleLogs.
     * @param {CycleLogDeleteManyArgs} args - Arguments to filter CycleLogs to delete.
     * @example
     * // Delete a few CycleLogs
     * const { count } = await prisma.cycleLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CycleLogDeleteManyArgs>(args?: SelectSubset<T, CycleLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CycleLogs
     * const cycleLog = await prisma.cycleLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CycleLogUpdateManyArgs>(args: SelectSubset<T, CycleLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CycleLogs and returns the data updated in the database.
     * @param {CycleLogUpdateManyAndReturnArgs} args - Arguments to update many CycleLogs.
     * @example
     * // Update many CycleLogs
     * const cycleLog = await prisma.cycleLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CycleLogs and only return the `id`
     * const cycleLogWithIdOnly = await prisma.cycleLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CycleLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CycleLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CycleLog.
     * @param {CycleLogUpsertArgs} args - Arguments to update or create a CycleLog.
     * @example
     * // Update or create a CycleLog
     * const cycleLog = await prisma.cycleLog.upsert({
     *   create: {
     *     // ... data to create a CycleLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CycleLog we want to update
     *   }
     * })
     */
    upsert<T extends CycleLogUpsertArgs>(args: SelectSubset<T, CycleLogUpsertArgs<ExtArgs>>): Prisma__CycleLogClient<$Result.GetResult<Prisma.$CycleLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CycleLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogCountArgs} args - Arguments to filter CycleLogs to count.
     * @example
     * // Count the number of CycleLogs
     * const count = await prisma.cycleLog.count({
     *   where: {
     *     // ... the filter for the CycleLogs we want to count
     *   }
     * })
    **/
    count<T extends CycleLogCountArgs>(
      args?: Subset<T, CycleLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CycleLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CycleLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CycleLogAggregateArgs>(args: Subset<T, CycleLogAggregateArgs>): Prisma.PrismaPromise<GetCycleLogAggregateType<T>>

    /**
     * Group by CycleLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CycleLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CycleLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CycleLogGroupByArgs['orderBy'] }
        : { orderBy?: CycleLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CycleLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CycleLog model
   */
  readonly fields: CycleLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CycleLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CycleLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CycleLog model
   */
  interface CycleLogFieldRefs {
    readonly id: FieldRef<"CycleLog", 'String'>
    readonly userId: FieldRef<"CycleLog", 'String'>
    readonly periodStart: FieldRef<"CycleLog", 'DateTime'>
    readonly periodEnd: FieldRef<"CycleLog", 'DateTime'>
    readonly cycleLength: FieldRef<"CycleLog", 'Int'>
    readonly createdAt: FieldRef<"CycleLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CycleLog findUnique
   */
  export type CycleLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter, which CycleLog to fetch.
     */
    where: CycleLogWhereUniqueInput
  }

  /**
   * CycleLog findUniqueOrThrow
   */
  export type CycleLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter, which CycleLog to fetch.
     */
    where: CycleLogWhereUniqueInput
  }

  /**
   * CycleLog findFirst
   */
  export type CycleLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter, which CycleLog to fetch.
     */
    where?: CycleLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleLogs to fetch.
     */
    orderBy?: CycleLogOrderByWithRelationInput | CycleLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleLogs.
     */
    cursor?: CycleLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleLogs.
     */
    distinct?: CycleLogScalarFieldEnum | CycleLogScalarFieldEnum[]
  }

  /**
   * CycleLog findFirstOrThrow
   */
  export type CycleLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter, which CycleLog to fetch.
     */
    where?: CycleLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleLogs to fetch.
     */
    orderBy?: CycleLogOrderByWithRelationInput | CycleLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CycleLogs.
     */
    cursor?: CycleLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleLogs.
     */
    distinct?: CycleLogScalarFieldEnum | CycleLogScalarFieldEnum[]
  }

  /**
   * CycleLog findMany
   */
  export type CycleLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter, which CycleLogs to fetch.
     */
    where?: CycleLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CycleLogs to fetch.
     */
    orderBy?: CycleLogOrderByWithRelationInput | CycleLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CycleLogs.
     */
    cursor?: CycleLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CycleLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CycleLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CycleLogs.
     */
    distinct?: CycleLogScalarFieldEnum | CycleLogScalarFieldEnum[]
  }

  /**
   * CycleLog create
   */
  export type CycleLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CycleLog.
     */
    data: XOR<CycleLogCreateInput, CycleLogUncheckedCreateInput>
  }

  /**
   * CycleLog createMany
   */
  export type CycleLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CycleLogs.
     */
    data: CycleLogCreateManyInput | CycleLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CycleLog createManyAndReturn
   */
  export type CycleLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * The data used to create many CycleLogs.
     */
    data: CycleLogCreateManyInput | CycleLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleLog update
   */
  export type CycleLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CycleLog.
     */
    data: XOR<CycleLogUpdateInput, CycleLogUncheckedUpdateInput>
    /**
     * Choose, which CycleLog to update.
     */
    where: CycleLogWhereUniqueInput
  }

  /**
   * CycleLog updateMany
   */
  export type CycleLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CycleLogs.
     */
    data: XOR<CycleLogUpdateManyMutationInput, CycleLogUncheckedUpdateManyInput>
    /**
     * Filter which CycleLogs to update
     */
    where?: CycleLogWhereInput
    /**
     * Limit how many CycleLogs to update.
     */
    limit?: number
  }

  /**
   * CycleLog updateManyAndReturn
   */
  export type CycleLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * The data used to update CycleLogs.
     */
    data: XOR<CycleLogUpdateManyMutationInput, CycleLogUncheckedUpdateManyInput>
    /**
     * Filter which CycleLogs to update
     */
    where?: CycleLogWhereInput
    /**
     * Limit how many CycleLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CycleLog upsert
   */
  export type CycleLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CycleLog to update in case it exists.
     */
    where: CycleLogWhereUniqueInput
    /**
     * In case the CycleLog found by the `where` argument doesn't exist, create a new CycleLog with this data.
     */
    create: XOR<CycleLogCreateInput, CycleLogUncheckedCreateInput>
    /**
     * In case the CycleLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CycleLogUpdateInput, CycleLogUncheckedUpdateInput>
  }

  /**
   * CycleLog delete
   */
  export type CycleLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
    /**
     * Filter which CycleLog to delete.
     */
    where: CycleLogWhereUniqueInput
  }

  /**
   * CycleLog deleteMany
   */
  export type CycleLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CycleLogs to delete
     */
    where?: CycleLogWhereInput
    /**
     * Limit how many CycleLogs to delete.
     */
    limit?: number
  }

  /**
   * CycleLog without action
   */
  export type CycleLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CycleLog
     */
    select?: CycleLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CycleLog
     */
    omit?: CycleLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CycleLogInclude<ExtArgs> | null
  }


  /**
   * Model Symptom
   */

  export type AggregateSymptom = {
    _count: SymptomCountAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  export type SymptomMinAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type SymptomMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedAt: Date | null
    createdAt: Date | null
  }

  export type SymptomCountAggregateOutputType = {
    id: number
    userId: number
    symptoms: number
    loggedAt: number
    createdAt: number
    _all: number
  }


  export type SymptomMinAggregateInputType = {
    id?: true
    userId?: true
    loggedAt?: true
    createdAt?: true
  }

  export type SymptomMaxAggregateInputType = {
    id?: true
    userId?: true
    loggedAt?: true
    createdAt?: true
  }

  export type SymptomCountAggregateInputType = {
    id?: true
    userId?: true
    symptoms?: true
    loggedAt?: true
    createdAt?: true
    _all?: true
  }

  export type SymptomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptom to aggregate.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Symptoms
    **/
    _count?: true | SymptomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SymptomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SymptomMaxAggregateInputType
  }

  export type GetSymptomAggregateType<T extends SymptomAggregateArgs> = {
        [P in keyof T & keyof AggregateSymptom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSymptom[P]>
      : GetScalarType<T[P], AggregateSymptom[P]>
  }




  export type SymptomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomWhereInput
    orderBy?: SymptomOrderByWithAggregationInput | SymptomOrderByWithAggregationInput[]
    by: SymptomScalarFieldEnum[] | SymptomScalarFieldEnum
    having?: SymptomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SymptomCountAggregateInputType | true
    _min?: SymptomMinAggregateInputType
    _max?: SymptomMaxAggregateInputType
  }

  export type SymptomGroupByOutputType = {
    id: string
    userId: string
    symptoms: string[]
    loggedAt: Date
    createdAt: Date
    _count: SymptomCountAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  type GetSymptomGroupByPayload<T extends SymptomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SymptomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SymptomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SymptomGroupByOutputType[P]>
            : GetScalarType<T[P], SymptomGroupByOutputType[P]>
        }
      >
    >


  export type SymptomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptom"]>

  export type SymptomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptom"]>

  export type SymptomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    loggedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptom"]>

  export type SymptomSelectScalar = {
    id?: boolean
    userId?: boolean
    symptoms?: boolean
    loggedAt?: boolean
    createdAt?: boolean
  }

  export type SymptomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "symptoms" | "loggedAt" | "createdAt", ExtArgs["result"]["symptom"]>
  export type SymptomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SymptomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SymptomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SymptomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Symptom"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      symptoms: string[]
      loggedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["symptom"]>
    composites: {}
  }

  type SymptomGetPayload<S extends boolean | null | undefined | SymptomDefaultArgs> = $Result.GetResult<Prisma.$SymptomPayload, S>

  type SymptomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SymptomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SymptomCountAggregateInputType | true
    }

  export interface SymptomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Symptom'], meta: { name: 'Symptom' } }
    /**
     * Find zero or one Symptom that matches the filter.
     * @param {SymptomFindUniqueArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SymptomFindUniqueArgs>(args: SelectSubset<T, SymptomFindUniqueArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Symptom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SymptomFindUniqueOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SymptomFindUniqueOrThrowArgs>(args: SelectSubset<T, SymptomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SymptomFindFirstArgs>(args?: SelectSubset<T, SymptomFindFirstArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Symptom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SymptomFindFirstOrThrowArgs>(args?: SelectSubset<T, SymptomFindFirstOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Symptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Symptoms
     * const symptoms = await prisma.symptom.findMany()
     * 
     * // Get first 10 Symptoms
     * const symptoms = await prisma.symptom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const symptomWithIdOnly = await prisma.symptom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SymptomFindManyArgs>(args?: SelectSubset<T, SymptomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Symptom.
     * @param {SymptomCreateArgs} args - Arguments to create a Symptom.
     * @example
     * // Create one Symptom
     * const Symptom = await prisma.symptom.create({
     *   data: {
     *     // ... data to create a Symptom
     *   }
     * })
     * 
     */
    create<T extends SymptomCreateArgs>(args: SelectSubset<T, SymptomCreateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Symptoms.
     * @param {SymptomCreateManyArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptom = await prisma.symptom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SymptomCreateManyArgs>(args?: SelectSubset<T, SymptomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Symptoms and returns the data saved in the database.
     * @param {SymptomCreateManyAndReturnArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptom = await prisma.symptom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Symptoms and only return the `id`
     * const symptomWithIdOnly = await prisma.symptom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SymptomCreateManyAndReturnArgs>(args?: SelectSubset<T, SymptomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Symptom.
     * @param {SymptomDeleteArgs} args - Arguments to delete one Symptom.
     * @example
     * // Delete one Symptom
     * const Symptom = await prisma.symptom.delete({
     *   where: {
     *     // ... filter to delete one Symptom
     *   }
     * })
     * 
     */
    delete<T extends SymptomDeleteArgs>(args: SelectSubset<T, SymptomDeleteArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Symptom.
     * @param {SymptomUpdateArgs} args - Arguments to update one Symptom.
     * @example
     * // Update one Symptom
     * const symptom = await prisma.symptom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SymptomUpdateArgs>(args: SelectSubset<T, SymptomUpdateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Symptoms.
     * @param {SymptomDeleteManyArgs} args - Arguments to filter Symptoms to delete.
     * @example
     * // Delete a few Symptoms
     * const { count } = await prisma.symptom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SymptomDeleteManyArgs>(args?: SelectSubset<T, SymptomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Symptoms
     * const symptom = await prisma.symptom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SymptomUpdateManyArgs>(args: SelectSubset<T, SymptomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms and returns the data updated in the database.
     * @param {SymptomUpdateManyAndReturnArgs} args - Arguments to update many Symptoms.
     * @example
     * // Update many Symptoms
     * const symptom = await prisma.symptom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Symptoms and only return the `id`
     * const symptomWithIdOnly = await prisma.symptom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SymptomUpdateManyAndReturnArgs>(args: SelectSubset<T, SymptomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Symptom.
     * @param {SymptomUpsertArgs} args - Arguments to update or create a Symptom.
     * @example
     * // Update or create a Symptom
     * const symptom = await prisma.symptom.upsert({
     *   create: {
     *     // ... data to create a Symptom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Symptom we want to update
     *   }
     * })
     */
    upsert<T extends SymptomUpsertArgs>(args: SelectSubset<T, SymptomUpsertArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomCountArgs} args - Arguments to filter Symptoms to count.
     * @example
     * // Count the number of Symptoms
     * const count = await prisma.symptom.count({
     *   where: {
     *     // ... the filter for the Symptoms we want to count
     *   }
     * })
    **/
    count<T extends SymptomCountArgs>(
      args?: Subset<T, SymptomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SymptomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SymptomAggregateArgs>(args: Subset<T, SymptomAggregateArgs>): Prisma.PrismaPromise<GetSymptomAggregateType<T>>

    /**
     * Group by Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SymptomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SymptomGroupByArgs['orderBy'] }
        : { orderBy?: SymptomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SymptomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSymptomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Symptom model
   */
  readonly fields: SymptomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Symptom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SymptomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Symptom model
   */
  interface SymptomFieldRefs {
    readonly id: FieldRef<"Symptom", 'String'>
    readonly userId: FieldRef<"Symptom", 'String'>
    readonly symptoms: FieldRef<"Symptom", 'String[]'>
    readonly loggedAt: FieldRef<"Symptom", 'DateTime'>
    readonly createdAt: FieldRef<"Symptom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Symptom findUnique
   */
  export type SymptomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findUniqueOrThrow
   */
  export type SymptomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findFirst
   */
  export type SymptomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findFirstOrThrow
   */
  export type SymptomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findMany
   */
  export type SymptomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom create
   */
  export type SymptomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to create a Symptom.
     */
    data: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
  }

  /**
   * Symptom createMany
   */
  export type SymptomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomCreateManyInput | SymptomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Symptom createManyAndReturn
   */
  export type SymptomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomCreateManyInput | SymptomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Symptom update
   */
  export type SymptomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to update a Symptom.
     */
    data: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
    /**
     * Choose, which Symptom to update.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom updateMany
   */
  export type SymptomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomUpdateManyMutationInput, SymptomUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomWhereInput
    /**
     * Limit how many Symptoms to update.
     */
    limit?: number
  }

  /**
   * Symptom updateManyAndReturn
   */
  export type SymptomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomUpdateManyMutationInput, SymptomUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomWhereInput
    /**
     * Limit how many Symptoms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Symptom upsert
   */
  export type SymptomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The filter to search for the Symptom to update in case it exists.
     */
    where: SymptomWhereUniqueInput
    /**
     * In case the Symptom found by the `where` argument doesn't exist, create a new Symptom with this data.
     */
    create: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
    /**
     * In case the Symptom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
  }

  /**
   * Symptom delete
   */
  export type SymptomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter which Symptom to delete.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom deleteMany
   */
  export type SymptomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptoms to delete
     */
    where?: SymptomWhereInput
    /**
     * Limit how many Symptoms to delete.
     */
    limit?: number
  }

  /**
   * Symptom without action
   */
  export type SymptomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Symptom
     */
    omit?: SymptomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutLog
   */

  export type AggregateWorkoutLog = {
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  export type WorkoutLogAvgAggregateOutputType = {
    durationMin: number | null
    caloriesBurned: number | null
  }

  export type WorkoutLogSumAggregateOutputType = {
    durationMin: number | null
    caloriesBurned: number | null
  }

  export type WorkoutLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workoutName: string | null
    durationMin: number | null
    caloriesBurned: number | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type WorkoutLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workoutName: string | null
    durationMin: number | null
    caloriesBurned: number | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type WorkoutLogCountAggregateOutputType = {
    id: number
    userId: number
    workoutName: number
    durationMin: number
    caloriesBurned: number
    exercises: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type WorkoutLogAvgAggregateInputType = {
    durationMin?: true
    caloriesBurned?: true
  }

  export type WorkoutLogSumAggregateInputType = {
    durationMin?: true
    caloriesBurned?: true
  }

  export type WorkoutLogMinAggregateInputType = {
    id?: true
    userId?: true
    workoutName?: true
    durationMin?: true
    caloriesBurned?: true
    completedAt?: true
    createdAt?: true
  }

  export type WorkoutLogMaxAggregateInputType = {
    id?: true
    userId?: true
    workoutName?: true
    durationMin?: true
    caloriesBurned?: true
    completedAt?: true
    createdAt?: true
  }

  export type WorkoutLogCountAggregateInputType = {
    id?: true
    userId?: true
    workoutName?: true
    durationMin?: true
    caloriesBurned?: true
    exercises?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLog to aggregate.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutLogs
    **/
    _count?: true | WorkoutLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type GetWorkoutLogAggregateType<T extends WorkoutLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutLog[P]>
      : GetScalarType<T[P], AggregateWorkoutLog[P]>
  }




  export type WorkoutLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutLogWhereInput
    orderBy?: WorkoutLogOrderByWithAggregationInput | WorkoutLogOrderByWithAggregationInput[]
    by: WorkoutLogScalarFieldEnum[] | WorkoutLogScalarFieldEnum
    having?: WorkoutLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutLogCountAggregateInputType | true
    _avg?: WorkoutLogAvgAggregateInputType
    _sum?: WorkoutLogSumAggregateInputType
    _min?: WorkoutLogMinAggregateInputType
    _max?: WorkoutLogMaxAggregateInputType
  }

  export type WorkoutLogGroupByOutputType = {
    id: string
    userId: string
    workoutName: string
    durationMin: number
    caloriesBurned: number
    exercises: JsonValue
    completedAt: Date
    createdAt: Date
    _count: WorkoutLogCountAggregateOutputType | null
    _avg: WorkoutLogAvgAggregateOutputType | null
    _sum: WorkoutLogSumAggregateOutputType | null
    _min: WorkoutLogMinAggregateOutputType | null
    _max: WorkoutLogMaxAggregateOutputType | null
  }

  type GetWorkoutLogGroupByPayload<T extends WorkoutLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutLogGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutName?: boolean
    durationMin?: boolean
    caloriesBurned?: boolean
    exercises?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutName?: boolean
    durationMin?: boolean
    caloriesBurned?: boolean
    exercises?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workoutName?: boolean
    durationMin?: boolean
    caloriesBurned?: boolean
    exercises?: boolean
    completedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutLog"]>

  export type WorkoutLogSelectScalar = {
    id?: boolean
    userId?: boolean
    workoutName?: boolean
    durationMin?: boolean
    caloriesBurned?: boolean
    exercises?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type WorkoutLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workoutName" | "durationMin" | "caloriesBurned" | "exercises" | "completedAt" | "createdAt", ExtArgs["result"]["workoutLog"]>
  export type WorkoutLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkoutLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkoutLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workoutName: string
      durationMin: number
      caloriesBurned: number
      exercises: Prisma.JsonValue
      completedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["workoutLog"]>
    composites: {}
  }

  type WorkoutLogGetPayload<S extends boolean | null | undefined | WorkoutLogDefaultArgs> = $Result.GetResult<Prisma.$WorkoutLogPayload, S>

  type WorkoutLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutLogCountAggregateInputType | true
    }

  export interface WorkoutLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutLog'], meta: { name: 'WorkoutLog' } }
    /**
     * Find zero or one WorkoutLog that matches the filter.
     * @param {WorkoutLogFindUniqueArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutLogFindUniqueArgs>(args: SelectSubset<T, WorkoutLogFindUniqueArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutLogFindUniqueOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutLogFindFirstArgs>(args?: SelectSubset<T, WorkoutLogFindFirstArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindFirstOrThrowArgs} args - Arguments to find a WorkoutLog
     * @example
     * // Get one WorkoutLog
     * const workoutLog = await prisma.workoutLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany()
     * 
     * // Get first 10 WorkoutLogs
     * const workoutLogs = await prisma.workoutLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutLogFindManyArgs>(args?: SelectSubset<T, WorkoutLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutLog.
     * @param {WorkoutLogCreateArgs} args - Arguments to create a WorkoutLog.
     * @example
     * // Create one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.create({
     *   data: {
     *     // ... data to create a WorkoutLog
     *   }
     * })
     * 
     */
    create<T extends WorkoutLogCreateArgs>(args: SelectSubset<T, WorkoutLogCreateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutLogs.
     * @param {WorkoutLogCreateManyArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutLogCreateManyArgs>(args?: SelectSubset<T, WorkoutLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutLogs and returns the data saved in the database.
     * @param {WorkoutLogCreateManyAndReturnArgs} args - Arguments to create many WorkoutLogs.
     * @example
     * // Create many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkoutLog.
     * @param {WorkoutLogDeleteArgs} args - Arguments to delete one WorkoutLog.
     * @example
     * // Delete one WorkoutLog
     * const WorkoutLog = await prisma.workoutLog.delete({
     *   where: {
     *     // ... filter to delete one WorkoutLog
     *   }
     * })
     * 
     */
    delete<T extends WorkoutLogDeleteArgs>(args: SelectSubset<T, WorkoutLogDeleteArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutLog.
     * @param {WorkoutLogUpdateArgs} args - Arguments to update one WorkoutLog.
     * @example
     * // Update one WorkoutLog
     * const workoutLog = await prisma.workoutLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutLogUpdateArgs>(args: SelectSubset<T, WorkoutLogUpdateArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutLogs.
     * @param {WorkoutLogDeleteManyArgs} args - Arguments to filter WorkoutLogs to delete.
     * @example
     * // Delete a few WorkoutLogs
     * const { count } = await prisma.workoutLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutLogDeleteManyArgs>(args?: SelectSubset<T, WorkoutLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutLogUpdateManyArgs>(args: SelectSubset<T, WorkoutLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutLogs and returns the data updated in the database.
     * @param {WorkoutLogUpdateManyAndReturnArgs} args - Arguments to update many WorkoutLogs.
     * @example
     * // Update many WorkoutLogs
     * const workoutLog = await prisma.workoutLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkoutLogs and only return the `id`
     * const workoutLogWithIdOnly = await prisma.workoutLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkoutLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkoutLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkoutLog.
     * @param {WorkoutLogUpsertArgs} args - Arguments to update or create a WorkoutLog.
     * @example
     * // Update or create a WorkoutLog
     * const workoutLog = await prisma.workoutLog.upsert({
     *   create: {
     *     // ... data to create a WorkoutLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutLog we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutLogUpsertArgs>(args: SelectSubset<T, WorkoutLogUpsertArgs<ExtArgs>>): Prisma__WorkoutLogClient<$Result.GetResult<Prisma.$WorkoutLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogCountArgs} args - Arguments to filter WorkoutLogs to count.
     * @example
     * // Count the number of WorkoutLogs
     * const count = await prisma.workoutLog.count({
     *   where: {
     *     // ... the filter for the WorkoutLogs we want to count
     *   }
     * })
    **/
    count<T extends WorkoutLogCountArgs>(
      args?: Subset<T, WorkoutLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutLogAggregateArgs>(args: Subset<T, WorkoutLogAggregateArgs>): Prisma.PrismaPromise<GetWorkoutLogAggregateType<T>>

    /**
     * Group by WorkoutLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutLogGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutLog model
   */
  readonly fields: WorkoutLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutLog model
   */
  interface WorkoutLogFieldRefs {
    readonly id: FieldRef<"WorkoutLog", 'String'>
    readonly userId: FieldRef<"WorkoutLog", 'String'>
    readonly workoutName: FieldRef<"WorkoutLog", 'String'>
    readonly durationMin: FieldRef<"WorkoutLog", 'Int'>
    readonly caloriesBurned: FieldRef<"WorkoutLog", 'Float'>
    readonly exercises: FieldRef<"WorkoutLog", 'Json'>
    readonly completedAt: FieldRef<"WorkoutLog", 'DateTime'>
    readonly createdAt: FieldRef<"WorkoutLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutLog findUnique
   */
  export type WorkoutLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findUniqueOrThrow
   */
  export type WorkoutLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog findFirst
   */
  export type WorkoutLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findFirstOrThrow
   */
  export type WorkoutLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLog to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog findMany
   */
  export type WorkoutLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutLogs to fetch.
     */
    where?: WorkoutLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutLogs to fetch.
     */
    orderBy?: WorkoutLogOrderByWithRelationInput | WorkoutLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutLogs.
     */
    cursor?: WorkoutLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutLogs.
     */
    distinct?: WorkoutLogScalarFieldEnum | WorkoutLogScalarFieldEnum[]
  }

  /**
   * WorkoutLog create
   */
  export type WorkoutLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutLog.
     */
    data: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
  }

  /**
   * WorkoutLog createMany
   */
  export type WorkoutLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutLog createManyAndReturn
   */
  export type WorkoutLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to create many WorkoutLogs.
     */
    data: WorkoutLogCreateManyInput | WorkoutLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog update
   */
  export type WorkoutLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutLog.
     */
    data: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
    /**
     * Choose, which WorkoutLog to update.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog updateMany
   */
  export type WorkoutLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
  }

  /**
   * WorkoutLog updateManyAndReturn
   */
  export type WorkoutLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * The data used to update WorkoutLogs.
     */
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutLogs to update
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkoutLog upsert
   */
  export type WorkoutLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutLog to update in case it exists.
     */
    where: WorkoutLogWhereUniqueInput
    /**
     * In case the WorkoutLog found by the `where` argument doesn't exist, create a new WorkoutLog with this data.
     */
    create: XOR<WorkoutLogCreateInput, WorkoutLogUncheckedCreateInput>
    /**
     * In case the WorkoutLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutLogUpdateInput, WorkoutLogUncheckedUpdateInput>
  }

  /**
   * WorkoutLog delete
   */
  export type WorkoutLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
    /**
     * Filter which WorkoutLog to delete.
     */
    where: WorkoutLogWhereUniqueInput
  }

  /**
   * WorkoutLog deleteMany
   */
  export type WorkoutLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutLogs to delete
     */
    where?: WorkoutLogWhereInput
    /**
     * Limit how many WorkoutLogs to delete.
     */
    limit?: number
  }

  /**
   * WorkoutLog without action
   */
  export type WorkoutLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutLog
     */
    select?: WorkoutLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutLog
     */
    omit?: WorkoutLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    age: 'age',
    gender: 'gender',
    fitnessLevel: 'fitnessLevel',
    fitnessGoal: 'fitnessGoal',
    dailyStepGoal: 'dailyStepGoal',
    dailyCalGoal: 'dailyCalGoal',
    dailyWaterGoal: 'dailyWaterGoal',
    weightKg: 'weightKg',
    heightCm: 'heightCm',
    units: 'units',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    razorpaySubId: 'razorpaySubId',
    razorpayOrderId: 'razorpayOrderId',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelledAt: 'cancelledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const ScanQuotaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scansUsed: 'scansUsed',
    scansLimit: 'scansLimit',
    extraScans: 'extraScans',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    updatedAt: 'updatedAt'
  };

  export type ScanQuotaScalarFieldEnum = (typeof ScanQuotaScalarFieldEnum)[keyof typeof ScanQuotaScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    type: 'type',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const TopUpPackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    scansAdded: 'scansAdded',
    amount: 'amount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TopUpPackScalarFieldEnum = (typeof TopUpPackScalarFieldEnum)[keyof typeof TopUpPackScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    mealType: 'mealType',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    fibre: 'fibre',
    imageUrl: 'imageUrl',
    aiScanned: 'aiScanned',
    loggedAt: 'loggedAt',
    createdAt: 'createdAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const WaterLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    glasses: 'glasses',
    loggedAt: 'loggedAt',
    createdAt: 'createdAt'
  };

  export type WaterLogScalarFieldEnum = (typeof WaterLogScalarFieldEnum)[keyof typeof WaterLogScalarFieldEnum]


  export const StepLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    steps: 'steps',
    distance: 'distance',
    calories: 'calories',
    activeMin: 'activeMin',
    loggedAt: 'loggedAt',
    createdAt: 'createdAt'
  };

  export type StepLogScalarFieldEnum = (typeof StepLogScalarFieldEnum)[keyof typeof StepLogScalarFieldEnum]


  export const CycleLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    cycleLength: 'cycleLength',
    createdAt: 'createdAt'
  };

  export type CycleLogScalarFieldEnum = (typeof CycleLogScalarFieldEnum)[keyof typeof CycleLogScalarFieldEnum]


  export const SymptomScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    symptoms: 'symptoms',
    loggedAt: 'loggedAt',
    createdAt: 'createdAt'
  };

  export type SymptomScalarFieldEnum = (typeof SymptomScalarFieldEnum)[keyof typeof SymptomScalarFieldEnum]


  export const WorkoutLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workoutName: 'workoutName',
    durationMin: 'durationMin',
    caloriesBurned: 'caloriesBurned',
    exercises: 'exercises',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type WorkoutLogScalarFieldEnum = (typeof WorkoutLogScalarFieldEnum)[keyof typeof WorkoutLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringFilter<"User"> | string
    fitnessLevel?: StringFilter<"User"> | string
    fitnessGoal?: StringFilter<"User"> | string
    dailyStepGoal?: IntFilter<"User"> | number
    dailyCalGoal?: IntFilter<"User"> | number
    dailyWaterGoal?: FloatFilter<"User"> | number
    weightKg?: FloatNullableFilter<"User"> | number | null
    heightCm?: FloatNullableFilter<"User"> | number | null
    units?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    stepLogs?: StepLogListRelationFilter
    cycleLogs?: CycleLogListRelationFilter
    symptoms?: SymptomListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    scanQuota?: XOR<ScanQuotaNullableScalarRelationFilter, ScanQuotaWhereInput> | null
    payments?: PaymentListRelationFilter
    topUpPacks?: TopUpPackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    fitnessGoal?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meals?: MealOrderByRelationAggregateInput
    waterLogs?: WaterLogOrderByRelationAggregateInput
    stepLogs?: StepLogOrderByRelationAggregateInput
    cycleLogs?: CycleLogOrderByRelationAggregateInput
    symptoms?: SymptomOrderByRelationAggregateInput
    workoutLogs?: WorkoutLogOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    scanQuota?: ScanQuotaOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    topUpPacks?: TopUpPackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntNullableFilter<"User"> | number | null
    gender?: StringFilter<"User"> | string
    fitnessLevel?: StringFilter<"User"> | string
    fitnessGoal?: StringFilter<"User"> | string
    dailyStepGoal?: IntFilter<"User"> | number
    dailyCalGoal?: IntFilter<"User"> | number
    dailyWaterGoal?: FloatFilter<"User"> | number
    weightKg?: FloatNullableFilter<"User"> | number | null
    heightCm?: FloatNullableFilter<"User"> | number | null
    units?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
    waterLogs?: WaterLogListRelationFilter
    stepLogs?: StepLogListRelationFilter
    cycleLogs?: CycleLogListRelationFilter
    symptoms?: SymptomListRelationFilter
    workoutLogs?: WorkoutLogListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    scanQuota?: XOR<ScanQuotaNullableScalarRelationFilter, ScanQuotaWhereInput> | null
    payments?: PaymentListRelationFilter
    topUpPacks?: TopUpPackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    fitnessGoal?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: StringWithAggregatesFilter<"User"> | string
    fitnessLevel?: StringWithAggregatesFilter<"User"> | string
    fitnessGoal?: StringWithAggregatesFilter<"User"> | string
    dailyStepGoal?: IntWithAggregatesFilter<"User"> | number
    dailyCalGoal?: IntWithAggregatesFilter<"User"> | number
    dailyWaterGoal?: FloatWithAggregatesFilter<"User"> | number
    weightKg?: FloatNullableWithAggregatesFilter<"User"> | number | null
    heightCm?: FloatNullableWithAggregatesFilter<"User"> | number | null
    units?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    razorpaySubId?: StringNullableFilter<"Subscription"> | string | null
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    razorpaySubId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    plan?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "razorpaySubId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    razorpaySubId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    currentPeriodStart?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type ScanQuotaWhereInput = {
    AND?: ScanQuotaWhereInput | ScanQuotaWhereInput[]
    OR?: ScanQuotaWhereInput[]
    NOT?: ScanQuotaWhereInput | ScanQuotaWhereInput[]
    id?: StringFilter<"ScanQuota"> | string
    userId?: StringFilter<"ScanQuota"> | string
    scansUsed?: IntFilter<"ScanQuota"> | number
    scansLimit?: IntFilter<"ScanQuota"> | number
    extraScans?: IntFilter<"ScanQuota"> | number
    periodStart?: DateTimeFilter<"ScanQuota"> | Date | string
    periodEnd?: DateTimeFilter<"ScanQuota"> | Date | string
    updatedAt?: DateTimeFilter<"ScanQuota"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ScanQuotaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ScanQuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ScanQuotaWhereInput | ScanQuotaWhereInput[]
    OR?: ScanQuotaWhereInput[]
    NOT?: ScanQuotaWhereInput | ScanQuotaWhereInput[]
    scansUsed?: IntFilter<"ScanQuota"> | number
    scansLimit?: IntFilter<"ScanQuota"> | number
    extraScans?: IntFilter<"ScanQuota"> | number
    periodStart?: DateTimeFilter<"ScanQuota"> | Date | string
    periodEnd?: DateTimeFilter<"ScanQuota"> | Date | string
    updatedAt?: DateTimeFilter<"ScanQuota"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ScanQuotaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    updatedAt?: SortOrder
    _count?: ScanQuotaCountOrderByAggregateInput
    _avg?: ScanQuotaAvgOrderByAggregateInput
    _max?: ScanQuotaMaxOrderByAggregateInput
    _min?: ScanQuotaMinOrderByAggregateInput
    _sum?: ScanQuotaSumOrderByAggregateInput
  }

  export type ScanQuotaScalarWhereWithAggregatesInput = {
    AND?: ScanQuotaScalarWhereWithAggregatesInput | ScanQuotaScalarWhereWithAggregatesInput[]
    OR?: ScanQuotaScalarWhereWithAggregatesInput[]
    NOT?: ScanQuotaScalarWhereWithAggregatesInput | ScanQuotaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScanQuota"> | string
    userId?: StringWithAggregatesFilter<"ScanQuota"> | string
    scansUsed?: IntWithAggregatesFilter<"ScanQuota"> | number
    scansLimit?: IntWithAggregatesFilter<"ScanQuota"> | number
    extraScans?: IntWithAggregatesFilter<"ScanQuota"> | number
    periodStart?: DateTimeWithAggregatesFilter<"ScanQuota"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"ScanQuota"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScanQuota"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    razorpayOrderId?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    type?: StringFilter<"Payment"> | string
    plan?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    type?: SortOrder
    plan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    type?: StringFilter<"Payment"> | string
    plan?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "razorpayOrderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    type?: SortOrder
    plan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    type?: StringWithAggregatesFilter<"Payment"> | string
    plan?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type TopUpPackWhereInput = {
    AND?: TopUpPackWhereInput | TopUpPackWhereInput[]
    OR?: TopUpPackWhereInput[]
    NOT?: TopUpPackWhereInput | TopUpPackWhereInput[]
    id?: StringFilter<"TopUpPack"> | string
    userId?: StringFilter<"TopUpPack"> | string
    razorpayOrderId?: StringFilter<"TopUpPack"> | string
    razorpayPaymentId?: StringNullableFilter<"TopUpPack"> | string | null
    scansAdded?: IntFilter<"TopUpPack"> | number
    amount?: IntFilter<"TopUpPack"> | number
    status?: StringFilter<"TopUpPack"> | string
    createdAt?: DateTimeFilter<"TopUpPack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TopUpPackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    scansAdded?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TopUpPackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: TopUpPackWhereInput | TopUpPackWhereInput[]
    OR?: TopUpPackWhereInput[]
    NOT?: TopUpPackWhereInput | TopUpPackWhereInput[]
    userId?: StringFilter<"TopUpPack"> | string
    razorpayPaymentId?: StringNullableFilter<"TopUpPack"> | string | null
    scansAdded?: IntFilter<"TopUpPack"> | number
    amount?: IntFilter<"TopUpPack"> | number
    status?: StringFilter<"TopUpPack"> | string
    createdAt?: DateTimeFilter<"TopUpPack"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "razorpayOrderId">

  export type TopUpPackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    scansAdded?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TopUpPackCountOrderByAggregateInput
    _avg?: TopUpPackAvgOrderByAggregateInput
    _max?: TopUpPackMaxOrderByAggregateInput
    _min?: TopUpPackMinOrderByAggregateInput
    _sum?: TopUpPackSumOrderByAggregateInput
  }

  export type TopUpPackScalarWhereWithAggregatesInput = {
    AND?: TopUpPackScalarWhereWithAggregatesInput | TopUpPackScalarWhereWithAggregatesInput[]
    OR?: TopUpPackScalarWhereWithAggregatesInput[]
    NOT?: TopUpPackScalarWhereWithAggregatesInput | TopUpPackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopUpPack"> | string
    userId?: StringWithAggregatesFilter<"TopUpPack"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"TopUpPack"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"TopUpPack"> | string | null
    scansAdded?: IntWithAggregatesFilter<"TopUpPack"> | number
    amount?: IntWithAggregatesFilter<"TopUpPack"> | number
    status?: StringWithAggregatesFilter<"TopUpPack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TopUpPack"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    mealType?: StringFilter<"Meal"> | string
    calories?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    fibre?: FloatFilter<"Meal"> | number
    imageUrl?: StringNullableFilter<"Meal"> | string | null
    aiScanned?: BoolFilter<"Meal"> | boolean
    loggedAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mealType?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    aiScanned?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    userId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    mealType?: StringFilter<"Meal"> | string
    calories?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    fibre?: FloatFilter<"Meal"> | number
    imageUrl?: StringNullableFilter<"Meal"> | string | null
    aiScanned?: BoolFilter<"Meal"> | boolean
    loggedAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mealType?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    aiScanned?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meal"> | string
    userId?: StringWithAggregatesFilter<"Meal"> | string
    name?: StringWithAggregatesFilter<"Meal"> | string
    mealType?: StringWithAggregatesFilter<"Meal"> | string
    calories?: FloatWithAggregatesFilter<"Meal"> | number
    protein?: FloatWithAggregatesFilter<"Meal"> | number
    carbs?: FloatWithAggregatesFilter<"Meal"> | number
    fat?: FloatWithAggregatesFilter<"Meal"> | number
    fibre?: FloatWithAggregatesFilter<"Meal"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    aiScanned?: BoolWithAggregatesFilter<"Meal"> | boolean
    loggedAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type WaterLogWhereInput = {
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    userId?: StringFilter<"WaterLog"> | string
    glasses?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
    createdAt?: DateTimeFilter<"WaterLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WaterLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    glasses?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WaterLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterLogWhereInput | WaterLogWhereInput[]
    OR?: WaterLogWhereInput[]
    NOT?: WaterLogWhereInput | WaterLogWhereInput[]
    userId?: StringFilter<"WaterLog"> | string
    glasses?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
    createdAt?: DateTimeFilter<"WaterLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WaterLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    glasses?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    _count?: WaterLogCountOrderByAggregateInput
    _avg?: WaterLogAvgOrderByAggregateInput
    _max?: WaterLogMaxOrderByAggregateInput
    _min?: WaterLogMinOrderByAggregateInput
    _sum?: WaterLogSumOrderByAggregateInput
  }

  export type WaterLogScalarWhereWithAggregatesInput = {
    AND?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    OR?: WaterLogScalarWhereWithAggregatesInput[]
    NOT?: WaterLogScalarWhereWithAggregatesInput | WaterLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterLog"> | string
    userId?: StringWithAggregatesFilter<"WaterLog"> | string
    glasses?: IntWithAggregatesFilter<"WaterLog"> | number
    loggedAt?: DateTimeWithAggregatesFilter<"WaterLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WaterLog"> | Date | string
  }

  export type StepLogWhereInput = {
    AND?: StepLogWhereInput | StepLogWhereInput[]
    OR?: StepLogWhereInput[]
    NOT?: StepLogWhereInput | StepLogWhereInput[]
    id?: StringFilter<"StepLog"> | string
    userId?: StringFilter<"StepLog"> | string
    steps?: IntFilter<"StepLog"> | number
    distance?: FloatFilter<"StepLog"> | number
    calories?: FloatFilter<"StepLog"> | number
    activeMin?: IntFilter<"StepLog"> | number
    loggedAt?: DateTimeFilter<"StepLog"> | Date | string
    createdAt?: DateTimeFilter<"StepLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StepLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StepLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_loggedAt?: StepLogUserIdLoggedAtCompoundUniqueInput
    AND?: StepLogWhereInput | StepLogWhereInput[]
    OR?: StepLogWhereInput[]
    NOT?: StepLogWhereInput | StepLogWhereInput[]
    userId?: StringFilter<"StepLog"> | string
    steps?: IntFilter<"StepLog"> | number
    distance?: FloatFilter<"StepLog"> | number
    calories?: FloatFilter<"StepLog"> | number
    activeMin?: IntFilter<"StepLog"> | number
    loggedAt?: DateTimeFilter<"StepLog"> | Date | string
    createdAt?: DateTimeFilter<"StepLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_loggedAt">

  export type StepLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    _count?: StepLogCountOrderByAggregateInput
    _avg?: StepLogAvgOrderByAggregateInput
    _max?: StepLogMaxOrderByAggregateInput
    _min?: StepLogMinOrderByAggregateInput
    _sum?: StepLogSumOrderByAggregateInput
  }

  export type StepLogScalarWhereWithAggregatesInput = {
    AND?: StepLogScalarWhereWithAggregatesInput | StepLogScalarWhereWithAggregatesInput[]
    OR?: StepLogScalarWhereWithAggregatesInput[]
    NOT?: StepLogScalarWhereWithAggregatesInput | StepLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StepLog"> | string
    userId?: StringWithAggregatesFilter<"StepLog"> | string
    steps?: IntWithAggregatesFilter<"StepLog"> | number
    distance?: FloatWithAggregatesFilter<"StepLog"> | number
    calories?: FloatWithAggregatesFilter<"StepLog"> | number
    activeMin?: IntWithAggregatesFilter<"StepLog"> | number
    loggedAt?: DateTimeWithAggregatesFilter<"StepLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"StepLog"> | Date | string
  }

  export type CycleLogWhereInput = {
    AND?: CycleLogWhereInput | CycleLogWhereInput[]
    OR?: CycleLogWhereInput[]
    NOT?: CycleLogWhereInput | CycleLogWhereInput[]
    id?: StringFilter<"CycleLog"> | string
    userId?: StringFilter<"CycleLog"> | string
    periodStart?: DateTimeFilter<"CycleLog"> | Date | string
    periodEnd?: DateTimeNullableFilter<"CycleLog"> | Date | string | null
    cycleLength?: IntFilter<"CycleLog"> | number
    createdAt?: DateTimeFilter<"CycleLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CycleLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrderInput | SortOrder
    cycleLength?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CycleLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CycleLogWhereInput | CycleLogWhereInput[]
    OR?: CycleLogWhereInput[]
    NOT?: CycleLogWhereInput | CycleLogWhereInput[]
    userId?: StringFilter<"CycleLog"> | string
    periodStart?: DateTimeFilter<"CycleLog"> | Date | string
    periodEnd?: DateTimeNullableFilter<"CycleLog"> | Date | string | null
    cycleLength?: IntFilter<"CycleLog"> | number
    createdAt?: DateTimeFilter<"CycleLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CycleLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrderInput | SortOrder
    cycleLength?: SortOrder
    createdAt?: SortOrder
    _count?: CycleLogCountOrderByAggregateInput
    _avg?: CycleLogAvgOrderByAggregateInput
    _max?: CycleLogMaxOrderByAggregateInput
    _min?: CycleLogMinOrderByAggregateInput
    _sum?: CycleLogSumOrderByAggregateInput
  }

  export type CycleLogScalarWhereWithAggregatesInput = {
    AND?: CycleLogScalarWhereWithAggregatesInput | CycleLogScalarWhereWithAggregatesInput[]
    OR?: CycleLogScalarWhereWithAggregatesInput[]
    NOT?: CycleLogScalarWhereWithAggregatesInput | CycleLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CycleLog"> | string
    userId?: StringWithAggregatesFilter<"CycleLog"> | string
    periodStart?: DateTimeWithAggregatesFilter<"CycleLog"> | Date | string
    periodEnd?: DateTimeNullableWithAggregatesFilter<"CycleLog"> | Date | string | null
    cycleLength?: IntWithAggregatesFilter<"CycleLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CycleLog"> | Date | string
  }

  export type SymptomWhereInput = {
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    id?: StringFilter<"Symptom"> | string
    userId?: StringFilter<"Symptom"> | string
    symptoms?: StringNullableListFilter<"Symptom">
    loggedAt?: DateTimeFilter<"Symptom"> | Date | string
    createdAt?: DateTimeFilter<"Symptom"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SymptomOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SymptomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    userId?: StringFilter<"Symptom"> | string
    symptoms?: StringNullableListFilter<"Symptom">
    loggedAt?: DateTimeFilter<"Symptom"> | Date | string
    createdAt?: DateTimeFilter<"Symptom"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SymptomOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
    _count?: SymptomCountOrderByAggregateInput
    _max?: SymptomMaxOrderByAggregateInput
    _min?: SymptomMinOrderByAggregateInput
  }

  export type SymptomScalarWhereWithAggregatesInput = {
    AND?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    OR?: SymptomScalarWhereWithAggregatesInput[]
    NOT?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Symptom"> | string
    userId?: StringWithAggregatesFilter<"Symptom"> | string
    symptoms?: StringNullableListFilter<"Symptom">
    loggedAt?: DateTimeWithAggregatesFilter<"Symptom"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Symptom"> | Date | string
  }

  export type WorkoutLogWhereInput = {
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    id?: StringFilter<"WorkoutLog"> | string
    userId?: StringFilter<"WorkoutLog"> | string
    workoutName?: StringFilter<"WorkoutLog"> | string
    durationMin?: IntFilter<"WorkoutLog"> | number
    caloriesBurned?: FloatFilter<"WorkoutLog"> | number
    exercises?: JsonFilter<"WorkoutLog">
    completedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkoutLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutName?: SortOrder
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
    exercises?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WorkoutLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    OR?: WorkoutLogWhereInput[]
    NOT?: WorkoutLogWhereInput | WorkoutLogWhereInput[]
    userId?: StringFilter<"WorkoutLog"> | string
    workoutName?: StringFilter<"WorkoutLog"> | string
    durationMin?: IntFilter<"WorkoutLog"> | number
    caloriesBurned?: FloatFilter<"WorkoutLog"> | number
    exercises?: JsonFilter<"WorkoutLog">
    completedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WorkoutLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutName?: SortOrder
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
    exercises?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutLogCountOrderByAggregateInput
    _avg?: WorkoutLogAvgOrderByAggregateInput
    _max?: WorkoutLogMaxOrderByAggregateInput
    _min?: WorkoutLogMinOrderByAggregateInput
    _sum?: WorkoutLogSumOrderByAggregateInput
  }

  export type WorkoutLogScalarWhereWithAggregatesInput = {
    AND?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    OR?: WorkoutLogScalarWhereWithAggregatesInput[]
    NOT?: WorkoutLogScalarWhereWithAggregatesInput | WorkoutLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutLog"> | string
    userId?: StringWithAggregatesFilter<"WorkoutLog"> | string
    workoutName?: StringWithAggregatesFilter<"WorkoutLog"> | string
    durationMin?: IntWithAggregatesFilter<"WorkoutLog"> | number
    caloriesBurned?: FloatWithAggregatesFilter<"WorkoutLog"> | number
    exercises?: JsonWithAggregatesFilter<"WorkoutLog">
    completedAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan?: string
    status?: string
    razorpaySubId?: string | null
    razorpayOrderId?: string | null
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan?: string
    status?: string
    razorpaySubId?: string | null
    razorpayOrderId?: string | null
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan?: string
    status?: string
    razorpaySubId?: string | null
    razorpayOrderId?: string | null
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanQuotaCreateInput = {
    id?: string
    scansUsed?: number
    scansLimit?: number
    extraScans?: number
    periodStart?: Date | string
    periodEnd: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutScanQuotaInput
  }

  export type ScanQuotaUncheckedCreateInput = {
    id?: string
    userId: string
    scansUsed?: number
    scansLimit?: number
    extraScans?: number
    periodStart?: Date | string
    periodEnd: Date | string
    updatedAt?: Date | string
  }

  export type ScanQuotaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutScanQuotaNestedInput
  }

  export type ScanQuotaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanQuotaCreateManyInput = {
    id?: string
    userId: string
    scansUsed?: number
    scansLimit?: number
    extraScans?: number
    periodStart?: Date | string
    periodEnd: Date | string
    updatedAt?: Date | string
  }

  export type ScanQuotaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanQuotaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackCreateInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTopUpPacksInput
  }

  export type TopUpPackUncheckedCreateInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
  }

  export type TopUpPackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTopUpPacksNestedInput
  }

  export type TopUpPackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackCreateManyInput = {
    id?: string
    userId: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
  }

  export type TopUpPackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    id?: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type MealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyInput = {
    id?: string
    userId: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogCreateInput = {
    id?: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWaterLogsInput
  }

  export type WaterLogUncheckedCreateInput = {
    id?: string
    userId: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaterLogsNestedInput
  }

  export type WaterLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogCreateManyInput = {
    id?: string
    userId: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogCreateInput = {
    id?: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStepLogsInput
  }

  export type StepLogUncheckedCreateInput = {
    id?: string
    userId: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type StepLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepLogsNestedInput
  }

  export type StepLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogCreateManyInput = {
    id?: string
    userId: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type StepLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCycleLogsInput
  }

  export type CycleLogUncheckedCreateInput = {
    id?: string
    userId: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
  }

  export type CycleLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCycleLogsNestedInput
  }

  export type CycleLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogCreateManyInput = {
    id?: string
    userId: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
  }

  export type CycleLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomCreateInput = {
    id?: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSymptomsInput
  }

  export type SymptomUncheckedCreateInput = {
    id?: string
    userId: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type SymptomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSymptomsNestedInput
  }

  export type SymptomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomCreateManyInput = {
    id?: string
    userId: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type SymptomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogCreateInput = {
    id?: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkoutLogsInput
  }

  export type WorkoutLogUncheckedCreateInput = {
    id?: string
    userId: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkoutLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkoutLogsNestedInput
  }

  export type WorkoutLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogCreateManyInput = {
    id?: string
    userId: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkoutLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type WaterLogListRelationFilter = {
    every?: WaterLogWhereInput
    some?: WaterLogWhereInput
    none?: WaterLogWhereInput
  }

  export type StepLogListRelationFilter = {
    every?: StepLogWhereInput
    some?: StepLogWhereInput
    none?: StepLogWhereInput
  }

  export type CycleLogListRelationFilter = {
    every?: CycleLogWhereInput
    some?: CycleLogWhereInput
    none?: CycleLogWhereInput
  }

  export type SymptomListRelationFilter = {
    every?: SymptomWhereInput
    some?: SymptomWhereInput
    none?: SymptomWhereInput
  }

  export type WorkoutLogListRelationFilter = {
    every?: WorkoutLogWhereInput
    some?: WorkoutLogWhereInput
    none?: WorkoutLogWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type ScanQuotaNullableScalarRelationFilter = {
    is?: ScanQuotaWhereInput | null
    isNot?: ScanQuotaWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type TopUpPackListRelationFilter = {
    every?: TopUpPackWhereInput
    some?: TopUpPackWhereInput
    none?: TopUpPackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CycleLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SymptomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopUpPackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    fitnessGoal?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    fitnessGoal?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    fitnessLevel?: SortOrder
    fitnessGoal?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    units?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    dailyStepGoal?: SortOrder
    dailyCalGoal?: SortOrder
    dailyWaterGoal?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubId?: SortOrder
    razorpayOrderId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubId?: SortOrder
    razorpayOrderId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    razorpaySubId?: SortOrder
    razorpayOrderId?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ScanQuotaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanQuotaAvgOrderByAggregateInput = {
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
  }

  export type ScanQuotaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanQuotaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScanQuotaSumOrderByAggregateInput = {
    scansUsed?: SortOrder
    scansLimit?: SortOrder
    extraScans?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    type?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    type?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    type?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TopUpPackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    scansAdded?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopUpPackAvgOrderByAggregateInput = {
    scansAdded?: SortOrder
    amount?: SortOrder
  }

  export type TopUpPackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    scansAdded?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopUpPackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    scansAdded?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TopUpPackSumOrderByAggregateInput = {
    scansAdded?: SortOrder
    amount?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mealType?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
    imageUrl?: SortOrder
    aiScanned?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mealType?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
    imageUrl?: SortOrder
    aiScanned?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    mealType?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
    imageUrl?: SortOrder
    aiScanned?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fibre?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WaterLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    glasses?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterLogAvgOrderByAggregateInput = {
    glasses?: SortOrder
  }

  export type WaterLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    glasses?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    glasses?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterLogSumOrderByAggregateInput = {
    glasses?: SortOrder
  }

  export type StepLogUserIdLoggedAtCompoundUniqueInput = {
    userId: string
    loggedAt: Date | string
  }

  export type StepLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StepLogAvgOrderByAggregateInput = {
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
  }

  export type StepLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StepLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StepLogSumOrderByAggregateInput = {
    steps?: SortOrder
    distance?: SortOrder
    calories?: SortOrder
    activeMin?: SortOrder
  }

  export type CycleLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cycleLength?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleLogAvgOrderByAggregateInput = {
    cycleLength?: SortOrder
  }

  export type CycleLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cycleLength?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    cycleLength?: SortOrder
    createdAt?: SortOrder
  }

  export type CycleLogSumOrderByAggregateInput = {
    cycleLength?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SymptomCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    symptoms?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SymptomMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SymptomMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkoutLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutName?: SortOrder
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
    exercises?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutLogAvgOrderByAggregateInput = {
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
  }

  export type WorkoutLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutName?: SortOrder
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workoutName?: SortOrder
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutLogSumOrderByAggregateInput = {
    durationMin?: SortOrder
    caloriesBurned?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type MealCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WaterLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type StepLogCreateNestedManyWithoutUserInput = {
    create?: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput> | StepLogCreateWithoutUserInput[] | StepLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepLogCreateOrConnectWithoutUserInput | StepLogCreateOrConnectWithoutUserInput[]
    createMany?: StepLogCreateManyUserInputEnvelope
    connect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
  }

  export type CycleLogCreateNestedManyWithoutUserInput = {
    create?: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput> | CycleLogCreateWithoutUserInput[] | CycleLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleLogCreateOrConnectWithoutUserInput | CycleLogCreateOrConnectWithoutUserInput[]
    createMany?: CycleLogCreateManyUserInputEnvelope
    connect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
  }

  export type SymptomCreateNestedManyWithoutUserInput = {
    create?: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput> | SymptomCreateWithoutUserInput[] | SymptomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomCreateOrConnectWithoutUserInput | SymptomCreateOrConnectWithoutUserInput[]
    createMany?: SymptomCreateManyUserInputEnvelope
    connect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
  }

  export type WorkoutLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ScanQuotaCreateNestedOneWithoutUserInput = {
    create?: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ScanQuotaCreateOrConnectWithoutUserInput
    connect?: ScanQuotaWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TopUpPackCreateNestedManyWithoutUserInput = {
    create?: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput> | TopUpPackCreateWithoutUserInput[] | TopUpPackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpPackCreateOrConnectWithoutUserInput | TopUpPackCreateOrConnectWithoutUserInput[]
    createMany?: TopUpPackCreateManyUserInputEnvelope
    connect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type WaterLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
  }

  export type StepLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput> | StepLogCreateWithoutUserInput[] | StepLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepLogCreateOrConnectWithoutUserInput | StepLogCreateOrConnectWithoutUserInput[]
    createMany?: StepLogCreateManyUserInputEnvelope
    connect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
  }

  export type CycleLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput> | CycleLogCreateWithoutUserInput[] | CycleLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleLogCreateOrConnectWithoutUserInput | CycleLogCreateOrConnectWithoutUserInput[]
    createMany?: CycleLogCreateManyUserInputEnvelope
    connect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
  }

  export type SymptomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput> | SymptomCreateWithoutUserInput[] | SymptomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomCreateOrConnectWithoutUserInput | SymptomCreateOrConnectWithoutUserInput[]
    createMany?: SymptomCreateManyUserInputEnvelope
    connect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
  }

  export type WorkoutLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type ScanQuotaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ScanQuotaCreateOrConnectWithoutUserInput
    connect?: ScanQuotaWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TopUpPackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput> | TopUpPackCreateWithoutUserInput[] | TopUpPackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpPackCreateOrConnectWithoutUserInput | TopUpPackCreateOrConnectWithoutUserInput[]
    createMany?: TopUpPackCreateManyUserInputEnvelope
    connect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MealUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WaterLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutUserInput | WaterLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutUserInput | WaterLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutUserInput | WaterLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type StepLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput> | StepLogCreateWithoutUserInput[] | StepLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepLogCreateOrConnectWithoutUserInput | StepLogCreateOrConnectWithoutUserInput[]
    upsert?: StepLogUpsertWithWhereUniqueWithoutUserInput | StepLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepLogCreateManyUserInputEnvelope
    set?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    disconnect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    delete?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    connect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    update?: StepLogUpdateWithWhereUniqueWithoutUserInput | StepLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepLogUpdateManyWithWhereWithoutUserInput | StepLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepLogScalarWhereInput | StepLogScalarWhereInput[]
  }

  export type CycleLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput> | CycleLogCreateWithoutUserInput[] | CycleLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleLogCreateOrConnectWithoutUserInput | CycleLogCreateOrConnectWithoutUserInput[]
    upsert?: CycleLogUpsertWithWhereUniqueWithoutUserInput | CycleLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CycleLogCreateManyUserInputEnvelope
    set?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    disconnect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    delete?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    connect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    update?: CycleLogUpdateWithWhereUniqueWithoutUserInput | CycleLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CycleLogUpdateManyWithWhereWithoutUserInput | CycleLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CycleLogScalarWhereInput | CycleLogScalarWhereInput[]
  }

  export type SymptomUpdateManyWithoutUserNestedInput = {
    create?: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput> | SymptomCreateWithoutUserInput[] | SymptomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomCreateOrConnectWithoutUserInput | SymptomCreateOrConnectWithoutUserInput[]
    upsert?: SymptomUpsertWithWhereUniqueWithoutUserInput | SymptomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SymptomCreateManyUserInputEnvelope
    set?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    disconnect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    delete?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    connect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    update?: SymptomUpdateWithWhereUniqueWithoutUserInput | SymptomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SymptomUpdateManyWithWhereWithoutUserInput | SymptomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SymptomScalarWhereInput | SymptomScalarWhereInput[]
  }

  export type WorkoutLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ScanQuotaUpdateOneWithoutUserNestedInput = {
    create?: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ScanQuotaCreateOrConnectWithoutUserInput
    upsert?: ScanQuotaUpsertWithoutUserInput
    disconnect?: ScanQuotaWhereInput | boolean
    delete?: ScanQuotaWhereInput | boolean
    connect?: ScanQuotaWhereUniqueInput
    update?: XOR<XOR<ScanQuotaUpdateToOneWithWhereWithoutUserInput, ScanQuotaUpdateWithoutUserInput>, ScanQuotaUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TopUpPackUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput> | TopUpPackCreateWithoutUserInput[] | TopUpPackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpPackCreateOrConnectWithoutUserInput | TopUpPackCreateOrConnectWithoutUserInput[]
    upsert?: TopUpPackUpsertWithWhereUniqueWithoutUserInput | TopUpPackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopUpPackCreateManyUserInputEnvelope
    set?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    disconnect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    delete?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    connect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    update?: TopUpPackUpdateWithWhereUniqueWithoutUserInput | TopUpPackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopUpPackUpdateManyWithWhereWithoutUserInput | TopUpPackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopUpPackScalarWhereInput | TopUpPackScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type WaterLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput> | WaterLogCreateWithoutUserInput[] | WaterLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterLogCreateOrConnectWithoutUserInput | WaterLogCreateOrConnectWithoutUserInput[]
    upsert?: WaterLogUpsertWithWhereUniqueWithoutUserInput | WaterLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterLogCreateManyUserInputEnvelope
    set?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    disconnect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    delete?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    connect?: WaterLogWhereUniqueInput | WaterLogWhereUniqueInput[]
    update?: WaterLogUpdateWithWhereUniqueWithoutUserInput | WaterLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterLogUpdateManyWithWhereWithoutUserInput | WaterLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
  }

  export type StepLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput> | StepLogCreateWithoutUserInput[] | StepLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepLogCreateOrConnectWithoutUserInput | StepLogCreateOrConnectWithoutUserInput[]
    upsert?: StepLogUpsertWithWhereUniqueWithoutUserInput | StepLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepLogCreateManyUserInputEnvelope
    set?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    disconnect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    delete?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    connect?: StepLogWhereUniqueInput | StepLogWhereUniqueInput[]
    update?: StepLogUpdateWithWhereUniqueWithoutUserInput | StepLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepLogUpdateManyWithWhereWithoutUserInput | StepLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepLogScalarWhereInput | StepLogScalarWhereInput[]
  }

  export type CycleLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput> | CycleLogCreateWithoutUserInput[] | CycleLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CycleLogCreateOrConnectWithoutUserInput | CycleLogCreateOrConnectWithoutUserInput[]
    upsert?: CycleLogUpsertWithWhereUniqueWithoutUserInput | CycleLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CycleLogCreateManyUserInputEnvelope
    set?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    disconnect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    delete?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    connect?: CycleLogWhereUniqueInput | CycleLogWhereUniqueInput[]
    update?: CycleLogUpdateWithWhereUniqueWithoutUserInput | CycleLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CycleLogUpdateManyWithWhereWithoutUserInput | CycleLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CycleLogScalarWhereInput | CycleLogScalarWhereInput[]
  }

  export type SymptomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput> | SymptomCreateWithoutUserInput[] | SymptomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SymptomCreateOrConnectWithoutUserInput | SymptomCreateOrConnectWithoutUserInput[]
    upsert?: SymptomUpsertWithWhereUniqueWithoutUserInput | SymptomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SymptomCreateManyUserInputEnvelope
    set?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    disconnect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    delete?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    connect?: SymptomWhereUniqueInput | SymptomWhereUniqueInput[]
    update?: SymptomUpdateWithWhereUniqueWithoutUserInput | SymptomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SymptomUpdateManyWithWhereWithoutUserInput | SymptomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SymptomScalarWhereInput | SymptomScalarWhereInput[]
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput> | WorkoutLogCreateWithoutUserInput[] | WorkoutLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutLogCreateOrConnectWithoutUserInput | WorkoutLogCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutLogUpsertWithWhereUniqueWithoutUserInput | WorkoutLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutLogCreateManyUserInputEnvelope
    set?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    disconnect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    delete?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    connect?: WorkoutLogWhereUniqueInput | WorkoutLogWhereUniqueInput[]
    update?: WorkoutLogUpdateWithWhereUniqueWithoutUserInput | WorkoutLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutLogUpdateManyWithWhereWithoutUserInput | WorkoutLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type ScanQuotaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
    connectOrCreate?: ScanQuotaCreateOrConnectWithoutUserInput
    upsert?: ScanQuotaUpsertWithoutUserInput
    disconnect?: ScanQuotaWhereInput | boolean
    delete?: ScanQuotaWhereInput | boolean
    connect?: ScanQuotaWhereUniqueInput
    update?: XOR<XOR<ScanQuotaUpdateToOneWithWhereWithoutUserInput, ScanQuotaUpdateWithoutUserInput>, ScanQuotaUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TopUpPackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput> | TopUpPackCreateWithoutUserInput[] | TopUpPackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TopUpPackCreateOrConnectWithoutUserInput | TopUpPackCreateOrConnectWithoutUserInput[]
    upsert?: TopUpPackUpsertWithWhereUniqueWithoutUserInput | TopUpPackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TopUpPackCreateManyUserInputEnvelope
    set?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    disconnect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    delete?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    connect?: TopUpPackWhereUniqueInput | TopUpPackWhereUniqueInput[]
    update?: TopUpPackUpdateWithWhereUniqueWithoutUserInput | TopUpPackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TopUpPackUpdateManyWithWhereWithoutUserInput | TopUpPackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TopUpPackScalarWhereInput | TopUpPackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutScanQuotaInput = {
    create?: XOR<UserCreateWithoutScanQuotaInput, UserUncheckedCreateWithoutScanQuotaInput>
    connectOrCreate?: UserCreateOrConnectWithoutScanQuotaInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutScanQuotaNestedInput = {
    create?: XOR<UserCreateWithoutScanQuotaInput, UserUncheckedCreateWithoutScanQuotaInput>
    connectOrCreate?: UserCreateOrConnectWithoutScanQuotaInput
    upsert?: UserUpsertWithoutScanQuotaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScanQuotaInput, UserUpdateWithoutScanQuotaInput>, UserUncheckedUpdateWithoutScanQuotaInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutTopUpPacksInput = {
    create?: XOR<UserCreateWithoutTopUpPacksInput, UserUncheckedCreateWithoutTopUpPacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopUpPacksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTopUpPacksNestedInput = {
    create?: XOR<UserCreateWithoutTopUpPacksInput, UserUncheckedCreateWithoutTopUpPacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopUpPacksInput
    upsert?: UserUpsertWithoutTopUpPacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTopUpPacksInput, UserUpdateWithoutTopUpPacksInput>, UserUncheckedUpdateWithoutTopUpPacksInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    upsert?: UserUpsertWithoutMealsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealsInput, UserUpdateWithoutMealsInput>, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserCreateNestedOneWithoutWaterLogsInput = {
    create?: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWaterLogsNestedInput = {
    create?: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaterLogsInput
    upsert?: UserUpsertWithoutWaterLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaterLogsInput, UserUpdateWithoutWaterLogsInput>, UserUncheckedUpdateWithoutWaterLogsInput>
  }

  export type UserCreateNestedOneWithoutStepLogsInput = {
    create?: XOR<UserCreateWithoutStepLogsInput, UserUncheckedCreateWithoutStepLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStepLogsNestedInput = {
    create?: XOR<UserCreateWithoutStepLogsInput, UserUncheckedCreateWithoutStepLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepLogsInput
    upsert?: UserUpsertWithoutStepLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepLogsInput, UserUpdateWithoutStepLogsInput>, UserUncheckedUpdateWithoutStepLogsInput>
  }

  export type UserCreateNestedOneWithoutCycleLogsInput = {
    create?: XOR<UserCreateWithoutCycleLogsInput, UserUncheckedCreateWithoutCycleLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCycleLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCycleLogsNestedInput = {
    create?: XOR<UserCreateWithoutCycleLogsInput, UserUncheckedCreateWithoutCycleLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCycleLogsInput
    upsert?: UserUpsertWithoutCycleLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCycleLogsInput, UserUpdateWithoutCycleLogsInput>, UserUncheckedUpdateWithoutCycleLogsInput>
  }

  export type SymptomCreatesymptomsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutSymptomsInput = {
    create?: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSymptomsInput
    connect?: UserWhereUniqueInput
  }

  export type SymptomUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutSymptomsNestedInput = {
    create?: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSymptomsInput
    upsert?: UserUpsertWithoutSymptomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSymptomsInput, UserUpdateWithoutSymptomsInput>, UserUncheckedUpdateWithoutSymptomsInput>
  }

  export type UserCreateNestedOneWithoutWorkoutLogsInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWorkoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkoutLogsInput
    upsert?: UserUpsertWithoutWorkoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkoutLogsInput, UserUpdateWithoutWorkoutLogsInput>, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MealCreateWithoutUserInput = {
    id?: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type MealUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type MealCreateOrConnectWithoutUserInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealCreateManyUserInputEnvelope = {
    data: MealCreateManyUserInput | MealCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WaterLogCreateWithoutUserInput = {
    id?: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterLogUncheckedCreateWithoutUserInput = {
    id?: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterLogCreateOrConnectWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    create: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput>
  }

  export type WaterLogCreateManyUserInputEnvelope = {
    data: WaterLogCreateManyUserInput | WaterLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StepLogCreateWithoutUserInput = {
    id?: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type StepLogUncheckedCreateWithoutUserInput = {
    id?: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type StepLogCreateOrConnectWithoutUserInput = {
    where: StepLogWhereUniqueInput
    create: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput>
  }

  export type StepLogCreateManyUserInputEnvelope = {
    data: StepLogCreateManyUserInput | StepLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CycleLogCreateWithoutUserInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
  }

  export type CycleLogUncheckedCreateWithoutUserInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
  }

  export type CycleLogCreateOrConnectWithoutUserInput = {
    where: CycleLogWhereUniqueInput
    create: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput>
  }

  export type CycleLogCreateManyUserInputEnvelope = {
    data: CycleLogCreateManyUserInput | CycleLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SymptomCreateWithoutUserInput = {
    id?: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type SymptomUncheckedCreateWithoutUserInput = {
    id?: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type SymptomCreateOrConnectWithoutUserInput = {
    where: SymptomWhereUniqueInput
    create: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput>
  }

  export type SymptomCreateManyUserInputEnvelope = {
    data: SymptomCreateManyUserInput | SymptomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutLogCreateWithoutUserInput = {
    id?: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkoutLogUncheckedCreateWithoutUserInput = {
    id?: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkoutLogCreateOrConnectWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogCreateManyUserInputEnvelope = {
    data: WorkoutLogCreateManyUserInput | WorkoutLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan?: string
    status?: string
    razorpaySubId?: string | null
    razorpayOrderId?: string | null
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan?: string
    status?: string
    razorpaySubId?: string | null
    razorpayOrderId?: string | null
    currentPeriodStart?: Date | string
    currentPeriodEnd?: Date | string | null
    cancelledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type ScanQuotaCreateWithoutUserInput = {
    id?: string
    scansUsed?: number
    scansLimit?: number
    extraScans?: number
    periodStart?: Date | string
    periodEnd: Date | string
    updatedAt?: Date | string
  }

  export type ScanQuotaUncheckedCreateWithoutUserInput = {
    id?: string
    scansUsed?: number
    scansLimit?: number
    extraScans?: number
    periodStart?: Date | string
    periodEnd: Date | string
    updatedAt?: Date | string
  }

  export type ScanQuotaCreateOrConnectWithoutUserInput = {
    where: ScanQuotaWhereUniqueInput
    create: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TopUpPackCreateWithoutUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
  }

  export type TopUpPackUncheckedCreateWithoutUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
  }

  export type TopUpPackCreateOrConnectWithoutUserInput = {
    where: TopUpPackWhereUniqueInput
    create: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput>
  }

  export type TopUpPackCreateManyUserInputEnvelope = {
    data: TopUpPackCreateManyUserInput | TopUpPackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealUpsertWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealUpdateWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
  }

  export type MealUpdateManyWithWhereWithoutUserInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutUserInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: StringFilter<"Meal"> | string
    userId?: StringFilter<"Meal"> | string
    name?: StringFilter<"Meal"> | string
    mealType?: StringFilter<"Meal"> | string
    calories?: FloatFilter<"Meal"> | number
    protein?: FloatFilter<"Meal"> | number
    carbs?: FloatFilter<"Meal"> | number
    fat?: FloatFilter<"Meal"> | number
    fibre?: FloatFilter<"Meal"> | number
    imageUrl?: StringNullableFilter<"Meal"> | string | null
    aiScanned?: BoolFilter<"Meal"> | boolean
    loggedAt?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type WaterLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    update: XOR<WaterLogUpdateWithoutUserInput, WaterLogUncheckedUpdateWithoutUserInput>
    create: XOR<WaterLogCreateWithoutUserInput, WaterLogUncheckedCreateWithoutUserInput>
  }

  export type WaterLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WaterLogWhereUniqueInput
    data: XOR<WaterLogUpdateWithoutUserInput, WaterLogUncheckedUpdateWithoutUserInput>
  }

  export type WaterLogUpdateManyWithWhereWithoutUserInput = {
    where: WaterLogScalarWhereInput
    data: XOR<WaterLogUpdateManyMutationInput, WaterLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WaterLogScalarWhereInput = {
    AND?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    OR?: WaterLogScalarWhereInput[]
    NOT?: WaterLogScalarWhereInput | WaterLogScalarWhereInput[]
    id?: StringFilter<"WaterLog"> | string
    userId?: StringFilter<"WaterLog"> | string
    glasses?: IntFilter<"WaterLog"> | number
    loggedAt?: DateTimeFilter<"WaterLog"> | Date | string
    createdAt?: DateTimeFilter<"WaterLog"> | Date | string
  }

  export type StepLogUpsertWithWhereUniqueWithoutUserInput = {
    where: StepLogWhereUniqueInput
    update: XOR<StepLogUpdateWithoutUserInput, StepLogUncheckedUpdateWithoutUserInput>
    create: XOR<StepLogCreateWithoutUserInput, StepLogUncheckedCreateWithoutUserInput>
  }

  export type StepLogUpdateWithWhereUniqueWithoutUserInput = {
    where: StepLogWhereUniqueInput
    data: XOR<StepLogUpdateWithoutUserInput, StepLogUncheckedUpdateWithoutUserInput>
  }

  export type StepLogUpdateManyWithWhereWithoutUserInput = {
    where: StepLogScalarWhereInput
    data: XOR<StepLogUpdateManyMutationInput, StepLogUncheckedUpdateManyWithoutUserInput>
  }

  export type StepLogScalarWhereInput = {
    AND?: StepLogScalarWhereInput | StepLogScalarWhereInput[]
    OR?: StepLogScalarWhereInput[]
    NOT?: StepLogScalarWhereInput | StepLogScalarWhereInput[]
    id?: StringFilter<"StepLog"> | string
    userId?: StringFilter<"StepLog"> | string
    steps?: IntFilter<"StepLog"> | number
    distance?: FloatFilter<"StepLog"> | number
    calories?: FloatFilter<"StepLog"> | number
    activeMin?: IntFilter<"StepLog"> | number
    loggedAt?: DateTimeFilter<"StepLog"> | Date | string
    createdAt?: DateTimeFilter<"StepLog"> | Date | string
  }

  export type CycleLogUpsertWithWhereUniqueWithoutUserInput = {
    where: CycleLogWhereUniqueInput
    update: XOR<CycleLogUpdateWithoutUserInput, CycleLogUncheckedUpdateWithoutUserInput>
    create: XOR<CycleLogCreateWithoutUserInput, CycleLogUncheckedCreateWithoutUserInput>
  }

  export type CycleLogUpdateWithWhereUniqueWithoutUserInput = {
    where: CycleLogWhereUniqueInput
    data: XOR<CycleLogUpdateWithoutUserInput, CycleLogUncheckedUpdateWithoutUserInput>
  }

  export type CycleLogUpdateManyWithWhereWithoutUserInput = {
    where: CycleLogScalarWhereInput
    data: XOR<CycleLogUpdateManyMutationInput, CycleLogUncheckedUpdateManyWithoutUserInput>
  }

  export type CycleLogScalarWhereInput = {
    AND?: CycleLogScalarWhereInput | CycleLogScalarWhereInput[]
    OR?: CycleLogScalarWhereInput[]
    NOT?: CycleLogScalarWhereInput | CycleLogScalarWhereInput[]
    id?: StringFilter<"CycleLog"> | string
    userId?: StringFilter<"CycleLog"> | string
    periodStart?: DateTimeFilter<"CycleLog"> | Date | string
    periodEnd?: DateTimeNullableFilter<"CycleLog"> | Date | string | null
    cycleLength?: IntFilter<"CycleLog"> | number
    createdAt?: DateTimeFilter<"CycleLog"> | Date | string
  }

  export type SymptomUpsertWithWhereUniqueWithoutUserInput = {
    where: SymptomWhereUniqueInput
    update: XOR<SymptomUpdateWithoutUserInput, SymptomUncheckedUpdateWithoutUserInput>
    create: XOR<SymptomCreateWithoutUserInput, SymptomUncheckedCreateWithoutUserInput>
  }

  export type SymptomUpdateWithWhereUniqueWithoutUserInput = {
    where: SymptomWhereUniqueInput
    data: XOR<SymptomUpdateWithoutUserInput, SymptomUncheckedUpdateWithoutUserInput>
  }

  export type SymptomUpdateManyWithWhereWithoutUserInput = {
    where: SymptomScalarWhereInput
    data: XOR<SymptomUpdateManyMutationInput, SymptomUncheckedUpdateManyWithoutUserInput>
  }

  export type SymptomScalarWhereInput = {
    AND?: SymptomScalarWhereInput | SymptomScalarWhereInput[]
    OR?: SymptomScalarWhereInput[]
    NOT?: SymptomScalarWhereInput | SymptomScalarWhereInput[]
    id?: StringFilter<"Symptom"> | string
    userId?: StringFilter<"Symptom"> | string
    symptoms?: StringNullableListFilter<"Symptom">
    loggedAt?: DateTimeFilter<"Symptom"> | Date | string
    createdAt?: DateTimeFilter<"Symptom"> | Date | string
  }

  export type WorkoutLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    update: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutLogCreateWithoutUserInput, WorkoutLogUncheckedCreateWithoutUserInput>
  }

  export type WorkoutLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutLogWhereUniqueInput
    data: XOR<WorkoutLogUpdateWithoutUserInput, WorkoutLogUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutLogUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutLogScalarWhereInput
    data: XOR<WorkoutLogUpdateManyMutationInput, WorkoutLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutLogScalarWhereInput = {
    AND?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    OR?: WorkoutLogScalarWhereInput[]
    NOT?: WorkoutLogScalarWhereInput | WorkoutLogScalarWhereInput[]
    id?: StringFilter<"WorkoutLog"> | string
    userId?: StringFilter<"WorkoutLog"> | string
    workoutName?: StringFilter<"WorkoutLog"> | string
    durationMin?: IntFilter<"WorkoutLog"> | number
    caloriesBurned?: FloatFilter<"WorkoutLog"> | number
    exercises?: JsonFilter<"WorkoutLog">
    completedAt?: DateTimeFilter<"WorkoutLog"> | Date | string
    createdAt?: DateTimeFilter<"WorkoutLog"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    razorpaySubId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    currentPeriodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanQuotaUpsertWithoutUserInput = {
    update: XOR<ScanQuotaUpdateWithoutUserInput, ScanQuotaUncheckedUpdateWithoutUserInput>
    create: XOR<ScanQuotaCreateWithoutUserInput, ScanQuotaUncheckedCreateWithoutUserInput>
    where?: ScanQuotaWhereInput
  }

  export type ScanQuotaUpdateToOneWithWhereWithoutUserInput = {
    where?: ScanQuotaWhereInput
    data: XOR<ScanQuotaUpdateWithoutUserInput, ScanQuotaUncheckedUpdateWithoutUserInput>
  }

  export type ScanQuotaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanQuotaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scansUsed?: IntFieldUpdateOperationsInput | number
    scansLimit?: IntFieldUpdateOperationsInput | number
    extraScans?: IntFieldUpdateOperationsInput | number
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    razorpayOrderId?: StringFilter<"Payment"> | string
    razorpayPaymentId?: StringNullableFilter<"Payment"> | string | null
    razorpaySignature?: StringNullableFilter<"Payment"> | string | null
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    type?: StringFilter<"Payment"> | string
    plan?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type TopUpPackUpsertWithWhereUniqueWithoutUserInput = {
    where: TopUpPackWhereUniqueInput
    update: XOR<TopUpPackUpdateWithoutUserInput, TopUpPackUncheckedUpdateWithoutUserInput>
    create: XOR<TopUpPackCreateWithoutUserInput, TopUpPackUncheckedCreateWithoutUserInput>
  }

  export type TopUpPackUpdateWithWhereUniqueWithoutUserInput = {
    where: TopUpPackWhereUniqueInput
    data: XOR<TopUpPackUpdateWithoutUserInput, TopUpPackUncheckedUpdateWithoutUserInput>
  }

  export type TopUpPackUpdateManyWithWhereWithoutUserInput = {
    where: TopUpPackScalarWhereInput
    data: XOR<TopUpPackUpdateManyMutationInput, TopUpPackUncheckedUpdateManyWithoutUserInput>
  }

  export type TopUpPackScalarWhereInput = {
    AND?: TopUpPackScalarWhereInput | TopUpPackScalarWhereInput[]
    OR?: TopUpPackScalarWhereInput[]
    NOT?: TopUpPackScalarWhereInput | TopUpPackScalarWhereInput[]
    id?: StringFilter<"TopUpPack"> | string
    userId?: StringFilter<"TopUpPack"> | string
    razorpayOrderId?: StringFilter<"TopUpPack"> | string
    razorpayPaymentId?: StringNullableFilter<"TopUpPack"> | string | null
    scansAdded?: IntFilter<"TopUpPack"> | number
    amount?: IntFilter<"TopUpPack"> | number
    status?: StringFilter<"TopUpPack"> | string
    createdAt?: DateTimeFilter<"TopUpPack"> | Date | string
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutScanQuotaInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutScanQuotaInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutScanQuotaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScanQuotaInput, UserUncheckedCreateWithoutScanQuotaInput>
  }

  export type UserUpsertWithoutScanQuotaInput = {
    update: XOR<UserUpdateWithoutScanQuotaInput, UserUncheckedUpdateWithoutScanQuotaInput>
    create: XOR<UserCreateWithoutScanQuotaInput, UserUncheckedCreateWithoutScanQuotaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScanQuotaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScanQuotaInput, UserUncheckedUpdateWithoutScanQuotaInput>
  }

  export type UserUpdateWithoutScanQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutScanQuotaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTopUpPacksInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTopUpPacksInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTopUpPacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopUpPacksInput, UserUncheckedCreateWithoutTopUpPacksInput>
  }

  export type UserUpsertWithoutTopUpPacksInput = {
    update: XOR<UserUpdateWithoutTopUpPacksInput, UserUncheckedUpdateWithoutTopUpPacksInput>
    create: XOR<UserCreateWithoutTopUpPacksInput, UserUncheckedCreateWithoutTopUpPacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTopUpPacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTopUpPacksInput, UserUncheckedUpdateWithoutTopUpPacksInput>
  }

  export type UserUpdateWithoutTopUpPacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTopUpPacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMealsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
  }

  export type UserUpsertWithoutMealsInput = {
    update: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWaterLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWaterLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWaterLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
  }

  export type UserUpsertWithoutWaterLogsInput = {
    update: XOR<UserUpdateWithoutWaterLogsInput, UserUncheckedUpdateWithoutWaterLogsInput>
    create: XOR<UserCreateWithoutWaterLogsInput, UserUncheckedCreateWithoutWaterLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaterLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaterLogsInput, UserUncheckedUpdateWithoutWaterLogsInput>
  }

  export type UserUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWaterLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStepLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStepLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStepLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepLogsInput, UserUncheckedCreateWithoutStepLogsInput>
  }

  export type UserUpsertWithoutStepLogsInput = {
    update: XOR<UserUpdateWithoutStepLogsInput, UserUncheckedUpdateWithoutStepLogsInput>
    create: XOR<UserCreateWithoutStepLogsInput, UserUncheckedCreateWithoutStepLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepLogsInput, UserUncheckedUpdateWithoutStepLogsInput>
  }

  export type UserUpdateWithoutStepLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStepLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCycleLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCycleLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCycleLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCycleLogsInput, UserUncheckedCreateWithoutCycleLogsInput>
  }

  export type UserUpsertWithoutCycleLogsInput = {
    update: XOR<UserUpdateWithoutCycleLogsInput, UserUncheckedUpdateWithoutCycleLogsInput>
    create: XOR<UserCreateWithoutCycleLogsInput, UserUncheckedCreateWithoutCycleLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCycleLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCycleLogsInput, UserUncheckedUpdateWithoutCycleLogsInput>
  }

  export type UserUpdateWithoutCycleLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCycleLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSymptomsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSymptomsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    workoutLogs?: WorkoutLogUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSymptomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
  }

  export type UserUpsertWithoutSymptomsInput = {
    update: XOR<UserUpdateWithoutSymptomsInput, UserUncheckedUpdateWithoutSymptomsInput>
    create: XOR<UserCreateWithoutSymptomsInput, UserUncheckedCreateWithoutSymptomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSymptomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSymptomsInput, UserUncheckedUpdateWithoutSymptomsInput>
  }

  export type UserUpdateWithoutSymptomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSymptomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    workoutLogs?: WorkoutLogUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWorkoutLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogCreateNestedManyWithoutUserInput
    stepLogs?: StepLogCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogCreateNestedManyWithoutUserInput
    symptoms?: SymptomCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaCreateNestedOneWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkoutLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    age?: number | null
    gender?: string
    fitnessLevel?: string
    fitnessGoal?: string
    dailyStepGoal?: number
    dailyCalGoal?: number
    dailyWaterGoal?: number
    weightKg?: number | null
    heightCm?: number | null
    units?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    waterLogs?: WaterLogUncheckedCreateNestedManyWithoutUserInput
    stepLogs?: StepLogUncheckedCreateNestedManyWithoutUserInput
    cycleLogs?: CycleLogUncheckedCreateNestedManyWithoutUserInput
    symptoms?: SymptomUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    scanQuota?: ScanQuotaUncheckedCreateNestedOneWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    topUpPacks?: TopUpPackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
  }

  export type UserUpsertWithoutWorkoutLogsInput = {
    update: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
    create: XOR<UserCreateWithoutWorkoutLogsInput, UserUncheckedCreateWithoutWorkoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkoutLogsInput, UserUncheckedUpdateWithoutWorkoutLogsInput>
  }

  export type UserUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUpdateOneWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: StringFieldUpdateOperationsInput | string
    fitnessLevel?: StringFieldUpdateOperationsInput | string
    fitnessGoal?: StringFieldUpdateOperationsInput | string
    dailyStepGoal?: IntFieldUpdateOperationsInput | number
    dailyCalGoal?: IntFieldUpdateOperationsInput | number
    dailyWaterGoal?: FloatFieldUpdateOperationsInput | number
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    units?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    waterLogs?: WaterLogUncheckedUpdateManyWithoutUserNestedInput
    stepLogs?: StepLogUncheckedUpdateManyWithoutUserNestedInput
    cycleLogs?: CycleLogUncheckedUpdateManyWithoutUserNestedInput
    symptoms?: SymptomUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    scanQuota?: ScanQuotaUncheckedUpdateOneWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    topUpPacks?: TopUpPackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealCreateManyUserInput = {
    id?: string
    name: string
    mealType: string
    calories: number
    protein?: number
    carbs?: number
    fat?: number
    fibre?: number
    imageUrl?: string | null
    aiScanned?: boolean
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterLogCreateManyUserInput = {
    id?: string
    glasses: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type StepLogCreateManyUserInput = {
    id?: string
    steps: number
    distance?: number
    calories?: number
    activeMin?: number
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type CycleLogCreateManyUserInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    cycleLength?: number
    createdAt?: Date | string
  }

  export type SymptomCreateManyUserInput = {
    id?: string
    symptoms?: SymptomCreatesymptomsInput | string[]
    loggedAt?: Date | string
    createdAt?: Date | string
  }

  export type WorkoutLogCreateManyUserInput = {
    id?: string
    workoutName: string
    durationMin: number
    caloriesBurned?: number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amount: number
    currency?: string
    status?: string
    type?: string
    plan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TopUpPackCreateManyUserInput = {
    id?: string
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    scansAdded?: number
    amount?: number
    status?: string
    createdAt?: Date | string
  }

  export type MealUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mealType?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fibre?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiScanned?: BoolFieldUpdateOperationsInput | boolean
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    glasses?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    distance?: FloatFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    activeMin?: IntFieldUpdateOperationsInput | number
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CycleLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cycleLength?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    symptoms?: SymptomUpdatesymptomsInput | string[]
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutName?: StringFieldUpdateOperationsInput | string
    durationMin?: IntFieldUpdateOperationsInput | number
    caloriesBurned?: FloatFieldUpdateOperationsInput | number
    exercises?: JsonNullValueInput | InputJsonValue
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    plan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopUpPackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    scansAdded?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}