const { Router } = require("express");

const messagePageRouter = Router();

messagePageRouter.get("/:messageID", (req, res) => {
  const { messageID } = req.params;
  res.render("messagePage", {
    messageID: messageID,
    title: "Mini Message Board",
  });
});

module.exports = messagePageRouter;
