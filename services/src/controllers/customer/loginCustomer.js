/** Node modules */
import bcrypt from "bcrypt";

/** Custom modules */
import { config } from "../../config/dotenv.js";
import { logger } from "../../lib/logtrack.js";
import { genDeviceInfo } from "../../utils/index.js";
import { generateAccessToken, generateRefreshToken } from "../../lib/tokens.js";

/** Models */
import Customer from "../../models/customer.js";
import Token from "../../models/token.js";
import Device from "../../models/device.js";

export const loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;

    /** Check the user find or not */
    const customerInfo = await Customer.findOne({ email }).select("username email password").lean().exec();
    if (!customerInfo) {
      res.status(400).json({
        message: "Provided email address is not exist!",
      });
      return;
    }

    /** Compare the user password */
    const passwordMatch = await bcrypt.compare(password, customerInfo.password);
    if (!passwordMatch) {
      res.status(400).json({
        message: "Entered password is invalid, please try again.",
      });
      return;
    }

    /** Generate access and refresh token for new user */
    const accessToken = generateAccessToken(customerInfo._id, customerInfo.username);
    const refreshToken = generateRefreshToken(customerInfo._id, customerInfo.username);

    /** Store the refresh token in database */
    await Token.create({ token: refreshToken, userId: customerInfo._id });
    logger.info("Customer refresh token created successfully for user.");

    /** Initialized and store the device information in database */
    const deviceInfo = genDeviceInfo(req, "login");
    await Device.create({ ...deviceInfo, userId: customerInfo._id });
    logger.info("Customer device information stored successfully.");

    /** Set refresh token in cookies */
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    logger.info(`Customer logged-in successfully: ${email}`);
    res.status(201).json({
      user: {
        username: customerInfo.username,
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
      },
      accessToken,
      message: "Customer logged-in successfully.",
    });
  } catch (err) {
    logger.error(`Customer login error: ${err.message}`);

    res.status(500).json({
      message: "Oops! Something went wrong. Please try again.",
      error: err.message,
    });
  }
};
