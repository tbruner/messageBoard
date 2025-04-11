const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const user = req.body.user;
  messages.push({
    text: messageText,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
