const express = require("express");
const router = express.Router();
const interviewController = require("../controllers/interviewController");
const Experience = require("../models/Interview");

// @route  GET/getCompany
// @desc  get all company from interview
// @access public


router.get("/", async (req, res) => {

    try {
        const getCompany = await Experience.find({}).select("company");
        if (getCompany) {
          return res.status(200).send(getCompany);
        } else {
          return res.status(404).json({ message: "Company not found" });
        }
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
})
module.exports = router;
