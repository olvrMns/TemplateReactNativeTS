import { ConnectionOptions, createConnection, Connection, RowDataPacket, QueryResult, FieldPacket } from 'mysql2/promise';
import { JSONUtils } from '../utils/json.util';

export class EntityInquisitor<T> {

    private connection: Connection | undefined = undefined;
    private connectionOptions: ConnectionOptions | undefined = undefined;
    private jsonUtils: JSONUtils<T> = new JSONUtils<T>();

    public constructor() {
        this.setConnectionOptions({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT as string),
            rowsAsArray: false
        });
    }

    public setConnectionOptions(options: ConnectionOptions): void {
        this.connectionOptions = options;
    }

    public async openConnection(): Promise<void> {
        this.connection = await createConnection(this.connectionOptions as ConnectionOptions);
    }

    public async closeConnection(): Promise<void> {
        await this.connection?.end();
    }

    public async execute(query: String): Promise<[QueryResult, FieldPacket[]] | undefined> {
        await this.openConnection();
        let res: [QueryResult, FieldPacket[]] | undefined = await this.connection?.execute(String(query));
        await this.closeConnection();
        return res;
    }

    public async getArrayFromQuery(query: String): Promise<T[] | null> {
        let res: [QueryResult, FieldPacket[]] | undefined = await this.execute(query);
        return this.jsonUtils.toArray(res?.[0]);
    }

    public async getFirstFromQuery(query: String): Promise<T | null> {
        let res: [QueryResult, FieldPacket[]] | undefined = await this.execute(query);
        return this.jsonUtils.toObject(res?.[0]);
    }

    // public async getArray(attributeName: string, value: string): Promise<T[] | null> {
    //     return null;
    // }

    // public async getFirst(attributeName: string, value: string): Promise<T | null> {
    //     return null;
    // }

}