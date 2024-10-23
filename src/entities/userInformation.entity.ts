import { UserInformation } from "../interfaces/userInformation.entity";

export class UserInformationEntity implements UserInformation{

    public username: string;
    public email: string;
    public bio: string;
    public firstName: string;
    public lastName: string;

    private constructor(username: string, email: string, bio: string, firstName: string, lastName: string) {
        this.username = username;
        this.email = email;
        this.bio = bio;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public static getInstance(username: string, email: string, bio: string, firstName: string, lastName: string) {
        return new UserInformationEntity(username, email, bio, firstName, lastName);
    }

}