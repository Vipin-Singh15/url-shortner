import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import connectDB from "./src/config/mongo.config.js";
import shortUrlRoute from "./src/routes/shortUrl.route.js";
import authRoutes from "./src/routes/auth.route.js";
import userRoute from "./src/routes/user.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(attachUser);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoute);
app.use("/api/create", shortUrlRoute);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on PORT: http://localhost:${PORT}`);
});
