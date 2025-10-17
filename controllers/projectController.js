const Project = require("../models/Project");

const project_index = (req, res) => {
  Project.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json({ title: "All Projects", projects: result }))
    .catch((err) => console.log(err));
};

const project_create_post = (req, res) => {
  const project = new Project(req.body);
  project
    .save()
    .then((result) => res.redirect("/projects"))
    .catch((err) => console.log(err));
};

// const client_create_get = (req, res) => {
//   res.render("blogs/create", { title: "Create a new blog" });
// };

const project_details = (req, res) => {
  const id = req.params.id;
  Project.findById(id)
    .then((result) => res.json({ title: "Project details", project: result }))
    .catch((err) => res.json({ title: "404! Project not found" }));
};

const project_delete = (req, res) => {
  const id = req.params.id;
  Project.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/projects" }))
    .catch((err) => console.log(err));
};

module.exports = {
  project_index,
  project_create_post,
  project_details,
  project_delete,
};
