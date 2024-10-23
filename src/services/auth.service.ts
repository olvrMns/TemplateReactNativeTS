import { hash, genSalt, compare } from "bcryptjs";
import { EntityInquisitor } from "../db/enityInquisitor";
import { User } from "../interfaces/user.entity";
import { RegexCode, RegexUtils } from "../utils/regex.util";
import { Queries } from "../db/queries";
import { APIError } from "../errors/abs.error";
import { AuthError } from "../errors/auth.error";
import { UserInformation } from "../interfaces/userInformation.entity";

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

    public static async authenticateUser(usernameOrEmail: string, rawPassword: string): Promise<UserInformation | null> {
        let user: User | null = null;
        if (RegexUtils.verify(usernameOrEmail, RegexCode.EMAIL)) 
            user  = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttribute.complete("email", usernameOrEmail));
        else if (RegexUtils.verify(usernameOrEmail, RegexCode.USERNAME)) 
            user = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttribute.complete("username", usernameOrEmail));
        else throw APIError.debugError();
        if (await this._comparePwd(rawPassword, user.pwd)) 
            return {
                username: user.username,
                email: user.email,
                bio: user.bio,
                firstName: user.firstName,
                lastName: user.lastName
            };
        else throw AuthError.credentialsError();
    }

}