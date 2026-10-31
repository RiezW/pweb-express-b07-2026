
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
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model Skin
 * 
 */
export type Skin = $Result.DefaultSelection<Prisma.$SkinPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model PlayerHero
 * 
 */
export type PlayerHero = $Result.DefaultSelection<Prisma.$PlayerHeroPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  TANK: 'TANK',
  FIGHTER: 'FIGHTER',
  ASSASSIN: 'ASSASSIN',
  MAGE: 'MAGE',
  MARKSMAN: 'MARKSMAN',
  SUPPORT: 'SUPPORT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Lane: {
  EXP: 'EXP',
  GOLD: 'GOLD',
  MID: 'MID',
  JUNGLE: 'JUNGLE',
  ROAM: 'ROAM'
};

export type Lane = (typeof Lane)[keyof typeof Lane]


export const Rarity: {
  COMMON: 'COMMON',
  EXCEPTIONAL: 'EXCEPTIONAL',
  DELUXE: 'DELUXE',
  EXQUISITE: 'EXQUISITE',
  GRAND: 'GRAND',
  SUPREME: 'SUPREME'
};

export type Rarity = (typeof Rarity)[keyof typeof Rarity]


export const Currency: {
  BP: 'BP',
  DIAMOND: 'DIAMOND'
};

export type Currency = (typeof Currency)[keyof typeof Currency]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Lane = $Enums.Lane

export const Lane: typeof $Enums.Lane

export type Rarity = $Enums.Rarity

export const Rarity: typeof $Enums.Rarity

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Heroes
 * const heroes = await prisma.hero.findMany()
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
   * // Fetch zero or more Heroes
   * const heroes = await prisma.hero.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skin`: Exposes CRUD operations for the **Skin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skins
    * const skins = await prisma.skin.findMany()
    * ```
    */
  get skin(): Prisma.SkinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerHero`: Exposes CRUD operations for the **PlayerHero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerHeroes
    * const playerHeroes = await prisma.playerHero.findMany()
    * ```
    */
  get playerHero(): Prisma.PlayerHeroDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Hero: 'Hero',
    Skin: 'Skin',
    Player: 'Player',
    PlayerHero: 'PlayerHero'
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
      modelProps: "hero" | "skin" | "player" | "playerHero"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      Skin: {
        payload: Prisma.$SkinPayload<ExtArgs>
        fields: Prisma.SkinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          findFirst: {
            args: Prisma.SkinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          findMany: {
            args: Prisma.SkinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          create: {
            args: Prisma.SkinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          createMany: {
            args: Prisma.SkinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          delete: {
            args: Prisma.SkinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          update: {
            args: Prisma.SkinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          deleteMany: {
            args: Prisma.SkinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>[]
          }
          upsert: {
            args: Prisma.SkinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkinPayload>
          }
          aggregate: {
            args: Prisma.SkinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkin>
          }
          groupBy: {
            args: Prisma.SkinGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkinGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkinCountArgs<ExtArgs>
            result: $Utils.Optional<SkinCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      PlayerHero: {
        payload: Prisma.$PlayerHeroPayload<ExtArgs>
        fields: Prisma.PlayerHeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerHeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerHeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          findFirst: {
            args: Prisma.PlayerHeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerHeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          findMany: {
            args: Prisma.PlayerHeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>[]
          }
          create: {
            args: Prisma.PlayerHeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          createMany: {
            args: Prisma.PlayerHeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerHeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>[]
          }
          delete: {
            args: Prisma.PlayerHeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          update: {
            args: Prisma.PlayerHeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          deleteMany: {
            args: Prisma.PlayerHeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerHeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerHeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>[]
          }
          upsert: {
            args: Prisma.PlayerHeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerHeroPayload>
          }
          aggregate: {
            args: Prisma.PlayerHeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerHero>
          }
          groupBy: {
            args: Prisma.PlayerHeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerHeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerHeroCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerHeroCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    hero?: HeroOmit
    skin?: SkinOmit
    player?: PlayerOmit
    playerHero?: PlayerHeroOmit
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
   * Count Type HeroCountOutputType
   */

  export type HeroCountOutputType = {
    skins: number
    playerHeroes: number
  }

  export type HeroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skins?: boolean | HeroCountOutputTypeCountSkinsArgs
    playerHeroes?: boolean | HeroCountOutputTypeCountPlayerHeroesArgs
  }

  // Custom InputTypes
  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroCountOutputType
     */
    select?: HeroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountSkinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkinWhereInput
  }

  /**
   * HeroCountOutputType without action
   */
  export type HeroCountOutputTypeCountPlayerHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerHeroWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    heroes: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroes?: boolean | PlayerCountOutputTypeCountHeroesArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerHeroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
    releaseYear: number | null
    priceBP: number | null
    priceDiamond: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
    releaseYear: number | null
    priceBP: number | null
    priceDiamond: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: $Enums.Role | null
    lane: $Enums.Lane | null
    releaseYear: number | null
    priceBP: number | null
    priceDiamond: number | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: $Enums.Role | null
    lane: $Enums.Lane | null
    releaseYear: number | null
    priceBP: number | null
    priceDiamond: number | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    name: number
    role: number
    lane: number
    releaseYear: number
    priceBP: number
    priceDiamond: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
    releaseYear?: true
    priceBP?: true
    priceDiamond?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
    releaseYear?: true
    priceBP?: true
    priceDiamond?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    lane?: true
    releaseYear?: true
    priceBP?: true
    priceDiamond?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    lane?: true
    releaseYear?: true
    priceBP?: true
    priceDiamond?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    lane?: true
    releaseYear?: true
    priceBP?: true
    priceDiamond?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP: number | null
    priceDiamond: number | null
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    lane?: boolean
    releaseYear?: boolean
    priceBP?: boolean
    priceDiamond?: boolean
    skins?: boolean | Hero$skinsArgs<ExtArgs>
    playerHeroes?: boolean | Hero$playerHeroesArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    lane?: boolean
    releaseYear?: boolean
    priceBP?: boolean
    priceDiamond?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    lane?: boolean
    releaseYear?: boolean
    priceBP?: boolean
    priceDiamond?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    lane?: boolean
    releaseYear?: boolean
    priceBP?: boolean
    priceDiamond?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "lane" | "releaseYear" | "priceBP" | "priceDiamond", ExtArgs["result"]["hero"]>
  export type HeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skins?: boolean | Hero$skinsArgs<ExtArgs>
    playerHeroes?: boolean | Hero$playerHeroesArgs<ExtArgs>
    _count?: boolean | HeroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {
      skins: Prisma.$SkinPayload<ExtArgs>[]
      playerHeroes: Prisma.$PlayerHeroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: $Enums.Role
      lane: $Enums.Lane
      releaseYear: number
      priceBP: number | null
      priceDiamond: number | null
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
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
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skins<T extends Hero$skinsArgs<ExtArgs> = {}>(args?: Subset<T, Hero$skinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerHeroes<T extends Hero$playerHeroesArgs<ExtArgs> = {}>(args?: Subset<T, Hero$playerHeroesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'Int'>
    readonly name: FieldRef<"Hero", 'String'>
    readonly role: FieldRef<"Hero", 'Role'>
    readonly lane: FieldRef<"Hero", 'Lane'>
    readonly releaseYear: FieldRef<"Hero", 'Int'>
    readonly priceBP: FieldRef<"Hero", 'Int'>
    readonly priceDiamond: FieldRef<"Hero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero.skins
   */
  export type Hero$skinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    where?: SkinWhereInput
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    cursor?: SkinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Hero.playerHeroes
   */
  export type Hero$playerHeroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    where?: PlayerHeroWhereInput
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    cursor?: PlayerHeroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerHeroScalarFieldEnum | PlayerHeroScalarFieldEnum[]
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeroInclude<ExtArgs> | null
  }


  /**
   * Model Skin
   */

  export type AggregateSkin = {
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  export type SkinAvgAggregateOutputType = {
    id: number | null
    priceDiamond: number | null
    heroId: number | null
  }

  export type SkinSumAggregateOutputType = {
    id: number | null
    priceDiamond: number | null
    heroId: number | null
  }

  export type SkinMinAggregateOutputType = {
    id: number | null
    name: string | null
    rarity: $Enums.Rarity | null
    priceDiamond: number | null
    heroId: number | null
  }

  export type SkinMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rarity: $Enums.Rarity | null
    priceDiamond: number | null
    heroId: number | null
  }

  export type SkinCountAggregateOutputType = {
    id: number
    name: number
    rarity: number
    priceDiamond: number
    heroId: number
    _all: number
  }


  export type SkinAvgAggregateInputType = {
    id?: true
    priceDiamond?: true
    heroId?: true
  }

  export type SkinSumAggregateInputType = {
    id?: true
    priceDiamond?: true
    heroId?: true
  }

  export type SkinMinAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    priceDiamond?: true
    heroId?: true
  }

  export type SkinMaxAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    priceDiamond?: true
    heroId?: true
  }

  export type SkinCountAggregateInputType = {
    id?: true
    name?: true
    rarity?: true
    priceDiamond?: true
    heroId?: true
    _all?: true
  }

  export type SkinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skin to aggregate.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skins
    **/
    _count?: true | SkinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkinMaxAggregateInputType
  }

  export type GetSkinAggregateType<T extends SkinAggregateArgs> = {
        [P in keyof T & keyof AggregateSkin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkin[P]>
      : GetScalarType<T[P], AggregateSkin[P]>
  }




  export type SkinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkinWhereInput
    orderBy?: SkinOrderByWithAggregationInput | SkinOrderByWithAggregationInput[]
    by: SkinScalarFieldEnum[] | SkinScalarFieldEnum
    having?: SkinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkinCountAggregateInputType | true
    _avg?: SkinAvgAggregateInputType
    _sum?: SkinSumAggregateInputType
    _min?: SkinMinAggregateInputType
    _max?: SkinMaxAggregateInputType
  }

  export type SkinGroupByOutputType = {
    id: number
    name: string
    rarity: $Enums.Rarity
    priceDiamond: number | null
    heroId: number
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  type GetSkinGroupByPayload<T extends SkinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkinGroupByOutputType[P]>
            : GetScalarType<T[P], SkinGroupByOutputType[P]>
        }
      >
    >


  export type SkinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    priceDiamond?: boolean
    heroId?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    priceDiamond?: boolean
    heroId?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rarity?: boolean
    priceDiamond?: boolean
    heroId?: boolean
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>

  export type SkinSelectScalar = {
    id?: boolean
    name?: boolean
    rarity?: boolean
    priceDiamond?: boolean
    heroId?: boolean
  }

  export type SkinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rarity" | "priceDiamond" | "heroId", ExtArgs["result"]["skin"]>
  export type SkinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type SkinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type SkinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $SkinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skin"
    objects: {
      hero: Prisma.$HeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rarity: $Enums.Rarity
      priceDiamond: number | null
      heroId: number
    }, ExtArgs["result"]["skin"]>
    composites: {}
  }

  type SkinGetPayload<S extends boolean | null | undefined | SkinDefaultArgs> = $Result.GetResult<Prisma.$SkinPayload, S>

  type SkinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkinCountAggregateInputType | true
    }

  export interface SkinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skin'], meta: { name: 'Skin' } }
    /**
     * Find zero or one Skin that matches the filter.
     * @param {SkinFindUniqueArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkinFindUniqueArgs>(args: SelectSubset<T, SkinFindUniqueArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkinFindUniqueOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkinFindUniqueOrThrowArgs>(args: SelectSubset<T, SkinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindFirstArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkinFindFirstArgs>(args?: SelectSubset<T, SkinFindFirstArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindFirstOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkinFindFirstOrThrowArgs>(args?: SelectSubset<T, SkinFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skins
     * const skins = await prisma.skin.findMany()
     * 
     * // Get first 10 Skins
     * const skins = await prisma.skin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skinWithIdOnly = await prisma.skin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkinFindManyArgs>(args?: SelectSubset<T, SkinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skin.
     * @param {SkinCreateArgs} args - Arguments to create a Skin.
     * @example
     * // Create one Skin
     * const Skin = await prisma.skin.create({
     *   data: {
     *     // ... data to create a Skin
     *   }
     * })
     * 
     */
    create<T extends SkinCreateArgs>(args: SelectSubset<T, SkinCreateArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skins.
     * @param {SkinCreateManyArgs} args - Arguments to create many Skins.
     * @example
     * // Create many Skins
     * const skin = await prisma.skin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkinCreateManyArgs>(args?: SelectSubset<T, SkinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skins and returns the data saved in the database.
     * @param {SkinCreateManyAndReturnArgs} args - Arguments to create many Skins.
     * @example
     * // Create many Skins
     * const skin = await prisma.skin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skins and only return the `id`
     * const skinWithIdOnly = await prisma.skin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkinCreateManyAndReturnArgs>(args?: SelectSubset<T, SkinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skin.
     * @param {SkinDeleteArgs} args - Arguments to delete one Skin.
     * @example
     * // Delete one Skin
     * const Skin = await prisma.skin.delete({
     *   where: {
     *     // ... filter to delete one Skin
     *   }
     * })
     * 
     */
    delete<T extends SkinDeleteArgs>(args: SelectSubset<T, SkinDeleteArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skin.
     * @param {SkinUpdateArgs} args - Arguments to update one Skin.
     * @example
     * // Update one Skin
     * const skin = await prisma.skin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkinUpdateArgs>(args: SelectSubset<T, SkinUpdateArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skins.
     * @param {SkinDeleteManyArgs} args - Arguments to filter Skins to delete.
     * @example
     * // Delete a few Skins
     * const { count } = await prisma.skin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkinDeleteManyArgs>(args?: SelectSubset<T, SkinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skins
     * const skin = await prisma.skin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkinUpdateManyArgs>(args: SelectSubset<T, SkinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skins and returns the data updated in the database.
     * @param {SkinUpdateManyAndReturnArgs} args - Arguments to update many Skins.
     * @example
     * // Update many Skins
     * const skin = await prisma.skin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skins and only return the `id`
     * const skinWithIdOnly = await prisma.skin.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkinUpdateManyAndReturnArgs>(args: SelectSubset<T, SkinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skin.
     * @param {SkinUpsertArgs} args - Arguments to update or create a Skin.
     * @example
     * // Update or create a Skin
     * const skin = await prisma.skin.upsert({
     *   create: {
     *     // ... data to create a Skin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skin we want to update
     *   }
     * })
     */
    upsert<T extends SkinUpsertArgs>(args: SelectSubset<T, SkinUpsertArgs<ExtArgs>>): Prisma__SkinClient<$Result.GetResult<Prisma.$SkinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinCountArgs} args - Arguments to filter Skins to count.
     * @example
     * // Count the number of Skins
     * const count = await prisma.skin.count({
     *   where: {
     *     // ... the filter for the Skins we want to count
     *   }
     * })
    **/
    count<T extends SkinCountArgs>(
      args?: Subset<T, SkinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkinAggregateArgs>(args: Subset<T, SkinAggregateArgs>): Prisma.PrismaPromise<GetSkinAggregateType<T>>

    /**
     * Group by Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinGroupByArgs} args - Group by arguments.
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
      T extends SkinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkinGroupByArgs['orderBy'] }
        : { orderBy?: SkinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skin model
   */
  readonly fields: SkinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Skin model
   */
  interface SkinFieldRefs {
    readonly id: FieldRef<"Skin", 'Int'>
    readonly name: FieldRef<"Skin", 'String'>
    readonly rarity: FieldRef<"Skin", 'Rarity'>
    readonly priceDiamond: FieldRef<"Skin", 'Int'>
    readonly heroId: FieldRef<"Skin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Skin findUnique
   */
  export type SkinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin findUniqueOrThrow
   */
  export type SkinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin findFirst
   */
  export type SkinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin findFirstOrThrow
   */
  export type SkinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skin to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin findMany
   */
  export type SkinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter, which Skins to fetch.
     */
    where?: SkinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skins to fetch.
     */
    orderBy?: SkinOrderByWithRelationInput | SkinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skins.
     */
    cursor?: SkinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * Skin create
   */
  export type SkinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The data needed to create a Skin.
     */
    data: XOR<SkinCreateInput, SkinUncheckedCreateInput>
  }

  /**
   * Skin createMany
   */
  export type SkinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skins.
     */
    data: SkinCreateManyInput | SkinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skin createManyAndReturn
   */
  export type SkinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * The data used to create many Skins.
     */
    data: SkinCreateManyInput | SkinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skin update
   */
  export type SkinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The data needed to update a Skin.
     */
    data: XOR<SkinUpdateInput, SkinUncheckedUpdateInput>
    /**
     * Choose, which Skin to update.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin updateMany
   */
  export type SkinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skins.
     */
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyInput>
    /**
     * Filter which Skins to update
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to update.
     */
    limit?: number
  }

  /**
   * Skin updateManyAndReturn
   */
  export type SkinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * The data used to update Skins.
     */
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyInput>
    /**
     * Filter which Skins to update
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skin upsert
   */
  export type SkinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * The filter to search for the Skin to update in case it exists.
     */
    where: SkinWhereUniqueInput
    /**
     * In case the Skin found by the `where` argument doesn't exist, create a new Skin with this data.
     */
    create: XOR<SkinCreateInput, SkinUncheckedCreateInput>
    /**
     * In case the Skin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkinUpdateInput, SkinUncheckedUpdateInput>
  }

  /**
   * Skin delete
   */
  export type SkinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
    /**
     * Filter which Skin to delete.
     */
    where: SkinWhereUniqueInput
  }

  /**
   * Skin deleteMany
   */
  export type SkinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skins to delete
     */
    where?: SkinWhereInput
    /**
     * Limit how many Skins to delete.
     */
    limit?: number
  }

  /**
   * Skin without action
   */
  export type SkinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skin
     */
    select?: SkinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skin
     */
    omit?: SkinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkinInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
    bp: number | null
    diamond: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
    bp: number | null
    diamond: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    nickname: string | null
    bp: number | null
    diamond: number | null
    createdAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    nickname: string | null
    bp: number | null
    diamond: number | null
    createdAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    nickname: number
    bp: number
    diamond: number
    createdAt: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
    bp?: true
    diamond?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
    bp?: true
    diamond?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    nickname?: true
    bp?: true
    diamond?: true
    createdAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    nickname?: true
    bp?: true
    diamond?: true
    createdAt?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    nickname?: true
    bp?: true
    diamond?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    nickname: string
    bp: number
    diamond: number
    createdAt: Date
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    bp?: boolean
    diamond?: boolean
    createdAt?: boolean
    heroes?: boolean | Player$heroesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    bp?: boolean
    diamond?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    bp?: boolean
    diamond?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    nickname?: boolean
    bp?: boolean
    diamond?: boolean
    createdAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "bp" | "diamond" | "createdAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heroes?: boolean | Player$heroesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      heroes: Prisma.$PlayerHeroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nickname: string
      bp: number
      diamond: number
      createdAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    heroes<T extends Player$heroesArgs<ExtArgs> = {}>(args?: Subset<T, Player$heroesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly nickname: FieldRef<"Player", 'String'>
    readonly bp: FieldRef<"Player", 'Int'>
    readonly diamond: FieldRef<"Player", 'Int'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.heroes
   */
  export type Player$heroesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    where?: PlayerHeroWhereInput
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    cursor?: PlayerHeroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerHeroScalarFieldEnum | PlayerHeroScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model PlayerHero
   */

  export type AggregatePlayerHero = {
    _count: PlayerHeroCountAggregateOutputType | null
    _avg: PlayerHeroAvgAggregateOutputType | null
    _sum: PlayerHeroSumAggregateOutputType | null
    _min: PlayerHeroMinAggregateOutputType | null
    _max: PlayerHeroMaxAggregateOutputType | null
  }

  export type PlayerHeroAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    heroId: number | null
    pricePaid: number | null
  }

  export type PlayerHeroSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    heroId: number | null
    pricePaid: number | null
  }

  export type PlayerHeroMinAggregateOutputType = {
    id: number | null
    playerId: number | null
    heroId: number | null
    currency: $Enums.Currency | null
    pricePaid: number | null
  }

  export type PlayerHeroMaxAggregateOutputType = {
    id: number | null
    playerId: number | null
    heroId: number | null
    currency: $Enums.Currency | null
    pricePaid: number | null
  }

  export type PlayerHeroCountAggregateOutputType = {
    id: number
    playerId: number
    heroId: number
    currency: number
    pricePaid: number
    _all: number
  }


  export type PlayerHeroAvgAggregateInputType = {
    id?: true
    playerId?: true
    heroId?: true
    pricePaid?: true
  }

  export type PlayerHeroSumAggregateInputType = {
    id?: true
    playerId?: true
    heroId?: true
    pricePaid?: true
  }

  export type PlayerHeroMinAggregateInputType = {
    id?: true
    playerId?: true
    heroId?: true
    currency?: true
    pricePaid?: true
  }

  export type PlayerHeroMaxAggregateInputType = {
    id?: true
    playerId?: true
    heroId?: true
    currency?: true
    pricePaid?: true
  }

  export type PlayerHeroCountAggregateInputType = {
    id?: true
    playerId?: true
    heroId?: true
    currency?: true
    pricePaid?: true
    _all?: true
  }

  export type PlayerHeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerHero to aggregate.
     */
    where?: PlayerHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerHeroes to fetch.
     */
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerHeroes
    **/
    _count?: true | PlayerHeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerHeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerHeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerHeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerHeroMaxAggregateInputType
  }

  export type GetPlayerHeroAggregateType<T extends PlayerHeroAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerHero[P]>
      : GetScalarType<T[P], AggregatePlayerHero[P]>
  }




  export type PlayerHeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerHeroWhereInput
    orderBy?: PlayerHeroOrderByWithAggregationInput | PlayerHeroOrderByWithAggregationInput[]
    by: PlayerHeroScalarFieldEnum[] | PlayerHeroScalarFieldEnum
    having?: PlayerHeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerHeroCountAggregateInputType | true
    _avg?: PlayerHeroAvgAggregateInputType
    _sum?: PlayerHeroSumAggregateInputType
    _min?: PlayerHeroMinAggregateInputType
    _max?: PlayerHeroMaxAggregateInputType
  }

  export type PlayerHeroGroupByOutputType = {
    id: number
    playerId: number
    heroId: number
    currency: $Enums.Currency
    pricePaid: number
    _count: PlayerHeroCountAggregateOutputType | null
    _avg: PlayerHeroAvgAggregateOutputType | null
    _sum: PlayerHeroSumAggregateOutputType | null
    _min: PlayerHeroMinAggregateOutputType | null
    _max: PlayerHeroMaxAggregateOutputType | null
  }

  type GetPlayerHeroGroupByPayload<T extends PlayerHeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerHeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerHeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerHeroGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerHeroGroupByOutputType[P]>
        }
      >
    >


  export type PlayerHeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    heroId?: boolean
    currency?: boolean
    pricePaid?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerHero"]>

  export type PlayerHeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    heroId?: boolean
    currency?: boolean
    pricePaid?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerHero"]>

  export type PlayerHeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    heroId?: boolean
    currency?: boolean
    pricePaid?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerHero"]>

  export type PlayerHeroSelectScalar = {
    id?: boolean
    playerId?: boolean
    heroId?: boolean
    currency?: boolean
    pricePaid?: boolean
  }

  export type PlayerHeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "heroId" | "currency" | "pricePaid", ExtArgs["result"]["playerHero"]>
  export type PlayerHeroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type PlayerHeroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }
  export type PlayerHeroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    hero?: boolean | HeroDefaultArgs<ExtArgs>
  }

  export type $PlayerHeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerHero"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      hero: Prisma.$HeroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: number
      heroId: number
      currency: $Enums.Currency
      pricePaid: number
    }, ExtArgs["result"]["playerHero"]>
    composites: {}
  }

  type PlayerHeroGetPayload<S extends boolean | null | undefined | PlayerHeroDefaultArgs> = $Result.GetResult<Prisma.$PlayerHeroPayload, S>

  type PlayerHeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerHeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerHeroCountAggregateInputType | true
    }

  export interface PlayerHeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerHero'], meta: { name: 'PlayerHero' } }
    /**
     * Find zero or one PlayerHero that matches the filter.
     * @param {PlayerHeroFindUniqueArgs} args - Arguments to find a PlayerHero
     * @example
     * // Get one PlayerHero
     * const playerHero = await prisma.playerHero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerHeroFindUniqueArgs>(args: SelectSubset<T, PlayerHeroFindUniqueArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerHero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerHeroFindUniqueOrThrowArgs} args - Arguments to find a PlayerHero
     * @example
     * // Get one PlayerHero
     * const playerHero = await prisma.playerHero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerHeroFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerHeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerHero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroFindFirstArgs} args - Arguments to find a PlayerHero
     * @example
     * // Get one PlayerHero
     * const playerHero = await prisma.playerHero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerHeroFindFirstArgs>(args?: SelectSubset<T, PlayerHeroFindFirstArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerHero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroFindFirstOrThrowArgs} args - Arguments to find a PlayerHero
     * @example
     * // Get one PlayerHero
     * const playerHero = await prisma.playerHero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerHeroFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerHeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerHeroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerHeroes
     * const playerHeroes = await prisma.playerHero.findMany()
     * 
     * // Get first 10 PlayerHeroes
     * const playerHeroes = await prisma.playerHero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerHeroWithIdOnly = await prisma.playerHero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerHeroFindManyArgs>(args?: SelectSubset<T, PlayerHeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerHero.
     * @param {PlayerHeroCreateArgs} args - Arguments to create a PlayerHero.
     * @example
     * // Create one PlayerHero
     * const PlayerHero = await prisma.playerHero.create({
     *   data: {
     *     // ... data to create a PlayerHero
     *   }
     * })
     * 
     */
    create<T extends PlayerHeroCreateArgs>(args: SelectSubset<T, PlayerHeroCreateArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerHeroes.
     * @param {PlayerHeroCreateManyArgs} args - Arguments to create many PlayerHeroes.
     * @example
     * // Create many PlayerHeroes
     * const playerHero = await prisma.playerHero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerHeroCreateManyArgs>(args?: SelectSubset<T, PlayerHeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerHeroes and returns the data saved in the database.
     * @param {PlayerHeroCreateManyAndReturnArgs} args - Arguments to create many PlayerHeroes.
     * @example
     * // Create many PlayerHeroes
     * const playerHero = await prisma.playerHero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerHeroes and only return the `id`
     * const playerHeroWithIdOnly = await prisma.playerHero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerHeroCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerHeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerHero.
     * @param {PlayerHeroDeleteArgs} args - Arguments to delete one PlayerHero.
     * @example
     * // Delete one PlayerHero
     * const PlayerHero = await prisma.playerHero.delete({
     *   where: {
     *     // ... filter to delete one PlayerHero
     *   }
     * })
     * 
     */
    delete<T extends PlayerHeroDeleteArgs>(args: SelectSubset<T, PlayerHeroDeleteArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerHero.
     * @param {PlayerHeroUpdateArgs} args - Arguments to update one PlayerHero.
     * @example
     * // Update one PlayerHero
     * const playerHero = await prisma.playerHero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerHeroUpdateArgs>(args: SelectSubset<T, PlayerHeroUpdateArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerHeroes.
     * @param {PlayerHeroDeleteManyArgs} args - Arguments to filter PlayerHeroes to delete.
     * @example
     * // Delete a few PlayerHeroes
     * const { count } = await prisma.playerHero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerHeroDeleteManyArgs>(args?: SelectSubset<T, PlayerHeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerHeroes
     * const playerHero = await prisma.playerHero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerHeroUpdateManyArgs>(args: SelectSubset<T, PlayerHeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerHeroes and returns the data updated in the database.
     * @param {PlayerHeroUpdateManyAndReturnArgs} args - Arguments to update many PlayerHeroes.
     * @example
     * // Update many PlayerHeroes
     * const playerHero = await prisma.playerHero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerHeroes and only return the `id`
     * const playerHeroWithIdOnly = await prisma.playerHero.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerHeroUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerHeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerHero.
     * @param {PlayerHeroUpsertArgs} args - Arguments to update or create a PlayerHero.
     * @example
     * // Update or create a PlayerHero
     * const playerHero = await prisma.playerHero.upsert({
     *   create: {
     *     // ... data to create a PlayerHero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerHero we want to update
     *   }
     * })
     */
    upsert<T extends PlayerHeroUpsertArgs>(args: SelectSubset<T, PlayerHeroUpsertArgs<ExtArgs>>): Prisma__PlayerHeroClient<$Result.GetResult<Prisma.$PlayerHeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerHeroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroCountArgs} args - Arguments to filter PlayerHeroes to count.
     * @example
     * // Count the number of PlayerHeroes
     * const count = await prisma.playerHero.count({
     *   where: {
     *     // ... the filter for the PlayerHeroes we want to count
     *   }
     * })
    **/
    count<T extends PlayerHeroCountArgs>(
      args?: Subset<T, PlayerHeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerHeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerHeroAggregateArgs>(args: Subset<T, PlayerHeroAggregateArgs>): Prisma.PrismaPromise<GetPlayerHeroAggregateType<T>>

    /**
     * Group by PlayerHero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerHeroGroupByArgs} args - Group by arguments.
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
      T extends PlayerHeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerHeroGroupByArgs['orderBy'] }
        : { orderBy?: PlayerHeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerHeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerHero model
   */
  readonly fields: PlayerHeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerHero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerHeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hero<T extends HeroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeroDefaultArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayerHero model
   */
  interface PlayerHeroFieldRefs {
    readonly id: FieldRef<"PlayerHero", 'Int'>
    readonly playerId: FieldRef<"PlayerHero", 'Int'>
    readonly heroId: FieldRef<"PlayerHero", 'Int'>
    readonly currency: FieldRef<"PlayerHero", 'Currency'>
    readonly pricePaid: FieldRef<"PlayerHero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlayerHero findUnique
   */
  export type PlayerHeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter, which PlayerHero to fetch.
     */
    where: PlayerHeroWhereUniqueInput
  }

  /**
   * PlayerHero findUniqueOrThrow
   */
  export type PlayerHeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter, which PlayerHero to fetch.
     */
    where: PlayerHeroWhereUniqueInput
  }

  /**
   * PlayerHero findFirst
   */
  export type PlayerHeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter, which PlayerHero to fetch.
     */
    where?: PlayerHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerHeroes to fetch.
     */
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerHeroes.
     */
    cursor?: PlayerHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerHeroes.
     */
    distinct?: PlayerHeroScalarFieldEnum | PlayerHeroScalarFieldEnum[]
  }

  /**
   * PlayerHero findFirstOrThrow
   */
  export type PlayerHeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter, which PlayerHero to fetch.
     */
    where?: PlayerHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerHeroes to fetch.
     */
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerHeroes.
     */
    cursor?: PlayerHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerHeroes.
     */
    distinct?: PlayerHeroScalarFieldEnum | PlayerHeroScalarFieldEnum[]
  }

  /**
   * PlayerHero findMany
   */
  export type PlayerHeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter, which PlayerHeroes to fetch.
     */
    where?: PlayerHeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerHeroes to fetch.
     */
    orderBy?: PlayerHeroOrderByWithRelationInput | PlayerHeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerHeroes.
     */
    cursor?: PlayerHeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerHeroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerHeroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerHeroes.
     */
    distinct?: PlayerHeroScalarFieldEnum | PlayerHeroScalarFieldEnum[]
  }

  /**
   * PlayerHero create
   */
  export type PlayerHeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerHero.
     */
    data: XOR<PlayerHeroCreateInput, PlayerHeroUncheckedCreateInput>
  }

  /**
   * PlayerHero createMany
   */
  export type PlayerHeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerHeroes.
     */
    data: PlayerHeroCreateManyInput | PlayerHeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerHero createManyAndReturn
   */
  export type PlayerHeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerHeroes.
     */
    data: PlayerHeroCreateManyInput | PlayerHeroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerHero update
   */
  export type PlayerHeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerHero.
     */
    data: XOR<PlayerHeroUpdateInput, PlayerHeroUncheckedUpdateInput>
    /**
     * Choose, which PlayerHero to update.
     */
    where: PlayerHeroWhereUniqueInput
  }

  /**
   * PlayerHero updateMany
   */
  export type PlayerHeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerHeroes.
     */
    data: XOR<PlayerHeroUpdateManyMutationInput, PlayerHeroUncheckedUpdateManyInput>
    /**
     * Filter which PlayerHeroes to update
     */
    where?: PlayerHeroWhereInput
    /**
     * Limit how many PlayerHeroes to update.
     */
    limit?: number
  }

  /**
   * PlayerHero updateManyAndReturn
   */
  export type PlayerHeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * The data used to update PlayerHeroes.
     */
    data: XOR<PlayerHeroUpdateManyMutationInput, PlayerHeroUncheckedUpdateManyInput>
    /**
     * Filter which PlayerHeroes to update
     */
    where?: PlayerHeroWhereInput
    /**
     * Limit how many PlayerHeroes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerHero upsert
   */
  export type PlayerHeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerHero to update in case it exists.
     */
    where: PlayerHeroWhereUniqueInput
    /**
     * In case the PlayerHero found by the `where` argument doesn't exist, create a new PlayerHero with this data.
     */
    create: XOR<PlayerHeroCreateInput, PlayerHeroUncheckedCreateInput>
    /**
     * In case the PlayerHero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerHeroUpdateInput, PlayerHeroUncheckedUpdateInput>
  }

  /**
   * PlayerHero delete
   */
  export type PlayerHeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
    /**
     * Filter which PlayerHero to delete.
     */
    where: PlayerHeroWhereUniqueInput
  }

  /**
   * PlayerHero deleteMany
   */
  export type PlayerHeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerHeroes to delete
     */
    where?: PlayerHeroWhereInput
    /**
     * Limit how many PlayerHeroes to delete.
     */
    limit?: number
  }

  /**
   * PlayerHero without action
   */
  export type PlayerHeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerHero
     */
    select?: PlayerHeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerHero
     */
    omit?: PlayerHeroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerHeroInclude<ExtArgs> | null
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


  export const HeroScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    lane: 'lane',
    releaseYear: 'releaseYear',
    priceBP: 'priceBP',
    priceDiamond: 'priceDiamond'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const SkinScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rarity: 'rarity',
    priceDiamond: 'priceDiamond',
    heroId: 'heroId'
  };

  export type SkinScalarFieldEnum = (typeof SkinScalarFieldEnum)[keyof typeof SkinScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    bp: 'bp',
    diamond: 'diamond',
    createdAt: 'createdAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PlayerHeroScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    heroId: 'heroId',
    currency: 'currency',
    pricePaid: 'pricePaid'
  };

  export type PlayerHeroScalarFieldEnum = (typeof PlayerHeroScalarFieldEnum)[keyof typeof PlayerHeroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Lane'
   */
  export type EnumLaneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lane'>
    


  /**
   * Reference to a field of type 'Lane[]'
   */
  export type ListEnumLaneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Lane[]'>
    


  /**
   * Reference to a field of type 'Rarity'
   */
  export type EnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity'>
    


  /**
   * Reference to a field of type 'Rarity[]'
   */
  export type ListEnumRarityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rarity[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: IntFilter<"Hero"> | number
    name?: StringFilter<"Hero"> | string
    role?: EnumRoleFilter<"Hero"> | $Enums.Role
    lane?: EnumLaneFilter<"Hero"> | $Enums.Lane
    releaseYear?: IntFilter<"Hero"> | number
    priceBP?: IntNullableFilter<"Hero"> | number | null
    priceDiamond?: IntNullableFilter<"Hero"> | number | null
    skins?: SkinListRelationFilter
    playerHeroes?: PlayerHeroListRelationFilter
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lane?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrderInput | SortOrder
    priceDiamond?: SortOrderInput | SortOrder
    skins?: SkinOrderByRelationAggregateInput
    playerHeroes?: PlayerHeroOrderByRelationAggregateInput
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    role?: EnumRoleFilter<"Hero"> | $Enums.Role
    lane?: EnumLaneFilter<"Hero"> | $Enums.Lane
    releaseYear?: IntFilter<"Hero"> | number
    priceBP?: IntNullableFilter<"Hero"> | number | null
    priceDiamond?: IntNullableFilter<"Hero"> | number | null
    skins?: SkinListRelationFilter
    playerHeroes?: PlayerHeroListRelationFilter
  }, "id" | "name">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lane?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrderInput | SortOrder
    priceDiamond?: SortOrderInput | SortOrder
    _count?: HeroCountOrderByAggregateInput
    _avg?: HeroAvgOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
    _sum?: HeroSumOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hero"> | number
    name?: StringWithAggregatesFilter<"Hero"> | string
    role?: EnumRoleWithAggregatesFilter<"Hero"> | $Enums.Role
    lane?: EnumLaneWithAggregatesFilter<"Hero"> | $Enums.Lane
    releaseYear?: IntWithAggregatesFilter<"Hero"> | number
    priceBP?: IntNullableWithAggregatesFilter<"Hero"> | number | null
    priceDiamond?: IntNullableWithAggregatesFilter<"Hero"> | number | null
  }

  export type SkinWhereInput = {
    AND?: SkinWhereInput | SkinWhereInput[]
    OR?: SkinWhereInput[]
    NOT?: SkinWhereInput | SkinWhereInput[]
    id?: IntFilter<"Skin"> | number
    name?: StringFilter<"Skin"> | string
    rarity?: EnumRarityFilter<"Skin"> | $Enums.Rarity
    priceDiamond?: IntNullableFilter<"Skin"> | number | null
    heroId?: IntFilter<"Skin"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }

  export type SkinOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    priceDiamond?: SortOrderInput | SortOrder
    heroId?: SortOrder
    hero?: HeroOrderByWithRelationInput
  }

  export type SkinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SkinWhereInput | SkinWhereInput[]
    OR?: SkinWhereInput[]
    NOT?: SkinWhereInput | SkinWhereInput[]
    name?: StringFilter<"Skin"> | string
    rarity?: EnumRarityFilter<"Skin"> | $Enums.Rarity
    priceDiamond?: IntNullableFilter<"Skin"> | number | null
    heroId?: IntFilter<"Skin"> | number
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }, "id">

  export type SkinOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    priceDiamond?: SortOrderInput | SortOrder
    heroId?: SortOrder
    _count?: SkinCountOrderByAggregateInput
    _avg?: SkinAvgOrderByAggregateInput
    _max?: SkinMaxOrderByAggregateInput
    _min?: SkinMinOrderByAggregateInput
    _sum?: SkinSumOrderByAggregateInput
  }

  export type SkinScalarWhereWithAggregatesInput = {
    AND?: SkinScalarWhereWithAggregatesInput | SkinScalarWhereWithAggregatesInput[]
    OR?: SkinScalarWhereWithAggregatesInput[]
    NOT?: SkinScalarWhereWithAggregatesInput | SkinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Skin"> | number
    name?: StringWithAggregatesFilter<"Skin"> | string
    rarity?: EnumRarityWithAggregatesFilter<"Skin"> | $Enums.Rarity
    priceDiamond?: IntNullableWithAggregatesFilter<"Skin"> | number | null
    heroId?: IntWithAggregatesFilter<"Skin"> | number
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    nickname?: StringFilter<"Player"> | string
    bp?: IntFilter<"Player"> | number
    diamond?: IntFilter<"Player"> | number
    createdAt?: DateTimeFilter<"Player"> | Date | string
    heroes?: PlayerHeroListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
    createdAt?: SortOrder
    heroes?: PlayerHeroOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nickname?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    bp?: IntFilter<"Player"> | number
    diamond?: IntFilter<"Player"> | number
    createdAt?: DateTimeFilter<"Player"> | Date | string
    heroes?: PlayerHeroListRelationFilter
  }, "id" | "nickname">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    nickname?: StringWithAggregatesFilter<"Player"> | string
    bp?: IntWithAggregatesFilter<"Player"> | number
    diamond?: IntWithAggregatesFilter<"Player"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type PlayerHeroWhereInput = {
    AND?: PlayerHeroWhereInput | PlayerHeroWhereInput[]
    OR?: PlayerHeroWhereInput[]
    NOT?: PlayerHeroWhereInput | PlayerHeroWhereInput[]
    id?: IntFilter<"PlayerHero"> | number
    playerId?: IntFilter<"PlayerHero"> | number
    heroId?: IntFilter<"PlayerHero"> | number
    currency?: EnumCurrencyFilter<"PlayerHero"> | $Enums.Currency
    pricePaid?: IntFilter<"PlayerHero"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }

  export type PlayerHeroOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    currency?: SortOrder
    pricePaid?: SortOrder
    player?: PlayerOrderByWithRelationInput
    hero?: HeroOrderByWithRelationInput
  }

  export type PlayerHeroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerId_heroId?: PlayerHeroPlayerIdHeroIdCompoundUniqueInput
    AND?: PlayerHeroWhereInput | PlayerHeroWhereInput[]
    OR?: PlayerHeroWhereInput[]
    NOT?: PlayerHeroWhereInput | PlayerHeroWhereInput[]
    playerId?: IntFilter<"PlayerHero"> | number
    heroId?: IntFilter<"PlayerHero"> | number
    currency?: EnumCurrencyFilter<"PlayerHero"> | $Enums.Currency
    pricePaid?: IntFilter<"PlayerHero"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    hero?: XOR<HeroScalarRelationFilter, HeroWhereInput>
  }, "id" | "playerId_heroId">

  export type PlayerHeroOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    currency?: SortOrder
    pricePaid?: SortOrder
    _count?: PlayerHeroCountOrderByAggregateInput
    _avg?: PlayerHeroAvgOrderByAggregateInput
    _max?: PlayerHeroMaxOrderByAggregateInput
    _min?: PlayerHeroMinOrderByAggregateInput
    _sum?: PlayerHeroSumOrderByAggregateInput
  }

  export type PlayerHeroScalarWhereWithAggregatesInput = {
    AND?: PlayerHeroScalarWhereWithAggregatesInput | PlayerHeroScalarWhereWithAggregatesInput[]
    OR?: PlayerHeroScalarWhereWithAggregatesInput[]
    NOT?: PlayerHeroScalarWhereWithAggregatesInput | PlayerHeroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlayerHero"> | number
    playerId?: IntWithAggregatesFilter<"PlayerHero"> | number
    heroId?: IntWithAggregatesFilter<"PlayerHero"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"PlayerHero"> | $Enums.Currency
    pricePaid?: IntWithAggregatesFilter<"PlayerHero"> | number
  }

  export type HeroCreateInput = {
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    skins?: SkinCreateNestedManyWithoutHeroInput
    playerHeroes?: PlayerHeroCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateInput = {
    id?: number
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    skins?: SkinUncheckedCreateNestedManyWithoutHeroInput
    playerHeroes?: PlayerHeroUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    skins?: SkinUpdateManyWithoutHeroNestedInput
    playerHeroes?: PlayerHeroUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    skins?: SkinUncheckedUpdateManyWithoutHeroNestedInput
    playerHeroes?: PlayerHeroUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type HeroCreateManyInput = {
    id?: number
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
  }

  export type HeroUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkinCreateInput = {
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
    hero: HeroCreateNestedOneWithoutSkinsInput
  }

  export type SkinUncheckedCreateInput = {
    id?: number
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
    heroId: number
  }

  export type SkinUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    hero?: HeroUpdateOneRequiredWithoutSkinsNestedInput
  }

  export type SkinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    heroId?: IntFieldUpdateOperationsInput | number
  }

  export type SkinCreateManyInput = {
    id?: number
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
    heroId: number
  }

  export type SkinUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    heroId?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerCreateInput = {
    nickname: string
    bp?: number
    diamond?: number
    createdAt?: Date | string
    heroes?: PlayerHeroCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    nickname: string
    bp?: number
    diamond?: number
    createdAt?: Date | string
    heroes?: PlayerHeroUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroes?: PlayerHeroUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    heroes?: PlayerHeroUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    nickname: string
    bp?: number
    diamond?: number
    createdAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerHeroCreateInput = {
    currency: $Enums.Currency
    pricePaid: number
    player: PlayerCreateNestedOneWithoutHeroesInput
    hero: HeroCreateNestedOneWithoutPlayerHeroesInput
  }

  export type PlayerHeroUncheckedCreateInput = {
    id?: number
    playerId: number
    heroId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type PlayerHeroUpdateInput = {
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
    player?: PlayerUpdateOneRequiredWithoutHeroesNestedInput
    hero?: HeroUpdateOneRequiredWithoutPlayerHeroesNestedInput
  }

  export type PlayerHeroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerHeroCreateManyInput = {
    id?: number
    playerId: number
    heroId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type PlayerHeroUpdateManyMutationInput = {
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerHeroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumLaneFilter<$PrismaModel = never> = {
    equals?: $Enums.Lane | EnumLaneFieldRefInput<$PrismaModel>
    in?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    not?: NestedEnumLaneFilter<$PrismaModel> | $Enums.Lane
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

  export type SkinListRelationFilter = {
    every?: SkinWhereInput
    some?: SkinWhereInput
    none?: SkinWhereInput
  }

  export type PlayerHeroListRelationFilter = {
    every?: PlayerHeroWhereInput
    some?: PlayerHeroWhereInput
    none?: PlayerHeroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerHeroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lane?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrder
    priceDiamond?: SortOrder
  }

  export type HeroAvgOrderByAggregateInput = {
    id?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrder
    priceDiamond?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lane?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrder
    priceDiamond?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    lane?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrder
    priceDiamond?: SortOrder
  }

  export type HeroSumOrderByAggregateInput = {
    id?: SortOrder
    releaseYear?: SortOrder
    priceBP?: SortOrder
    priceDiamond?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumLaneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lane | EnumLaneFieldRefInput<$PrismaModel>
    in?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    not?: NestedEnumLaneWithAggregatesFilter<$PrismaModel> | $Enums.Lane
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaneFilter<$PrismaModel>
    _max?: NestedEnumLaneFilter<$PrismaModel>
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

  export type EnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type HeroScalarRelationFilter = {
    is?: HeroWhereInput
    isNot?: HeroWhereInput
  }

  export type SkinCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    priceDiamond?: SortOrder
    heroId?: SortOrder
  }

  export type SkinAvgOrderByAggregateInput = {
    id?: SortOrder
    priceDiamond?: SortOrder
    heroId?: SortOrder
  }

  export type SkinMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    priceDiamond?: SortOrder
    heroId?: SortOrder
  }

  export type SkinMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rarity?: SortOrder
    priceDiamond?: SortOrder
    heroId?: SortOrder
  }

  export type SkinSumOrderByAggregateInput = {
    id?: SortOrder
    priceDiamond?: SortOrder
    heroId?: SortOrder
  }

  export type EnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
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

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
    bp?: SortOrder
    diamond?: SortOrder
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

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type PlayerHeroPlayerIdHeroIdCompoundUniqueInput = {
    playerId: number
    heroId: number
  }

  export type PlayerHeroCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    currency?: SortOrder
    pricePaid?: SortOrder
  }

  export type PlayerHeroAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    pricePaid?: SortOrder
  }

  export type PlayerHeroMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    currency?: SortOrder
    pricePaid?: SortOrder
  }

  export type PlayerHeroMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    currency?: SortOrder
    pricePaid?: SortOrder
  }

  export type PlayerHeroSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    heroId?: SortOrder
    pricePaid?: SortOrder
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type SkinCreateNestedManyWithoutHeroInput = {
    create?: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput> | SkinCreateWithoutHeroInput[] | SkinUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutHeroInput | SkinCreateOrConnectWithoutHeroInput[]
    createMany?: SkinCreateManyHeroInputEnvelope
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
  }

  export type PlayerHeroCreateNestedManyWithoutHeroInput = {
    create?: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput> | PlayerHeroCreateWithoutHeroInput[] | PlayerHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutHeroInput | PlayerHeroCreateOrConnectWithoutHeroInput[]
    createMany?: PlayerHeroCreateManyHeroInputEnvelope
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
  }

  export type SkinUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput> | SkinCreateWithoutHeroInput[] | SkinUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutHeroInput | SkinCreateOrConnectWithoutHeroInput[]
    createMany?: SkinCreateManyHeroInputEnvelope
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
  }

  export type PlayerHeroUncheckedCreateNestedManyWithoutHeroInput = {
    create?: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput> | PlayerHeroCreateWithoutHeroInput[] | PlayerHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutHeroInput | PlayerHeroCreateOrConnectWithoutHeroInput[]
    createMany?: PlayerHeroCreateManyHeroInputEnvelope
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumLaneFieldUpdateOperationsInput = {
    set?: $Enums.Lane
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SkinUpdateManyWithoutHeroNestedInput = {
    create?: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput> | SkinCreateWithoutHeroInput[] | SkinUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutHeroInput | SkinCreateOrConnectWithoutHeroInput[]
    upsert?: SkinUpsertWithWhereUniqueWithoutHeroInput | SkinUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: SkinCreateManyHeroInputEnvelope
    set?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    disconnect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    delete?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    update?: SkinUpdateWithWhereUniqueWithoutHeroInput | SkinUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: SkinUpdateManyWithWhereWithoutHeroInput | SkinUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: SkinScalarWhereInput | SkinScalarWhereInput[]
  }

  export type PlayerHeroUpdateManyWithoutHeroNestedInput = {
    create?: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput> | PlayerHeroCreateWithoutHeroInput[] | PlayerHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutHeroInput | PlayerHeroCreateOrConnectWithoutHeroInput[]
    upsert?: PlayerHeroUpsertWithWhereUniqueWithoutHeroInput | PlayerHeroUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: PlayerHeroCreateManyHeroInputEnvelope
    set?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    disconnect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    delete?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    update?: PlayerHeroUpdateWithWhereUniqueWithoutHeroInput | PlayerHeroUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: PlayerHeroUpdateManyWithWhereWithoutHeroInput | PlayerHeroUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
  }

  export type SkinUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput> | SkinCreateWithoutHeroInput[] | SkinUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: SkinCreateOrConnectWithoutHeroInput | SkinCreateOrConnectWithoutHeroInput[]
    upsert?: SkinUpsertWithWhereUniqueWithoutHeroInput | SkinUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: SkinCreateManyHeroInputEnvelope
    set?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    disconnect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    delete?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    connect?: SkinWhereUniqueInput | SkinWhereUniqueInput[]
    update?: SkinUpdateWithWhereUniqueWithoutHeroInput | SkinUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: SkinUpdateManyWithWhereWithoutHeroInput | SkinUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: SkinScalarWhereInput | SkinScalarWhereInput[]
  }

  export type PlayerHeroUncheckedUpdateManyWithoutHeroNestedInput = {
    create?: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput> | PlayerHeroCreateWithoutHeroInput[] | PlayerHeroUncheckedCreateWithoutHeroInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutHeroInput | PlayerHeroCreateOrConnectWithoutHeroInput[]
    upsert?: PlayerHeroUpsertWithWhereUniqueWithoutHeroInput | PlayerHeroUpsertWithWhereUniqueWithoutHeroInput[]
    createMany?: PlayerHeroCreateManyHeroInputEnvelope
    set?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    disconnect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    delete?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    update?: PlayerHeroUpdateWithWhereUniqueWithoutHeroInput | PlayerHeroUpdateWithWhereUniqueWithoutHeroInput[]
    updateMany?: PlayerHeroUpdateManyWithWhereWithoutHeroInput | PlayerHeroUpdateManyWithWhereWithoutHeroInput[]
    deleteMany?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
  }

  export type HeroCreateNestedOneWithoutSkinsInput = {
    create?: XOR<HeroCreateWithoutSkinsInput, HeroUncheckedCreateWithoutSkinsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutSkinsInput
    connect?: HeroWhereUniqueInput
  }

  export type EnumRarityFieldUpdateOperationsInput = {
    set?: $Enums.Rarity
  }

  export type HeroUpdateOneRequiredWithoutSkinsNestedInput = {
    create?: XOR<HeroCreateWithoutSkinsInput, HeroUncheckedCreateWithoutSkinsInput>
    connectOrCreate?: HeroCreateOrConnectWithoutSkinsInput
    upsert?: HeroUpsertWithoutSkinsInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutSkinsInput, HeroUpdateWithoutSkinsInput>, HeroUncheckedUpdateWithoutSkinsInput>
  }

  export type PlayerHeroCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput> | PlayerHeroCreateWithoutPlayerInput[] | PlayerHeroUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutPlayerInput | PlayerHeroCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerHeroCreateManyPlayerInputEnvelope
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
  }

  export type PlayerHeroUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput> | PlayerHeroCreateWithoutPlayerInput[] | PlayerHeroUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutPlayerInput | PlayerHeroCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerHeroCreateManyPlayerInputEnvelope
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayerHeroUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput> | PlayerHeroCreateWithoutPlayerInput[] | PlayerHeroUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutPlayerInput | PlayerHeroCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerHeroUpsertWithWhereUniqueWithoutPlayerInput | PlayerHeroUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerHeroCreateManyPlayerInputEnvelope
    set?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    disconnect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    delete?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    update?: PlayerHeroUpdateWithWhereUniqueWithoutPlayerInput | PlayerHeroUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerHeroUpdateManyWithWhereWithoutPlayerInput | PlayerHeroUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
  }

  export type PlayerHeroUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput> | PlayerHeroCreateWithoutPlayerInput[] | PlayerHeroUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerHeroCreateOrConnectWithoutPlayerInput | PlayerHeroCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerHeroUpsertWithWhereUniqueWithoutPlayerInput | PlayerHeroUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerHeroCreateManyPlayerInputEnvelope
    set?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    disconnect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    delete?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    connect?: PlayerHeroWhereUniqueInput | PlayerHeroWhereUniqueInput[]
    update?: PlayerHeroUpdateWithWhereUniqueWithoutPlayerInput | PlayerHeroUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerHeroUpdateManyWithWhereWithoutPlayerInput | PlayerHeroUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutHeroesInput = {
    create?: XOR<PlayerCreateWithoutHeroesInput, PlayerUncheckedCreateWithoutHeroesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHeroesInput
    connect?: PlayerWhereUniqueInput
  }

  export type HeroCreateNestedOneWithoutPlayerHeroesInput = {
    create?: XOR<HeroCreateWithoutPlayerHeroesInput, HeroUncheckedCreateWithoutPlayerHeroesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutPlayerHeroesInput
    connect?: HeroWhereUniqueInput
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type PlayerUpdateOneRequiredWithoutHeroesNestedInput = {
    create?: XOR<PlayerCreateWithoutHeroesInput, PlayerUncheckedCreateWithoutHeroesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutHeroesInput
    upsert?: PlayerUpsertWithoutHeroesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutHeroesInput, PlayerUpdateWithoutHeroesInput>, PlayerUncheckedUpdateWithoutHeroesInput>
  }

  export type HeroUpdateOneRequiredWithoutPlayerHeroesNestedInput = {
    create?: XOR<HeroCreateWithoutPlayerHeroesInput, HeroUncheckedCreateWithoutPlayerHeroesInput>
    connectOrCreate?: HeroCreateOrConnectWithoutPlayerHeroesInput
    upsert?: HeroUpsertWithoutPlayerHeroesInput
    connect?: HeroWhereUniqueInput
    update?: XOR<XOR<HeroUpdateToOneWithWhereWithoutPlayerHeroesInput, HeroUpdateWithoutPlayerHeroesInput>, HeroUncheckedUpdateWithoutPlayerHeroesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumLaneFilter<$PrismaModel = never> = {
    equals?: $Enums.Lane | EnumLaneFieldRefInput<$PrismaModel>
    in?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    not?: NestedEnumLaneFilter<$PrismaModel> | $Enums.Lane
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumLaneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Lane | EnumLaneFieldRefInput<$PrismaModel>
    in?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    notIn?: $Enums.Lane[] | ListEnumLaneFieldRefInput<$PrismaModel>
    not?: NestedEnumLaneWithAggregatesFilter<$PrismaModel> | $Enums.Lane
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaneFilter<$PrismaModel>
    _max?: NestedEnumLaneFilter<$PrismaModel>
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

  export type NestedEnumRarityFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityFilter<$PrismaModel> | $Enums.Rarity
  }

  export type NestedEnumRarityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rarity | EnumRarityFieldRefInput<$PrismaModel>
    in?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rarity[] | ListEnumRarityFieldRefInput<$PrismaModel>
    not?: NestedEnumRarityWithAggregatesFilter<$PrismaModel> | $Enums.Rarity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRarityFilter<$PrismaModel>
    _max?: NestedEnumRarityFilter<$PrismaModel>
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

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type SkinCreateWithoutHeroInput = {
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
  }

  export type SkinUncheckedCreateWithoutHeroInput = {
    id?: number
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
  }

  export type SkinCreateOrConnectWithoutHeroInput = {
    where: SkinWhereUniqueInput
    create: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput>
  }

  export type SkinCreateManyHeroInputEnvelope = {
    data: SkinCreateManyHeroInput | SkinCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type PlayerHeroCreateWithoutHeroInput = {
    currency: $Enums.Currency
    pricePaid: number
    player: PlayerCreateNestedOneWithoutHeroesInput
  }

  export type PlayerHeroUncheckedCreateWithoutHeroInput = {
    id?: number
    playerId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type PlayerHeroCreateOrConnectWithoutHeroInput = {
    where: PlayerHeroWhereUniqueInput
    create: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput>
  }

  export type PlayerHeroCreateManyHeroInputEnvelope = {
    data: PlayerHeroCreateManyHeroInput | PlayerHeroCreateManyHeroInput[]
    skipDuplicates?: boolean
  }

  export type SkinUpsertWithWhereUniqueWithoutHeroInput = {
    where: SkinWhereUniqueInput
    update: XOR<SkinUpdateWithoutHeroInput, SkinUncheckedUpdateWithoutHeroInput>
    create: XOR<SkinCreateWithoutHeroInput, SkinUncheckedCreateWithoutHeroInput>
  }

  export type SkinUpdateWithWhereUniqueWithoutHeroInput = {
    where: SkinWhereUniqueInput
    data: XOR<SkinUpdateWithoutHeroInput, SkinUncheckedUpdateWithoutHeroInput>
  }

  export type SkinUpdateManyWithWhereWithoutHeroInput = {
    where: SkinScalarWhereInput
    data: XOR<SkinUpdateManyMutationInput, SkinUncheckedUpdateManyWithoutHeroInput>
  }

  export type SkinScalarWhereInput = {
    AND?: SkinScalarWhereInput | SkinScalarWhereInput[]
    OR?: SkinScalarWhereInput[]
    NOT?: SkinScalarWhereInput | SkinScalarWhereInput[]
    id?: IntFilter<"Skin"> | number
    name?: StringFilter<"Skin"> | string
    rarity?: EnumRarityFilter<"Skin"> | $Enums.Rarity
    priceDiamond?: IntNullableFilter<"Skin"> | number | null
    heroId?: IntFilter<"Skin"> | number
  }

  export type PlayerHeroUpsertWithWhereUniqueWithoutHeroInput = {
    where: PlayerHeroWhereUniqueInput
    update: XOR<PlayerHeroUpdateWithoutHeroInput, PlayerHeroUncheckedUpdateWithoutHeroInput>
    create: XOR<PlayerHeroCreateWithoutHeroInput, PlayerHeroUncheckedCreateWithoutHeroInput>
  }

  export type PlayerHeroUpdateWithWhereUniqueWithoutHeroInput = {
    where: PlayerHeroWhereUniqueInput
    data: XOR<PlayerHeroUpdateWithoutHeroInput, PlayerHeroUncheckedUpdateWithoutHeroInput>
  }

  export type PlayerHeroUpdateManyWithWhereWithoutHeroInput = {
    where: PlayerHeroScalarWhereInput
    data: XOR<PlayerHeroUpdateManyMutationInput, PlayerHeroUncheckedUpdateManyWithoutHeroInput>
  }

  export type PlayerHeroScalarWhereInput = {
    AND?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
    OR?: PlayerHeroScalarWhereInput[]
    NOT?: PlayerHeroScalarWhereInput | PlayerHeroScalarWhereInput[]
    id?: IntFilter<"PlayerHero"> | number
    playerId?: IntFilter<"PlayerHero"> | number
    heroId?: IntFilter<"PlayerHero"> | number
    currency?: EnumCurrencyFilter<"PlayerHero"> | $Enums.Currency
    pricePaid?: IntFilter<"PlayerHero"> | number
  }

  export type HeroCreateWithoutSkinsInput = {
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    playerHeroes?: PlayerHeroCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutSkinsInput = {
    id?: number
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    playerHeroes?: PlayerHeroUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutSkinsInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutSkinsInput, HeroUncheckedCreateWithoutSkinsInput>
  }

  export type HeroUpsertWithoutSkinsInput = {
    update: XOR<HeroUpdateWithoutSkinsInput, HeroUncheckedUpdateWithoutSkinsInput>
    create: XOR<HeroCreateWithoutSkinsInput, HeroUncheckedCreateWithoutSkinsInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutSkinsInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutSkinsInput, HeroUncheckedUpdateWithoutSkinsInput>
  }

  export type HeroUpdateWithoutSkinsInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    playerHeroes?: PlayerHeroUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutSkinsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    playerHeroes?: PlayerHeroUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type PlayerHeroCreateWithoutPlayerInput = {
    currency: $Enums.Currency
    pricePaid: number
    hero: HeroCreateNestedOneWithoutPlayerHeroesInput
  }

  export type PlayerHeroUncheckedCreateWithoutPlayerInput = {
    id?: number
    heroId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type PlayerHeroCreateOrConnectWithoutPlayerInput = {
    where: PlayerHeroWhereUniqueInput
    create: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerHeroCreateManyPlayerInputEnvelope = {
    data: PlayerHeroCreateManyPlayerInput | PlayerHeroCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerHeroUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerHeroWhereUniqueInput
    update: XOR<PlayerHeroUpdateWithoutPlayerInput, PlayerHeroUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerHeroCreateWithoutPlayerInput, PlayerHeroUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerHeroUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerHeroWhereUniqueInput
    data: XOR<PlayerHeroUpdateWithoutPlayerInput, PlayerHeroUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerHeroUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerHeroScalarWhereInput
    data: XOR<PlayerHeroUpdateManyMutationInput, PlayerHeroUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerCreateWithoutHeroesInput = {
    nickname: string
    bp?: number
    diamond?: number
    createdAt?: Date | string
  }

  export type PlayerUncheckedCreateWithoutHeroesInput = {
    id?: number
    nickname: string
    bp?: number
    diamond?: number
    createdAt?: Date | string
  }

  export type PlayerCreateOrConnectWithoutHeroesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutHeroesInput, PlayerUncheckedCreateWithoutHeroesInput>
  }

  export type HeroCreateWithoutPlayerHeroesInput = {
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    skins?: SkinCreateNestedManyWithoutHeroInput
  }

  export type HeroUncheckedCreateWithoutPlayerHeroesInput = {
    id?: number
    name: string
    role: $Enums.Role
    lane: $Enums.Lane
    releaseYear: number
    priceBP?: number | null
    priceDiamond?: number | null
    skins?: SkinUncheckedCreateNestedManyWithoutHeroInput
  }

  export type HeroCreateOrConnectWithoutPlayerHeroesInput = {
    where: HeroWhereUniqueInput
    create: XOR<HeroCreateWithoutPlayerHeroesInput, HeroUncheckedCreateWithoutPlayerHeroesInput>
  }

  export type PlayerUpsertWithoutHeroesInput = {
    update: XOR<PlayerUpdateWithoutHeroesInput, PlayerUncheckedUpdateWithoutHeroesInput>
    create: XOR<PlayerCreateWithoutHeroesInput, PlayerUncheckedCreateWithoutHeroesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutHeroesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutHeroesInput, PlayerUncheckedUpdateWithoutHeroesInput>
  }

  export type PlayerUpdateWithoutHeroesInput = {
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateWithoutHeroesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nickname?: StringFieldUpdateOperationsInput | string
    bp?: IntFieldUpdateOperationsInput | number
    diamond?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUpsertWithoutPlayerHeroesInput = {
    update: XOR<HeroUpdateWithoutPlayerHeroesInput, HeroUncheckedUpdateWithoutPlayerHeroesInput>
    create: XOR<HeroCreateWithoutPlayerHeroesInput, HeroUncheckedCreateWithoutPlayerHeroesInput>
    where?: HeroWhereInput
  }

  export type HeroUpdateToOneWithWhereWithoutPlayerHeroesInput = {
    where?: HeroWhereInput
    data: XOR<HeroUpdateWithoutPlayerHeroesInput, HeroUncheckedUpdateWithoutPlayerHeroesInput>
  }

  export type HeroUpdateWithoutPlayerHeroesInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    skins?: SkinUpdateManyWithoutHeroNestedInput
  }

  export type HeroUncheckedUpdateWithoutPlayerHeroesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lane?: EnumLaneFieldUpdateOperationsInput | $Enums.Lane
    releaseYear?: IntFieldUpdateOperationsInput | number
    priceBP?: NullableIntFieldUpdateOperationsInput | number | null
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
    skins?: SkinUncheckedUpdateManyWithoutHeroNestedInput
  }

  export type SkinCreateManyHeroInput = {
    id?: number
    name: string
    rarity: $Enums.Rarity
    priceDiamond?: number | null
  }

  export type PlayerHeroCreateManyHeroInput = {
    id?: number
    playerId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type SkinUpdateWithoutHeroInput = {
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkinUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SkinUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rarity?: EnumRarityFieldUpdateOperationsInput | $Enums.Rarity
    priceDiamond?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerHeroUpdateWithoutHeroInput = {
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
    player?: PlayerUpdateOneRequiredWithoutHeroesNestedInput
  }

  export type PlayerHeroUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerHeroUncheckedUpdateManyWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerHeroCreateManyPlayerInput = {
    id?: number
    heroId: number
    currency: $Enums.Currency
    pricePaid: number
  }

  export type PlayerHeroUpdateWithoutPlayerInput = {
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
    hero?: HeroUpdateOneRequiredWithoutPlayerHeroesNestedInput
  }

  export type PlayerHeroUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerHeroUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    heroId?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    pricePaid?: IntFieldUpdateOperationsInput | number
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