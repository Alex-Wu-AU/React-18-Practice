import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//React can't render an object: objects are not valid react child
//destructing: break the properties of the object
//spread operator: ...copy to a new object
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const books = [
  {
    author: " Nagi Maehashi ",
    title:
      "RecipeTin Eats: Dinner: 150 recipes from Australia’s most popular cook",
    img: "https://images-fe.ssl-images-amazon.com/images/I/81WavJQRqeL._AC_UL900_SR900,600_.jpg",
    id: 1,
  },
  {
    title: "Outlive: The Science and Art of Longevity",
    author: "MD, Peter Attia",
    img: "https://images-fe.ssl-images-amazon.com/images/I/71gpe7LeGSL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];
//vanilla.js alternative
//const {img, title, author} = props;

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={props.title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);
