import { Error } from "../interfaces";

/* This code snippet is defining a TypeScript interface named `DefaultResponse` with a generic type
`T`. The interface has a single property `data` of type `T`. This interface can be used to define a
structure for response objects that have a `data` property containing data of any specified type
`T`. By using generics, this interface allows flexibility in defining the type of data that can be
stored in the `data` property. */
export interface DefaultResponse<T> {
    errors?: Error[];
    data: T;
}