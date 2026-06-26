import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database';
import apiRouter from './routes/api';
import { seedDatabase } from './seed';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

async function startServer(): Promise<void> {
  await connectToDatabase();
  await seedDatabase();
  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

startServer();
