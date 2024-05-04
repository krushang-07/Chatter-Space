const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true, unique: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);




//bcrypt = hashing and compare(enterpass and already pass)

userSchema.methods.matchPassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};



//before a storing a data in db middlework as a pre save 

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }



  //hashing done by hash and salt  
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
