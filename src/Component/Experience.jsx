import React from "react";
import { Chrono } from "react-chrono";
import {
  timelineCon,
  themeColorExperience,
  fontExperience,
} from "./ConstantFile";

const Experience = () => {
  return (
    <div style={{ color: "white" }}>
      <Chrono
        items={timelineCon}
        mode="HORIZONTAL"
        cardWidth={1300}
        cardHeight={470}
        hideControls={true}
        contentDetailsHeight={80}
        theme={themeColorExperience}
        fontSizes={fontExperience}
      />
    </div>
  );
};

export default Experience;
