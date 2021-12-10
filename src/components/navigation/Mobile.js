import React from "react";
import { Box, IconButton, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import { Divide as Hamburger } from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import Resume from "../../assets/ArshadResume.pdf";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
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
  mobileMenuList: {
    display: "flex",
    flexDirection: "column",
  },
  mobileMenuItem: {
    justifyContent: "center",
  },
}));

const styles = {
  bmMenuWrap: {
    position: "fixed",
    height: "auto",
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
    justifyContent: "space-between",
  },
  bmItem: {
    display: "inherit",
  },
  bmOverlay: {
    background: "transparent",
    display: "hidden",
    zIndex: "0",
  },
};

export default function Mobile({ click, closeMobileMenu, handleMenu }) {
  const classes = useStyles();

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      closeMobileMenu();
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Box aria-label="mobileMenu" data-toggle="mobileMenu">
      <IconButton
        data-testid="menuToggle"
        role="button"
        color="default"
        className={classes.menuButton}
        aria-label="menu toggle"
        onClick={handleMenu}
        data-block="hamburgermenubuttonmobile"
      >
        <Hamburger
          distance="md"
          toggled={click}
          size={48}
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
        <List className={classes.mobileMenuList}>
          <ListItem divider className={classes.mobileMenuItem}>
            <Link
              className={classes.button}
              data-block="Aboutmemenuitemmobile"
              to="aboutme"
              data-testid="aboutmeOption"
              spy
              smooth
              onClick={() => closeMobileMenu()}
              aria-label="About Me"
            >
              <Typography variant="button">About Me</Typography>
            </Link>
          </ListItem>
          <ListItem divider className={classes.mobileMenuItem}>
            <Link
              className={classes.button}
              data-block="Projectsmenuitemmobile"
              to="projects"
              data-testid="projectsOption"
              spy
              smooth
              onClick={() => closeMobileMenu()}
              aria-label="Projects"
            >
              <Typography variant="button">Projects</Typography>
            </Link>
          </ListItem>
          <ListItem className={classes.mobileMenuItem}>
            <a
              className={classes.button}
              onClick={() => closeMobileMenu()}
              data-testid="resumeOption"
              variant="outlined"
              href={Resume}
              data-block="Resumemenuitemmobile"
              aria-label="Resume"
            >
              <Typography variant="button">Resume</Typography>
            </a>
          </ListItem>
        </List>
      </Menu>
    </Box>
  );
}

Mobile.propTypes = {
  click: PropTypes.bool.isRequired,
  closeMobileMenu: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
};
