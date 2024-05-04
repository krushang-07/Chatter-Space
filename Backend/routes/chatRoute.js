const express = require("express");
const router = express.Router();
const { accessChat } = require("../Controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

console.log("protect:", protect);
console.log("accessChat:", accessChat);

router.route("/").post(protect, accessChat);

module.exports = router;
