import { registerUser, loginUser } from "../services/auth.service.js";
import wrapAsync from "./../utils/trycatchwrapper.js";
import { cookieOptions } from "../config/config.js";

export const register = wrapAsync(async (req, res) => {
  const { name, email, password } = req.body;
  const { token, user } = await registerUser(name, email, password);
  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ user: user, message: "User registered successfully" });
});
export const login = wrapAsync(async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await loginUser(email, password);
  req.user = user;
  res.cookie("accessToken", token, cookieOptions);
  res.status(200).json({ user: user, message: "User logged in successfully" });
});

export const logout = wrapAsync(async (req, res) => {
  res.clearCookie("accessToken", cookieOptions);
  res.status(200).json({ message: "User logged out successfully" });
});

export const getCurrentUser = wrapAsync(async (req, res) => {
  res.status(200).json({ user: req.user });
});
