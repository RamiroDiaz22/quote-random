import React from "react";

function Button({ quotes, setQuote }) {
  setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  function handleClick() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    // setQuote(random);
    setQuote(random);
  }

  return (
    <div id="new-quote">
      <button onClick={handleClick}>Next Quote</button>
    </div>
  );
}

export default Button;
