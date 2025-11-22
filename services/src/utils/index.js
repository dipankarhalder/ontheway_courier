/** Node modules */
import { UAParser } from "ua-parser-js";

/** Generate random username */
export const genUsername = () => {
  const usernamePrefix = "user-";
  const randomChars = Math.random().toString(36).slice(2);
  const username = usernamePrefix + randomChars;
  return username;
};

/** Generate device information */
export const genDeviceInfo = (req, type) => {
  const userAgent = req.headers["user-agent"] || "";
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  const deviceInfo = {
    ipAddress: req.ip,
    browser: result.browser.name || "Unknown",
    browserVersion: result.browser.version || "Unknown",
    device: result.device.model || "Desktop",
    deviceType: result.device.type || "computer",
    os: result.os.name || "Unknown",
    osVersion: result.os.version || "Unknown",
    logType: type,
  };
  return deviceInfo;
};
