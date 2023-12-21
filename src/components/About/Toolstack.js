import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiOpenai,
  SiDiscord,
  SiVercel,
  SiWindows,
  SiOpera,
} from "react-icons/si";

function Toolstack() {
  const techIcons = [
    SiWindows,
    SiVisualstudiocode,
    SiOpenai,
    SiDiscord,
    SiVercel,
    SiOpera,
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

export default Toolstack;
