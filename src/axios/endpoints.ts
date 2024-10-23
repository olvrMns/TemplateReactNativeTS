export type HTTPMethodType = "post" | "get" | "put" | "patch";

export enum Endpoints {
    LOGIN,
    SIGNIN
}

/**
 * @note
 * - TYPEOFBODY? typeof {}...
 */
export const EndpointsMetadata: {[key in Endpoints]: {endpoint: string, method: HTTPMethodType}} = {
    [Endpoints.LOGIN]: {endpoint: "/login", method: "post"},
    [Endpoints.SIGNIN]: {endpoint: "/signin", method: "post"}
}
