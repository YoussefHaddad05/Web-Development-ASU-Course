const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/lab8/course";

const databaseConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`Successful Connection to Local MongoDB`);
  } catch (error) {
    console.log(` MongoDB Error:`, error);
  }
};

databaseConnect();

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructorName: String,
  price: Number,
  category: String,
  enrolledStudents: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("course", courseSchema);
