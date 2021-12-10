import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";

export default function Desktop() {
  return (
    <div style={{ marginRight: "2rem" }}>
      <Button
        data-block="About-me-menu-item-desktop"
        variant="text"
        color="default"
      >
        <Link to="aboutme" spy={true} smooth={true}>
          About Me
        </Link>
      </Button>
      <Button
        data-block="Projects-menu-item-desktop"
        variant="text"
        color="default"
      >
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </Button>

      <Button
        data-block="Resume-menu-item-desktop"
        href={Resume}
        variant="outlined"
        color="default"
      >
        Resume
      </Button>
    </div>
  );
}
