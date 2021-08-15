import React, { useState } from "react";
import { AppBar, Toolbar, Typography, useMediaQuery } from "@material-ui/core";

import { useTheme } from "@material-ui/core/styles";
import HideOnScroll from "./Header.util";

import Desktop from "./navigation/Desktop";
import Mobile from "./navigation/Mobile";
import useStyles from "./Header.styles";

const Header = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setAnchor(null);
  };

  const handleMenu = (event) => {
    closeMobileMenu();
    handleClick();
    setAnchor(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <Toolbar id="back-to-top-anchor" />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h5"
              component="p"
              color="textPrimary"
              className={classes.title}
            >
              Arshad shah
            </Typography>
            {isMobile ? (
              <>
                <Mobile
                  anchor={anchor}
                  click={click}
                  open={open}
                  closeMobileMenu={closeMobileMenu}
                  handleMenu={handleMenu}
                />
              </>
            ) : (
              <Desktop />
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
