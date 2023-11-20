"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../connection");
class Professor extends sequelize_1.Model {
}
exports.Professor = Professor;
Professor.init({
    dni: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: sequelize_1.DataTypes.STRING,
    lastName: sequelize_1.DataTypes.STRING,
    birthDate: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
}, { sequelize: connection_1.DB.connection, timestamps: false });
//# sourceMappingURL=Professor.js.map