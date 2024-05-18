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
app.listen(5000, console.log(`server is running on ${PORT}`.yellow.bold));
