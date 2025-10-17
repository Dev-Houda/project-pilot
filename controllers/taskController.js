const Task = require("../models/Task");

const task_index = (req, res) => {
  Task.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json({ title: "All Tasks", tasks: result }))
    .catch((err) => console.log(err));
};

const task_create_post = (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then((result) => res.redirect("/tasks"))
    .catch((err) => console.log(err));
};

// const client_create_get = (req, res) => {
//   res.render("blogs/create", { title: "Create a new blog" });
// };

const task_details = (req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then((result) => res.json({ title: "Task details", task: result }))
    .catch((err) => res.json({ title: "404! Task not found" }));
};

const task_delete = (req, res) => {
  const id = req.params.id;
  Task.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/tasks" }))
    .catch((err) => console.log(err));
};

module.exports = {
  task_index,
  task_create_post,
  task_details,
  task_delete,
};
