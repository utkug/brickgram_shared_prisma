
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Follows
 * 
 */
export type Follows = $Result.DefaultSelection<Prisma.$FollowsPayload>
/**
 * Model Blocks
 * 
 */
export type Blocks = $Result.DefaultSelection<Prisma.$BlocksPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const NotificationType: {
  FOLLOW_CREATED: 'FOLLOW_CREATED',
  MENTION: 'MENTION',
  CHAT_MESSAGE: 'CHAT_MESSAGE',
  COMMENT_ADDED: 'COMMENT_ADDED',
  LIKE_POST: 'LIKE_POST',
  SYSTEM: 'SYSTEM'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const FollowStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type FollowStatus = (typeof FollowStatus)[keyof typeof FollowStatus]

}

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type FollowStatus = $Enums.FollowStatus

export const FollowStatus: typeof $Enums.FollowStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **Follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.FollowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blocks`: Exposes CRUD operations for the **Blocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.blocks.findMany()
    * ```
    */
  get blocks(): Prisma.BlocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Users: 'Users',
    Follows: 'Follows',
    Blocks: 'Blocks',
    Posts: 'Posts',
    Comments: 'Comments',
    Likes: 'Likes',
    Notifications: 'Notifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "follows" | "blocks" | "posts" | "comments" | "likes" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Follows: {
        payload: Prisma.$FollowsPayload<ExtArgs>
        fields: Prisma.FollowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findFirst: {
            args: Prisma.FollowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          findMany: {
            args: Prisma.FollowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>[]
          }
          create: {
            args: Prisma.FollowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          createMany: {
            args: Prisma.FollowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          update: {
            args: Prisma.FollowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          deleteMany: {
            args: Prisma.FollowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.FollowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
      Blocks: {
        payload: Prisma.$BlocksPayload<ExtArgs>
        fields: Prisma.BlocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          findFirst: {
            args: Prisma.BlocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          findMany: {
            args: Prisma.BlocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>[]
          }
          create: {
            args: Prisma.BlocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          createMany: {
            args: Prisma.BlocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          update: {
            args: Prisma.BlocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          deleteMany: {
            args: Prisma.BlocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          aggregate: {
            args: Prisma.BlocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocks>
          }
          groupBy: {
            args: Prisma.BlocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlocksCountArgs<ExtArgs>
            result: $Utils.Optional<BlocksCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    follows?: FollowsOmit
    blocks?: BlocksOmit
    posts?: PostsOmit
    comments?: CommentsOmit
    likes?: LikesOmit
    notifications?: NotificationsOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    followedBy: number
    following: number
    blockedBy: number
    blocking: number
    postAuthor: number
    commentUser: number
    likeUser: number
    receivedNotifications: number
    sentNotifications: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followedBy?: boolean | UsersCountOutputTypeCountFollowedByArgs
    following?: boolean | UsersCountOutputTypeCountFollowingArgs
    blockedBy?: boolean | UsersCountOutputTypeCountBlockedByArgs
    blocking?: boolean | UsersCountOutputTypeCountBlockingArgs
    postAuthor?: boolean | UsersCountOutputTypeCountPostAuthorArgs
    commentUser?: boolean | UsersCountOutputTypeCountCommentUserArgs
    likeUser?: boolean | UsersCountOutputTypeCountLikeUserArgs
    receivedNotifications?: boolean | UsersCountOutputTypeCountReceivedNotificationsArgs
    sentNotifications?: boolean | UsersCountOutputTypeCountSentNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBlockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostAuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikeUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    commentPost: number
    likePost: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentPost?: boolean | PostsCountOutputTypeCountCommentPostArgs
    likePost?: boolean | PostsCountOutputTypeCountLikePostArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Count Type CommentsCountOutputType
   */

  export type CommentsCountOutputType = {
    replies: number
    likeComment: number
  }

  export type CommentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentsCountOutputTypeCountRepliesArgs
    likeComment?: boolean | CommentsCountOutputTypeCountLikeCommentArgs
  }

  // Custom InputTypes
  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentsCountOutputType
     */
    select?: CommentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * CommentsCountOutputType without action
   */
  export type CommentsCountOutputTypeCountLikeCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    profile_picture: string | null
    banner: string | null
    bio: string | null
    location: string | null
    is_private: boolean | null
    is_verified: boolean | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    name: string | null
    email: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
    profile_picture: string | null
    banner: string | null
    bio: string | null
    location: string | null
    is_private: boolean | null
    is_verified: boolean | null
    status: $Enums.UserStatus | null
    role: $Enums.UserRole | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    name: number
    email: number
    password: number
    created_at: number
    updated_at: number
    profile_picture: number
    banner: number
    bio: number
    location: number
    is_private: number
    is_verified: number
    status: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    profile_picture?: true
    banner?: true
    bio?: true
    location?: true
    is_private?: true
    is_verified?: true
    status?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    profile_picture?: true
    banner?: true
    bio?: true
    location?: true
    is_private?: true
    is_verified?: true
    status?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    email?: true
    password?: true
    created_at?: true
    updated_at?: true
    profile_picture?: true
    banner?: true
    bio?: true
    location?: true
    is_private?: true
    is_verified?: true
    status?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    name: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
    profile_picture: string | null
    banner: string | null
    bio: string | null
    location: string | null
    is_private: boolean
    is_verified: boolean
    status: $Enums.UserStatus
    role: $Enums.UserRole
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile_picture?: boolean
    banner?: boolean
    bio?: boolean
    location?: boolean
    is_private?: boolean
    is_verified?: boolean
    status?: boolean
    role?: boolean
    followedBy?: boolean | Users$followedByArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    blockedBy?: boolean | Users$blockedByArgs<ExtArgs>
    blocking?: boolean | Users$blockingArgs<ExtArgs>
    postAuthor?: boolean | Users$postAuthorArgs<ExtArgs>
    commentUser?: boolean | Users$commentUserArgs<ExtArgs>
    likeUser?: boolean | Users$likeUserArgs<ExtArgs>
    receivedNotifications?: boolean | Users$receivedNotificationsArgs<ExtArgs>
    sentNotifications?: boolean | Users$sentNotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile_picture?: boolean
    banner?: boolean
    bio?: boolean
    location?: boolean
    is_private?: boolean
    is_verified?: boolean
    status?: boolean
    role?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "email" | "password" | "created_at" | "updated_at" | "profile_picture" | "banner" | "bio" | "location" | "is_private" | "is_verified" | "status" | "role", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followedBy?: boolean | Users$followedByArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    blockedBy?: boolean | Users$blockedByArgs<ExtArgs>
    blocking?: boolean | Users$blockingArgs<ExtArgs>
    postAuthor?: boolean | Users$postAuthorArgs<ExtArgs>
    commentUser?: boolean | Users$commentUserArgs<ExtArgs>
    likeUser?: boolean | Users$likeUserArgs<ExtArgs>
    receivedNotifications?: boolean | Users$receivedNotificationsArgs<ExtArgs>
    sentNotifications?: boolean | Users$sentNotificationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      followedBy: Prisma.$FollowsPayload<ExtArgs>[]
      following: Prisma.$FollowsPayload<ExtArgs>[]
      blockedBy: Prisma.$BlocksPayload<ExtArgs>[]
      blocking: Prisma.$BlocksPayload<ExtArgs>[]
      postAuthor: Prisma.$PostsPayload<ExtArgs>[]
      commentUser: Prisma.$CommentsPayload<ExtArgs>[]
      likeUser: Prisma.$LikesPayload<ExtArgs>[]
      receivedNotifications: Prisma.$NotificationsPayload<ExtArgs>[]
      sentNotifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      name: string
      email: string
      password: string
      created_at: Date
      updated_at: Date
      profile_picture: string | null
      banner: string | null
      bio: string | null
      location: string | null
      is_private: boolean
      is_verified: boolean
      status: $Enums.UserStatus
      role: $Enums.UserRole
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    followedBy<T extends Users$followedByArgs<ExtArgs> = {}>(args?: Subset<T, Users$followedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    following<T extends Users$followingArgs<ExtArgs> = {}>(args?: Subset<T, Users$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedBy<T extends Users$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, Users$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocking<T extends Users$blockingArgs<ExtArgs> = {}>(args?: Subset<T, Users$blockingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postAuthor<T extends Users$postAuthorArgs<ExtArgs> = {}>(args?: Subset<T, Users$postAuthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentUser<T extends Users$commentUserArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likeUser<T extends Users$likeUserArgs<ExtArgs> = {}>(args?: Subset<T, Users$likeUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedNotifications<T extends Users$receivedNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$receivedNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentNotifications<T extends Users$sentNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$sentNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly profile_picture: FieldRef<"Users", 'String'>
    readonly banner: FieldRef<"Users", 'String'>
    readonly bio: FieldRef<"Users", 'String'>
    readonly location: FieldRef<"Users", 'String'>
    readonly is_private: FieldRef<"Users", 'Boolean'>
    readonly is_verified: FieldRef<"Users", 'Boolean'>
    readonly status: FieldRef<"Users", 'UserStatus'>
    readonly role: FieldRef<"Users", 'UserRole'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.followedBy
   */
  export type Users$followedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Users.following
   */
  export type Users$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    cursor?: FollowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Users.blockedBy
   */
  export type Users$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    where?: BlocksWhereInput
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    cursor?: BlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Users.blocking
   */
  export type Users$blockingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    where?: BlocksWhereInput
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    cursor?: BlocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Users.postAuthor
   */
  export type Users$postAuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Users.commentUser
   */
  export type Users$commentUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.likeUser
   */
  export type Users$likeUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Users.receivedNotifications
   */
  export type Users$receivedNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.sentNotifications
   */
  export type Users$sentNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsMinAggregateOutputType = {
    id: string | null
    follower_id: string | null
    following_id: string | null
    created_at: Date | null
    status: $Enums.FollowStatus | null
  }

  export type FollowsMaxAggregateOutputType = {
    id: string | null
    follower_id: string | null
    following_id: string | null
    created_at: Date | null
    status: $Enums.FollowStatus | null
  }

  export type FollowsCountAggregateOutputType = {
    id: number
    follower_id: number
    following_id: number
    created_at: number
    status: number
    _all: number
  }


  export type FollowsMinAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
    status?: true
  }

  export type FollowsMaxAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
    status?: true
  }

  export type FollowsCountAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to aggregate.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type FollowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowsWhereInput
    orderBy?: FollowsOrderByWithAggregationInput | FollowsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: FollowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    id: string
    follower_id: string
    following_id: string
    created_at: Date
    status: $Enums.FollowStatus
    _count: FollowsCountAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends FollowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type FollowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    created_at?: boolean
    status?: boolean
    follower?: boolean | UsersDefaultArgs<ExtArgs>
    following?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>



  export type FollowsSelectScalar = {
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type FollowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "follower_id" | "following_id" | "created_at" | "status", ExtArgs["result"]["follows"]>
  export type FollowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UsersDefaultArgs<ExtArgs>
    following?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $FollowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follows"
    objects: {
      follower: Prisma.$UsersPayload<ExtArgs>
      following: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      follower_id: string
      following_id: string
      created_at: Date
      status: $Enums.FollowStatus
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }

  type FollowsGetPayload<S extends boolean | null | undefined | FollowsDefaultArgs> = $Result.GetResult<Prisma.$FollowsPayload, S>

  type FollowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface FollowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follows'], meta: { name: 'Follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {FollowsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowsFindUniqueArgs>(args: SelectSubset<T, FollowsFindUniqueArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowsFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowsFindFirstArgs>(args?: SelectSubset<T, FollowsFindFirstArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowsFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followsWithIdOnly = await prisma.follows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowsFindManyArgs>(args?: SelectSubset<T, FollowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follows.
     * @param {FollowsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
     */
    create<T extends FollowsCreateArgs>(args: SelectSubset<T, FollowsCreateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {FollowsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowsCreateManyArgs>(args?: SelectSubset<T, FollowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follows.
     * @param {FollowsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
     */
    delete<T extends FollowsDeleteArgs>(args: SelectSubset<T, FollowsDeleteArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follows.
     * @param {FollowsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowsUpdateArgs>(args: SelectSubset<T, FollowsUpdateArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {FollowsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowsDeleteManyArgs>(args?: SelectSubset<T, FollowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowsUpdateManyArgs>(args: SelectSubset<T, FollowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follows.
     * @param {FollowsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends FollowsUpsertArgs>(args: SelectSubset<T, FollowsUpsertArgs<ExtArgs>>): Prisma__FollowsClient<$Result.GetResult<Prisma.$FollowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowsCountArgs>(
      args?: Subset<T, FollowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsGroupByArgs} args - Group by arguments.
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
      T extends FollowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowsGroupByArgs['orderBy'] }
        : { orderBy?: FollowsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follows model
   */
  readonly fields: FollowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    follower<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    following<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Follows model
   */
  interface FollowsFieldRefs {
    readonly id: FieldRef<"Follows", 'String'>
    readonly follower_id: FieldRef<"Follows", 'String'>
    readonly following_id: FieldRef<"Follows", 'String'>
    readonly created_at: FieldRef<"Follows", 'DateTime'>
    readonly status: FieldRef<"Follows", 'FollowStatus'>
  }
    

  // Custom InputTypes
  /**
   * Follows findUnique
   */
  export type FollowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findUniqueOrThrow
   */
  export type FollowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows findFirst
   */
  export type FollowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findFirstOrThrow
   */
  export type FollowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows findMany
   */
  export type FollowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowsOrderByWithRelationInput | FollowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * Follows create
   */
  export type FollowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to create a Follows.
     */
    data: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
  }

  /**
   * Follows createMany
   */
  export type FollowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowsCreateManyInput | FollowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Follows update
   */
  export type FollowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The data needed to update a Follows.
     */
    data: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
    /**
     * Choose, which Follows to update.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows updateMany
   */
  export type FollowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to update.
     */
    limit?: number
  }

  /**
   * Follows upsert
   */
  export type FollowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * The filter to search for the Follows to update in case it exists.
     */
    where: FollowsWhereUniqueInput
    /**
     * In case the Follows found by the `where` argument doesn't exist, create a new Follows with this data.
     */
    create: XOR<FollowsCreateInput, FollowsUncheckedCreateInput>
    /**
     * In case the Follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowsUpdateInput, FollowsUncheckedUpdateInput>
  }

  /**
   * Follows delete
   */
  export type FollowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
    /**
     * Filter which Follows to delete.
     */
    where: FollowsWhereUniqueInput
  }

  /**
   * Follows deleteMany
   */
  export type FollowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowsWhereInput
    /**
     * Limit how many Follows to delete.
     */
    limit?: number
  }

  /**
   * Follows without action
   */
  export type FollowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follows
     */
    select?: FollowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Follows
     */
    omit?: FollowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowsInclude<ExtArgs> | null
  }


  /**
   * Model Blocks
   */

  export type AggregateBlocks = {
    _count: BlocksCountAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  export type BlocksMinAggregateOutputType = {
    id: string | null
    blocker_id: string | null
    blocked_id: string | null
    created_at: Date | null
  }

  export type BlocksMaxAggregateOutputType = {
    id: string | null
    blocker_id: string | null
    blocked_id: string | null
    created_at: Date | null
  }

  export type BlocksCountAggregateOutputType = {
    id: number
    blocker_id: number
    blocked_id: number
    created_at: number
    _all: number
  }


  export type BlocksMinAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
  }

  export type BlocksMaxAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
  }

  export type BlocksCountAggregateInputType = {
    id?: true
    blocker_id?: true
    blocked_id?: true
    created_at?: true
    _all?: true
  }

  export type BlocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to aggregate.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlocksMaxAggregateInputType
  }

  export type GetBlocksAggregateType<T extends BlocksAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocks[P]>
      : GetScalarType<T[P], AggregateBlocks[P]>
  }




  export type BlocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocksWhereInput
    orderBy?: BlocksOrderByWithAggregationInput | BlocksOrderByWithAggregationInput[]
    by: BlocksScalarFieldEnum[] | BlocksScalarFieldEnum
    having?: BlocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocksCountAggregateInputType | true
    _min?: BlocksMinAggregateInputType
    _max?: BlocksMaxAggregateInputType
  }

  export type BlocksGroupByOutputType = {
    id: string
    blocker_id: string
    blocked_id: string
    created_at: Date
    _count: BlocksCountAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  type GetBlocksGroupByPayload<T extends BlocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlocksGroupByOutputType[P]>
            : GetScalarType<T[P], BlocksGroupByOutputType[P]>
        }
      >
    >


  export type BlocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
    blocker?: boolean | UsersDefaultArgs<ExtArgs>
    blocking?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocks"]>



  export type BlocksSelectScalar = {
    id?: boolean
    blocker_id?: boolean
    blocked_id?: boolean
    created_at?: boolean
  }

  export type BlocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blocker_id" | "blocked_id" | "created_at", ExtArgs["result"]["blocks"]>
  export type BlocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UsersDefaultArgs<ExtArgs>
    blocking?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $BlocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blocks"
    objects: {
      blocker: Prisma.$UsersPayload<ExtArgs>
      blocking: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blocker_id: string
      blocked_id: string
      created_at: Date
    }, ExtArgs["result"]["blocks"]>
    composites: {}
  }

  type BlocksGetPayload<S extends boolean | null | undefined | BlocksDefaultArgs> = $Result.GetResult<Prisma.$BlocksPayload, S>

  type BlocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocksCountAggregateInputType | true
    }

  export interface BlocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blocks'], meta: { name: 'Blocks' } }
    /**
     * Find zero or one Blocks that matches the filter.
     * @param {BlocksFindUniqueArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlocksFindUniqueArgs>(args: SelectSubset<T, BlocksFindUniqueArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlocksFindUniqueOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlocksFindUniqueOrThrowArgs>(args: SelectSubset<T, BlocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindFirstArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlocksFindFirstArgs>(args?: SelectSubset<T, BlocksFindFirstArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindFirstOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlocksFindFirstOrThrowArgs>(args?: SelectSubset<T, BlocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.blocks.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.blocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blocksWithIdOnly = await prisma.blocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlocksFindManyArgs>(args?: SelectSubset<T, BlocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blocks.
     * @param {BlocksCreateArgs} args - Arguments to create a Blocks.
     * @example
     * // Create one Blocks
     * const Blocks = await prisma.blocks.create({
     *   data: {
     *     // ... data to create a Blocks
     *   }
     * })
     * 
     */
    create<T extends BlocksCreateArgs>(args: SelectSubset<T, BlocksCreateArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlocksCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const blocks = await prisma.blocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlocksCreateManyArgs>(args?: SelectSubset<T, BlocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blocks.
     * @param {BlocksDeleteArgs} args - Arguments to delete one Blocks.
     * @example
     * // Delete one Blocks
     * const Blocks = await prisma.blocks.delete({
     *   where: {
     *     // ... filter to delete one Blocks
     *   }
     * })
     * 
     */
    delete<T extends BlocksDeleteArgs>(args: SelectSubset<T, BlocksDeleteArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blocks.
     * @param {BlocksUpdateArgs} args - Arguments to update one Blocks.
     * @example
     * // Update one Blocks
     * const blocks = await prisma.blocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlocksUpdateArgs>(args: SelectSubset<T, BlocksUpdateArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlocksDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.blocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlocksDeleteManyArgs>(args?: SelectSubset<T, BlocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const blocks = await prisma.blocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlocksUpdateManyArgs>(args: SelectSubset<T, BlocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blocks.
     * @param {BlocksUpsertArgs} args - Arguments to update or create a Blocks.
     * @example
     * // Update or create a Blocks
     * const blocks = await prisma.blocks.upsert({
     *   create: {
     *     // ... data to create a Blocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocks we want to update
     *   }
     * })
     */
    upsert<T extends BlocksUpsertArgs>(args: SelectSubset<T, BlocksUpsertArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.blocks.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlocksCountArgs>(
      args?: Subset<T, BlocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlocksAggregateArgs>(args: Subset<T, BlocksAggregateArgs>): Prisma.PrismaPromise<GetBlocksAggregateType<T>>

    /**
     * Group by Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksGroupByArgs} args - Group by arguments.
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
      T extends BlocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlocksGroupByArgs['orderBy'] }
        : { orderBy?: BlocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blocks model
   */
  readonly fields: BlocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocker<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocking<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blocks model
   */
  interface BlocksFieldRefs {
    readonly id: FieldRef<"Blocks", 'String'>
    readonly blocker_id: FieldRef<"Blocks", 'String'>
    readonly blocked_id: FieldRef<"Blocks", 'String'>
    readonly created_at: FieldRef<"Blocks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blocks findUnique
   */
  export type BlocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks findUniqueOrThrow
   */
  export type BlocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks findFirst
   */
  export type BlocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks findFirstOrThrow
   */
  export type BlocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks findMany
   */
  export type BlocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks create
   */
  export type BlocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The data needed to create a Blocks.
     */
    data: XOR<BlocksCreateInput, BlocksUncheckedCreateInput>
  }

  /**
   * Blocks createMany
   */
  export type BlocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlocksCreateManyInput | BlocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blocks update
   */
  export type BlocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The data needed to update a Blocks.
     */
    data: XOR<BlocksUpdateInput, BlocksUncheckedUpdateInput>
    /**
     * Choose, which Blocks to update.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks updateMany
   */
  export type BlocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlocksUpdateManyMutationInput, BlocksUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlocksWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Blocks upsert
   */
  export type BlocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The filter to search for the Blocks to update in case it exists.
     */
    where: BlocksWhereUniqueInput
    /**
     * In case the Blocks found by the `where` argument doesn't exist, create a new Blocks with this data.
     */
    create: XOR<BlocksCreateInput, BlocksUncheckedCreateInput>
    /**
     * In case the Blocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlocksUpdateInput, BlocksUncheckedUpdateInput>
  }

  /**
   * Blocks delete
   */
  export type BlocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter which Blocks to delete.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks deleteMany
   */
  export type BlocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlocksWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Blocks without action
   */
  export type BlocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    author_id: string | null
    post_text: string | null
    image_url: string | null
    is_edited: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    author_id: string | null
    post_text: string | null
    image_url: string | null
    is_edited: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    author_id: number
    post_text: number
    image_url: number
    is_edited: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    author_id?: true
    post_text?: true
    image_url?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    author_id?: true
    post_text?: true
    image_url?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    author_id?: true
    post_text?: true
    image_url?: true
    is_edited?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    author_id: string
    post_text: string
    image_url: string | null
    is_edited: boolean
    created_at: Date
    updated_at: Date
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    author_id?: boolean
    post_text?: boolean
    image_url?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    commentPost?: boolean | Posts$commentPostArgs<ExtArgs>
    likePost?: boolean | Posts$likePostArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>



  export type PostsSelectScalar = {
    id?: boolean
    author_id?: boolean
    post_text?: boolean
    image_url?: boolean
    is_edited?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "author_id" | "post_text" | "image_url" | "is_edited" | "created_at" | "updated_at", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    commentPost?: boolean | Posts$commentPostArgs<ExtArgs>
    likePost?: boolean | Posts$likePostArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
      commentPost: Prisma.$CommentsPayload<ExtArgs>[]
      likePost: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      author_id: string
      post_text: string
      image_url: string | null
      is_edited: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commentPost<T extends Posts$commentPostArgs<ExtArgs> = {}>(args?: Subset<T, Posts$commentPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likePost<T extends Posts$likePostArgs<ExtArgs> = {}>(args?: Subset<T, Posts$likePostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly author_id: FieldRef<"Posts", 'String'>
    readonly post_text: FieldRef<"Posts", 'String'>
    readonly image_url: FieldRef<"Posts", 'String'>
    readonly is_edited: FieldRef<"Posts", 'Boolean'>
    readonly created_at: FieldRef<"Posts", 'DateTime'>
    readonly updated_at: FieldRef<"Posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.commentPost
   */
  export type Posts$commentPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Posts.likePost
   */
  export type Posts$likePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: string | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_text: string | null
    created_at: Date | null
    updated_at: Date | null
    parent_id: string | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    comment_text: number
    created_at: number
    updated_at: number
    parent_id: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_text?: true
    created_at?: true
    updated_at?: true
    parent_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    user_id: string
    post_id: string
    comment_text: string
    created_at: Date
    updated_at: Date
    parent_id: string | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    likeComment?: boolean | Comments$likeCommentArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>



  export type CommentsSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_text?: boolean
    created_at?: boolean
    updated_at?: boolean
    parent_id?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "comment_text" | "created_at" | "updated_at" | "parent_id", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
    parent?: boolean | Comments$parentArgs<ExtArgs>
    replies?: boolean | Comments$repliesArgs<ExtArgs>
    likeComment?: boolean | Comments$likeCommentArgs<ExtArgs>
    _count?: boolean | CommentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
      parent: Prisma.$CommentsPayload<ExtArgs> | null
      replies: Prisma.$CommentsPayload<ExtArgs>[]
      likeComment: Prisma.$LikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      post_id: string
      comment_text: string
      created_at: Date
      updated_at: Date
      parent_id: string | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comments$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$parentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comments$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comments$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likeComment<T extends Comments$likeCommentArgs<ExtArgs> = {}>(args?: Subset<T, Comments$likeCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly user_id: FieldRef<"Comments", 'String'>
    readonly post_id: FieldRef<"Comments", 'String'>
    readonly comment_text: FieldRef<"Comments", 'String'>
    readonly created_at: FieldRef<"Comments", 'DateTime'>
    readonly updated_at: FieldRef<"Comments", 'DateTime'>
    readonly parent_id: FieldRef<"Comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments.parent
   */
  export type Comments$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Comments.replies
   */
  export type Comments$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments.likeComment
   */
  export type Comments$likeCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    post_id: string | null
    comment_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    comment_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    created_at?: true
    updated_at?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    comment_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    user_id: string
    post_id: string | null
    comment_id: string | null
    created_at: Date
    updated_at: Date
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | Likes$postArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>



  export type LikesSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    comment_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "comment_id" | "created_at" | "updated_at", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    post?: boolean | Likes$postArgs<ExtArgs>
    comment?: boolean | Likes$commentArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs> | null
      comment: Prisma.$CommentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      post_id: string | null
      comment_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Likes$postArgs<ExtArgs> = {}>(args?: Subset<T, Likes$postArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Likes$commentArgs<ExtArgs> = {}>(args?: Subset<T, Likes$commentArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly user_id: FieldRef<"Likes", 'String'>
    readonly post_id: FieldRef<"Likes", 'String'>
    readonly comment_id: FieldRef<"Likes", 'String'>
    readonly created_at: FieldRef<"Likes", 'DateTime'>
    readonly updated_at: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes.post
   */
  export type Likes$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
  }

  /**
   * Likes.comment
   */
  export type Likes$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    sender_id: string | null
    message: string | null
    type: $Enums.NotificationType | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    sender_id: string | null
    message: string | null
    type: $Enums.NotificationType | null
    created_at: Date | null
    is_read: boolean | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    sender_id: number
    message: number
    metadata: number
    type: number
    created_at: number
    is_read: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    sender_id?: true
    message?: true
    type?: true
    created_at?: true
    is_read?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    sender_id?: true
    message?: true
    type?: true
    created_at?: true
    is_read?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    sender_id?: true
    message?: true
    metadata?: true
    type?: true
    created_at?: true
    is_read?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    user_id: string
    sender_id: string | null
    message: string
    metadata: JsonValue | null
    type: $Enums.NotificationType
    created_at: Date
    is_read: boolean
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sender_id?: boolean
    message?: boolean
    metadata?: boolean
    type?: boolean
    created_at?: boolean
    is_read?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>



  export type NotificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    sender_id?: boolean
    message?: boolean
    metadata?: boolean
    type?: boolean
    created_at?: boolean
    is_read?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "sender_id" | "message" | "metadata" | "type" | "created_at" | "is_read", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    sender?: boolean | Notifications$senderArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      sender: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      sender_id: string | null
      message: string
      metadata: Prisma.JsonValue | null
      type: $Enums.NotificationType
      created_at: Date
      is_read: boolean
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends Notifications$senderArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$senderArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly user_id: FieldRef<"Notifications", 'String'>
    readonly sender_id: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly metadata: FieldRef<"Notifications", 'Json'>
    readonly type: FieldRef<"Notifications", 'NotificationType'>
    readonly created_at: FieldRef<"Notifications", 'DateTime'>
    readonly is_read: FieldRef<"Notifications", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.sender
   */
  export type Notifications$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at',
    profile_picture: 'profile_picture',
    banner: 'banner',
    bio: 'bio',
    location: 'location',
    is_private: 'is_private',
    is_verified: 'is_verified',
    status: 'status',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    id: 'id',
    follower_id: 'follower_id',
    following_id: 'following_id',
    created_at: 'created_at',
    status: 'status'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const BlocksScalarFieldEnum: {
    id: 'id',
    blocker_id: 'blocker_id',
    blocked_id: 'blocked_id',
    created_at: 'created_at'
  };

  export type BlocksScalarFieldEnum = (typeof BlocksScalarFieldEnum)[keyof typeof BlocksScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    post_text: 'post_text',
    image_url: 'image_url',
    is_edited: 'is_edited',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_text: 'comment_text',
    created_at: 'created_at',
    updated_at: 'updated_at',
    parent_id: 'parent_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_id: 'comment_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sender_id: 'sender_id',
    message: 'message',
    metadata: 'metadata',
    type: 'type',
    created_at: 'created_at',
    is_read: 'is_read'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture',
    banner: 'banner',
    bio: 'bio',
    location: 'location'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const FollowsOrderByRelevanceFieldEnum: {
    id: 'id',
    follower_id: 'follower_id',
    following_id: 'following_id'
  };

  export type FollowsOrderByRelevanceFieldEnum = (typeof FollowsOrderByRelevanceFieldEnum)[keyof typeof FollowsOrderByRelevanceFieldEnum]


  export const BlocksOrderByRelevanceFieldEnum: {
    id: 'id',
    blocker_id: 'blocker_id',
    blocked_id: 'blocked_id'
  };

  export type BlocksOrderByRelevanceFieldEnum = (typeof BlocksOrderByRelevanceFieldEnum)[keyof typeof BlocksOrderByRelevanceFieldEnum]


  export const PostsOrderByRelevanceFieldEnum: {
    id: 'id',
    author_id: 'author_id',
    post_text: 'post_text',
    image_url: 'image_url'
  };

  export type PostsOrderByRelevanceFieldEnum = (typeof PostsOrderByRelevanceFieldEnum)[keyof typeof PostsOrderByRelevanceFieldEnum]


  export const CommentsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_text: 'comment_text',
    parent_id: 'parent_id'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


  export const LikesOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    comment_id: 'comment_id'
  };

  export type LikesOrderByRelevanceFieldEnum = (typeof LikesOrderByRelevanceFieldEnum)[keyof typeof LikesOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NotificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sender_id: 'sender_id',
    message: 'message'
  };

  export type NotificationsOrderByRelevanceFieldEnum = (typeof NotificationsOrderByRelevanceFieldEnum)[keyof typeof NotificationsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'FollowStatus'
   */
  export type EnumFollowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    profile_picture?: StringNullableFilter<"Users"> | string | null
    banner?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    location?: StringNullableFilter<"Users"> | string | null
    is_private?: BoolFilter<"Users"> | boolean
    is_verified?: BoolFilter<"Users"> | boolean
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    followedBy?: FollowsListRelationFilter
    following?: FollowsListRelationFilter
    blockedBy?: BlocksListRelationFilter
    blocking?: BlocksListRelationFilter
    postAuthor?: PostsListRelationFilter
    commentUser?: CommentsListRelationFilter
    likeUser?: LikesListRelationFilter
    receivedNotifications?: NotificationsListRelationFilter
    sentNotifications?: NotificationsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    is_private?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
    followedBy?: FollowsOrderByRelationAggregateInput
    following?: FollowsOrderByRelationAggregateInput
    blockedBy?: BlocksOrderByRelationAggregateInput
    blocking?: BlocksOrderByRelationAggregateInput
    postAuthor?: PostsOrderByRelationAggregateInput
    commentUser?: CommentsOrderByRelationAggregateInput
    likeUser?: LikesOrderByRelationAggregateInput
    receivedNotifications?: NotificationsOrderByRelationAggregateInput
    sentNotifications?: NotificationsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    updated_at?: DateTimeFilter<"Users"> | Date | string
    profile_picture?: StringNullableFilter<"Users"> | string | null
    banner?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    location?: StringNullableFilter<"Users"> | string | null
    is_private?: BoolFilter<"Users"> | boolean
    is_verified?: BoolFilter<"Users"> | boolean
    status?: EnumUserStatusFilter<"Users"> | $Enums.UserStatus
    role?: EnumUserRoleFilter<"Users"> | $Enums.UserRole
    followedBy?: FollowsListRelationFilter
    following?: FollowsListRelationFilter
    blockedBy?: BlocksListRelationFilter
    blocking?: BlocksListRelationFilter
    postAuthor?: PostsListRelationFilter
    commentUser?: CommentsListRelationFilter
    likeUser?: LikesListRelationFilter
    receivedNotifications?: NotificationsListRelationFilter
    sentNotifications?: NotificationsListRelationFilter
  }, "id" | "username" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    banner?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    is_private?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    profile_picture?: StringNullableWithAggregatesFilter<"Users"> | string | null
    banner?: StringNullableWithAggregatesFilter<"Users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Users"> | string | null
    location?: StringNullableWithAggregatesFilter<"Users"> | string | null
    is_private?: BoolWithAggregatesFilter<"Users"> | boolean
    is_verified?: BoolWithAggregatesFilter<"Users"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"Users"> | $Enums.UserStatus
    role?: EnumUserRoleWithAggregatesFilter<"Users"> | $Enums.UserRole
  }

  export type FollowsWhereInput = {
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    id?: StringFilter<"Follows"> | string
    follower_id?: StringFilter<"Follows"> | string
    following_id?: StringFilter<"Follows"> | string
    created_at?: DateTimeFilter<"Follows"> | Date | string
    status?: EnumFollowStatusFilter<"Follows"> | $Enums.FollowStatus
    follower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    following?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type FollowsOrderByWithRelationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    follower?: UsersOrderByWithRelationInput
    following?: UsersOrderByWithRelationInput
    _relevance?: FollowsOrderByRelevanceInput
  }

  export type FollowsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    follower_id_following_id?: FollowsFollower_idFollowing_idCompoundUniqueInput
    AND?: FollowsWhereInput | FollowsWhereInput[]
    OR?: FollowsWhereInput[]
    NOT?: FollowsWhereInput | FollowsWhereInput[]
    follower_id?: StringFilter<"Follows"> | string
    following_id?: StringFilter<"Follows"> | string
    created_at?: DateTimeFilter<"Follows"> | Date | string
    status?: EnumFollowStatusFilter<"Follows"> | $Enums.FollowStatus
    follower?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    following?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "follower_id_following_id">

  export type FollowsOrderByWithAggregationInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: FollowsCountOrderByAggregateInput
    _max?: FollowsMaxOrderByAggregateInput
    _min?: FollowsMinOrderByAggregateInput
  }

  export type FollowsScalarWhereWithAggregatesInput = {
    AND?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    OR?: FollowsScalarWhereWithAggregatesInput[]
    NOT?: FollowsScalarWhereWithAggregatesInput | FollowsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Follows"> | string
    follower_id?: StringWithAggregatesFilter<"Follows"> | string
    following_id?: StringWithAggregatesFilter<"Follows"> | string
    created_at?: DateTimeWithAggregatesFilter<"Follows"> | Date | string
    status?: EnumFollowStatusWithAggregatesFilter<"Follows"> | $Enums.FollowStatus
  }

  export type BlocksWhereInput = {
    AND?: BlocksWhereInput | BlocksWhereInput[]
    OR?: BlocksWhereInput[]
    NOT?: BlocksWhereInput | BlocksWhereInput[]
    id?: StringFilter<"Blocks"> | string
    blocker_id?: StringFilter<"Blocks"> | string
    blocked_id?: StringFilter<"Blocks"> | string
    created_at?: DateTimeFilter<"Blocks"> | Date | string
    blocker?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    blocking?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type BlocksOrderByWithRelationInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
    blocker?: UsersOrderByWithRelationInput
    blocking?: UsersOrderByWithRelationInput
    _relevance?: BlocksOrderByRelevanceInput
  }

  export type BlocksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    blocker_id_blocked_id?: BlocksBlocker_idBlocked_idCompoundUniqueInput
    AND?: BlocksWhereInput | BlocksWhereInput[]
    OR?: BlocksWhereInput[]
    NOT?: BlocksWhereInput | BlocksWhereInput[]
    blocker_id?: StringFilter<"Blocks"> | string
    blocked_id?: StringFilter<"Blocks"> | string
    created_at?: DateTimeFilter<"Blocks"> | Date | string
    blocker?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    blocking?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "blocker_id_blocked_id">

  export type BlocksOrderByWithAggregationInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
    _count?: BlocksCountOrderByAggregateInput
    _max?: BlocksMaxOrderByAggregateInput
    _min?: BlocksMinOrderByAggregateInput
  }

  export type BlocksScalarWhereWithAggregatesInput = {
    AND?: BlocksScalarWhereWithAggregatesInput | BlocksScalarWhereWithAggregatesInput[]
    OR?: BlocksScalarWhereWithAggregatesInput[]
    NOT?: BlocksScalarWhereWithAggregatesInput | BlocksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blocks"> | string
    blocker_id?: StringWithAggregatesFilter<"Blocks"> | string
    blocked_id?: StringWithAggregatesFilter<"Blocks"> | string
    created_at?: DateTimeWithAggregatesFilter<"Blocks"> | Date | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    author_id?: StringFilter<"Posts"> | string
    post_text?: StringFilter<"Posts"> | string
    image_url?: StringNullableFilter<"Posts"> | string | null
    is_edited?: BoolFilter<"Posts"> | boolean
    created_at?: DateTimeFilter<"Posts"> | Date | string
    updated_at?: DateTimeFilter<"Posts"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    commentPost?: CommentsListRelationFilter
    likePost?: LikesListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    author_id?: SortOrder
    post_text?: SortOrder
    image_url?: SortOrderInput | SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    author?: UsersOrderByWithRelationInput
    commentPost?: CommentsOrderByRelationAggregateInput
    likePost?: LikesOrderByRelationAggregateInput
    _relevance?: PostsOrderByRelevanceInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    author_id?: StringFilter<"Posts"> | string
    post_text?: StringFilter<"Posts"> | string
    image_url?: StringNullableFilter<"Posts"> | string | null
    is_edited?: BoolFilter<"Posts"> | boolean
    created_at?: DateTimeFilter<"Posts"> | Date | string
    updated_at?: DateTimeFilter<"Posts"> | Date | string
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    commentPost?: CommentsListRelationFilter
    likePost?: LikesListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    author_id?: SortOrder
    post_text?: SortOrder
    image_url?: SortOrderInput | SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    author_id?: StringWithAggregatesFilter<"Posts"> | string
    post_text?: StringWithAggregatesFilter<"Posts"> | string
    image_url?: StringNullableWithAggregatesFilter<"Posts"> | string | null
    is_edited?: BoolWithAggregatesFilter<"Posts"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    user_id?: StringFilter<"Comments"> | string
    post_id?: StringFilter<"Comments"> | string
    comment_text?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
    updated_at?: DateTimeFilter<"Comments"> | Date | string
    parent_id?: StringNullableFilter<"Comments"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
    likeComment?: LikesListRelationFilter
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    parent?: CommentsOrderByWithRelationInput
    replies?: CommentsOrderByRelationAggregateInput
    likeComment?: LikesOrderByRelationAggregateInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    user_id?: StringFilter<"Comments"> | string
    post_id?: StringFilter<"Comments"> | string
    comment_text?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
    updated_at?: DateTimeFilter<"Comments"> | Date | string
    parent_id?: StringNullableFilter<"Comments"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    parent?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
    replies?: CommentsListRelationFilter
    likeComment?: LikesListRelationFilter
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    user_id?: StringWithAggregatesFilter<"Comments"> | string
    post_id?: StringWithAggregatesFilter<"Comments"> | string
    comment_text?: StringWithAggregatesFilter<"Comments"> | string
    created_at?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    parent_id?: StringNullableWithAggregatesFilter<"Comments"> | string | null
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    user_id?: StringFilter<"Likes"> | string
    post_id?: StringNullableFilter<"Likes"> | string | null
    comment_id?: StringNullableFilter<"Likes"> | string | null
    created_at?: DateTimeFilter<"Likes"> | Date | string
    updated_at?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsNullableScalarRelationFilter, PostsWhereInput> | null
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
    comment?: CommentsOrderByWithRelationInput
    _relevance?: LikesOrderByRelevanceInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_post_id?: LikesUser_idPost_idCompoundUniqueInput
    user_id_comment_id?: LikesUser_idComment_idCompoundUniqueInput
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    user_id?: StringFilter<"Likes"> | string
    post_id?: StringNullableFilter<"Likes"> | string | null
    comment_id?: StringNullableFilter<"Likes"> | string | null
    created_at?: DateTimeFilter<"Likes"> | Date | string
    updated_at?: DateTimeFilter<"Likes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    post?: XOR<PostsNullableScalarRelationFilter, PostsWhereInput> | null
    comment?: XOR<CommentsNullableScalarRelationFilter, CommentsWhereInput> | null
  }, "id" | "user_id_post_id" | "user_id_comment_id">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    comment_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    user_id?: StringWithAggregatesFilter<"Likes"> | string
    post_id?: StringNullableWithAggregatesFilter<"Likes"> | string | null
    comment_id?: StringNullableWithAggregatesFilter<"Likes"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    user_id?: StringFilter<"Notifications"> | string
    sender_id?: StringNullableFilter<"Notifications"> | string | null
    message?: StringFilter<"Notifications"> | string
    metadata?: JsonNullableFilter<"Notifications">
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    is_read?: BoolFilter<"Notifications"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    sender?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    type?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    user?: UsersOrderByWithRelationInput
    sender?: UsersOrderByWithRelationInput
    _relevance?: NotificationsOrderByRelevanceInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    user_id?: StringFilter<"Notifications"> | string
    sender_id?: StringNullableFilter<"Notifications"> | string | null
    message?: StringFilter<"Notifications"> | string
    metadata?: JsonNullableFilter<"Notifications">
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    is_read?: BoolFilter<"Notifications"> | boolean
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    sender?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_id?: SortOrderInput | SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    type?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    user_id?: StringWithAggregatesFilter<"Notifications"> | string
    sender_id?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    message?: StringWithAggregatesFilter<"Notifications"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Notifications">
    type?: EnumNotificationTypeWithAggregatesFilter<"Notifications"> | $Enums.NotificationType
    created_at?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    is_read?: BoolWithAggregatesFilter<"Notifications"> | boolean
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type FollowsCreateInput = {
    id?: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
    follower: UsersCreateNestedOneWithoutFollowedByInput
    following: UsersCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateInput = {
    id?: string
    follower_id: string
    following_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type FollowsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    follower?: UsersUpdateOneRequiredWithoutFollowedByNestedInput
    following?: UsersUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    following_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type FollowsCreateManyInput = {
    id?: string
    follower_id: string
    following_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type FollowsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type FollowsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    following_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type BlocksCreateInput = {
    id?: string
    created_at?: Date | string
    blocker: UsersCreateNestedOneWithoutBlockedByInput
    blocking: UsersCreateNestedOneWithoutBlockingInput
  }

  export type BlocksUncheckedCreateInput = {
    id?: string
    blocker_id: string
    blocked_id: string
    created_at?: Date | string
  }

  export type BlocksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UsersUpdateOneRequiredWithoutBlockedByNestedInput
    blocking?: UsersUpdateOneRequiredWithoutBlockingNestedInput
  }

  export type BlocksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksCreateManyInput = {
    id?: string
    blocker_id: string
    blocked_id: string
    created_at?: Date | string
  }

  export type BlocksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsCreateInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UsersCreateNestedOneWithoutPostAuthorInput
    commentPost?: CommentsCreateNestedManyWithoutPostInput
    likePost?: LikesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    author_id: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    commentPost?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likePost?: LikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutPostAuthorNestedInput
    commentPost?: CommentsUpdateManyWithoutPostNestedInput
    likePost?: LikesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPost?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likePost?: LikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    author_id: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentUserInput
    post: PostsCreateNestedOneWithoutCommentPostInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    likeComment?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    likeComment?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentUserNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentPostNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    likeComment?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    likeComment?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsCreateManyInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikesCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutLikeUserInput
    post?: PostsCreateNestedOneWithoutLikePostInput
    comment?: CommentsCreateNestedOneWithoutLikeCommentInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    user_id: string
    post_id?: string | null
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutLikeUserNestedInput
    post?: PostsUpdateOneWithoutLikePostNestedInput
    comment?: CommentsUpdateOneWithoutLikeCommentNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesCreateManyInput = {
    id?: string
    user_id: string
    post_id?: string | null
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    id?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
    user: UsersCreateNestedOneWithoutReceivedNotificationsInput
    sender?: UsersCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    user_id: string
    sender_id?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutReceivedNotificationsNestedInput
    sender?: UsersUpdateOneWithoutSentNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsCreateManyInput = {
    id?: string
    user_id: string
    sender_id?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type FollowsListRelationFilter = {
    every?: FollowsWhereInput
    some?: FollowsWhereInput
    none?: FollowsWhereInput
  }

  export type BlocksListRelationFilter = {
    every?: BlocksWhereInput
    some?: BlocksWhereInput
    none?: BlocksWhereInput
  }

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile_picture?: SortOrder
    banner?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    is_private?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile_picture?: SortOrder
    banner?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    is_private?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile_picture?: SortOrder
    banner?: SortOrder
    bio?: SortOrder
    location?: SortOrder
    is_private?: SortOrder
    is_verified?: SortOrder
    status?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumFollowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[]
    notIn?: $Enums.FollowStatus[]
    not?: NestedEnumFollowStatusFilter<$PrismaModel> | $Enums.FollowStatus
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type FollowsOrderByRelevanceInput = {
    fields: FollowsOrderByRelevanceFieldEnum | FollowsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FollowsFollower_idFollowing_idCompoundUniqueInput = {
    follower_id: string
    following_id: string
  }

  export type FollowsCountOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type FollowsMaxOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type FollowsMinOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type EnumFollowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[]
    notIn?: $Enums.FollowStatus[]
    not?: NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowStatusFilter<$PrismaModel>
  }

  export type BlocksOrderByRelevanceInput = {
    fields: BlocksOrderByRelevanceFieldEnum | BlocksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlocksBlocker_idBlocked_idCompoundUniqueInput = {
    blocker_id: string
    blocked_id: string
  }

  export type BlocksCountOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type BlocksMaxOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type BlocksMinOrderByAggregateInput = {
    id?: SortOrder
    blocker_id?: SortOrder
    blocked_id?: SortOrder
    created_at?: SortOrder
  }

  export type PostsOrderByRelevanceInput = {
    fields: PostsOrderByRelevanceFieldEnum | PostsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    post_text?: SortOrder
    image_url?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    post_text?: SortOrder
    image_url?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    author_id?: SortOrder
    post_text?: SortOrder
    image_url?: SortOrder
    is_edited?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type CommentsNullableScalarRelationFilter = {
    is?: CommentsWhereInput | null
    isNot?: CommentsWhereInput | null
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_text?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    parent_id?: SortOrder
  }

  export type PostsNullableScalarRelationFilter = {
    is?: PostsWhereInput | null
    isNot?: PostsWhereInput | null
  }

  export type LikesOrderByRelevanceInput = {
    fields: LikesOrderByRelevanceFieldEnum | LikesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LikesUser_idPost_idCompoundUniqueInput = {
    user_id: string
    post_id: string
  }

  export type LikesUser_idComment_idCompoundUniqueInput = {
    user_id: string
    comment_id: string
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    comment_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type NotificationsOrderByRelevanceInput = {
    fields: NotificationsOrderByRelevanceFieldEnum | NotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_id?: SortOrder
    message?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    is_read?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type FollowsCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type BlocksCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput> | BlocksCreateWithoutBlockerInput[] | BlocksUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockerInput | BlocksCreateOrConnectWithoutBlockerInput[]
    createMany?: BlocksCreateManyBlockerInputEnvelope
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
  }

  export type BlocksCreateNestedManyWithoutBlockingInput = {
    create?: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput> | BlocksCreateWithoutBlockingInput[] | BlocksUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockingInput | BlocksCreateOrConnectWithoutBlockingInput[]
    createMany?: BlocksCreateManyBlockingInputEnvelope
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
  }

  export type PostsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type FollowsUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
  }

  export type BlocksUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput> | BlocksCreateWithoutBlockerInput[] | BlocksUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockerInput | BlocksCreateOrConnectWithoutBlockerInput[]
    createMany?: BlocksCreateManyBlockerInputEnvelope
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
  }

  export type BlocksUncheckedCreateNestedManyWithoutBlockingInput = {
    create?: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput> | BlocksCreateWithoutBlockingInput[] | BlocksUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockingInput | BlocksCreateOrConnectWithoutBlockingInput[]
    createMany?: BlocksCreateManyBlockingInputEnvelope
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
  }

  export type PostsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type FollowsUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type BlocksUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput> | BlocksCreateWithoutBlockerInput[] | BlocksUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockerInput | BlocksCreateOrConnectWithoutBlockerInput[]
    upsert?: BlocksUpsertWithWhereUniqueWithoutBlockerInput | BlocksUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlocksCreateManyBlockerInputEnvelope
    set?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    disconnect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    delete?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    update?: BlocksUpdateWithWhereUniqueWithoutBlockerInput | BlocksUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlocksUpdateManyWithWhereWithoutBlockerInput | BlocksUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
  }

  export type BlocksUpdateManyWithoutBlockingNestedInput = {
    create?: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput> | BlocksCreateWithoutBlockingInput[] | BlocksUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockingInput | BlocksCreateOrConnectWithoutBlockingInput[]
    upsert?: BlocksUpsertWithWhereUniqueWithoutBlockingInput | BlocksUpsertWithWhereUniqueWithoutBlockingInput[]
    createMany?: BlocksCreateManyBlockingInputEnvelope
    set?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    disconnect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    delete?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    update?: BlocksUpdateWithWhereUniqueWithoutBlockingInput | BlocksUpdateWithWhereUniqueWithoutBlockingInput[]
    updateMany?: BlocksUpdateManyWithWhereWithoutBlockingInput | BlocksUpdateManyWithWhereWithoutBlockingInput[]
    deleteMany?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
  }

  export type PostsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutSenderInput | NotificationsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutSenderInput | NotificationsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutSenderInput | NotificationsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput> | FollowsCreateWithoutFollowerInput[] | FollowsUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowerInput | FollowsCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowerInput | FollowsUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowsCreateManyFollowerInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowerInput | FollowsUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowerInput | FollowsUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput> | FollowsCreateWithoutFollowingInput[] | FollowsUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowsCreateOrConnectWithoutFollowingInput | FollowsCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowsUpsertWithWhereUniqueWithoutFollowingInput | FollowsUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowsCreateManyFollowingInputEnvelope
    set?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    disconnect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    delete?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    connect?: FollowsWhereUniqueInput | FollowsWhereUniqueInput[]
    update?: FollowsUpdateWithWhereUniqueWithoutFollowingInput | FollowsUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowsUpdateManyWithWhereWithoutFollowingInput | FollowsUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
  }

  export type BlocksUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput> | BlocksCreateWithoutBlockerInput[] | BlocksUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockerInput | BlocksCreateOrConnectWithoutBlockerInput[]
    upsert?: BlocksUpsertWithWhereUniqueWithoutBlockerInput | BlocksUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlocksCreateManyBlockerInputEnvelope
    set?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    disconnect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    delete?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    update?: BlocksUpdateWithWhereUniqueWithoutBlockerInput | BlocksUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlocksUpdateManyWithWhereWithoutBlockerInput | BlocksUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
  }

  export type BlocksUncheckedUpdateManyWithoutBlockingNestedInput = {
    create?: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput> | BlocksCreateWithoutBlockingInput[] | BlocksUncheckedCreateWithoutBlockingInput[]
    connectOrCreate?: BlocksCreateOrConnectWithoutBlockingInput | BlocksCreateOrConnectWithoutBlockingInput[]
    upsert?: BlocksUpsertWithWhereUniqueWithoutBlockingInput | BlocksUpsertWithWhereUniqueWithoutBlockingInput[]
    createMany?: BlocksCreateManyBlockingInputEnvelope
    set?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    disconnect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    delete?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    connect?: BlocksWhereUniqueInput | BlocksWhereUniqueInput[]
    update?: BlocksUpdateWithWhereUniqueWithoutBlockingInput | BlocksUpdateWithWhereUniqueWithoutBlockingInput[]
    updateMany?: BlocksUpdateManyWithWhereWithoutBlockingInput | BlocksUpdateManyWithWhereWithoutBlockingInput[]
    deleteMany?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
  }

  export type PostsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput> | PostsCreateWithoutAuthorInput[] | PostsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutAuthorInput | PostsCreateOrConnectWithoutAuthorInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutAuthorInput | PostsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostsCreateManyAuthorInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutAuthorInput | PostsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutAuthorInput | PostsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput> | LikesCreateWithoutUserInput[] | LikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutUserInput | LikesCreateOrConnectWithoutUserInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutUserInput | LikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikesCreateManyUserInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutUserInput | LikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutUserInput | LikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput> | NotificationsCreateWithoutSenderInput[] | NotificationsUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutSenderInput | NotificationsCreateOrConnectWithoutSenderInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutSenderInput | NotificationsUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: NotificationsCreateManySenderInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutSenderInput | NotificationsUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutSenderInput | NotificationsUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutFollowedByInput = {
    create?: XOR<UsersCreateWithoutFollowedByInput, UsersUncheckedCreateWithoutFollowedByInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowedByInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumFollowStatusFieldUpdateOperationsInput = {
    set?: $Enums.FollowStatus
  }

  export type UsersUpdateOneRequiredWithoutFollowedByNestedInput = {
    create?: XOR<UsersCreateWithoutFollowedByInput, UsersUncheckedCreateWithoutFollowedByInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowedByInput
    upsert?: UsersUpsertWithoutFollowedByInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowedByInput, UsersUpdateWithoutFollowedByInput>, UsersUncheckedUpdateWithoutFollowedByInput>
  }

  export type UsersUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    upsert?: UsersUpsertWithoutFollowingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowingInput, UsersUpdateWithoutFollowingInput>, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<UsersCreateWithoutBlockedByInput, UsersUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlockedByInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutBlockingInput = {
    create?: XOR<UsersCreateWithoutBlockingInput, UsersUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlockingInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<UsersCreateWithoutBlockedByInput, UsersUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlockedByInput
    upsert?: UsersUpsertWithoutBlockedByInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBlockedByInput, UsersUpdateWithoutBlockedByInput>, UsersUncheckedUpdateWithoutBlockedByInput>
  }

  export type UsersUpdateOneRequiredWithoutBlockingNestedInput = {
    create?: XOR<UsersCreateWithoutBlockingInput, UsersUncheckedCreateWithoutBlockingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBlockingInput
    upsert?: UsersUpsertWithoutBlockingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBlockingInput, UsersUpdateWithoutBlockingInput>, UsersUncheckedUpdateWithoutBlockingInput>
  }

  export type UsersCreateNestedOneWithoutPostAuthorInput = {
    create?: XOR<UsersCreateWithoutPostAuthorInput, UsersUncheckedCreateWithoutPostAuthorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostAuthorInput
    connect?: UsersWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutPostAuthorNestedInput = {
    create?: XOR<UsersCreateWithoutPostAuthorInput, UsersUncheckedCreateWithoutPostAuthorInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPostAuthorInput
    upsert?: UsersUpsertWithoutPostAuthorInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPostAuthorInput, UsersUpdateWithoutPostAuthorInput>, UsersUncheckedUpdateWithoutPostAuthorInput>
  }

  export type CommentsUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput> | CommentsCreateWithoutPostInput[] | CommentsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPostInput | CommentsCreateOrConnectWithoutPostInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPostInput | CommentsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentsCreateManyPostInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPostInput | CommentsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPostInput | CommentsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput> | LikesCreateWithoutPostInput[] | LikesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPostInput | LikesCreateOrConnectWithoutPostInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPostInput | LikesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: LikesCreateManyPostInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPostInput | LikesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPostInput | LikesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCommentUserInput = {
    create?: XOR<UsersCreateWithoutCommentUserInput, UsersUncheckedCreateWithoutCommentUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentUserInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutCommentPostInput = {
    create?: XOR<PostsCreateWithoutCommentPostInput, PostsUncheckedCreateWithoutCommentPostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentPostInput
    connect?: PostsWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    connect?: CommentsWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCommentUserNestedInput = {
    create?: XOR<UsersCreateWithoutCommentUserInput, UsersUncheckedCreateWithoutCommentUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentUserInput
    upsert?: UsersUpsertWithoutCommentUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentUserInput, UsersUpdateWithoutCommentUserInput>, UsersUncheckedUpdateWithoutCommentUserInput>
  }

  export type PostsUpdateOneRequiredWithoutCommentPostNestedInput = {
    create?: XOR<PostsCreateWithoutCommentPostInput, PostsUncheckedCreateWithoutCommentPostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutCommentPostInput
    upsert?: PostsUpsertWithoutCommentPostInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutCommentPostInput, PostsUpdateWithoutCommentPostInput>, PostsUncheckedUpdateWithoutCommentPostInput>
  }

  export type CommentsUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutRepliesInput
    upsert?: CommentsUpsertWithoutRepliesInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutRepliesInput, CommentsUpdateWithoutRepliesInput>, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutCommentInput | LikesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutCommentInput | LikesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutCommentInput | LikesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput> | CommentsCreateWithoutParentInput[] | CommentsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutParentInput | CommentsCreateOrConnectWithoutParentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutParentInput | CommentsUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentsCreateManyParentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutParentInput | CommentsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutParentInput | CommentsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput> | LikesCreateWithoutCommentInput[] | LikesUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutCommentInput | LikesCreateOrConnectWithoutCommentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutCommentInput | LikesUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: LikesCreateManyCommentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutCommentInput | LikesUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutCommentInput | LikesUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLikeUserInput = {
    create?: XOR<UsersCreateWithoutLikeUserInput, UsersUncheckedCreateWithoutLikeUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikeUserInput
    connect?: UsersWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutLikePostInput = {
    create?: XOR<PostsCreateWithoutLikePostInput, PostsUncheckedCreateWithoutLikePostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikePostInput
    connect?: PostsWhereUniqueInput
  }

  export type CommentsCreateNestedOneWithoutLikeCommentInput = {
    create?: XOR<CommentsCreateWithoutLikeCommentInput, CommentsUncheckedCreateWithoutLikeCommentInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutLikeCommentInput
    connect?: CommentsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutLikeUserNestedInput = {
    create?: XOR<UsersCreateWithoutLikeUserInput, UsersUncheckedCreateWithoutLikeUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikeUserInput
    upsert?: UsersUpsertWithoutLikeUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikeUserInput, UsersUpdateWithoutLikeUserInput>, UsersUncheckedUpdateWithoutLikeUserInput>
  }

  export type PostsUpdateOneWithoutLikePostNestedInput = {
    create?: XOR<PostsCreateWithoutLikePostInput, PostsUncheckedCreateWithoutLikePostInput>
    connectOrCreate?: PostsCreateOrConnectWithoutLikePostInput
    upsert?: PostsUpsertWithoutLikePostInput
    disconnect?: PostsWhereInput | boolean
    delete?: PostsWhereInput | boolean
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutLikePostInput, PostsUpdateWithoutLikePostInput>, PostsUncheckedUpdateWithoutLikePostInput>
  }

  export type CommentsUpdateOneWithoutLikeCommentNestedInput = {
    create?: XOR<CommentsCreateWithoutLikeCommentInput, CommentsUncheckedCreateWithoutLikeCommentInput>
    connectOrCreate?: CommentsCreateOrConnectWithoutLikeCommentInput
    upsert?: CommentsUpsertWithoutLikeCommentInput
    disconnect?: CommentsWhereInput | boolean
    delete?: CommentsWhereInput | boolean
    connect?: CommentsWhereUniqueInput
    update?: XOR<XOR<CommentsUpdateToOneWithWhereWithoutLikeCommentInput, CommentsUpdateWithoutLikeCommentInput>, CommentsUncheckedUpdateWithoutLikeCommentInput>
  }

  export type UsersCreateNestedOneWithoutReceivedNotificationsInput = {
    create?: XOR<UsersCreateWithoutReceivedNotificationsInput, UsersUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceivedNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutSentNotificationsInput = {
    create?: XOR<UsersCreateWithoutSentNotificationsInput, UsersUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UsersUpdateOneRequiredWithoutReceivedNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutReceivedNotificationsInput, UsersUncheckedCreateWithoutReceivedNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceivedNotificationsInput
    upsert?: UsersUpsertWithoutReceivedNotificationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReceivedNotificationsInput, UsersUpdateWithoutReceivedNotificationsInput>, UsersUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type UsersUpdateOneWithoutSentNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutSentNotificationsInput, UsersUncheckedCreateWithoutSentNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSentNotificationsInput
    upsert?: UsersUpsertWithoutSentNotificationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSentNotificationsInput, UsersUpdateWithoutSentNotificationsInput>, UsersUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumFollowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[]
    notIn?: $Enums.FollowStatus[]
    not?: NestedEnumFollowStatusFilter<$PrismaModel> | $Enums.FollowStatus
  }

  export type NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowStatus | EnumFollowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FollowStatus[]
    notIn?: $Enums.FollowStatus[]
    not?: NestedEnumFollowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FollowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFollowStatusFilter<$PrismaModel>
    _max?: NestedEnumFollowStatusFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type FollowsCreateWithoutFollowerInput = {
    id?: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
    following: UsersCreateNestedOneWithoutFollowingInput
  }

  export type FollowsUncheckedCreateWithoutFollowerInput = {
    id?: string
    following_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type FollowsCreateOrConnectWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsCreateManyFollowerInputEnvelope = {
    data: FollowsCreateManyFollowerInput | FollowsCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowsCreateWithoutFollowingInput = {
    id?: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
    follower: UsersCreateNestedOneWithoutFollowedByInput
  }

  export type FollowsUncheckedCreateWithoutFollowingInput = {
    id?: string
    follower_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type FollowsCreateOrConnectWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsCreateManyFollowingInputEnvelope = {
    data: FollowsCreateManyFollowingInput | FollowsCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type BlocksCreateWithoutBlockerInput = {
    id?: string
    created_at?: Date | string
    blocking: UsersCreateNestedOneWithoutBlockingInput
  }

  export type BlocksUncheckedCreateWithoutBlockerInput = {
    id?: string
    blocked_id: string
    created_at?: Date | string
  }

  export type BlocksCreateOrConnectWithoutBlockerInput = {
    where: BlocksWhereUniqueInput
    create: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput>
  }

  export type BlocksCreateManyBlockerInputEnvelope = {
    data: BlocksCreateManyBlockerInput | BlocksCreateManyBlockerInput[]
    skipDuplicates?: boolean
  }

  export type BlocksCreateWithoutBlockingInput = {
    id?: string
    created_at?: Date | string
    blocker: UsersCreateNestedOneWithoutBlockedByInput
  }

  export type BlocksUncheckedCreateWithoutBlockingInput = {
    id?: string
    blocker_id: string
    created_at?: Date | string
  }

  export type BlocksCreateOrConnectWithoutBlockingInput = {
    where: BlocksWhereUniqueInput
    create: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput>
  }

  export type BlocksCreateManyBlockingInputEnvelope = {
    data: BlocksCreateManyBlockingInput | BlocksCreateManyBlockingInput[]
    skipDuplicates?: boolean
  }

  export type PostsCreateWithoutAuthorInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    commentPost?: CommentsCreateNestedManyWithoutPostInput
    likePost?: LikesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutAuthorInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    commentPost?: CommentsUncheckedCreateNestedManyWithoutPostInput
    likePost?: LikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsCreateManyAuthorInputEnvelope = {
    data: PostsCreateManyAuthorInput | PostsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    post: PostsCreateNestedOneWithoutCommentPostInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    likeComment?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    likeComment?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutUserInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    post?: PostsCreateNestedOneWithoutLikePostInput
    comment?: CommentsCreateNestedOneWithoutLikeCommentInput
  }

  export type LikesUncheckedCreateWithoutUserInput = {
    id?: string
    post_id?: string | null
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesCreateOrConnectWithoutUserInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesCreateManyUserInputEnvelope = {
    data: LikesCreateManyUserInput | LikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    id?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
    sender?: UsersCreateNestedOneWithoutSentNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string
    sender_id?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutSenderInput = {
    id?: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
    user: UsersCreateNestedOneWithoutReceivedNotificationsInput
  }

  export type NotificationsUncheckedCreateWithoutSenderInput = {
    id?: string
    user_id: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationsCreateOrConnectWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput>
  }

  export type NotificationsCreateManySenderInputEnvelope = {
    data: NotificationsCreateManySenderInput | NotificationsCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowsCreateWithoutFollowerInput, FollowsUncheckedCreateWithoutFollowerInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowerInput, FollowsUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowsScalarWhereInput = {
    AND?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    OR?: FollowsScalarWhereInput[]
    NOT?: FollowsScalarWhereInput | FollowsScalarWhereInput[]
    id?: StringFilter<"Follows"> | string
    follower_id?: StringFilter<"Follows"> | string
    following_id?: StringFilter<"Follows"> | string
    created_at?: DateTimeFilter<"Follows"> | Date | string
    status?: EnumFollowStatusFilter<"Follows"> | $Enums.FollowStatus
  }

  export type FollowsUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    update: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowsCreateWithoutFollowingInput, FollowsUncheckedCreateWithoutFollowingInput>
  }

  export type FollowsUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowsWhereUniqueInput
    data: XOR<FollowsUpdateWithoutFollowingInput, FollowsUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowsUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowsScalarWhereInput
    data: XOR<FollowsUpdateManyMutationInput, FollowsUncheckedUpdateManyWithoutFollowingInput>
  }

  export type BlocksUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlocksWhereUniqueInput
    update: XOR<BlocksUpdateWithoutBlockerInput, BlocksUncheckedUpdateWithoutBlockerInput>
    create: XOR<BlocksCreateWithoutBlockerInput, BlocksUncheckedCreateWithoutBlockerInput>
  }

  export type BlocksUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlocksWhereUniqueInput
    data: XOR<BlocksUpdateWithoutBlockerInput, BlocksUncheckedUpdateWithoutBlockerInput>
  }

  export type BlocksUpdateManyWithWhereWithoutBlockerInput = {
    where: BlocksScalarWhereInput
    data: XOR<BlocksUpdateManyMutationInput, BlocksUncheckedUpdateManyWithoutBlockerInput>
  }

  export type BlocksScalarWhereInput = {
    AND?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
    OR?: BlocksScalarWhereInput[]
    NOT?: BlocksScalarWhereInput | BlocksScalarWhereInput[]
    id?: StringFilter<"Blocks"> | string
    blocker_id?: StringFilter<"Blocks"> | string
    blocked_id?: StringFilter<"Blocks"> | string
    created_at?: DateTimeFilter<"Blocks"> | Date | string
  }

  export type BlocksUpsertWithWhereUniqueWithoutBlockingInput = {
    where: BlocksWhereUniqueInput
    update: XOR<BlocksUpdateWithoutBlockingInput, BlocksUncheckedUpdateWithoutBlockingInput>
    create: XOR<BlocksCreateWithoutBlockingInput, BlocksUncheckedCreateWithoutBlockingInput>
  }

  export type BlocksUpdateWithWhereUniqueWithoutBlockingInput = {
    where: BlocksWhereUniqueInput
    data: XOR<BlocksUpdateWithoutBlockingInput, BlocksUncheckedUpdateWithoutBlockingInput>
  }

  export type BlocksUpdateManyWithWhereWithoutBlockingInput = {
    where: BlocksScalarWhereInput
    data: XOR<BlocksUpdateManyMutationInput, BlocksUncheckedUpdateManyWithoutBlockingInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostsCreateWithoutAuthorInput, PostsUncheckedCreateWithoutAuthorInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutAuthorInput, PostsUncheckedUpdateWithoutAuthorInput>
  }

  export type PostsUpdateManyWithWhereWithoutAuthorInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    author_id?: StringFilter<"Posts"> | string
    post_text?: StringFilter<"Posts"> | string
    image_url?: StringNullableFilter<"Posts"> | string | null
    is_edited?: BoolFilter<"Posts"> | boolean
    created_at?: DateTimeFilter<"Posts"> | Date | string
    updated_at?: DateTimeFilter<"Posts"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    user_id?: StringFilter<"Comments"> | string
    post_id?: StringFilter<"Comments"> | string
    comment_text?: StringFilter<"Comments"> | string
    created_at?: DateTimeFilter<"Comments"> | Date | string
    updated_at?: DateTimeFilter<"Comments"> | Date | string
    parent_id?: StringNullableFilter<"Comments"> | string | null
  }

  export type LikesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
    create: XOR<LikesCreateWithoutUserInput, LikesUncheckedCreateWithoutUserInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutUserInput, LikesUncheckedUpdateWithoutUserInput>
  }

  export type LikesUpdateManyWithWhereWithoutUserInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    user_id?: StringFilter<"Likes"> | string
    post_id?: StringNullableFilter<"Likes"> | string | null
    comment_id?: StringNullableFilter<"Likes"> | string | null
    created_at?: DateTimeFilter<"Likes"> | Date | string
    updated_at?: DateTimeFilter<"Likes"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    user_id?: StringFilter<"Notifications"> | string
    sender_id?: StringNullableFilter<"Notifications"> | string | null
    message?: StringFilter<"Notifications"> | string
    metadata?: JsonNullableFilter<"Notifications">
    type?: EnumNotificationTypeFilter<"Notifications"> | $Enums.NotificationType
    created_at?: DateTimeFilter<"Notifications"> | Date | string
    is_read?: BoolFilter<"Notifications"> | boolean
  }

  export type NotificationsUpsertWithWhereUniqueWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutSenderInput, NotificationsUncheckedUpdateWithoutSenderInput>
    create: XOR<NotificationsCreateWithoutSenderInput, NotificationsUncheckedCreateWithoutSenderInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutSenderInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutSenderInput, NotificationsUncheckedUpdateWithoutSenderInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutSenderInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutSenderInput>
  }

  export type UsersCreateWithoutFollowedByInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutFollowedByInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutFollowedByInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowedByInput, UsersUncheckedCreateWithoutFollowedByInput>
  }

  export type UsersCreateWithoutFollowingInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutFollowingInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
  }

  export type UsersUpsertWithoutFollowedByInput = {
    update: XOR<UsersUpdateWithoutFollowedByInput, UsersUncheckedUpdateWithoutFollowedByInput>
    create: XOR<UsersCreateWithoutFollowedByInput, UsersUncheckedCreateWithoutFollowedByInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowedByInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowedByInput, UsersUncheckedUpdateWithoutFollowedByInput>
  }

  export type UsersUpdateWithoutFollowedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersUpsertWithoutFollowingInput = {
    update: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersCreateWithoutBlockedByInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutBlockedByInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutBlockedByInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBlockedByInput, UsersUncheckedCreateWithoutBlockedByInput>
  }

  export type UsersCreateWithoutBlockingInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutBlockingInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutBlockingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBlockingInput, UsersUncheckedCreateWithoutBlockingInput>
  }

  export type UsersUpsertWithoutBlockedByInput = {
    update: XOR<UsersUpdateWithoutBlockedByInput, UsersUncheckedUpdateWithoutBlockedByInput>
    create: XOR<UsersCreateWithoutBlockedByInput, UsersUncheckedCreateWithoutBlockedByInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBlockedByInput, UsersUncheckedUpdateWithoutBlockedByInput>
  }

  export type UsersUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutBlockedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersUpsertWithoutBlockingInput = {
    update: XOR<UsersUpdateWithoutBlockingInput, UsersUncheckedUpdateWithoutBlockingInput>
    create: XOR<UsersCreateWithoutBlockingInput, UsersUncheckedCreateWithoutBlockingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBlockingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBlockingInput, UsersUncheckedUpdateWithoutBlockingInput>
  }

  export type UsersUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersCreateWithoutPostAuthorInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutPostAuthorInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutPostAuthorInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPostAuthorInput, UsersUncheckedCreateWithoutPostAuthorInput>
  }

  export type CommentsCreateWithoutPostInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentUserInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    likeComment?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutPostInput = {
    id?: string
    user_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    likeComment?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutPostInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsCreateManyPostInputEnvelope = {
    data: CommentsCreateManyPostInput | CommentsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutPostInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutLikeUserInput
    comment?: CommentsCreateNestedOneWithoutLikeCommentInput
  }

  export type LikesUncheckedCreateWithoutPostInput = {
    id?: string
    user_id: string
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesCreateOrConnectWithoutPostInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesCreateManyPostInputEnvelope = {
    data: LikesCreateManyPostInput | LikesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutPostAuthorInput = {
    update: XOR<UsersUpdateWithoutPostAuthorInput, UsersUncheckedUpdateWithoutPostAuthorInput>
    create: XOR<UsersCreateWithoutPostAuthorInput, UsersUncheckedCreateWithoutPostAuthorInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPostAuthorInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPostAuthorInput, UsersUncheckedUpdateWithoutPostAuthorInput>
  }

  export type UsersUpdateWithoutPostAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutPostAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
    create: XOR<CommentsCreateWithoutPostInput, CommentsUncheckedCreateWithoutPostInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPostInput, CommentsUncheckedUpdateWithoutPostInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPostInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPostInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
    create: XOR<LikesCreateWithoutPostInput, LikesUncheckedCreateWithoutPostInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutPostInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutPostInput, LikesUncheckedUpdateWithoutPostInput>
  }

  export type LikesUpdateManyWithWhereWithoutPostInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutPostInput>
  }

  export type UsersCreateWithoutCommentUserInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutCommentUserInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutCommentUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentUserInput, UsersUncheckedCreateWithoutCommentUserInput>
  }

  export type PostsCreateWithoutCommentPostInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UsersCreateNestedOneWithoutPostAuthorInput
    likePost?: LikesCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutCommentPostInput = {
    id?: string
    author_id: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    likePost?: LikesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutCommentPostInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutCommentPostInput, PostsUncheckedCreateWithoutCommentPostInput>
  }

  export type CommentsCreateWithoutRepliesInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentUserInput
    post: PostsCreateNestedOneWithoutCommentPostInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    likeComment?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutRepliesInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    likeComment?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutRepliesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
  }

  export type CommentsCreateWithoutParentInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentUserInput
    post: PostsCreateNestedOneWithoutCommentPostInput
    replies?: CommentsCreateNestedManyWithoutParentInput
    likeComment?: LikesCreateNestedManyWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutParentInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
    likeComment?: LikesUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentsCreateOrConnectWithoutParentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsCreateManyParentInputEnvelope = {
    data: CommentsCreateManyParentInput | CommentsCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutCommentInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutLikeUserInput
    post?: PostsCreateNestedOneWithoutLikePostInput
  }

  export type LikesUncheckedCreateWithoutCommentInput = {
    id?: string
    user_id: string
    post_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesCreateOrConnectWithoutCommentInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput>
  }

  export type LikesCreateManyCommentInputEnvelope = {
    data: LikesCreateManyCommentInput | LikesCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCommentUserInput = {
    update: XOR<UsersUpdateWithoutCommentUserInput, UsersUncheckedUpdateWithoutCommentUserInput>
    create: XOR<UsersCreateWithoutCommentUserInput, UsersUncheckedCreateWithoutCommentUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentUserInput, UsersUncheckedUpdateWithoutCommentUserInput>
  }

  export type UsersUpdateWithoutCommentUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PostsUpsertWithoutCommentPostInput = {
    update: XOR<PostsUpdateWithoutCommentPostInput, PostsUncheckedUpdateWithoutCommentPostInput>
    create: XOR<PostsCreateWithoutCommentPostInput, PostsUncheckedCreateWithoutCommentPostInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutCommentPostInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutCommentPostInput, PostsUncheckedUpdateWithoutCommentPostInput>
  }

  export type PostsUpdateWithoutCommentPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutPostAuthorNestedInput
    likePost?: LikesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutCommentPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    likePost?: LikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentsUpsertWithoutRepliesInput = {
    update: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentsCreateWithoutRepliesInput, CommentsUncheckedCreateWithoutRepliesInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutRepliesInput, CommentsUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentsUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentUserNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentPostNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    likeComment?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    likeComment?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
    create: XOR<CommentsCreateWithoutParentInput, CommentsUncheckedCreateWithoutParentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutParentInput, CommentsUncheckedUpdateWithoutParentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutParentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutParentInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutCommentInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutCommentInput, LikesUncheckedUpdateWithoutCommentInput>
    create: XOR<LikesCreateWithoutCommentInput, LikesUncheckedCreateWithoutCommentInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutCommentInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutCommentInput, LikesUncheckedUpdateWithoutCommentInput>
  }

  export type LikesUpdateManyWithWhereWithoutCommentInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutCommentInput>
  }

  export type UsersCreateWithoutLikeUserInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutLikeUserInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutLikeUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikeUserInput, UsersUncheckedCreateWithoutLikeUserInput>
  }

  export type PostsCreateWithoutLikePostInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    author: UsersCreateNestedOneWithoutPostAuthorInput
    commentPost?: CommentsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutLikePostInput = {
    id?: string
    author_id: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    commentPost?: CommentsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutLikePostInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutLikePostInput, PostsUncheckedCreateWithoutLikePostInput>
  }

  export type CommentsCreateWithoutLikeCommentInput = {
    id?: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UsersCreateNestedOneWithoutCommentUserInput
    post: PostsCreateNestedOneWithoutCommentPostInput
    parent?: CommentsCreateNestedOneWithoutRepliesInput
    replies?: CommentsCreateNestedManyWithoutParentInput
  }

  export type CommentsUncheckedCreateWithoutLikeCommentInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
    replies?: CommentsUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentsCreateOrConnectWithoutLikeCommentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutLikeCommentInput, CommentsUncheckedCreateWithoutLikeCommentInput>
  }

  export type UsersUpsertWithoutLikeUserInput = {
    update: XOR<UsersUpdateWithoutLikeUserInput, UsersUncheckedUpdateWithoutLikeUserInput>
    create: XOR<UsersCreateWithoutLikeUserInput, UsersUncheckedCreateWithoutLikeUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikeUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikeUserInput, UsersUncheckedUpdateWithoutLikeUserInput>
  }

  export type UsersUpdateWithoutLikeUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikeUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PostsUpsertWithoutLikePostInput = {
    update: XOR<PostsUpdateWithoutLikePostInput, PostsUncheckedUpdateWithoutLikePostInput>
    create: XOR<PostsCreateWithoutLikePostInput, PostsUncheckedCreateWithoutLikePostInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutLikePostInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutLikePostInput, PostsUncheckedUpdateWithoutLikePostInput>
  }

  export type PostsUpdateWithoutLikePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutPostAuthorNestedInput
    commentPost?: CommentsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutLikePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    author_id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPost?: CommentsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentsUpsertWithoutLikeCommentInput = {
    update: XOR<CommentsUpdateWithoutLikeCommentInput, CommentsUncheckedUpdateWithoutLikeCommentInput>
    create: XOR<CommentsCreateWithoutLikeCommentInput, CommentsUncheckedCreateWithoutLikeCommentInput>
    where?: CommentsWhereInput
  }

  export type CommentsUpdateToOneWithWhereWithoutLikeCommentInput = {
    where?: CommentsWhereInput
    data: XOR<CommentsUpdateWithoutLikeCommentInput, CommentsUncheckedUpdateWithoutLikeCommentInput>
  }

  export type CommentsUpdateWithoutLikeCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentUserNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentPostNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutLikeCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UsersCreateWithoutReceivedNotificationsInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsCreateNestedManyWithoutSenderInput
  }

  export type UsersUncheckedCreateWithoutReceivedNotificationsInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    sentNotifications?: NotificationsUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UsersCreateOrConnectWithoutReceivedNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReceivedNotificationsInput, UsersUncheckedCreateWithoutReceivedNotificationsInput>
  }

  export type UsersCreateWithoutSentNotificationsInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsCreateNestedManyWithoutFollowerInput
    following?: FollowsCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksCreateNestedManyWithoutBlockerInput
    blocking?: BlocksCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsCreateNestedManyWithoutUserInput
    likeUser?: LikesCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSentNotificationsInput = {
    id?: string
    username: string
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    profile_picture?: string | null
    banner?: string | null
    bio?: string | null
    location?: string | null
    is_private?: boolean
    is_verified?: boolean
    status?: $Enums.UserStatus
    role?: $Enums.UserRole
    followedBy?: FollowsUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowsUncheckedCreateNestedManyWithoutFollowingInput
    blockedBy?: BlocksUncheckedCreateNestedManyWithoutBlockerInput
    blocking?: BlocksUncheckedCreateNestedManyWithoutBlockingInput
    postAuthor?: PostsUncheckedCreateNestedManyWithoutAuthorInput
    commentUser?: CommentsUncheckedCreateNestedManyWithoutUserInput
    likeUser?: LikesUncheckedCreateNestedManyWithoutUserInput
    receivedNotifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSentNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSentNotificationsInput, UsersUncheckedCreateWithoutSentNotificationsInput>
  }

  export type UsersUpsertWithoutReceivedNotificationsInput = {
    update: XOR<UsersUpdateWithoutReceivedNotificationsInput, UsersUncheckedUpdateWithoutReceivedNotificationsInput>
    create: XOR<UsersCreateWithoutReceivedNotificationsInput, UsersUncheckedCreateWithoutReceivedNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReceivedNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReceivedNotificationsInput, UsersUncheckedUpdateWithoutReceivedNotificationsInput>
  }

  export type UsersUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUpdateManyWithoutSenderNestedInput
  }

  export type UsersUncheckedUpdateWithoutReceivedNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    sentNotifications?: NotificationsUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UsersUpsertWithoutSentNotificationsInput = {
    update: XOR<UsersUpdateWithoutSentNotificationsInput, UsersUncheckedUpdateWithoutSentNotificationsInput>
    create: XOR<UsersCreateWithoutSentNotificationsInput, UsersUncheckedCreateWithoutSentNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSentNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSentNotificationsInput, UsersUncheckedUpdateWithoutSentNotificationsInput>
  }

  export type UsersUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUpdateManyWithoutFollowerNestedInput
    following?: FollowsUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUpdateManyWithoutUserNestedInput
    likeUser?: LikesUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSentNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    banner?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    is_private?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    followedBy?: FollowsUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowsUncheckedUpdateManyWithoutFollowingNestedInput
    blockedBy?: BlocksUncheckedUpdateManyWithoutBlockerNestedInput
    blocking?: BlocksUncheckedUpdateManyWithoutBlockingNestedInput
    postAuthor?: PostsUncheckedUpdateManyWithoutAuthorNestedInput
    commentUser?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    likeUser?: LikesUncheckedUpdateManyWithoutUserNestedInput
    receivedNotifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FollowsCreateManyFollowerInput = {
    id?: string
    following_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type FollowsCreateManyFollowingInput = {
    id?: string
    follower_id: string
    created_at?: Date | string
    status?: $Enums.FollowStatus
  }

  export type BlocksCreateManyBlockerInput = {
    id?: string
    blocked_id: string
    created_at?: Date | string
  }

  export type BlocksCreateManyBlockingInput = {
    id?: string
    blocker_id: string
    created_at?: Date | string
  }

  export type PostsCreateManyAuthorInput = {
    id?: string
    post_text: string
    image_url?: string | null
    is_edited?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
  }

  export type LikesCreateManyUserInput = {
    id?: string
    post_id?: string | null
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationsCreateManyUserInput = {
    id?: string
    sender_id?: string | null
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type NotificationsCreateManySenderInput = {
    id?: string
    user_id: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type: $Enums.NotificationType
    created_at?: Date | string
    is_read?: boolean
  }

  export type FollowsUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    following?: UsersUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    following_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type FollowsUncheckedUpdateManyWithoutFollowerInput = {
    id?: StringFieldUpdateOperationsInput | string
    following_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type FollowsUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
    follower?: UsersUpdateOneRequiredWithoutFollowedByNestedInput
  }

  export type FollowsUncheckedUpdateWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type FollowsUncheckedUpdateManyWithoutFollowingInput = {
    id?: StringFieldUpdateOperationsInput | string
    follower_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFollowStatusFieldUpdateOperationsInput | $Enums.FollowStatus
  }

  export type BlocksUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocking?: UsersUpdateOneRequiredWithoutBlockingNestedInput
  }

  export type BlocksUncheckedUpdateWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUncheckedUpdateManyWithoutBlockerInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocked_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    blocker?: UsersUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlocksUncheckedUpdateWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUncheckedUpdateManyWithoutBlockingInput = {
    id?: StringFieldUpdateOperationsInput | string
    blocker_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPost?: CommentsUpdateManyWithoutPostNestedInput
    likePost?: LikesUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    commentPost?: CommentsUncheckedUpdateManyWithoutPostNestedInput
    likePost?: LikesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_text?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_edited?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutCommentPostNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    likeComment?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    likeComment?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneWithoutLikePostNestedInput
    comment?: CommentsUpdateOneWithoutLikeCommentNestedInput
  }

  export type LikesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    sender?: UsersUpdateOneWithoutSentNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sender_id?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    user?: UsersUpdateOneRequiredWithoutReceivedNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentsCreateManyPostInput = {
    id?: string
    user_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
    parent_id?: string | null
  }

  export type LikesCreateManyPostInput = {
    id?: string
    user_id: string
    comment_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentUserNestedInput
    parent?: CommentsUpdateOneWithoutRepliesNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    likeComment?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    likeComment?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutLikeUserNestedInput
    comment?: CommentsUpdateOneWithoutLikeCommentNestedInput
  }

  export type LikesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    comment_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyParentInput = {
    id?: string
    user_id: string
    post_id: string
    comment_text: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LikesCreateManyCommentInput = {
    id?: string
    user_id: string
    post_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentsUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentUserNestedInput
    post?: PostsUpdateOneRequiredWithoutCommentPostNestedInput
    replies?: CommentsUpdateManyWithoutParentNestedInput
    likeComment?: LikesUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentsUncheckedUpdateManyWithoutParentNestedInput
    likeComment?: LikesUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: StringFieldUpdateOperationsInput | string
    comment_text?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutLikeUserNestedInput
    post?: PostsUpdateOneWithoutLikePostNestedInput
  }

  export type LikesUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikesUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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