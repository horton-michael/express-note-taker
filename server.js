// DEPENDENCIES
express = require("express");
path = require("path");
fs = require("fs");

const notesRouter = require("./routes/notes");
// DATA

// APP / PORT
app = express();
PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(notesRouter);

// ROUTES
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
