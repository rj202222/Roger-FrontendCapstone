import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie";

import Background from "../../static/background/cinema-background.jpg";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://rogercapstonebackend.herokuapp.com/movie/get")
      .then((response) => {
        console.log(response);
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderMovies() {
    return this.state.movies.map((movie) => {
      return <Movie key={movie.id} movieData={movie} />;
    });
  }

  render() {
    return (
      <div className="movies">
        <div className="render-movies">{this.renderMovies()}</div>;
      </div>
    );
  }
}
