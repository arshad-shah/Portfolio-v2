import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";

export default function Desktop() {
  return (
    <div style={{ marginRight: "2rem" }}>
      <Button
        data-block="Aboutmemenuitemdesktop"
        variant="text"
        color="default"
      >
        <Link to="aboutme" spy={true} smooth={true}>
          About Me
        </Link>
      </Button>
      <Button
        data-block="Projectsmenuitemdesktop"
        variant="text"
        color="default"
      >
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </Button>

      <Button
        data-block="Resumemenuitemdesktop"
        href={Resume}
        variant="outlined"
        color="default"
      >
        Resume
      </Button>
    </div>
  );
}
