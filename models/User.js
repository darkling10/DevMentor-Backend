const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    preference: {
      type: [String],
      required: true,
    },
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profileLogo: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  var salt = bcrypt.genSaltSync(10);
  if (this.password && this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

UserSchema.methods.getAuthToken = async function (data) {
  let params = {
    id: this.id,
    email: this.email,
    name: this.name,
    userType: this.userType,
    profileLogo: this.profileLogo,
  };
  var tokenValue = jwt.sign(params, process.env.JWTSECRETKEY, {
    expiresIn: "300000s",
  });
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

module.exports = User = mongoose.model("User", UserSchema);
