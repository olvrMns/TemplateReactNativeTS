import { compare, genSalt, hash } from "bcryptjs";
import { Secret, sign, TokenExpiredError, verify, VerifyErrors } from "jsonwebtoken";
import { EntityInquisitor } from "../db/enityInquisitor";
import { Queries } from "../db/queries";
import { UserInformationEntity } from "../entities/userInformation.entity";
import { APIError } from "../errors/abs.error";
import { AuthError } from "../errors/auth.error";
import { User } from "../interfaces/user.interface";
import { UserInformation } from "../interfaces/userInformation.interface";
import { RegexCode, RegexUtils } from "../utils/regex.util";
import { AcceptedAuthenticationResponse } from "../interfaces/acceptedAuthenticationResponse.interface";
import { AuthenticationStateResponse } from "../interfaces/authenticationStateResponse.interface";

export class AuthService {

    private static userInquisitor: EntityInquisitor<User> = new EntityInquisitor<User>({
        database: process.env.DB_NAME,
        password: process.env.DB_PWD,
        port: parseInt(process.env.DB_PORT as string)
    });

    public static async _hashPwd(rawPassword: string): Promise<string> {
        return await hash(rawPassword, await genSalt(parseInt(process.env._HASH_ROUNDS as string)));
    }

    public static async _comparePwd(rawPassword: string, hashedPassword: string): Promise<boolean> {
        return await compare(rawPassword, hashedPassword);
    }

    public static async authenticateUser(usernameOrEmail: string, rawPassword: string): Promise<UserInformation> {
        let user: User | null = null;
        if (RegexUtils.verify(usernameOrEmail, RegexCode.EMAIL)) 
            user  = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttribute.complete("email", usernameOrEmail));
        else if (RegexUtils.verify(usernameOrEmail, RegexCode.USERNAME)) 
            user = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttribute.complete("username", usernameOrEmail));
        else throw APIError.debugError();
        if (await this._comparePwd(rawPassword, user.pwd)) 
            return UserInformationEntity.getInstance(user.username, user.email, user.bio, user.firstName, user.lastName, user.imagePath);
        else throw AuthError.credentialsError();
    }

    public static async getAcceptedAuthResponse(userInformation: UserInformation): Promise<AcceptedAuthenticationResponse> {
        return {
            accessToken: await AuthService.createToken(userInformation),
            refreshToken: await AuthService.createToken(userInformation, parseInt(process.env.REFRESH_EXPIRES_IN as string))
        }
    }

    public static createToken(user: UserInformation, expires: number = parseInt(process.env.EXPIRES_IN as string)): Promise<string> {
        return new Promise((resolve, reject) => {
            sign(
                {userInformation: UserInformationEntity.getInstance(user.username, user.email, user.bio, user.firstName, user.lastName, user.imagePath)}, 
                process.env.PK as Secret, {expiresIn: expires}, 
                (error: Error | null, token: string | undefined) => {
                    if (!error && token) resolve(token);
                    else reject(error);
                }
            );
        });
    }

    public static verifyToken(token: string): Promise<any | null> {
        return new Promise<string | null>((resolve, reject) => {
            verify(token, process.env.PK as Secret, (error: VerifyErrors | null, decodedToken: any) => {
                if (decodedToken && !error) resolve(decodedToken);
                else if (error instanceof TokenExpiredError) resolve(null);
                else reject(error);
            });
        })
    }

    /**
     * @note NEEDS REFORMATING 
     */
    public static async getAuthenticationState(acceptedAuthResponse: AcceptedAuthenticationResponse): Promise<AuthenticationStateResponse> {
        let stateResponse: AuthenticationStateResponse = {authenticated: false, acceptedAuthenticationResponse: null, userInformation: null};
        let decodedToken: any = await AuthService.verifyToken(acceptedAuthResponse.accessToken);
        if (decodedToken !== null) 
            stateResponse = {authenticated: true, acceptedAuthenticationResponse: await AuthService.getAcceptedAuthResponse(decodedToken.userInformation), userInformation: decodedToken.userInformation}
        else {
            decodedToken = await AuthService.verifyToken(acceptedAuthResponse.refreshToken);
            if (decodedToken !== null) {
                acceptedAuthResponse = await AuthService.getAcceptedAuthResponse(decodedToken.userInformation);
                stateResponse = {authenticated: true, acceptedAuthenticationResponse: await AuthService.getAcceptedAuthResponse(decodedToken.userInformation), userInformation: decodedToken.userInformation}
            }
        }
        return stateResponse;
    }

    /**
     * @note not yet implemented.........
     */
    public static invalidateToken() {

    }

}