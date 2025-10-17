const Client = require("../models/Client");

const client_index = (req, res) => {
  Client.find()
    .sort({ createdAt: -1 })
    .then((result) => res.json({ title: "All Clients", clients: result }))
    .catch((err) => console.log(err));
};

const client_create_post = (req, res) => {
  const client = new Client(req.body);
  client
    .save()
    .then((result) => res.redirect("/clients"))
    .catch((err) => console.log(err));
};

// const client_create_get = (req, res) => {
//   res.render("blogs/create", { title: "Create a new blog" });
// };

const client_details = (req, res) => {
  const id = req.params.id;
  Client.findById(id)
    .then((result) => res.json({ title: "Client details", client: result }))
    .catch((err) => res.json({ title: "404! Client not found" }));
};

const client_delete = (req, res) => {
  const id = req.params.id;
  Client.findByIdAndDelete(id)
    .then((result) => res.json({ redirect: "/clients" }))
    .catch((err) => console.log(err));
};

module.exports = {
  client_index,
  client_create_post,
  client_details,
  client_delete,
};
