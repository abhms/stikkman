require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 
const AllCourse = require("./controller/course");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json()); 

app.post("/course", AllCourse.addCourse);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
