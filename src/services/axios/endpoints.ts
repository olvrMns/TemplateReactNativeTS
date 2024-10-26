export type HTTPMethodType = "post" | "get" | "put" | "patch";

export enum Endpoints {
    LOGIN,
    SIGNIN,
    GET_AUTHENTICATION_STATE
}

/**
 * @note
 * - TYPEOFBODY? typeof {}...
 */
export const EndpointsMetadata: {[key in Endpoints]: {endpoint: string, method: HTTPMethodType}} = {
    [Endpoints.LOGIN]: {endpoint: "/login", method: "post"},
    [Endpoints.SIGNIN]: {endpoint: "/signin", method: "post"},
    [Endpoints.GET_AUTHENTICATION_STATE]: {endpoint: "/get-authentication-state", method: "post"}
}