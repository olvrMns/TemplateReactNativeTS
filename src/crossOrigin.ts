import Cors, { CorsOptions } from "cors";

/**
 * @returns express middleware callback (request, response, next) => void
 */
export const crossOriginMiddleware = Cors({
    origin: process.env.AUTHORIZED_ORIGIN
});