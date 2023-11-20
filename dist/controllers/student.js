"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudents = void 0;
const db_1 = require("../db/db");
const getStudents = async (req, res) => {
    try {
        const professorDNI = req.params.professorDNI;
        const students = await db_1.MySqlDB.excecuteQuery(`
      SELECT 
          student_subject.studentDNI, 
          students.name as studentName, 
          students.lastName studentLastName, 
          crm.name as classroomName, 
          sch.day as schedulerDay, 
          sch.startTime as schedulerStartTime, 
          sch.endTime as schedulerEndTime, 
          subjects.name as subjectName,
          subjects.subjectCode
      FROM 
          student_takes_subject as student_subject, 
          students              as students, 
          classrooms            as crm, 
          subjects              as subjects, 
          scheduler             as sch, 
          professors            as p
      WHERE 
          student_subject.studentDNI = students.dni          and 
          student_subject.classroomCode = crm.classroomsCode and
          student_subject.subjectCode = subjects.subjectCode and 
          crm.schedulerCode = sch.schedulerCode              and
          p.dni = ${professorDNI};
    `);
        return res.json({
            ok: true,
            data: students,
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
exports.getStudents = getStudents;
//# sourceMappingURL=student.js.map