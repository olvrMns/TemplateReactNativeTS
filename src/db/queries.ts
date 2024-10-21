import { Query } from './query';


export class Queries {

    public static getUser: Query = Query.getInstance("select * from user where username = '?' and pwd = '?';");
    public static getUsers: Query = Query.getInstance("select * from user;");

}



