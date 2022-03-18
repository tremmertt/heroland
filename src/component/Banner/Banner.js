/* eslint-disable react/style-prop-object */
import React from "react";
import "./Banner.css";
import bannerBackground from "../../300ppi/Artboard 2.png";

export default function Banner() {
  return (
    <div
      className="bg-image"
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <img
          className="img-fluid"
          src={require("../../300ppi/Artboard 9.png")}
          style={{ height: "580px", paddingTop: "20px" }}
          alt=""
        />
        <div className="d-flex justify-content-center">
          <h1
            className="build text border border-danger fw-bold border-2"
            style={{ padding: "12px" }}
          >
            {" "}
            BUILD YOUR OWN WORLD_
          </h1>
        </div>
        <div className="row justify-content-md-center justify-content-sm-center">
          <div className="col-md-4 col-sm-1 img-wrapper">
            <img
              className="inner-img"
              src={require("../../300ppi/Artboard 59.png")}
              alt=""
              style={{ width: "300px" }}
            />
          </div>
          <div className="col-md-4 col-sm-1 img-wrapper">
            <img
              className="inner-img"
              src={require("../../300ppi/Artboard 59.png")}
              alt=""
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <h5
            className="trailer text-trailer border border-success fw-bold border-2"
            style={{ padding: "10px" }}
          >
            {" "}
            TRAILER
          </h5>
        </div>
      </div>

      <div className="img-fluid">
        <img
          src={require("../../300ppi/Artboard 35_1.png")}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
