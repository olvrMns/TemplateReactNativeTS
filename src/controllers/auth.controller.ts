import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { UserInformation } from "../interfaces/userInformation.entity";
import { AuthService } from "../services/auth/auth.service";
import { LOGGER } from "../winstonLogger";
import { AcceptedAuthenticationResponse, AuthenticationStateResponse } from "../services/auth/authResponse";
import { AuthError } from "../errors/auth.error";

export class AuthController {

    /**
     * @sends AccessToken, RefreshToken
     */
    public static async authenticate(request: Request, response: Response): Promise<void> {
        try {
            LOGGER.alert("Authentication request received.");
            let userInformation: UserInformation = await AuthService.authenticateUser(request.body.username, request.body.pwd);
            if (userInformation) {
                let res: AcceptedAuthenticationResponse = {
                    accessToken: await AuthService.createToken(userInformation),
                    refreshToken: await AuthService.createToken(userInformation, parseInt(process.env.REFRESH_EXPIRES_IN as string))
                }
                LOGGER.alert("Authentication request validated.");
                response.status(StatusCodes.OK).send(res);
            } else throw AuthError.otherError();
        } catch (err: unknown) {
            LOGGER.error(String(err));
            response.sendStatus(StatusCodes.BAD_REQUEST); 
        }
    }

    /**
     * @sends authenticationState, AccessToken?, RefreshToken?
     */
    public static async isAuthenticated(request: Request, response: Response): Promise<void> {
        try {

        } catch (err: unknown) {

        }
    }

    /**
     * @sends 201 (CREATED)
     */
    public static async signup(request: Request, response: Response): Promise<void> {
        try {

        } catch (err: unknown) {

        }
    }

    /**
     * @sends 200 (OK)
     */
    public static async signout(request: Request, response: Response): Promise<void> {
        try {

        } catch (err: unknown) {

        }
    }




}