import React from "react";
import "./QuoteText.css";

function QuoteText({ text }) {
  console.log(text);
  return (
    <div className="quote-text" id="quote-text">
      <span id="text">{text}</span>
    </div>
  );
}

export default QuoteText;
