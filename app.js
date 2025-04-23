const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messagePageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/message", messagePageRouter);
app.get("*splat", (req, res) => {
  res.send("404 not found");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
