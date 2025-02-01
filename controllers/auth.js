require("dotenv").config();
const authController = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

authController.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      birthDate,
      address,
      addressNumber,
      postCode,
      city,
      country,
      email,
      password,
      insuranceType,
      nationalIdNumber,
      ipCountry,
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with mapped data structure
    const user = new User({
      firstName,
      lastName,
      birthday: new Date(birthDate),
      address: {
        street: address,
        number: addressNumber,
        postCode,
        city,
        country: {
          code: country,
          name: country === "BG" ? "Bulgaria" : "Unknown", // You might want to have a proper country mapping
        },
      },
      email,
      password: hashedPassword,
      nationalIdNumber,
      insurance: {
        type: insuranceType,
      },
      termsAccepted: true, // You might want to add this to your frontend form
      ipCountry,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation error",
        errors: Object.values(error.errors).map((err) => err.message),
      });
    }
    res.status(500).json({ message: "Error during registration" });
  }
});

module.exports = authController;
