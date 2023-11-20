import {Sequelize} from 'sequelize';

export class DB {
  private static _connection: Sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: 'fsociety',
    host: '127.0.0.1',
    database: 'educarparatransformarmobile',
    dialectModule: require('mysql2'),
  });

  constructor() {}

  static get connection() {
    return DB._connection;
  }

  static async connectDB(): Promise<void> {
    try {
      await this.connection.authenticate();
      console.log('DB CONNECTED');
    } catch (error) {
      console.log('DB CONNECTION ERROR');
      console.log(error);
    }
  }

  static async closeConnection(): Promise<void> {
    try {
      await DB.connection.close();
      console.log('DB CONNECTION CLOSED');
    } catch (error) {
      console.log('ERROR CLOSING CONNECTION');
      console.log(error);
    }
  }
}
