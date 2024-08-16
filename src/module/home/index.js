import React from "react";
import "./home.scss";
import Herobanner from "./herobanner";
import Deshalbsection from "./Deshalbsection";
import GroupPhoto from "./groupPhoto";
import Profiles from "./profiles";
import Mobilesection from "./mobilesection";
import Werdesection from "./Werdesection";
import Werdeslider from "./Werdeslider";

export default function Home() {
  return (
    <div>
      <Herobanner />
      <Deshalbsection />
      <Werdesection />
      <Werdeslider />
      <Mobilesection />
      <GroupPhoto />
      <Profiles />
    </div>
  );
}
