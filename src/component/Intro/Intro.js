import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="intro container-fluid">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 col-xs-1 text-white text-start my-auto fs-5 md:fs-7 lh-base"
          //   style={{ marginTop: "100px" }}
        >
          <p className="mx-4">
            Heroland is a 1:1 virtual version of Mars divided into 16,700,000
            land plots. However, the player can only own a third of the
            purchased plots and the remaining plots will be released in later
            stages through Punitive Expedition Mode.
            <br />
            Ownership and exchange off plots on Heroland is completely allowed.
            Then, use NFT Hero to build and exploit buildings to develop income
            when owning land. Become a real estate tycoon in the world of
            Heroland. Sell them or explore the potential hidden under the soil
            layers ? The decision is up to you !{" "}
          </p>
        </div>
        <div
          className="col-lg-6 col-xs-1 img-wrapper"
          style={{ marginTop: "150px" }}
        >
          <img
            className="img-fluid inner-img mt-2"
            style={{ width: "400px", marginBottom: "50px" }}
            src={require("../../300ppi/Artboard 35.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
