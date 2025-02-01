const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  birthday: {
    type: Date,
    required: [true, "Birthday is required"],
    validate: {
      validator: function (value) {
        return value <= new Date() && value >= new Date("1900-01-01");
      },
      message: "Birthday must be between 1900-01-01 and today",
    },
  },
  address: {
    street: {
      type: String,
      required: [true, "Street name is required"],
      trim: true,
    },
    number: {
      type: String,
      required: [true, "Address number is required"],
      trim: true,
    },
    postCode: {
      type: String,
      required: [true, "Post code is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    country: {
      code: {
        type: String,
        required: [true, "Country code is required"],
        uppercase: true,
        trim: true,
      },
      name: {
        type: String,
        required: [true, "Country name is required"],
        trim: true,
      },
    },
  },
  ipCountry: {
    type: String,

    trim: true,
  },
  nationalIdNumber: {
    type: String,
    validate: {
      validator: function (value) {
        // Only required and validated for Bulgarian users
        if (this.address.country.code === "BG") {
          return value && value.length === 10 && /^\d{10}$/.test(value);
        }
        return true;
      },
      message: "Valid EGN is required for Bulgarian citizens",
    },
  },
  insurance: {
    type: {
      type: String,
      required: [true, "Insurance type is required"],
      enum: ["state", "private", "self"],
      default: "self",
    },
    company: {
      type: String,
      required: function () {
        return (
          this.address.country.code === "DE" && this.insurance.type === "state"
        );
      },
    },
    number: {
      type: String,
      required: function () {
        return (
          (this.address.country.code === "DE" ||
            this.address.country.code === "BG") &&
          this.insurance.type === "state"
        );
      },
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  termsAccepted: {
    type: Boolean,
    required: [true, "Terms and conditions must be accepted"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  isEmailValidated: { type: Boolean, default: false },
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
