const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your Name"],
      trim: true,
      min: 3,
      max: 30,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
    },

    mobile_number: {
      type: Number,
    },

    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      default: "user",
    },

    hash_password: {
      type: String,
      required: [true, "Please provide your Password"],
    },
    address: [
      {
        details: { type: String },
        for: { type: String },
      },
    ],

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
