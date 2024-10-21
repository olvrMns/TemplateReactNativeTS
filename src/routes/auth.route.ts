import { Request, Response, Router } from "express";
import { Queries } from "../db/queries";
import { EntityInquisitor } from "../db/enityInquisitor";
import { User } from "../entities/user.entity";
import { FieldPacket, QueryResult } from "mysql2";

export const router: Router = Router();

router.get("/slt/u=:username&p=:password", async (request: Request, response: Response) => {
    let inquisitor: EntityInquisitor<User> = new EntityInquisitor<User>();
    //let res: [QueryResult, FieldPacket[]] | undefined = await inquisitor.execute(Queries.getUser.complete(request.params.username, request.params.password));
    let res: User | null = await inquisitor.getFirstFromQuery(Queries.getUser.complete(request.params.username, request.params.password));
    response.send(res);
});

