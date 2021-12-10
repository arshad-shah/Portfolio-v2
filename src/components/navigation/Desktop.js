import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    marginRight: "1.5rem",
    "&:hover": {
      backgroundColor: "#fff152",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
    "&:visited": {
      backgroundColor: "transparent",
    },
    "&:link": {
      backgroundColor: "none",
    },
    color: "#000000",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "0.5rem",
    transition: "all 0.5s ease",
    padding: "1rem",
  },
}));
export default function Desktop() {
  const classes = useStyles();
  return (
    <div aria-label="desktopMenu">
      <Link
        to="aboutme"
        spy={true}
        smooth={true}
        data-block="Aboutmemenuitemdesktop"
        color="default"
        aria-label="menuItem"
        className={classes.menuItem}
      >
        <Typography variant="button">About Me</Typography>
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        data-block="Projectsmenuitemdesktop"
        color="default"
        aria-label="menuItem"
        className={classes.menuItem}
      >
        <Typography variant="button">Projects</Typography>
      </Link>

      <a
        aria-label="menuItem"
        data-block="Resumemenuitemdesktop"
        href={Resume}
        color="default"
        className={classes.menuItem}
      >
        <Typography variant="button">Resume</Typography>
      </a>
    </div>
  );
}
