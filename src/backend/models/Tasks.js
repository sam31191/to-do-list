const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tasks', tasksSchema);
