const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Courses = require("../models/Courses");

const coursesPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    title,
    author,
    category,
    linkToCourse,
    language,
    platform,
    price,
    description,
    pros,
    cons,
    Comments,
  } = req.body;
  try {
    const course = await Courses.create({
      title,
      author,
      category,
      linkToCourse,
      language,
      platform,
      price,
      description,
      pros,
      cons,
    });

    res.status(200).json({ data: course });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const courseData = await Courses.find({}).sort({ likes: -1 });

    return res.status(200).json({ data: courseData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getCoursebyLikes = async (req, res) => {
  try {
    const courseData = await Courses.find({}).sort({ likes: -1 });
    return res.status(200).json({ data: courseData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getCoursebyCategory = async (req, res) => {
  const { filterBy } = req.body;
  console.log(filterBy);
  try {
    const courseData = await Courses.find(filterBy).sort({
      likes: -1,
    });
    return res.status(200).json({ data: courseData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  coursesPost,
  getCourse,
  getCoursebyLikes,
  getCoursebyCategory,
};
