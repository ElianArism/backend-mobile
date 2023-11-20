import {Request, Response} from 'express';
import {MySqlDB} from '../db/db';

export const getClassrooms = async (req: Request, res: Response) => {
  try {
    const classrooms = await MySqlDB.excecuteQuery(`
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

export const assignClassroom = async (req: Request, res: Response) => {
  const {studentDNI, subjectCode, classroomCode} = req.body;
  try {
    await MySqlDB.excecuteQuery(`
      INSERT INTO student_takes_subject (studentDNI, subjectCode, classroomCode) 
      VALUES (${studentDNI},${subjectCode}, ${classroomCode});
    `);

    return res.json({
      ok: true,
      data: `Row affected w params  (${studentDNI},${subjectCode}, ${classroomCode})`,
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
