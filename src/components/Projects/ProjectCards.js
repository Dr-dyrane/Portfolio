import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ borderRadius: 20 }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "350px", objectFit: "cover", borderRadius: "20px 20px 0 0" }} />
      <Card.Body style={{ height: "250px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis" }}>
          {props.description}
        </Card.Text>
        <div >
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ borderRadius: 10, marginBottom: "5px", marginRight: 5 }}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ borderRadius: 10, marginBottom: "5px", marginLeft:5 }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
