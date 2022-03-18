import React from "react";
import "./HBG.css";

export default function HBG() {
  return (
    <div className="hbg-image">
      <div className="col-6" style={{ paddingTop: "50px" }}>
        <img
          className="img-fluid"
          src={require("../../300ppi/Artboard 76.png")}
          alt=""
          style={{ width: "550px" }}
        />
      </div>
      <div className="piechart-bg">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-xs-1 text-white fs-5 pt-4"
            style={{ width: "800px" }}
          >
            <div className="d-flex align-items-start text-start">
              <h2 style={{ width: "60px" }}> 3% </h2>
              <p className="ms-4">
                on Airdrop campaign and marketing promotion -{" "}
                <strong>30,000,000</strong> Tokens
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text-15"> 15% </h2>
              <p className="ms-4">
                Pre-Sale Release - <strong> 150,000,000 </strong> Tokens
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text-5"> 5% </h2>
              <p className="ms-5">
                under the management of the Advisory Board -{" "}
                <srong> 50,000,000</srong> Tokens
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text15"> 15% </h2>
              <p className="ms-4">
                listed on reserve fund and exchange -{" "}
                <strong> 150,000,000 </strong> Tokens
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text-25"> 25% </h2>
              <p className="ms-4">
                for P2E - accompanying ecosystem -{" "}
                <strong> 250,000,000 </strong> Tokens
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text15-1"> 15% </h2>
              <p className="ms-4">
                under the management of the development team and ecosystem
                administrator - <srong> 150,000,000</srong> Token
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text-12"> 12% </h2>
              <p className="ms-4">
                for international marketing and expansion -{" "}
                <strong> 120,000,000 </strong> Token
              </p>
            </div>
            <div className="d-flex align-items-start text-start">
              <h2 className="text-start text-10"> 10% </h2>
              <p className="ms-4">
                for project development fund - <strong> 100,000,000 </strong>{" "}
                Token
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-xs-1 ms-5 pb-5 pie-chart-wrapper">
            <img
              className="img-fluid inner-pie-chart"
              src={require("../../300ppi/Artboard 39.png")}
              alt=""
              style={{ width: "600px" }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "50px" }}>
        <div className="roadmap-bg">
          <div className="col-lg-12 py-5">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 75.png")}
              alt=""
              style={{ height: "80px" }}
            />
          </div>
          <div className="col-lg-12 py-5">
            <img
              className="img-fluid roadmap"
              src={require("../../300ppi/Artboard 29.png")}
              alt=""
              style={{ height: "600px" }}
            />
          </div>
        </div>
      </div>

      <div
        className="m-auto"
        style={{ paddingBottom: "100px", paddingTop: "50px" }}
      >
        <img
          className="img-fluid"
          src={require("../../300ppi/Artboard 75_1.png")}
          alt=""
          style={{ height: "60px" }}
        />
      </div>
    </div>
  );
}
