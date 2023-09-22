// DEPENDENCIES
express = require("express");
path = require("path");
fs = require("fs");

// DATA

// APP / PORT
app = express();
PORT = process.env.PORT || 3000;

// MIDDLEWARES

// ROUTES
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
  res.json(notes);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
