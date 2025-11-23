/** Node modules */
import { Router } from "express";

/** Middlewares */
import { requireRefreshToken } from "../../middleware/refToken.js";
import { authenticate } from "../../middleware/authenticate.js";
import { validate } from "../../middleware/validate.js";
import { upload } from "../../middleware/uploadFile.js";

/** Validation */
import { registerValidation, loginValidation, updateAccountValidation } from "../../validate/userValidate.js";
import { customerRegisterValidation } from "../../validate/customerValidate.js";

/** Controllers */
import { register } from "../../controllers/auth/register.js";
import { login } from "../../controllers/auth/login.js";
import { refreshToken } from "../../controllers/auth/refreshToken.js";
import { logout } from "../../controllers/auth/logout.js";
import { details } from "../../controllers/profile/details.js";
import { updateAccount } from "../../controllers/profile/updateAccount.js";
import { uploadImage } from "../../controllers/profile/uploadImage.js";
import { createCustomer } from "../../controllers/customer/createCustomer.js";

/** v1 routes */
const v1Routes = Router();

/** Auth */
v1Routes.post("/auth/register", validate(registerValidation), register);
v1Routes.post("/auth/login", validate(loginValidation), login);
v1Routes.post("/auth/refresh-token", requireRefreshToken, refreshToken);
v1Routes.post("/auth/logout", authenticate, logout);

/** Profile */
v1Routes.get("/profile/me", authenticate, details);
v1Routes.put("/profile/update", validate(updateAccountValidation), authenticate, updateAccount);
v1Routes.post("/profile/upload", authenticate, upload.single("profileImage"), uploadImage);

/** Customer */
v1Routes.post("/customer/create", validate(customerRegisterValidation), createCustomer);

export { v1Routes };
