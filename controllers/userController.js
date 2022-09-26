const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { JsonWebTokenError, decode } = require("jsonwebtoken");
const Courses = require("../models/Courses");

const userRegistration = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  try {
    // see if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      name,
      email,
      password,
    });

    const myToken = await user.getAuthToken();

    const sendUser = await decode(myToken);

    return res.status(200).json({ token: myToken, user : sendUser });



  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const myToken = await user.getAuthToken();
    const sendUser = await decode(myToken);
    return res
      .status(200)
      .json({ message: "Login success", token: myToken, user: sendUser });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};



const patchComments = async (req, res) => {
  const { id, Comment } = req.body;

  const authHeader = req.headers["x-access-token"];
  const token = authHeader && authHeader.split(" ")[1];
  const decoded = decode(token);

  const studID = decoded.id;
  const newComment = {
    studId: studID,
    email: decoded.email,
    Comment: Comment,
    profileLogo: decoded.profileLogo,
  };

  try {
    const commentUpdate = await Courses.findByIdAndUpdate(id, {
      $push: { Comments: newComment },
    });

    return res.status(200).json({ message: "Comment added successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports = {
  userRegistration,
  userLogin,
  patchComments,
};
