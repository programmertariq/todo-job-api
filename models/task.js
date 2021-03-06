const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 100,
  },
  desc: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 1000,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = {
  Task: mongoose.model("Task", taskSchema),
};
