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
  } ,
  findCourseByAuthor:(author)=>{
    return db.promise().query("SELECT * FROM Courses WHERE author = ?", [author]);
  }, 
   findCourseById:(id)=>{
    return db.promise().query("SELECT * FROM Courses WHERE id = ?", [id]);
  },
  deleteCourseById:(id)=>{
    return db.promise().query("DELETE FROM Courses WHERE id = ?", [id]);
  }
};

module.exports = Course;
