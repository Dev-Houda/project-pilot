const mongoose = require("mongoose");
const Project = require("./Project");
const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    priority: {
      type: String,
      required: true,
    }, // 'Low' | 'Medium' | 'High'
    status: {
      type: String,
      required: true,
    }, // 'Planning' | 'In Progress' | 'Completed'
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
