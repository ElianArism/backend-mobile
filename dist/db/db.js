"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDB = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
class MySqlDB {
    static _connection = mysql2_1.default.createConnection({
        user: process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        database: process.env.DATABASE,
    });
    constructor() { }
    static get connection() {
        return MySqlDB._connection;
    }
    static excecuteQuery(query) {
        return new Promise((resolve, reject) => {
            this.connection.execute(query, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
}
exports.MySqlDB = MySqlDB;
//# sourceMappingURL=db.js.map