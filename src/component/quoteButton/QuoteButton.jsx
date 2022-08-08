import React from "react";
import Button from "./buttonRandom/Button";
import Tweet from "./buttonTweet/Tweet";
import "./QuoteRandom.css";

function QuoteButton({ quotes, setQuote, quote }) {
  return (
    <div className="quote-buttons">
      <Tweet text={quote.quote} author={quote.author} />
      <Button quotes={quotes} setQuote={setQuote} />
    </div>
  );
}

export default QuoteButton;
