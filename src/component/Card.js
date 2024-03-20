import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Card = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const imageUrl =
    "https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  const name = "John Doe";
  const author = "Jane Doe1111111";
  const date = "March 13, 2024";
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/courses`
      );
      setData(response.data.CourseData);
      // console.log(response.data, "ppppppp");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data, "datattatatat");
  const redirectOnDetail=(id)=>{
    const redirectPath = `/details/${id}`;
    navigate(redirectPath);
  }
  return (
    <>
       <div className="App">
      <header className="App-header">
        {!data ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading all courses...</p>
          </div>
        ) : (
          <div className="grid-container">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <img src={item.thumbnail} alt={item.name} className="card-image" />
                <div className="card-details">
                  <h2 className="card-name">{item.name}</h2>
                  <h3 className="card-author">{item.author}</h3>
                  <p className="card-date">{item.created_at}</p>
                  <p className="card-description">{item.description}</p>
                  <button className="card-button" onClick={()=>redirectOnDetail(item.id)}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {data && data.length==0 &&<>No course found</>}
      </header>
    </div>
    </>
  );
};

export default Card;
