const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Courses = require("../models/Courses");

const coursesPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, category, linkToCourse, language, platform, price, description, pros, cons, likes, disLikes, Comments, } = req.body;
    try {

        const course = new Courses({
            title, category, linkToCourse, language, platform, price, description, pros, cons, likes, disLikes, Comments
        });
        // console.log(course)
        await course.save();
        res.status(200).json(course);


    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
};

const getCourse = async (req, res) => {

    try {
        const courseData = await Courses.find({});
        return res.status(200).json({ data: courseData })


    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }

}


module.exports = {
    coursesPost,
    getCourse
};
