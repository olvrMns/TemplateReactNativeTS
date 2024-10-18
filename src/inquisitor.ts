import { ConnectionOptions, createConnection, Connection, RowDataPacket } from 'mysql2/promise';

// export class Inquisitor {

//     private connection: Connection | null = null;
//     private connectionOptions: ConnectionOptions | null = null;

//     public Inquisitor() {
//         this.setConnectionOptions({
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//             host: process.env.DB_HOST,
//             port: parseInt(process.env.DB_PORT as string),
//             rowsAsArray: true
//         });
//     }

//     public setConnectionOptions(options: ConnectionOptions): void {
//         this.connectionOptions = options;
//     }

//     public async openConnection(): Promise<void> {
//         this.connection = await createConnection(this.connectionOptions as ConnectionOptions);
//     }

//     public async closeConnection(): Promise<void> {
//         await this.connection?.end();
//     }

// }