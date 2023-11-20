"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const sequelize_1 = require("sequelize");
class DB {
    constructor() { }
    static get connection() {
        return DB._connection;
    }
    static async connectDB() {
        try {
            await this.connection.authenticate();
            console.log('DB CONNECTED');
        }
        catch (error) {
            console.log('DB CONNECTION ERROR');
            console.log(error);
        }
    }
    static async closeConnection() {
        try {
            await DB.connection.close();
            console.log('DB CONNECTION CLOSED');
        }
        catch (error) {
            console.log('ERROR CLOSING CONNECTION');
            console.log(error);
        }
    }
}
exports.DB = DB;
DB._connection = new sequelize_1.Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: 'fsociety',
    host: '127.0.0.1',
    database: 'educarparatransformarmobile',
    dialectModule: require('mysql2'),
});
//# sourceMappingURL=connection.js.map