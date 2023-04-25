import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// easier approach
// shortcut for self-closing tag: input:text

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>words</p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// if a property is not provided, even if it's there in the component see line 13, it will not be displayed
// unless it's provided : i.e. props.job/title.etc.
const firstBook = {
  author: " Nagi Maehashi ",
  title:
    "RecipeTin Eats: Dinner: 150 recipes from Australia’s most popular cook",
  img: "https://images-fe.ssl-images-amazon.com/images/I/81WavJQRqeL._AC_UL900_SR900,600_.jpg",
};

const secondBook = {
  title: "Outlive: The Science and Art of Longevity",
  author: "MD, Peter Attia",
  img: "https://images-fe.ssl-images-amazon.com/images/I/71gpe7LeGSL._AC_UL900_SR900,600_.jpg",
};

//vanilla.js alternative
//const {img, title, author} = props;

const Book = (props) => {
  console.log(props);
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={props.title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
