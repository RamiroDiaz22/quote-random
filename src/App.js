import React from "react";
import "./App.css";
import QuoteFooter from "./component/footer/QuoteFooter";
import QuoteRandom from "./component/quoteRandom/QuoteRandom";

function App() {
  return (
    <div className="App">
      <QuoteRandom />
      <QuoteFooter />
    </div>
  );
}

export default App;
