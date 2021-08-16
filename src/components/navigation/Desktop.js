import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";

export default function Desktop() {
  return (
    <div aria-label="desktopMenu" style={{ marginRight: "2rem" }}>
      <Button
        data-block="Aboutmemenuitemdesktop"
        variant="text"
        color="default"
        aria-label="menuItem"
      >
        <Link to="aboutme" spy={true} smooth={true}>
          About Me
        </Link>
      </Button>
      <Button
        data-block="Projectsmenuitemdesktop"
        variant="text"
        color="default"
        aria-label="menuItem"
      >
        <Link to="projects" spy={true} smooth={true}>
          Projects
        </Link>
      </Button>

      <Button
        aria-label="menuItem"
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
