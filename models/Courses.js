const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const CoursesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        linkToCourse: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            enum: ["admin", "user"],
            default: "admin",
        },
        platform: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required:true,
        },
        pros: {
            type: [String],
            required:true,
        },
        cons: {
            type: [String],
            required:true,
        },
        likes: {
            type: Number,
            required:true
        },
        disLikes: {
            type: Number,
            required:true
        },
        Comments: {
            userName: {
                type: String,
                required:true
            },
            userId: {
                type: Number,
                required:true
            },
            profile: {
                type: String,
                required:true
            },
            Comment: {
                type: String,
                required:true
            }
        }
    },
    {
        timestamps: true,
    }
);

module.exports = Courses = mongoose.model("Courses", CoursesSchema);
