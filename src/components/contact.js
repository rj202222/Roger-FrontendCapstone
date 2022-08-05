import React, { Component } from "react";

import Quote from "./quote";

import ImageOne from ".././../static/contactPage/image_1.png";
import ImageTwo from ".././../static/contactPage/image_2.png";
import ImageThree from ".././../static/contactPage/image_3.png";
import ImageFour from ".././../static/contactPage/image_4.png";
import ImageFive from ".././../static/contactPage/image_5.png";
import ImageSix from ".././../static/contactPage/image_6.png";

export default class contact extends Component {
  render() {
    return (
      <div className="contact-page-wrapper">
        <div className="left-column">
          <div className="top-row">
            <div className="contact-image-wrapper">
              <img src={ImageOne} className="contact-image" alt="image"></img>
            </div>
            <div className="contact-image-wrapper">
              <img src={ImageTwo} className="contact-image" alt="image"></img>
            </div>
            <div className="contact-image-wrapper">
              <img src={ImageThree} className="contact-image" alt="image"></img>
            </div>
          </div>
          <div className="bottom-row">
            <div className="contact-image-wrapper">
              <img src={ImageFour} className="contact-image" alt="image"></img>
            </div>
            <div className="contact-image-wrapper">
              <img src={ImageFive} className="contact-image" alt="image"></img>
            </div>
            <div className="contact-image-wrapper">
              <img src={ImageSix} className="contact-image" alt="image"></img>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Roger Stephens</h2>
            </div>

            <div className="contact-info">
              <h2>
                <Quote />
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
