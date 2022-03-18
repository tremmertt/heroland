/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className=" p-2 text-center shadow-1-strong text-white header">
      <nav class="navbar navbar-expand-xl">
        <div class="container-lg">
          <div class="logo">
            <a class="navbar-brand" href="#">
              <img
                src={require("../../300ppi/Artboard 10.png")}
                alt=""
                width="120"
                height="100"
              />
            </a>
          </div>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end fw-bold fs-5"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Base
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Benefit
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Tokenomic
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Roadmap
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Partner
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Comunity
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Launch App
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <img
                    src={require("../../300ppi/Artboard 12.png")}
                    alt=""
                    height="40px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-xl">
        <div className="container-fluid mx-auto px-2 sm:px-2 md:px-6">
          <div>
            <a className="navbar-brand" href="#">
              <img
                src={require("../../300ppi/Artboard 10.png")}
                style={{ height: "75px", marginLeft: "75px" }}
                alt=""
              />
            </a>
          </div>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="d-flex">
            <div
              className="collapse navbar-collapse fw-bold fs-5"
              id="navbarNav"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item mt-1">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Benefit
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Tokenomic
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Partner
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Community
                  </a>
                </li>
                <li className="nav-item mt-1">
                  <a className="nav-link" href="#">
                    Launch App
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img
                      src={require("../../300ppi/Artboard 12.png")}
                      alt=""
                      style={{
                        height: "40px",
                        marginRight: "20px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
}
