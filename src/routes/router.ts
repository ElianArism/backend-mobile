import {Router} from 'express';
import studentRoutes from './student';

const appRouter = Router();

// appRouter.use('/classroom');
// appRouter.use('/scheduler');
// appRouter.use('/professor');
// appRouter.use('/auth');
appRouter.use('/student', studentRoutes);

export default appRouter;
