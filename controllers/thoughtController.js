const { Thought, User } = require('../models');

/**
 * getAllThoughts - Retrieves all thoughts
 * @returns {Array<Thought>} - Returns an array of all Thought documents
 */
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * getThoughtById - Retrieves a single thought by ID
 * @param {String} id - MongoDB Thought document ID
 * @returns {Object<Thought>} - Returns the Thought document
 */
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * createThought - Creates a new thought
 * @param {Object} req.body - New thought details
 * @returns {Object<Thought>} - Returns the new Thought document
 */
const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } }, { new: true });
    res.json(newThought);
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * updateThought - Updates an existing thought by ID
 * @param {String} id - MongoDB Thought document ID
 * @param {Object} req.body - Updated thought details
 * @returns {Object<Thought>} - Returns the updated Thought document
 */
const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * deleteThought - Deletes a thought by ID
 * @param {String} id - MongoDB Thought document ID
 * @returns {Object} - Returns deletion confirmation
 */
const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } }, { new: true });
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

/**
 * addReaction - Adds a reaction to a thought
 * @param {String} thoughtId - MongoDB Thought document ID
 * @param {Object} req.body - New reaction details
 * @returns {Object<Thought>} - Returns the updated Thought document with the new reaction
 */
const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true });
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

/**
 * removeReaction - Removes a reaction from a thought
 * @param {String} thoughtId - MongoDB Thought document ID
 * @param {String} reactionId - Reaction ID to remove
 * @returns {Object<Thought>} - Returns the updated Thought document without the reaction
 */
const removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
};
