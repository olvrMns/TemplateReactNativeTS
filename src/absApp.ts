import { config } from 'dotenv';
//config *BEFORE* Imports
config({path: [".serv.env", ".db.env"]});
import Express, { Application, json } from 'express';
import { Server } from 'http';
import { router as authRouter } from './routes/auth.route';
import { LOGGER } from './winstonLogger';
import Cors from "cors";

export class App {

    private application: Application = Express();
    private httpServer: Server | null = null;

    private constructor() {}

    public static getInstance(): App {
        return new App();
    }

    public setRoutes() {
        this.application.use(json());
        this.application.use(Cors({
            origin: process.env.AUTHORIZED_ORIGIN,
        }))
        this.application.use(authRouter);
    }

    public start(): void {
        this.httpServer = this.application.listen(process.env.SERV_PORT, () => LOGGER.info(`Server start...`)); 
        this.setRoutes();
    }

    public close(): void {
        this.httpServer?.close();
    }
}