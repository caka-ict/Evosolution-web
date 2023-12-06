import React from "react";
import logo from "./logo/notfound.png";
import "./notfound.css";
import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="logo-notfound">
        <Link to={"/"} className="notfound-content">
          <div className="logo">
            <img src={logo} />
          </div>
        </Link>
        <div className="logo-content">
          <a href="/">Công ty Cổ phần EvoSolution</a>
        </div>
      </div>
      <div className="notfound-footer">
        <h1>Oops! That page can’t be found.</h1>
        <Link to={"/"} className="notfound-footer-link">
          <span>Công ty Cổ phần EvoSolution</span>
        </Link>
      </div>
    </div>
  );
};
