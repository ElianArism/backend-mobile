import type { Connection } from 'mysql2/typings/mysql/lib/Connection';
export declare class MySqlDB {
    private static _connection;
    constructor();
    static get connection(): Connection;
    static excecuteQuery(query: string): Promise<unknown>;
}
