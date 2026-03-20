import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default:
      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const hashed = await bcrypt.hash(this.password, SALT_ROUNDS);
  this.password = hashed;
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model("user", userSchema);

export default User;
