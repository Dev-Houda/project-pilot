const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

mongoose
  .connect(process.env.DB_URI)
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to Projectpilot!");
});

// routes
app.use("/clients", clientRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
