import React from "react";
import "./QuoteAuthor.css";

function QuoteAuthor({ author }) {
  return (
    <div className="quote-author" id="quote-author">
      <span id="author">- {author}</span>
    </div>
  );
}

export default QuoteAuthor;
