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

export default function Mobile(props) {
  const classes = useStyles();
  const { anchor, open, closeMobileMenu, handleMenu } = props;
  return (
    <>
      <IconButton
        color="default"
        className={classes.menuButton}
        aria-label="menu"
        onClick={handleMenu}
        data-block="hamburger-menu-button-mobile"
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
          data-block="About-me-menu-item-mobile"
          to="aboutme"
          spy={true}
          smooth={true}
        >
          <MenuItem onClick={() => closeMobileMenu()}>About Me</MenuItem>
        </Link>
        <Link
          data-block="Projects-menu-item-mobile"
          to="projects"
          spy={true}
          smooth={true}
        >
          <MenuItem onClick={() => closeMobileMenu()}>Projects</MenuItem>
        </Link>

        <MenuItem
          data-block="Resume-menu-item-mobile"
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
