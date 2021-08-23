import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";
import { Divide as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
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
    padding: "0.7rem",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "0.5rem",
    transition: "all 0.5s ease",
  },
}));

var styles = {
  bmMenuWrap: {
    position: "fixed",
    height: "35%",
    top: "4.5rem",
  },
  bmMenu: {
    background: "#fdff95",
    padding: "0.5rem",
    borderRadius: "0 0 0 1rem",
    border: "1px solid black",
  },
  bmMorphShape: {
    fill: "#fdff95",
  },
  bmItemList: {
    color: "#fdff95",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "stretch",
    justifyContent: "space-around",
  },
  bmItem: {
    display: "inherit",
  },
  bmOverlay: {
    background: "transparent",
  },
};

export default function Mobile({ click, closeMobileMenu, handleMenu }) {
  const classes = useStyles();

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      closeMobileMenu();
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <IconButton
        role="button"
        color="default"
        className={classes.menuButton}
        aria-label="menu"
        onClick={handleMenu}
        data-block="hamburgermenubuttonmobile"
      >
        <Hamburger
          distance="md"
          toggled={click}
          size={40}
          rounded
          color="#c78f00"
        />
      </IconButton>

      <Menu
        right
        isOpen={click}
        customBurgerIcon={false}
        customCrossIcon={false}
        width={180}
        styles={styles}
      >
        <Link
          className={classes.button}
          data-block="Aboutmemenuitemmobile"
          to="aboutme"
          spy={true}
          smooth={true}
          onClick={() => closeMobileMenu()}
        >
          <Typography variant="button">About Me</Typography>
        </Link>
        <Link
          className={classes.button}
          data-block="Projectsmenuitemmobile"
          to="projects"
          spy={true}
          smooth={true}
          onClick={() => closeMobileMenu()}
        >
          <Typography variant="button">Projects</Typography>
        </Link>
        <a
          className={classes.button}
          onClick={() => closeMobileMenu()}
          variant="outlined"
          href={Resume}
          data-block="Resumemenuitemmobile"
        >
          <Typography variant="button">Resume</Typography>
        </a>
      </Menu>
    </>
  );
}
