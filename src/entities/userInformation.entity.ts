import { UserInformation } from "../interfaces/userInformation.entity";

export class UserInformationEntity implements UserInformation{

    public username: string;
    public email: string;
    public bio: string;
    public firstName: string;
    public lastName: string;
    public imagePath: string | null;

    private constructor(username: string, email: string, bio: string, firstName: string, lastName: string, imagePath: string | null) {
        this.username = username;
        this.email = email;
        this.bio = bio;
        this.firstName = firstName;
        this.lastName = lastName;
        this.imagePath = imagePath;
    }

    public static getInstance(username: string, email: string, bio: string, firstName: string, lastName: string, imagePath: string | null) {
        return new UserInformationEntity(username, email, bio, firstName, lastName, imagePath);
    }

}