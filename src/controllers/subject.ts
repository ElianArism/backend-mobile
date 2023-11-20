import {Request, Response} from 'express';
import {MySqlDB} from '../db/db';

export const getSubjectsByProfessorDNI = async (
  req: Request,
  res: Response
) => {
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

    const subjects = await MySqlDB.excecuteQuery(`  
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
