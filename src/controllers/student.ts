import {Request, Response} from 'express';
import {MySqlDB} from '../db/db';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await MySqlDB.excecuteQuery(`
      SELECT 
          student_subject.id_student_takes_subject, 
          student_subject.studentDNI, 
          students.name,
          students.lastName,
          crm.name,
          sch.day, 
          sch.startTime, 
          sch.endTime, 
          subjects.name
      FROM 
          student_takes_subject as student_subject, 
          students              as students, 
          classrooms            as crm, 
          subjects              as subjects, 
          scheduler             as sch
      WHERE 
          student_subject.studentDNI = students.dni          and 
          student_subject.classroomCode = crm.classroomsCode and
          student_subject.subjectCode = subjects.subjectCode and 
          crm.schedulerCode = sch.schedulerCode;
    `);

    return res.json({
      ok: true,
      data: {
        students,
      },
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: {
        message: 'Internal server error',
        logs: error,
      },
    });
  }
};
