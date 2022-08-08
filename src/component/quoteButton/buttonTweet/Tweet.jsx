import React from "react";
import "./Tweet.css";

function Tweet({ text, author }) {
  let quoteText = text
    ?.replace(/^/, "%22")
    .replace(/\s/g, "%20")
    .replace(/$/, "%22");
  let quoteAuthor = author?.replace(/^/, "%20").replace(/\s/g, "%20");
  let character = quoteText?.concat(quoteAuthor);

  return (
    <div className="quote-tweet" id="quote-tweet">
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${character}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default Tweet;
