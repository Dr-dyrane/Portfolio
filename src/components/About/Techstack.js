import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const techIcons = [
    AiFillCopyrightCircle,
    DiJavascript1,
    TbBrandGolang,
    DiNodejs,
    DiReact,
    SiSolidity,
    DiMongodb,
    SiNextdotjs,
    DiGit,
    SiFirebase,
    SiRedis,
    SiPostgresql,
    DiPython,
    DiJava,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
