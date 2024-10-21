import { Query } from './query';


export class Queries {

    public static getUserByUsernameAndPwd: Query = Query.getInstance("select * from user where username = '?' and pwd = '?';");
    public static getUserByCustomAttribute: Query = Query.getInstance("select * from user where ? = '?';");
    public static getUserByCustomAttributeAndPwd: Query = Query.getInstance("select * from user where ? = '?' and pwd = '?';");
    public static getUsers: Query = Query.getInstance("select * from user;");

}



