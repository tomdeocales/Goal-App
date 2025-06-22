const express = require('express');
const cors = require('cors');
require('dotenv').config();

const goalRoutes = require('./routes/goalRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/goals', goalRoutes);

module.exports = app; 