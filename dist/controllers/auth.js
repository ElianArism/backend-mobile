"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const db_1 = require("../db/db");
const login = async (req, res) => {
    const { dni, password } = req.body;
    if (!dni || !password) {
        return res.status(400).json({
            ok: false,
            error: {
                message: 'Error: cuerpo de peticion invalido, deberia contener los siguientes campos: dni, password',
                logs: null,
            },
        });
    }
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const [professor] = await db_1.MySqlDB.excecuteQuery(`
      SELECT 
      	*
      FROM 
        professors as p
      WHERE 
      	p.dni = ${dni}
      ;
    `);
        if (!professor) {
            return res.status(404).json({
                ok: false,
                error: {
                    message: 'Error: profesor con ese dni no encontrado',
                    logs: null,
                },
            });
        }
        if (professor?.password !== password) {
            return res.status(404).json({
                ok: false,
                error: {
                    message: 'Error: contraseña invalida',
                    logs: null,
                },
            });
        }
        return res.json({
            ok: true,
            data: professor,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error: {
                message: 'Internal server error',
                logs: error,
            },
        });
    }
};
exports.login = login;
//# sourceMappingURL=auth.js.map