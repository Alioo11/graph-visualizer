type Nullable<T> = T | null;

type Nullish = null | undefined;

/** Type can be undefined or null */
type Nullishable<T> = T | Nullish;
// type Nullishable<T> = Nullable<Maybe<T>>;

type NonUndefined<T> = T extends undefined ? never : T;

type Maybe<T> = T | undefined;

type Falsy = false | 0 | "" | null | undefined;

type Primitive = string | number | bigint | boolean | symbol | null | undefined;

type Dictionary<T = unknown> = { [key: string]: T };

/** Dictionary with type specified keys */
type DynamicDictionary<K extends string | number, V> = Record<K, V>;

// interface Tuple<T extends number, Len extends number> extends Array<T> { [key: number]: T; length: Len; }

// type ValueOf<T> = T[keyof T];
type ValueOf<T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>> =
  T extends ReadonlyArray<any>
    ? T[number]
    : T extends ArrayLike<any>
    ? T[number]
    : T extends object
    ? T[keyof T]
    : never;

/** extracts type of resolved promise value */
type UnPromise<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

// Any
type AnyLiteral = Record<string, any>;

type AnyClass = new (...args: any[]) => any;

type AnyFunction = (...args: any[]) => any;

type AnyToVoidFunction = (...args: any[]) => void;

type NoneToVoidFunction = () => void;
