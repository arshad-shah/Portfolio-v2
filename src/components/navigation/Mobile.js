import React from "react";
import { IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";
import { Divide as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
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
    padding: "1.5em",
    borderRadius: "0 0 0 1rem",
  },
  bmMorphShape: {
    fill: "#fdff95",
  },
  bmItemList: {
    color: "#fdff95",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
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
        width={200}
        styles={styles}
      >
        <Link
          data-block="Aboutmemenuitemmobile"
          to="aboutme"
          spy={true}
          smooth={true}
          onClick={() => closeMobileMenu()}
          role="menu-item"
        >
          <Button fullWidth variant="text">
            About Me
          </Button>
        </Link>
        <Link
          data-block="Projectsmenuitemmobile"
          to="projects"
          spy={true}
          smooth={true}
          onClick={() => closeMobileMenu()}
          role="menu-item"
        >
          <Button fullWidth variant="text">
            Projects
          </Button>
        </Link>
        <Button
          onClick={() => closeMobileMenu()}
          variant="outlined"
          href={Resume}
          role="menu-item"
          data-block="Resumemenuitemmobile"
        >
          Resume
        </Button>
      </Menu>
    </>
  );
}
