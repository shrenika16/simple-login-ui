const express = require("express");

const app = express();

const PORT = 5000;

const tasks = [
  { id: 1, title: "Learn Node.js", status: "Pending" },
  { id: 2, title: "Build Express API", status: "Completed" }
];

// Welcome route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Task Manager API"
  });
});

// Get tasks route
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});