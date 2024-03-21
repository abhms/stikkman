const Course = require("../models/course");
const uploadImgToCloudinary = require("../config/Upload");
const AllCourse = {
  addCourse: async (req, res) => {
    try {
      const { thumbnail } = req.files;
      const { name, author, description } = req.body;
      console.log(req.body, "pppppppppppp");
      const requiredFields = ["name", "author"];
      const url = await uploadImgToCloudinary(thumbnail);
      // console.log(url, "urllrlrlrl");
      const missingField = requiredFields.find((field) => !req.body[field]);

      if (missingField) {
        return res.status(400).json({
          message: `${
            missingField.charAt(0).toUpperCase() + missingField.slice(1)
          } is required`,
        });
      }
      console.log(req.body, "zlvlsjdbvjbsdkv");

      const newCourse = {
        name,
        thumbnail: url,
        author,
        description,
      };

      const result = await Course.create(newCourse);
      console.log(result, "pppppppppppp");
      res.status(201).json({ message: "Course created successfully" });
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.findAllCourse();
      console.log(courses[0]);
      const CourseData = courses[0];
      res.status(200).json({ message: "All Courses", CourseData });
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getCourseById: async (req, res) => {
    try {
      const { id } = req.params;
      const [courseData] = await Course.findCourseById(id);
      console.log(courseData,"ppppp")
      if(courseData.length===0){
      res.status(200).json({ message: "No Course found" });
      }else{
        res.status(200).json({ message: "All Courses", courseData });
      }
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getCourseByAuthor: async (req, res) => {
    try {
      const { author } = req.params;
      const AutherCourse = await Course.findCourseByAuthor(author);
      const AuthorCourseData = AutherCourse[0];
      res
        .status(200)
        .json({ message: "All Courses by this Author", AuthorCourseData });
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const findCourseByIdData = await Course.findCourseById(id);

      if (findCourseByIdData[0].length > 0) {
        await Course.deleteCourseById(id);
        res.status(200).json({ message: "Course deleted successfully" });
      } else {
        res
          .status(404)
          .json({ message: "Course not found or already deleted" });
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const { thumbnail } = req.files;
      const { name, author, description } = req.body;
  
      // Upload thumbnail image to cloudinary and get the URL
      const url = await uploadImgToCloudinary(thumbnail);
  
      // Check if course with the given ID exists
      const [courseData] = await Course.findCourseById(id);
      if (courseData.length === 0) {
        return res.status(404).json({ message: "Course not found" });
      }
  
      // Prepare data object to be updated
      const dataToUpdate = {};
      if (name) dataToUpdate.name = name;
      if (author) dataToUpdate.author = author;
      if (description) dataToUpdate.description = description;
      if (url) dataToUpdate.thumbnail = url;
  
      // Update course
      const affectedRows = await Course.findByIdAndUpdate(id, dataToUpdate);
      console.log(affectedRows,"pppppp")
      if (affectedRows > 0) {
        res.status(200).json({ message: "Course updated successfully" });
      } else {
        res.status(400).json({ message: "No data to update" });
      }
      // res.status(200).json({ message: "Course updated successfully" });

    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  
};

module.exports = AllCourse;
