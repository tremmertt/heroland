import React from "react";
import "./Partner.css";

export default function Partner() {
  return (
    <div className="partner-image">
      <div
        className="row row-cols-2 justify-content-center g-2"
        style={{ paddingBottom: "50px" }}
      >
        <div className="col-lg-2">
          <img
            className="img-fluid"
            style={{ width: "180px" }}
            src={require("../../300ppi/Artboard 46.png")}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            className="img-fluid"
            style={{ width: "180px" }}
            src={require("../../300ppi/Artboard 47.png")}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            className="img-fluid"
            style={{ width: "180px" }}
            src={require("../../300ppi/Artboard 48.png")}
            alt=""
          />
        </div>
        <div className="col-lg-2">
          <img
            className="img-fluid"
            style={{ width: "180px" }}
            src={require("../../300ppi/Artboard 49.png")}
            alt=""
          />
        </div>
      </div>

      <div className="" style={{ marginTop: "50px", paddingBottom: "100px" }}>
        <img
          className="img-fluid"
          src={require("../../300ppi/Artboard 50.png")}
          alt=""
          style={{ height: "60px" }}
        />
        <div
          className="row row-cols-lg-5 row-cols-2 g-3"
          style={{ paddingTop: "60px", paddingBottom: "30px" }}
        >
          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 46.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 47.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 48.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 49.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 51.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 56.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 55.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 54.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 53_1.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>

          <div className="col">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 53.png")}
              alt=""
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="getLand"
        style={{ paddingTop: "120px", paddingBottom: "100px" }}
      >
        <div style={{ marginBottom: "30px" }}>
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 58.png")}
            alt=""
            style={{ height: "50px" }}
          />
          <div
            className=""
            style={{ marginTop: "150px", paddingBottom: "80px" }}
          >
            <img
              className="img-fluid inner-getLand"
              src={require("../../300ppi/Artboard 59.png")}
              alt=""
              style={{ width: "250px" }}
            />
          </div>
        </div>
      </div>

      <div className="community-bg">
        <div className="container py-5">
          <div className="row justify-content-center  mx-auto">
            <div className="col-lg-6 col-md-4 col-sm-1 text-start">
              <p
                className="text-white bg-dark fs-5 "
                style={{ width: "fit-content" }}
              >
                {" "}
                GET IN TOUCH{" "}
              </p>
              <p
                className="text-white bg-dark fs-4 fw-bolder "
                style={{ width: "fit-content" }}
              >
                {" "}
                JOIN OUR COMMUNITY{" "}
              </p>
              <div className="d-flex flex-wrap text-center mt-2 community ">
                <div>
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 66.png")}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p> Twitter </p>
                </div>

                <div className="ms-3">
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 66_1.png")}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p> Facebook </p>
                </div>

                <div className="ms-3">
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 67.png")}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p> Telegram </p>
                </div>

                <div className="ms-3">
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 68.png")}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="text-center"> Email </p>
                </div>

                <div className="ms-3">
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 69.png")}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p> Website </p>
                </div>
              </div>

              <div>
                <p className="fw-light"> Contact us: Support@herobook.io</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 mx-auto text-start">
              <img
                className="img-fluid"
                src={require("../../300ppi/Artboard 73.png")}
                alt=""
                style={{ width: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bg fs-5">
        <footer className="text-center text-lg-start text-white lh-base">
          <section className="pt-4">
            <div className="container text-center text-md-start">
              {/* Grid row */}
              <div className="row">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 92.png")}
                    alt=""
                    style={{ height: "25px" }}
                  />
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 93.png")}
                    alt=""
                    style={{ height: "25px", marginBottom: "20px" }}
                  />
                  <p>
                    <a href="#!" className="text-reset">
                      HBG overview
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Project overview
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Token Metric
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      White paper
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 95.png")}
                    alt=""
                    style={{ height: "25px", marginBottom: "20px" }}
                  />
                  <p>
                    <a href="#!" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Base
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Benefit
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Tokenomic
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Roadmap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Partner
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Comunity
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <img
                    className="img-fluid"
                    src={require("../../300ppi/Artboard 96.png")}
                    alt=""
                    style={{ height: "25px", marginBottom: "20px" }}
                  />
                  <p>
                    <a href="#!" className="text-reset">
                      Offical Token
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help Center
                    </a>
                  </p>
                  <p className="buy-wrapper">
                    <img
                      className="img-fluid inner-buy"
                      src={require("../../300ppi/Artboard 64.png")}
                      alt=""
                      style={{ height: "70px" }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
