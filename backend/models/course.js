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
  findAllCourse: () => {
    return db.promise().query("SELECT * FROM Courses");
  },
  findCourseByAuthor: (author) => {
    return db
      .promise()
      .query("SELECT * FROM Courses WHERE author = ?", [author]);
  },
  findCourseById: (id) => {
    return db.promise().query("SELECT * FROM Courses WHERE id = ?", [id]);
  },
  deleteCourseById: (id) => {
    return db.promise().query("DELETE FROM Courses WHERE id = ?", [id]);
  },
  findByIdAndUpdate: (id, data) => {
    return new Promise((resolve, reject) => {
      if (Object.keys(data).length === 0) {
        console.log("No data to update");
        resolve(0);
        return;
      } else {
        const query = "UPDATE courses SET ? WHERE id = ?";
        const datanadid = [data, id];
        db.promise().query(query, datanadid, (error, results, fields) => {
          if (error) return console.error(error.message);
          console.log("Rows affected:", results.affectedRows);
        });
      }
      resolve(1);
      return;
    });
  },
};

module.exports = Course;
