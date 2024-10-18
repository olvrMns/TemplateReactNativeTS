import Dotenv from 'dotenv';
import Express, { Application, json } from 'express';
import { Server } from 'http';
import { crossOriginMiddleware } from './crossOrigin';

export class App {

    private application: Application = Express();
    private httpServer: Server | null = null;
    private version: string = "/v1";

    private App() {}

    public static getInstance(): App {
        Dotenv.config({path: ["./.db.env", "./.serv.env"]});
        return new App();
    }

    public setRoutes() {
        this.application.use(json());
        //this.application.use(crossOriginMiddleware);
    }

    public start(): void {
        this.httpServer = this.application.listen(process.env.SERV_PORT, () => console.log(`Server start...`)); 
        this.setRoutes();
    }

    public close(): void {
        this.httpServer?.close();
    }
}