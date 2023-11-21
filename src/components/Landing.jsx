import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import {Link} from "react-router-dom"


export default function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platform</h1>
            <h2>
              Find Your Dream Book With <span className="purple">Library</span>
            </h2>
            
            <Link to="/books" className="nav__link">
            <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}
