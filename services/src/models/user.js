/** Node modules */
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

/** User schema */
const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8, select: false },
    phone: { type: String, required: true },
    profileImage: { type: String, default: "" },
  },
  { timestamps: true },
);

/** Hasing the user password */
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export default model("User", userSchema);
