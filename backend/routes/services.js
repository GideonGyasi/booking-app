import express from 'express';
import pool from '../database/pool.js';

const router = express.Router();

// Day 1 slice
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, description, price, image_url AS imageUrl FROM services');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching services:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
