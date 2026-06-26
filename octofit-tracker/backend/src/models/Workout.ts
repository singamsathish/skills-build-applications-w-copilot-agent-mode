import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    difficulty: { type: String, default: 'Beginner' },
    durationMinutes: { type: Number, default: 30 }
  },
  { timestamps: true }
);

export default model('Workout', workoutSchema);
