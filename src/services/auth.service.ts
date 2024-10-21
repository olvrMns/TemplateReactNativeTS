import { hash, genSalt, compare } from "bcryptjs";
import { EntityInquisitor } from "../db/enityInquisitor";
import { User } from "../entities/user.entity";
import { RegexCode, RegexUtils } from "../utils/regex.util";
import { Queries } from "../db/queries";
import { APIError } from "../errors/abs.error";

export class AuthService {

    private static userInquisitor: EntityInquisitor<User> = new EntityInquisitor<User>();

    public static async _hashPwd(rawPassword: string): Promise<string> {
        return await hash(rawPassword, await genSalt(parseInt(process.env._HASH_ROUNDS as string)));
    }

    public static async _comparePwd(rawPassword: string, hashedPassword: string): Promise<boolean> {
        return await compare(rawPassword, hashedPassword);
    }

    public static async authenticateUser(usernameOrEmail: string, rawPassword: string): Promise<User | null> {
        let user: User | null = null;
        if (RegexUtils.verify(usernameOrEmail, RegexCode.EMAIL)) 
            user  = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttributeAndPwd.complete("email", usernameOrEmail));
        else if (RegexUtils.verify(usernameOrEmail, RegexCode.USERNAME))
            user = await this.userInquisitor.getFirstFromQuery(Queries.getUserByCustomAttributeAndPwd.complete("username", usernameOrEmail));
        else throw APIError.debugError();
        if (await this._comparePwd(rawPassword, user.pwd)) return user;
        return null;
    }

}