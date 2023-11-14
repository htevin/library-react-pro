import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Book({ book }) {
  console.log(book)
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
          />
        </figure>
      </a>

      <div className="book__title">
        <a href="" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        {salePrice ? (
          <div className="book__price">
            <span className="book__price--normal">{`$${book.salePrice.toFixed(
              2
            )}`}</span>
            {`$${book.originalPrice.toFixed(2)}`}
          </div>
        ) : (
          `$${book.originalPrice.toFixed(2)}`
        )}
      </div>
    </div>
  );
}
