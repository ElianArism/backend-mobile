import {Router} from 'express';
import {assignClassroom, getClassrooms} from '../controllers/classroom';

const classroomRoutes = Router();

classroomRoutes.get('/', getClassrooms);
classroomRoutes.put('/', assignClassroom);

export default classroomRoutes;
