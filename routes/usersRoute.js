const express = require("express");
const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const userController = require("../controllers/userController");
const router = express.Router();
const authUser = require("../middleware/authUser");

// @route  POST/users
// @desc  Register user
// @access public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.userRegistration
);

// @route  POST/users/login
// @desc  Login user
// @access public
router.post(
  "/login",
  [
    check("email", "please include valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.userLogin
);

// @route  POST/users/interview
// @desc  Post interview
// @access public
router.post(
  "/interview",
  ([
    check("company", "please include valid company").not().isEmpty(),
    check("role", "please include valid role").not().isEmpty(),
    check("date", "please include valid on campus").not().isEmpty(),
    check("location", "please include valid on campus").not().isEmpty(),
    check("ctc", "please include valid on campus").not().isEmpty(),
    check("selected", "please include valid on campus").not().isEmpty(),
    check("upVote", "please include valid on campus").not().isEmpty(),
    check("description", "please include valid on campus").not().isEmpty(),
  ],
  authUser),
  userController.userLogin
);

module.exports = router;
