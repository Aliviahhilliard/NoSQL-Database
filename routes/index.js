// routes/api/index.js

import express from 'express';
import thoughtsRoutes from './api/thoughts-routes'; // Import your thoughts routes here
import usersRoutes from './api/users-routes'; // Import your users routes here

const router = express.Router();

// Use your thoughts and users routes here
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

export default router;
