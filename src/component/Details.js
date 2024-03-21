import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const [course, setDataById] = useState(null);
  const { id } = useParams();
  const fetchDataById = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/coursesById/${id}`
      );
      console.log(response, "ppppppp");
      if (response.data.message === "No Course found") {
        setDataById(response.data.message);
        console.log("first");
      } else {
        setDataById(response.data.courseData[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDataById();
  }, []);
  const deleteCourse = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/courses/${id}`
      );
      navigate("/");
    } catch (error) {}
  };
  console.log(course, "dataByIddataById");
  return (
    <div className="details-container">
    {course === "No Course found" || !course ? (
      <div className="loading-container">
        {course === "No Course found" && <p>No Course found</p>}
        {!course && (
          <>
            <div className="spinner"></div>
            <p>Loading course details...</p>
          </>
        )}
      </div>
    ) : (
      <div className="details-content">
        <div className="details-image-container">
          <img
            src={course.thumbnail}
            alt={course.name}
            className="details-image"
          />
        </div>
        <div className="details-info">
          <h1>Name : {course.name}</h1>
          <p>
            <strong>Author:</strong> {course.author}
          </p>
          <p>
            <strong>Description:</strong> {course.description}
          </p>
          <button onClick={() => deleteCourse()}>Delete Course</button>
        </div>
      </div>
    )}
  </div>
  
  );
};

export default Details;
