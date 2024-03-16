import React from "react";

const Card = () => {
  const imageUrl =
    "https://images.pexels.com/photos/19597529/pexels-photo-19597529/free-photo-of-man-playing-with-dogs-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  const name = "John Doe";
  const author = "Jane Doe1111111";
  const date = "March 13, 2024";

  return (
    <>
      <div className="grid-container">
        {[...Array(9)].map((_, index) => (
          <div className="card">
            <img src={imageUrl} alt={name} className="card-image" />
            <div className="card-details">
              <h2 className="card-name">{name}</h2>
              <h3 className="card-author">{author}</h3>
              <p className="card-date">{date}</p>
              <p className="card-description">
                Lorem ipsum dolor sit ametlllllllllllllllllllllllll
                lllllllllllllllllllll lllllllllllll, consectetur adipiscing
                elit. Fusce quis malesuada est.
              </p>
              <button className="card-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
