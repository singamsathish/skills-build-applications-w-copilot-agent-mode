import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fitnessGoal: { type: String, default: 'General fitness' },
    level: { type: String, default: 'Beginner' }
  },
  { timestamps: true }
);

export default model('User', userSchema);
