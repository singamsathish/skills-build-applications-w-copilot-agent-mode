import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedDatabase } from './seed';

dotenv.config();

async function runSeed(): Promise<void> {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
    
    await seedDatabase();
    console.log('Seeding completed');
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

runSeed();
