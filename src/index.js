import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// easier approach
// shortcut for self-closing tag: input:text

const BookList = () => {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
};
const title = "Outlive: The Science and Art of Longevity";
const author = "MD, Peter Attia";
const image =
  "https://images-fe.ssl-images-amazon.com/images/I/71gpe7LeGSL._AC_UL900_SR900,600_.jpg";

// if a property is not provided, even if it's there in the component see line 13, it will not be displayed
// unless it's provided : i.e. props.job/title.etc.
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
