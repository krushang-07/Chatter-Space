const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const generatetoken = require("../Config/generatetoken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please enter all the fileds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,

      token: generatetoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("failed to create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,

      token: generatetoken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("failed to create the user");
  }
});

module.exports = { registerUser, authUser };
