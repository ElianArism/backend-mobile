"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const db_1 = require("./db");
const connection_1 = require("./db/connection");
// const app = express();
// const PORT = 3000;
const test = async () => {
    await connection_1.DB.connectDB();
    const professors = await db_1.Professor.findAll();
    console.log(professors);
};
test();
//# sourceMappingURL=main.js.map