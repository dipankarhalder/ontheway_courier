/** Node modules */
import { Router } from "express";

/** Routes */
import { v1Routes } from "./v1/index.js";

/** Root routes */
const rootRoutes = Router();
rootRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "API is live now",
    status: "ok",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

rootRoutes.use("/v1", v1Routes);
export { rootRoutes };
