const express = require('express');
const router = express.Router();
const Todo = require('../models/Tasks');

// Create a new todo
router.post('/task', async (req, res) => {
  const { title, description, status } = req.body;

  const newTodo = new Todo({
    title,
    description,
    status
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all todos, optionally filtered by status
router.get('/tasks', async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};

  try {
    const todos = await Todo.find(filter);
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a todo
router.put('/task/:id', async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete('/task/:id', async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
