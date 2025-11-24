/** Custom modules */
import { config } from "../../config/dotenv.js";
import { logger } from "../../lib/logtrack.js";

/** Models */
import Token from "../../models/token.js";

export const logoutCustomer = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      await Token.deleteOne({ token: refreshToken });
      logger.info("Customer refresh token deleted successfully.");
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    logger.info("Customer logged out successfully.");
    res.status(204).json({
      message: "Customer logged out successfully.",
    });
  } catch (err) {
    logger.error(`Logout failed: ${err.message}`);

    res.status(500).json({
      message: "Oops! Something went wrong. Please try again.",
      error: err.message,
    });
  }
};
