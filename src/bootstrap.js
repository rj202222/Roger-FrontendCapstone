import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./components/app";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Movies from "./components/movies";
import AddMovie from "./components/add-movie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);
import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/add-movie">
          <AddMovie />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
