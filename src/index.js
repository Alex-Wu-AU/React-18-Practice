import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// easier approach
// shortcut for self-closing tag: input:text

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const author = "MD, Peter Attia";
const Book = () => {
  const title = "Outlive: The Science and Art of Longevity";
  return (
    <article className="book">
      <img
        src="https://images-fe.ssl-images-amazon.com/images/I/71gpe7LeGSL._AC_UL900_SR900,600_.jpg"
        alt="Outlive: The Science and Art of Longevity"
      />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
