import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HideOnScroll from "./HideOnScroll";

import Desktop from "./navigation/Desktop";
import Mobile from "./navigation/Mobile";
import useStyles from "../styles/Header.styles";
import logo from "../assets/logo.svg";
import PropTypes from "prop-types";

export default function Header(props) {
  const classes = useStyles();
  const { isMobile } = props;

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
  };
  const handleMenu = () => {
    closeMobileMenu();
    handleClick();
  };

  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <HideOnScroll {...props}>
        <AppBar data-testid="header">
          <Toolbar>
            <img aria-label="Logo" src={logo} className={classes.logo} alt="" />
            <Typography
              variant="h5"
              component="p"
              color="textPrimary"
              className={classes.title}
            >
              A SHAH
            </Typography>
            {isMobile ? (
              <Mobile
                click={click}
                closeMobileMenu={closeMobileMenu}
                handleMenu={handleMenu}
              />
            ) : (
              <Desktop />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
Header.propTypes = {
  isMobile: PropTypes.bool,
};
