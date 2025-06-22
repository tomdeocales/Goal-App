const Goal = require('../models/goalModel');

// Mock data for demonstration
let goals = [
  { id: 1, title: 'Run 5km', description: 'Daily morning run', status: 'active', createdAt: new Date() },
];

exports.getAllGoals = async (req, res) => {
  try {
    const goals = await Goal.getAll();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
};

exports.createGoal = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newGoal = await Goal.create({ title, description });
    res.status(201).json(newGoal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create goal' });
  }
}; 