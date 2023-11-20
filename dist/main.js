"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const router_1 = require("./routes/router");
const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router_1.default);
app.listen(PORT, async () => {
    console.log('SERVER RUNNING AT PORT: ' + PORT);
});
//# sourceMappingURL=main.js.map