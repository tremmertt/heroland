import React from "react";
import "./Benefit.css";

export default function Benefit() {
  function buildCarouselItems() {
    const items = [
      {
        image: require("../../300ppi/Artboard 27.png"),
        text: "Sustainable and reputable ecosystem with Herobook and Herocard",
      },
      {
        image: require("../../300ppi/Asset 20.png"),
        text: "Potential to increase the price of virtual real estate (x multiple times value)",
      },
      {
        image: require("../../300ppi/Asset 21.png"),
        text: "The platform has a large number of players the opportunity to make money from advertising",
      },
      {
        image: require("../../300ppi/Asset 22.png"),
        text: "Passive income based on farming, mining and owning",
      },
      {
        image: require("../../300ppi/Asset 23.png"),
        text: "Build your own virtual business",
      },
      {
        image: require("../../300ppi/Asset 24.png"),
        text: "Become the leading Metaverse and provide a platform for people to truly interact with each other",
      },

      {
        image: require("../../300ppi/Asset 25.png"),
        text: "Increased ability to receive taxes from other players to create a passive income stream when owning plots near mineral mines",
      },
    ];
    let rows = [];
    for (let index in items) {
      const item = items[index];
      rows.push(
        <div
          key={index}
          className={index == 0 ? "carousel-item active" : "carousel-item"}
          style={{ width: "800px", marginTop: "40px" }}
        >
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <div className=" col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
              <img
                className=""
                src={item.image}
                alt=""
                style={{ height: "200px", margin: "auto" }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center justify-content-center text-left mt-4">
              <p
                className="text-white text-wrap ms-3 fs-5 lh-md"
                style={{ width: "300px" }}
              >
                {item.text}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return <div className="carousel-inner">{rows}</div>;
  }

  return (
    <div className="benefit-image">
      <div className="position-relative">
        <img
          className="img-fluid "
          src={require("../../300ppi/Artboard 25.png")}
          alt=""
          style={{ height: "500px" }}
        />
        <div className="row justify-content-center carousel-custom position-absolute top-50 start-50 translate-middle text-start">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className=" carousel-btn active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                className="carousel-btn"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                className="carousel-btn"
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={3}
                className="carousel-btn"
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={4}
                className="carousel-btn"
                aria-label="Slide 5"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={5}
                className="carousel-btn"
                aria-label="Slide 6"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={6}
                className="carousel-btn"
                aria-label="Slide 7"
              />
            </div>
            {buildCarouselItems()}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="visually-hidden carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="visually-hidden carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <div
          className="position-absolute bottom-0 start-50 translate-middle-x text-start"
          style={{ paddingBottom: "40px" }}
        >
          <img
            className="img-fluid"
            src={require("../../300ppi/Artboard 77.png")}
            alt=""
            style={{ width: "300px" }}
          />
        </div> */}
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
