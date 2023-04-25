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

const Image = () => (
  <img
    src="https://images-fe.ssl-images-amazon.com/images/I/71gpe7LeGSL._AC_UL900_SR900,600_.jpg"
    alt="Outlive: The Science and Art of Longevity"
  />
);
const Title = () => <h2>Outlive: The Science and Art of Longevity</h2>;
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      MD, Peter Attia
    </h4>
  );
};
//alternative: setting up a local object of styling
// const Author = () => {
//   const inLineStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inLineStyles}> name </h4>;
// };
// better practice: use external styling sheet
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
