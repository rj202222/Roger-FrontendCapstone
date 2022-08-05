import React, { useState } from "react";
import axios from "axios";

export default function addLegend() {
  const [movie_title, setMovie_title] = useState("");
  const [movie_picture_url, setMovie_picture_url] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const postMovie = () => {
    axios
      .post("http://127.0.0.1:5000/movie/add", {
        movie_title: movie_title,
        movie_picture_url: movie_picture_url,
        description: description,
        rating: rating,
      })
      .then((response) => console.log("Movie Added", response))
      .catch((error) => console.log(error));
    event.preventDefault();
  };

  return (
    <div className="add-movie">
      <h1 className="add-movie-title">Enter Movie Data</h1>

      <form className="add-movie-form" onSubmit={postMovie}>
        <input
          className="add-movie-form-input"
          onChange={(event) => setMovie_title(event.target.value)}
          type="text"
          placeholder="Movie Name"
        />

        <input
          className="add-movie-form-input"
          onChange={(event) => setMovie_picture_url(event.target.value)}
          type="text"
          placeholder="Picture URL"
        />

        <textarea
          className="add-movie-form-input"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Movie Description"
        />

        <input
          className="add-movie-form-input"
          onChange={(event) => setRating(event.target.value)}
          type="number"
          placeholder="Rating 1-5"
        />

        <button className="add-movie-form-button">Add Movie</button>
      </form>
    </div>
  );
}
