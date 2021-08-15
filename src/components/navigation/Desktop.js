import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";

export default function Desktop() {
  return (
    <div style={{ marginRight: "2rem" }}>
      <Button variant="text" color="default">
        <Link to="aboutme" spy={true} smooth={true}>
          About Me
        </Link>
      </Button>
      <Button variant="text" color="default">
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </Button>

      <Button href={Resume} variant="outlined" color="default">
        Resume
      </Button>
    </div>
  );
}
