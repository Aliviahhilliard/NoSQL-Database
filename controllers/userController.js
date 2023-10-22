const User = require('../models/User');

/**
 * getAllUsers - Retrieves all users
 * @returns {Array<User>} - Returns an array of all User documents
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * getUserById - Retrieves a user by ID
 * @param {String} id - MongoDB User document ID
 * @returns {Object<User>} - Returns the User document
 */
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * createUser - Creates a new user
 * @param {Object} req.body - New user details
 * @returns {Object<User>} - Returns the newly created User document
 */
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * updateUser - Updates an existing user by ID
 * @param {String} id - MongoDB User document ID
 * @param {Object} req.body - Updated user details
 * @returns {Object<User>} - Returns the updated User document
 */
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * deleteUser - Deletes a user by ID
 * @param {String} id - MongoDB User document ID
 * @returns {Object} - Returns a message indicating success
 */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
/**
 * addFriend - Adds a friend to a user's friend list
 * @param {String} userId - MongoDB User document ID for the user who is adding a friend
 * @param {String} friendId - MongoDB User document ID for the friend being added
 * @returns {Object<User>} - Returns the updated User document with the new friend
 */
const addFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * removeFriend - Removes a friend from a user's friend list
 * @param {String} userId - MongoDB User document ID for the user who is removing a friend
 * @param {String} friendId - MongoDB User document ID for the friend being removed
 * @returns {Object<User>} - Returns the updated User document without the friend
 */
const removeFriend = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Export the controller methods
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
};
