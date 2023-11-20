import * as mysql from 'mysql2';
import type {Connection} from 'mysql2/typings/mysql/lib/Connection';

export class MySqlDB {
  private static _connection: Connection = mysql.createConnection({
    user: 'root',
    password: 'fsociety',
    host: '127.0.0.1',
    database: 'educarparatransformarmobile',
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
