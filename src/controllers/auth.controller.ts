import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthError } from "../errors/auth.error";
import { AcceptedAuthenticationResponse } from "../interfaces/acceptedAuthenticationResponse.interface"; 
import { UserInformation } from "../interfaces/userInformation.interface";
import { AuthService } from "../services/auth.service";
import { LOGGER } from "../winstonLogger";
import { AuthenticationStateResponse } from "../interfaces/authenticationStateResponse.interface";
import { UserInformationEntity } from "../entities/userInformation.entity";

export class AuthController {

    /**
     * @sends AccessToken, RefreshToken
     */
    public static async authenticate(request: Request, response: Response): Promise<void> {
        try {
            LOGGER.alert("Authentication request received.");
            let userInformation: UserInformation = await AuthService.authenticateUser(request.body.username, request.body.pwd);
            if (userInformation) {
                let res: AcceptedAuthenticationResponse = await AuthService.getAcceptedAuthResponse(userInformation);
                LOGGER.alert("Authentication request validated.");
                response.status(StatusCodes.OK).send(res);
            } else throw AuthError.otherError();
        } catch (err: unknown) {
            LOGGER.error(String(err));
            response.sendStatus(StatusCodes.BAD_REQUEST); 
        }
    }

    /**
     * @sends authenticationState
     */
    public static async validateAuthentication(request: Request, response: Response): Promise<void> {
        try {
            LOGGER.alert("Authentication state request received.");
            let { accessToken, refreshToken } = request.body;
            response.status(StatusCodes.OK).send(await AuthService.getAuthenticationState({accessToken: accessToken, refreshToken: refreshToken}));
        } catch (err: unknown) {
            LOGGER.error(String(err));
            response.sendStatus(StatusCodes.BAD_REQUEST); 
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