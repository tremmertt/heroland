import React from "react";
import "./Benefit.css";

export default function Benefit() {
  return (
    <div className="benefit-image">
      <div className="position-relative">
        <img
          className="img-fluid "
          src={require("../../300ppi/Artboard 25.png")}
          alt=""
          style={{ height: "500px" }}
        />
        <div
          className="row justify-content-center position-absolute top-50 start-50 translate-middle text-start"
          style={{ zIndex: 2 }}
        >
          <div className="col-lg-4 text-center pt-3">
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 27.png")}
              alt=""
              style={{ height: "200px" }}
            />
          </div>
          <div className="col-lg-4 ">
            <p className="text-white fs-5 lh-lg">
              Sustainable and reputable ecosystem with Herobook and Herocard
            </p>
          </div>
        </div>
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x text-start"
          style={{ paddingBottom: "40px" }}
        >
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 77.png")}
            alt=""
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <div>
        <div
          className="align-content-center"
          style={{ marginTop: "50px", marginBottom: "30px" }}
        >
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 38.png")}
            alt=""
            style={{ width: "600px" }}
          />
        </div>

        <p className="text-white fs-5 lh-lg">
          Hero Book's huge ecosystem needs a factor that links all of them -{" "}
          <br />
          that's when the HBG Token appears and connects everything.
        </p>
      </div>

      <div>
        <div style={{ marginTop: "50px", paddingBottom: "50px" }}>
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 97.png")}
            alt=""
            style={{ width: "500px" }}
          />
        </div>

        <p className="text-white fs-5 lh-lg">
          Buy Hero Boxes or Land to own your NFT
          <br />
          Buy, sell, exchange nft in the ecosystem
          <br />
          Build your own Blockchain Game on the HeroBook system with our
          support.
        </p>
        <div className="" style={{ marginTop: "50px", paddingBottom: "30px" }}>
          <div>
            <img
              className="img-fluid"
              src={require("../../300ppi/Artboard 87.png")}
              alt=""
              style={{ width: "1200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
