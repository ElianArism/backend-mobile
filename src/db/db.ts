import * as mysql from 'mysql2';
import type {Connection} from 'mysql2/typings/mysql/lib/Connection';

export class MySqlDB {
  private static _connection: Connection = mysql.createConnection({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
  });

  constructor() {}

  static get connection() {
    return MySqlDB._connection;
  }

  static excecuteQuery(query: string): Promise<unknown> {
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
