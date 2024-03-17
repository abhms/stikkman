const Course = require("../models/course");
const uploadImgToCloudinary = require("../config/Upload");
const AllCourse = {
  addCourse: async (req, res) => {
    try {
      const {thumbnail} =req.files
      const { name,  author, description } = req.body;
      console.log(req.body,"pppppppppppp")
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
        thumbnail:url,
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
};

module.exports = AllCourse;
