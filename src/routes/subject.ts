import {Router} from 'express';
import {getSubjectsByProfessorDNI} from '../controllers/subject';

const subjectRoutes = Router();

subjectRoutes.get('/:professorDNI', getSubjectsByProfessorDNI);

export default subjectRoutes;
