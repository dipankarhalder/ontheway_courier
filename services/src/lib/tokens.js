/** Node modules */
import jwt from "jsonwebtoken";

/** Custom modules */
import { config } from "../config/dotenv.js";

/** Generate the tokens */
export const generateAccessToken = (userId, username) => {
  return jwt.sign({ userId, username }, config.JWT_ACCESS_SECRET, {
    expiresIn: config.ACCESS_TOKEN_EXPIRY,
    subject: "accessApi",
  });
};

export const generateRefreshToken = (userId, username) => {
  return jwt.sign({ userId, username }, config.JWT_REFRESH_SECRET, {
    expiresIn: config.REFRESH_TOKEN_EXPIRY,
    subject: "refreshToken",
  });
};

/** Verify the tokens */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, config.JWT_ACCESS_SECRET);
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, config.JWT_REFRESH_SECRET);
};
