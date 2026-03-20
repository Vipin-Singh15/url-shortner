import { nanoid } from "nanoid";
import jsonwebtoken from "jsonwebtoken";
import { jwtOptions } from "../config/config.js";

export const generateNanoId = (length = 7) => {
  return nanoid(length);
};

export const signToken = (payload) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, jwtOptions);
};

export const verifyToken = (token) => {
  const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

  return decoded?.id;
};
