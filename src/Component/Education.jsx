import React from "react";
import { Chrono } from "react-chrono";
import {
  timelineEducation,
  themeColorExperience,
  fontExperience,
} from "./ConstantFile";
const Education = () => {
  return (
    <>
      <div style={{ color: "white", marginTop: "5%", paddingLeft: "15%" }}>
        <Chrono
          items={timelineEducation}
          mode="VERTICAL"
          cardWidth={400}
          cardHeight={100}
          hideControls={false}
          contentDetailsHeight={80}
          theme={themeColorExperience}
          fontSizes={fontExperience}
        />
      </div>
    </>
  );
};

export default Education;
