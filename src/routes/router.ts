import {Router} from 'express';
import authRoutes from './auth';
import classroomRoutes from './classroom';
import studentRoutes from './student';
import subjectRoutes from './subject';

const appRouter = Router();

appRouter.use('/auth', authRoutes);
appRouter.use('/subject', subjectRoutes);
appRouter.use('/classroom', classroomRoutes);
appRouter.use('/student', studentRoutes);

export default appRouter;
