import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar px-5 py-3 navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
      style={{
        borderBottom: `2px solid ${props.mode == "dark" ? "white" : "black"}`,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.Home}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.About}
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("primary");
              }}
            ></div> */}
          {/* <div
              className="bg-success rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("success");
              }}
            ></div> */}
          {/* <div
              className="bg-danger rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("danger");
              }}
            ></div> */}
          {/* <div
              className="bg-info rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("info");
              }}
            ></div> */}
          {/* </div> */}
          {/* DARK MODE SWITCH */}
          <div
            className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="switchCheckDefault"
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
  Home: PropTypes.string,
};

Navbar.defaultProps = {
  title: "title should here",
};
