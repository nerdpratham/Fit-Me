import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    age: {
      type: Number,
      required: [true, "Age is required"]
    //   min: [13, "Age must be at least 13"],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required"]
    //   min: [20, "Weight must be at least 20 kg"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 12);
  });

  
export const User = mongoose.model("User", userSchema);
