import User from './models/User';
import Team from './models/Team';
import Activity from './models/Activity';
import Workout from './models/Workout';
import LeaderboardEntry from './models/LeaderboardEntry';

export async function seedDatabase(): Promise<void> {
  const userCount = await User.countDocuments();
  if (userCount > 0) {
    console.log('Database already seeded');
    return;
  }

  const users = await User.create([
    {
      name: 'Ava Chen',
      email: 'ava@example.com',
      fitnessGoal: 'Marathon training',
      level: 'Advanced'
    },
    {
      name: 'Noah Patel',
      email: 'noah@example.com',
      fitnessGoal: 'Strength building',
      level: 'Intermediate'
    },
    {
      name: 'Mia Torres',
      email: 'mia@example.com',
      fitnessGoal: 'Weight loss',
      level: 'Beginner'
    }
  ]);

  const teams = await Team.create([
    {
      name: 'Velocity Squad',
      description: 'High-energy endurance training team',
      members: [users[0]._id, users[1]._id]
    },
    {
      name: 'Power House',
      description: 'Strength and recovery focused team',
      members: [users[2]._id]
    }
  ]);

  await Activity.create([
    {
      userId: users[0]._id,
      type: 'Run',
      duration: 45,
      calories: 480
    },
    {
      userId: users[1]._id,
      type: 'Weight Training',
      duration: 60,
      calories: 520
    },
    {
      userId: users[2]._id,
      type: 'Yoga',
      duration: 30,
      calories: 180
    }
  ]);

  await Workout.create([
    {
      title: 'Tempo Run',
      description: 'A brisk interval workout for endurance',
      difficulty: 'Intermediate',
      durationMinutes: 35
    },
    {
      title: 'Core Blast',
      description: 'A fast full-body core routine',
      difficulty: 'Beginner',
      durationMinutes: 25
    }
  ]);

  await LeaderboardEntry.create([
    {
      userId: users[0]._id,
      points: 1250,
      streak: 7
    },
    {
      userId: users[1]._id,
      points: 1100,
      streak: 4
    },
    {
      userId: users[2]._id,
      points: 980,
      streak: 3
    }
  ]);

  console.log('Database seeded with initial OctoFit data');
}
