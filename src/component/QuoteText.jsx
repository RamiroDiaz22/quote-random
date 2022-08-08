import React from "react";

function QuoteText({ text }) {
  console.log(text);
  return (
    <div id="quote-text">
      <span id="text">" {text}</span>
    </div>
  );
}

export default QuoteText;
