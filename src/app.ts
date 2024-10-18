import Express, { Application, Request, Response } from 'express';


const app: Application = Express();

app.get("/slt", (request: Request, response: Response) => {response.send("wesh")});

app.listen(5555, () => console.log("oui"));