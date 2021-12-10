import React from "react";
import { IconButton, Menu, MenuItem, Button } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import Resume from "../../assets/ArshadResume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Mobile({ anchor, open, closeMobileMenu, handleMenu }) {
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
        <MenuRoundedIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        KeepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
      >
        <Link
          data-block="Aboutmemenuitemmobile"
          to="aboutme"
          spy={true}
          smooth={true}
        >
          <MenuItem role="menu-item" onClick={() => closeMobileMenu()}>
            About Me
          </MenuItem>
        </Link>
        <Link
          data-block="Projectsmenuitemmobile"
          to="projects"
          spy={true}
          smooth={true}
        >
          <MenuItem role="menu-item" onClick={() => closeMobileMenu()}>
            Projects
          </MenuItem>
        </Link>

        <MenuItem
          role="menu-item"
          data-block="Resumemenuitemmobile"
          onClick={() => closeMobileMenu()}
        >
          <Button variant="text" href={Resume}>
            Resume
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}
