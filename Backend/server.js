const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("heyy i am krushang savaliya");
});
app.get("/api/chats", (req, res) => {
  res.send(chats);
  //console.log(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

const PORT = process.env.PORT || 5000;
app.listen(5000 , console.log(`server is running on ${PORT}`));
