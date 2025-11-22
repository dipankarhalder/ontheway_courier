/** Node modules */
import { Router } from "express";

/** Middlewares */
// import { requireRefreshToken } from "@/middlewares/refreshToken";
// import { authenticate } from "@/middlewares/authenticate";
// import { authorize } from "@/middlewares/authorize";
import { validate } from "../../middleware/validate.js";
// import { upload } from "@/middlewares/uploadFile";

/** Validation */
import {
  registerValidation,
  // loginValidation,
  // updateAccountValidation,
  // updateRoleValidation,
} from "../../validate/userValidate.js";

/** Controllers */
import { register } from "../../controllers/auth/register.js";

/** v1 routes */
const v1Routes = Router();

/** Auth */
v1Routes.post("/auth/register", validate(registerValidation), register);
// v1Routes.post("/auth/login", validate(loginValidation), login);
// v1Routes.post("/auth/refresh-token", requireRefreshToken, refreshToken);
// v1Routes.post("/auth/logout", authenticate, logout);

/** Profile */
// v1Routes.get("/profile/me", authenticate, account);
// v1Routes.get("/profile/users", authenticate, authorize(["super_admin"]), listUsers);
// v1Routes.put("/profile/update", validate(updateAccountValidation), authenticate, updateAccount);
// v1Routes.put("/profile/role/:id", validate(updateRoleValidation), authenticate, authorize(["super_admin"]), updateRole);
// v1Routes.post("/profile/upload", authenticate, upload.single("profileImage"), uploadImage);
// v1Routes.get("/profile/list-image", authenticate, listUploadedImages);

export { v1Routes };
