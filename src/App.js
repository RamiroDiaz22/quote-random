import React, { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import QuoteAuthor from "./component/QuoteAuthor";
import QuoteText from "./component/QuoteText";
import Tweet from "./component/Tweet";
import quotes from "./quotes.json";

function App() {
  const [quote, setQuote] = useState({});

  return (
    <div className="App" id="quote-box">
      <Button quotes={quotes} setQuote={setQuote} />
      <QuoteText text={quote.quote} />
      <QuoteAuthor author={quote.author} />
      <Tweet text={quote.quote} author={quote.author} />
    </div>
  );
}

export default App;
