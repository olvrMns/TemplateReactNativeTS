import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthService } from "../services/auth.service";
import { User } from "../entities/user.entity";
import { LOGGER } from "../winstonLogger";

export class AuthController {

    private static service: AuthService = new AuthService();

    /**
     * @note
     * - http://localhost:5556/login
     */
    public static async authenticate(request: Request, response: Response): Promise<void> {
        try {
            LOGGER.alert("Request received........");
            let user: User | null = await AuthService.authenticateUser(request.body.username, request.body.pwd);
            response.status(StatusCodes.OK).send(user);
        } catch (err: unknown) { 
            LOGGER.error(err);
            response.sendStatus(StatusCodes.BAD_REQUEST); 
        }
    }

    /**
     * @note
     * - http://localhost:5556/signup
     */
    public static async signup(request: Request, response: Response): Promise<void> {
        try {

        } catch (err: unknown) {

        }
    }




}