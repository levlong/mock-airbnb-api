const express = require("express");
const app = express();

// Middleware parse JSON
app.use(express.json());

// Route 1: Home
app.get("/", (req, res) => {
  res.send("Hello tao va may 👋");
});

// Route 2: Get user
app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "Long",
    role: "QA Automation"
  });
});

// Route 3: Create user (POST)
app.post("/user", (req, res) => {
  const { name, age } = req.body;

  res.status(201).json({
    message: "User created",
    data: {
      name,
      age
    }
  });
});

app.post("/delete/user", (req, res) => {
  const { id } = req.body;

  res.status(201).json({
    message: "User deleted",
    data: {
      id
    }
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server dang chay tai http://localhost:${PORT}`);
});
