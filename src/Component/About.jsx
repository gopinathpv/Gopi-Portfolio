import "../App.css";
import React from "react";
import { aboutStyles, about, aboutStyle1 } from "./ConstantFile";
import { FaReact, FaGit, FaGitlab } from "react-icons/fa";
import { DiJavascript1, DiJava } from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiRedux,
  SiD3Dotjs,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiJson,
  SiJquery,
  SiJest,
  SiCypress,
  SiMysql,
  SiGraphql,
  SiMongodb,
  SiVisualstudiocode,
  SiSublimetext,
  SiAmazonaws,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiInvision,
} from "react-icons/si";
const About = () => {
  return (
    <div style={aboutStyles}>
      <div style={aboutStyle1}>
        {about}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1%",
          }}
        >
          <div>
            <h4> Languages</h4>
            <div>
              <DiJavascript1 className="icon" /> JavaScript
            </div>
            <div>
              <SiTypescript className="icon" /> TypeScript
            </div>
            <div>
              <DiJava className="icon" /> Java
            </div>
            <div>
              <SiCss3 className="icon" /> Css
            </div>
            <div>
              <SiHtml5 className="icon" />
              HTML
            </div>
          </div>

          <div>
            <h4>Web Libraries</h4>
            <div>
              <FaReact className="icon" /> React
            </div>
            <div>
              <SiExpress className="icon" /> Express
            </div>
            <div>
              <SiRedux className="icon" /> Redux
            </div>
            <div>
              <SiBootstrap className="icon" /> Bootstrap
            </div>
            <div>
              <SiJson className="icon" /> Json
            </div>
            <div>
              <SiJquery className="icon" /> JQuery
            </div>
            <div>
              <SiD3Dotjs className="icon" /> D3Js
            </div>
            <div>
              <SiNodedotjs className="icon" /> NodeJs
            </div>
          </div>
          <div>
            <h4>Tools</h4>
            <div>
              <SiAmazonaws className="icon" /> Aws
            </div>
            <div>
              <FaGit className="icon" /> Git
            </div>
            <div>
              <SiPostman className="icon" /> Postman
            </div>
            <div>
              <SiSwagger className="icon" /> Swagger
            </div>
            <div>
              <SiFigma className="icon" /> Figman
            </div>
            <div>
              <SiInvision className="icon" /> Invision
            </div>
            <div>
              <FaGitlab className="icon" /> Gitlab
            </div>
            <div>
              <SiVisualstudiocode className="icon" /> VsCode
            </div>
            <div>
              <SiSublimetext className="icon" /> Sublime
            </div>
          </div>

          <div>
            <h4>Query Languages</h4>
            <div>
              <SiMysql className="icon" /> Sql
            </div>
            <div>
              <SiGraphql className="icon" /> GraphQL
            </div>
            <div>
              <SiMongodb className="icon" /> NoSql
            </div>
          </div>

          <div>
            <div>
              <h4>Testing</h4>
              <div>
                <SiJest className="icon" /> Jest
              </div>
              <div>
                <SiCypress className="icon" /> Cypress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
