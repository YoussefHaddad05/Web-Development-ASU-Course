const express = require("express");
const router = express.Router();
const course = require("../model/modelcourse");

router.get("/", async (req, res) => {
    try {
        const courses = await course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:title", async (req, res) => {
    try {
        const courses = await course.findOne({ title: req.params.title });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const newCourse = new course({
        title: req.body.title,
        description: req.body.description,
        instructorName: req.body.instructorName,
        price: req.body.price,
        category: req.body.category,
    });
    try {
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/:title", async (req, res) => {
  try {
    const updatedCourse = await course.updateOne(
      { title: req.params.title },  
      req.body,                      
      { new: true }                  
    );
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete("/:title", async (req, res) => {
  try {
    const deletedCourse = await course.deleteOne({ title: req.params.title });
    if (!deletedCourse) return res.status(404).json({ message: "Course not found" });
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;