import {Router} from 'express';
import {getStudents} from '../controllers/student';

const studentRoutes = Router();

studentRoutes.get('/:professorDNI', getStudents);

export default studentRoutes;
