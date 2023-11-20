"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubjectsByProfessorDNI = void 0;
const db_1 = require("../db/db");
const getSubjectsByProfessorDNI = async (req, res) => {
    try {
        const id = req.params?.professorDNI;
        if (!id) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: 'Parametro de ruta :professorDNI requerido',
                    logs: null,
                },
            });
        }
        const subjects = await db_1.MySqlDB.excecuteQuery(`  
      SELECT 
        s.subjectCode, 
        s.name
      FROM 
        subjects as s, 
        professors as p
      WHERE 
        p.dni = ${id}
      ;
    `);
        return res.json({
            ok: true,
            data: subjects,
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
exports.getSubjectsByProfessorDNI = getSubjectsByProfessorDNI;
//# sourceMappingURL=subject.js.map