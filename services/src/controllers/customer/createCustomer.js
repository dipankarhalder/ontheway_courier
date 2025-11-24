/** Custom modules */
import { config } from "../../config/dotenv.js";
import { logger } from "../../lib/logtrack.js";
import { genUsername, genDeviceInfo } from "../../utils/index.js";
import { generateAccessToken, generateRefreshToken } from "../../lib/tokens.js";

/** Models */
import Customer from "../../models/customer.js";
import Token from "../../models/token.js";
import Device from "../../models/device.js";

export const createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, typeUser  } = req.body;

    /** Check for existing email */
    const existEmail = await Customer.exists({ email });
    if (existEmail) {
      res.status(400).json({
        message: `${email} is already registered.`,
      });
      return;
    }

    /** Create new user */
    const username = genUsername();
    const newCustomer = await Customer.create({
      username,
      firstName,
      lastName,
      email,
      password,
      phone,
      typeUser
    });

    /** Generate access and refresh token for new user */
    const accessToken = generateAccessToken(newCustomer._id, newCustomer.username);
    const refreshToken = generateRefreshToken(newCustomer._id, newCustomer.username);

    /** Store the refresh token in database */
    await Token.create({ token: refreshToken, userId: newCustomer._id });
    logger.info("Customer refresh token created successfully.");

    /** Initialized and store the device information in database */
    const deviceInfo = genDeviceInfo(req, "register");
    await Device.create({ ...deviceInfo, userId: newCustomer._id });
    logger.info("Customer device information stored successfully.");

    /** set refresh token in cookies */
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    logger.info(`Customer registered successfully: ${newCustomer.email}`);
    res.status(201).json({
      user: {
        username: newCustomer.username,
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
      },
      accessToken,
      message: "Customer registered successfully.",
    });
  } catch (err) {
    logger.error(`Customer registration error: ${err.message}`);

    res.status(500).json({
      message: "Oops! Something went wrong. Please try again.",
      error: err.message,
    });
  }
};
