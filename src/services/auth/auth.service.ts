import { compare, genSalt, hash } from "bcryptjs";
import { Secret, sign, verify, VerifyErrors } from "jsonwebtoken";
import { EntityInquisitor } from "../../db/enityInquisitor";
import { Queries } from "../../db/queries";
import { UserInformationEntity } from "../../entities/userInformation.entity";
import { APIError } from "../../errors/abs.error";
import { AuthError } from "../../errors/auth.error";
import { User } from "../../interfaces/user.entity";
import { UserInformation } from "../../interfaces/userInformation.entity";
import { RegexCode, RegexUtils } from "../../utils/regex.util";

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
            return UserInformationEntity.getInstance(user.username, user.email, user.bio, user.firstName, user.lastName)
        else throw AuthError.credentialsError();
    }

    public static createToken(user: UserInformation, expires: number = parseInt(process.env.EXPIRES_IN as string)): Promise<string> {
        return new Promise((resolve, reject) => {
            sign(
                {userInformation: UserInformationEntity.getInstance(user.username, user.email, user.bio, user.firstName, user.lastName)}, 
                process.env.PK as Secret, {expiresIn: expires}, 
                (error: Error | null, token: string | undefined) => {
                    if (!error && token) resolve(token);
                    else reject(error);
                }
            );
        });
    }

    public static verifyToken(token: string): Promise<string> {
        return new Promise<any>((resolve, reject) => {
            verify(token, process.env.PK as Secret, (error: VerifyErrors | null, decodedToken: any) => {
                if (decodedToken) resolve(decodedToken);
                else if (error) reject(null);
                reject(null);
            });
        })
    }

    /**
     * @note not yet implemented.........
     */
    public static invalidateToken() {

    }

}