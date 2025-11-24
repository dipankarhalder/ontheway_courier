/** Node modules */
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

/** User schema */
const customerSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },
    profileImage: { type: String, default: "" },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, trim: true },
    phone: { type: String, required: true },
    password: { type: String, required: true, minlength: 8, select: false },
    typeUser: { type: String, required: true, enum: ["customer", "rider"], default: "customer" },
    deliveryCount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    // address: {
    //   location: { type: String, required: true },
    //   city: { type: String, required: true },
    //   state: { type: String, required: true },
    //   country: { type: String, required: true },
    //   pincode: { type: String, required: true },
    // }
  },
  { timestamps: true },
);

/** Hasing the user password */
customerSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export default model("Customer", customerSchema);
