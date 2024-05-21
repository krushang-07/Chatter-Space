const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
//import { yellow } from "colors";
const colors = require("colors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoute");
const messageRoutes = require("./routes/messageRoute");
app.use(express.json());
dotenv.config();
connectDB();

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
// app.user(notfound);
// app.user(errorhandler);
const PORT = process.env.PORT || 5000;
const server = app.listen(
  5000,
  console.log(`server is running on ${PORT}`.yellow.bold)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  // console.log("connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    // console.log("User Joined Room: " + room);
  });
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved",newMessageRecieved);
    });
  });
});
