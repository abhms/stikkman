const db = require("../config/database");

const Course = {
  create: (course) => {
    return db
      .promise()
      .execute(
        "INSERT INTO courses (name, thumbnail, author, description, created_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)",
        [course.name, course.thumbnail, course.author, course.description]
      );
  },
  findAllCourse:()=>{
    return db.promise().query("SELECT * FROM Courses");
  }
};

module.exports = Course;
