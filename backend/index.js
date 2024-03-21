require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const AllCourse = require("./controller/course");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 4000;
app.use(fileUpload())
app.use(cors());
app.use(bodyParser.json()); 

app.post("/course", AllCourse.addCourse);
app.get("/courses",AllCourse.getAllCourse)
app.get("/coursesById/:id",AllCourse.getCourseById)
app.get("/courses/:author",AllCourse.getCourseByAuthor)
app.delete("/course/:id",AllCourse.deleteCourse) 
app.put("/course/:id",AllCourse.updateCourse) 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
