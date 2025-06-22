const express = require('express');
const router = express.Router();
const goalController = require('../controllers/goalController');

// GET all goals
router.get('/', goalController.getAllGoals);

// POST create a new goal
router.post('/', goalController.createGoal);

module.exports = router; 