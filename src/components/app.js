import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="hero-section">
          <div className="top-heading">
            <h1>
              You've come to the right place we have the ratings on the top
              movies!
            </h1>
          </div>
        </div>

        <div className="features-section">
          <div className="columns-wrapper">
            <div className="column">
              <h3>We rate the movies you want when you want!</h3>
            </div>

            <div className="column">
              <h3>Click on Movies to see our collection!</h3>
            </div>

            <div className="column">
              <h3>20+ movies and more to come</h3>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153325.106420837!2d-113.79002314063342!3d39.482451316547575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c6bc78f13f9cd%3A0xbddf4aa56cd7463f!2sUtah!5e0!3m2!1sen!2sus!4v1659726064599!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
}
