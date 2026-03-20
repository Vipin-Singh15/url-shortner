import jsonwebtoken from "jsonwebtoken";
import { createUser, findUserByEmail } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new ConflictError("User already exists");
  }

  const user = await createUser(name, email, password);

  const token = await signToken({ id: user._id });

  return {token, user};
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  const token = await signToken({ id: user._id });

  return { token, user };
};
