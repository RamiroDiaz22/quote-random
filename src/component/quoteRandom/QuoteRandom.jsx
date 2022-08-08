import React, { useState } from "react";
import QuoteText from "../quoteText/QuoteText.jsx";
import QuoteAuthor from "../quoteAuthor/QuoteAuthor.jsx";
import QuoteButton from "../quoteButton/QuoteButton.jsx";
import quotes from "../../quotes.json";
import "./QuoteRandom.css";

function QuoteRandom() {
  const [quote, setQuote] = useState({});

  return (
    <div className="quote" id="quote-box">
      <QuoteText text={quote.quote} />
      <QuoteAuthor author={quote.author} />
      <QuoteButton quotes={quotes} setQuote={setQuote} quote={quote} />
    </div>
  );
}

export default QuoteRandom;
