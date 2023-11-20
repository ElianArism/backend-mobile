"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignClassroom = exports.getClassrooms = void 0;
const db_1 = require("../db/db");
const getClassrooms = async (req, res) => {
    try {
        const classrooms = await db_1.MySqlDB.excecuteQuery(`
      SELECT 
          c.classroomsCode,
          c.name, 
          s.schedulerCode,
          s.startTime, 
          s.endTime, 
          s.day
      FROM 
          classrooms as c, 
          scheduler  as s
      WHERE 
          c.schedulerCode = s.schedulerCode;
    `);
        return res.json({
            ok: true,
            data: classrooms,
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
exports.getClassrooms = getClassrooms;
const assignClassroom = async (req, res) => {
    const { studentDNI, subjectCode, classroomCode } = req.body;
    try {
        await db_1.MySqlDB.excecuteQuery(`
      INSERT INTO student_takes_subject (studentDNI, subjectCode, classroomCode) 
      VALUES (${studentDNI},${subjectCode}, ${classroomCode});
    `);
        return res.json({
            ok: true,
            data: `Row affected w params  (${studentDNI},${subjectCode}, ${classroomCode})`,
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
exports.assignClassroom = assignClassroom;
//# sourceMappingURL=classroom.js.map