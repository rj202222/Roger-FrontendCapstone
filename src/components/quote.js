import React, { useState, useEffect } from "react";

const Quote = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-wrapper">
      <div className="quote">
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quote;
