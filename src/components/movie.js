import React from "react";
import axios from "axios";

export default function Movie(props) {
  const handleDeleteClick = () => {
    axios
      .delete(
        `https://rogercapstonebackend.herokuapp.com/movie/
      ${props.movieData.id}`
      )
      .then((response) => console.log("Movie Deleted", response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="movie-container">
      <div className="movie-card">
        <div className="top-section">
          <div className="movie-title">
            <h1> {props.movieData.movie_title}</h1>
          </div>
          <div className="movie-picture">
            <img src={props.movieData.movie_picture_url} />
          </div>
        </div>
        <div className="bottom-section">
          <div className="movie-description">
            <h3>{props.movieData.description}</h3>
          </div>
          <div className="movie-rating">
            <h3>Rating: {props.movieData.rating} stars out of 5</h3>
          </div>
        </div>
        {/* <button className="delete-movie" onClick={handleDeleteClick}>
          delete
        </button> */}
      </div>
    </div>
  );
}
