import { React, useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./App.css";
import Main from "./Main";

import ThankYou from "./ThankYou";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState(null);

  function handleSubmit() {
    if (!rating) return;
    setSubmit(true);
  }

  return (
    <>
      <main className="card">
        {(!submit && (
          <Main setRating={setRating} setSubmit={handleSubmit} rated={rating} />
        )) || <ThankYou rating={rating} />}
      </main>
    </>
  );
}

export default App;
