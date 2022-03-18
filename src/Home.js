/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Banner from "./component/Banner/Banner";
import Benefit from "./component/Benefits/Benefit";
import Electric from "./component/Electric/Electric";
import HBG from "./component/HBGToken/HBG";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Partner from "./component/Partner/Partner";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Intro />
      <Electric />
      <Benefit />
      <HBG />
      <Partner />
    </div>
  );
}
