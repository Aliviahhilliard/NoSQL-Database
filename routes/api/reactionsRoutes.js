const router = require('express').Router();
const {
    createReaction,
    deleteReaction,
} = require('controllers/reactionsController.js');

router.route('/').post(createReaction);

router.route('/:reactionId').delete(deleteReaction);

module.exports = router;