import * as dotenv from 'dotenv';
dotenv.config();

import * as cors from 'cors';
import * as express from 'express';
import appRouter from './routes/router';

const PORT = process.env.PORT || 8086;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', appRouter);

app.listen(PORT, async () => {
  console.log('SERVER RUNNING AT PORT: ' + PORT);
});
