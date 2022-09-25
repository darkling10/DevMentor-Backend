const express = require("express");
const User = require("../models/User");
const { check, body, validationResult, Result } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authAdmin = require("../middleware/authAdmin");
const courseController = require('../controllers/courseController')

const router = express.Router();

// @route  get/admin
// @desc  Show admin
// @access admin

// router.get("/", authAdmin, (req, res) => {
//   res.json("Hiiii i m admin");
// });



router.get("/course", authAdmin, courseController.getCourse);

// /admin/postCourse
router.post(
  "/course",
  [
    check("title", "title is required").not().isEmpty(),
    check("category", "category is required").not().isEmpty(),
    check("linkToCourse", "linkToCourse is required").not().isEmpty(),
    check("language", "language is required").not().isEmpty(),
    check("platform", "platform is required").not().isEmpty(),
    check("price", "price is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
    check("pros", "pros is required").not().isEmpty(),
    check("cons", "cons is required").not().isEmpty(),
    check("likes", "likes is required").not().isEmpty(),
    check("disLikes", "disLikes is required").not().isEmpty(),
    check("Comments", "Comments is required").not().isEmpty(),

  ],
  courseController.coursesPost

);


module.exports = router;
