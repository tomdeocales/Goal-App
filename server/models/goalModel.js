const pool = require('../config/db');

class Goal {
  constructor(id, title, description, status, createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
  }

  static async getAll() {
    const res = await pool.query('SELECT * FROM goals ORDER BY created_at DESC');
    return res.rows;
  }

  static async create({ title, description }) {
    const res = await pool.query(
      'INSERT INTO goals (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    return res.rows[0];
  }
}

module.exports = Goal; 