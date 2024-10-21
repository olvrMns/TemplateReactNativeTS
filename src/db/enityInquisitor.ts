import { ConnectionOptions, createConnection, Connection, RowDataPacket, QueryResult, FieldPacket } from 'mysql2/promise';
import { JSONUtils } from '../utils/json.util';

export interface CustomConnectionOptions extends ConnectionOptions {
    database: string | undefined;
}

export class EntityInquisitor<T> {

    private connection: Connection | undefined = undefined;
    private connectionOptions: ConnectionOptions | undefined = undefined;
    private jsonUtils: JSONUtils<T> = new JSONUtils<T>();

    public constructor(options: CustomConnectionOptions) {
        this.setConnectionOptions({
            user: options.user ? options.user : "root",
            password: options.password ? options.password : "",
            database: options.database,
            host: options.host ? options.host : "localhost",
            port: options.port ? options.port : 3306,
            rowsAsArray: false
        });
    }

    public setConnectionOptions(options: CustomConnectionOptions): void {
        this.connectionOptions = options;
    }

    public async openConnection(): Promise<void> {
        this.connection = await createConnection(this.connectionOptions as CustomConnectionOptions);
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

    public async getArrayFromQuery(query: String): Promise<T[]> {
        let res: [QueryResult, FieldPacket[]] | undefined = await this.execute(query);
        return this.jsonUtils.toArray(res?.[0]);
    }

    public async getFirstFromQuery(query: String): Promise<T> {
        let res: T[] = await this.getArrayFromQuery(query);
        return res[0];
    }

    // public async getArray(attributeName: string, value: string): Promise<T[] | null> {
    //     return null;
    // }

    // public async getFirst(attributeName: string, value: string): Promise<T | null> {
    //     return null;
    // }

}