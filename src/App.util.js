import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollToTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScrollToTop;

export function ScrollToFade(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  if (!trigger) {
    return (
      <Fade in={true} timeout={1000}>
        <div>{children}</div>
      </Fade>
    );
  }
  return (
    <Fade out={trigger.toString()} timeout={1000}>
      <div>{children}</div>
    </Fade>
  );
}

ScrollToFade.propTypes = {
  children: PropTypes.element.isRequired,
};
