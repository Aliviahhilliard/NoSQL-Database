const { Thought } = require('../models');

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
  addReaction,
  removeReaction
};
