import * as cors from 'cors';
import * as express from 'express';
import appRouter from './routes/router';

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', appRouter);

app.listen(PORT, async () => {
  // await DB.connectDB();
  console.log('SERVER RUNNING AT PORT: ' + PORT);
});
