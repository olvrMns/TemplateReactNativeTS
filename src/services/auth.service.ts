import { hash, genSalt, compare } from "bcryptjs";
import { EntityInquisitor } from "../db/enityInquisitor";
import { User } from "../entities/user.entity";

export class AuthService {

    public static userInquisitor: EntityInquisitor<User> = new EntityInquisitor<User>();

    public static async _hashPwd(rawPassword: string): Promise<string> {
        return await hash(rawPassword, await genSalt(parseInt(process.env._HASH_ROUNDS as string)));
    }

    public static async _comparePwd(rawPassword: string, hashedPassword: string): Promise<boolean> {
        return await compare(rawPassword, hashedPassword);
    }

    public static async authenticate(usernameOrEmail: string, pwd: string) {
        
    }

}