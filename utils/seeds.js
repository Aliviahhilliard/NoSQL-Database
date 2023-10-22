// Import necessary modules
const mongoose = require('mongoose');
const { User, Thought } = require('../models');

/**
 * seedDatabase - Seeds the database with User, Thought data
 */
async function seedDatabase() {
  // Connect to the MongoDB database
  await mongoose.connect('mongodb://localhost/social_network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Database connected');

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Seed Users
  const users = [];
  for (let i = 0; i < 10; i++) {
    const username = `User_${i}`;
    const email = `user${i}@example.com`;

    const user = await User.create({ username, email });
    users.push(user._id);
  }

  // Seed Thoughts
  const thoughts = [];
  for (const userId of users) {
    const thoughtData = {
      thoughtText: 'This is a sample thought',
      username: `User_${users.indexOf(userId)}`,
      userId,
    };
    
    const thought = await Thought.create(thoughtData);
    thoughts.push(thought);

    // Update User's thoughts array
    const user = await User.findById(userId);
    user.thoughts.push(thought._id);
    await user.save();
  }

  // Log the seeded data
  console.info('Seeding complete');
  mongoose.connection.close();
  process.exit(0);
}

// Execute the function
seedDatabase();
