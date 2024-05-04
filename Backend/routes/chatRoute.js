const express = require("express");
const router = express.Router();
const { accessChat,fetchChats, createGroupChat,removeFromGroup,  addToGroup,
    renameGroup} = require("../Controllers/chatController");
const { protect } = require("../middleware/authMiddleware");

console.log("protect:", protect);
console.log("accessChat:", accessChat);

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup)
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
