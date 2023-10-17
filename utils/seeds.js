const mongoose = require('mongoose');
const { User, Thought } = require('./models'); // Import your models here

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

const seedData = async () => {
  try {
    await db.dropDatabase(); // Clear the existing database

    // Seed users
    const users = await User.create([
      {
        username: 'user1',
        email: 'user1@example.com'
      },
      {
        username: 'user2',
        email: 'user2@example.com'
      }
    ]);

    // Seed thoughts
    await Thought.create([
      {
        thoughtText: 'Thought 1',
        username: users[0].username
      },
      {
        thoughtText: 'Thought 2',
        username: users[1].username
      }
    ]);

    console.log('Seed data inserted successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
