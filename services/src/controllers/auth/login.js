/** Node modules */
import bcrypt from "bcrypt";

/** Custom modules */
import { config } from "../../config/dotenv.js";
import { logger } from "../../lib/logtrack.js";
import { genDeviceInfo } from "../../utils/index.js";
import { generateAccessToken, generateRefreshToken } from "../../lib/tokens.js";

/** Models */
import User from "../../models/user.js";
import Token from "../../models/token.js";
import Device from "../../models/device.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    /** Check the user find or not */
    const userInfo = await User.findOne({ email }).select("username email password").lean().exec();
    if (!userInfo) {
      res.status(400).json({
        message: "Provided email address is not exist!",
      });
      return;
    }

    /** Compare the user password */
    const passwordMatch = await bcrypt.compare(password, userInfo.password);
    if (!passwordMatch) {
      res.status(400).json({
        message: "Entered password is invalid, please try again.",
      });
      return;
    }

    /** Generate access and refresh token for new user */
    const accessToken = generateAccessToken(userInfo._id, userInfo.username);
    const refreshToken = generateRefreshToken(userInfo._id, userInfo.username);

    /** Store the refresh token in database */
    await Token.create({ token: refreshToken, userId: userInfo._id });
    logger.info("Refresh token created successfully for user.");

    /** Initialized and store the device information in database */
    const deviceInfo = genDeviceInfo(req, "login");
    await Device.create({ ...deviceInfo, userId: userInfo._id });
    logger.info("Device information stored successfully.");

    /** Set refresh token in cookies */
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    logger.info(`User logged-in successfully: ${email}`);
    res.status(201).json({
      user: {
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      },
      accessToken,
      message: "User logged-in successfully.",
    });
  } catch (err) {
    logger.error(`Login error: ${err.message}`);

    res.status(500).json({
      message: "Oops! Something went wrong. Please try again.",
      error: err.message,
    });
  }
};
