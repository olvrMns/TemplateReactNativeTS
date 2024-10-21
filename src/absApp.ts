import Dotenv from 'dotenv';
import Express, { Application, json } from 'express';
import { Server } from 'http';
import { crossOriginMiddleware } from './crossOrigin';
import { router as authRouter } from './routes/auth.route';

export class App {

    private application: Application = Express();
    private httpServer: Server | null = null;

    private App() {}

    public static getInstance(): App {
        Dotenv.config({path: ["./.db.env", "./.serv.env"]});
        return new App();
    }

    public setRoutes() {
        this.application.use(json());
        this.application.use(authRouter);
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