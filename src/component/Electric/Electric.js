import React from "react";
import "./Electric.css";

export default function Electric() {
  return (
    <div className="electric-image py-5">
      <div className="mt-5 position-relative">
        <img
          className="img-fluid"
          src={require("../../300ppi/Artboard 82.png")}
          alt=""
          style={{ height: "250px", width: "100%" }}
        />
        <div className="position-absolute top-0 start-50 translate-middle">
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 19.png")}
            alt=""
            style={{ width: "500px" }}
          />
        </div>
        <div className="position-absolute mt-3 top-50 start-50 translate-middle w-75 text-center">
          <img
            className="img-fluid mt-4"
            src={require("../../300ppi/Artboard 20.png")}
            alt=""
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>

      <div className="row justify-content-center py-5">
        <div className="col-lg-4 col-md-6 col-xs-1 pt-5 electric-wrapper">
          <img
            className="inner-electric img-fluid"
            style={{ height: "400px" }}
            src={require("../../300ppi/Artboard 23.png")}
            alt=""
          />
        </div>
        <div className=" col-lg-4 col-md-6 col-xs-1 text-start my-auto pt-5">
          <img
            className="pb-2 ms-3 img-fluid "
            style={{ height: "50px" }}
            src={require("../../300ppi/Artboard 37.png")}
            alt=""
          />
          <p className="mx-4  fs-5 lh-base text-white text-start ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div>
        <div>
          <img
            className="img-fluid my-2 "
            src={require("../../300ppi/Artboard 85.png")}
            alt=""
            style={{ height: "60px", width: "600px" }}
          />
        </div>
      </div>
    </div>
  );
}
