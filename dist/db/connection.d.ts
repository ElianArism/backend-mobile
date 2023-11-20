import { Sequelize } from 'sequelize';
export declare class DB {
    private static _connection;
    constructor();
    static get connection(): Sequelize;
    static connectDB(): Promise<void>;
    static closeConnection(): Promise<void>;
}
