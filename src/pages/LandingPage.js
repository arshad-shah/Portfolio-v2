import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
// icons
import { FiArrowDown } from "react-icons/fi";

import PropTypes from "prop-types";
import SocialLinks from "../components/SocialLinks";
import Wave from "../assets/layered-waves-haikei.svg";

const PREFIX = "LandingPage";

const classes = {
  hero: `${PREFIX}-hero`,
  landingName: `${PREFIX}-landingName`,
  landingDesc: `${PREFIX}-landingDesc`,
  ScrollDown: `${PREFIX}-scrollDown`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.hero}`]: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    color: "#000000",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${Wave})`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: theme.spacing(2),
    },
  },

  [`& .${classes.landingName}`]: {
    padding: "0.7rem",
  },

  [`& .${classes.landingDesc}`]: {
    padding: "0.7rem",
  },

  [`& .${classes.ScrollDown}`]: {
    padding: "1rem",
    marginTop: "1.5rem",
    fontSize: "2.5rem",
    color: "#000000",
    "&:hover": {
      transform: "scale(1.2)",
      transition: "all 0.13s ease-in",
      //when mouse comes near the button stop the animation
      animation: "none",
    },
    //animation with the scrollDownAnimation that shows for 2 seconds
    "@keyframes myAnim": {
      "0%": {
        animationTimingFunction: "ease-in",
        opacity: "1",
        transform: "translateY(-45px)",
      },

      "24%": {
        opacity: "1",
      },

      "40%": {
        animationTimingFunction: "ease-in",
        transform: "translateY(-24px)",
      },

      "65%": {
        animationTimingFunction: "ease-in",
        transform: "translateY(-12px)",
      },

      "82%": {
        animationTimingFunction: "ease-in",
        transform: "translateY(-6px)",
      },

      "93%": {
        animationTimingFunction: "ease-in",
        transform: "translateY(-4px)",
      },

      "25%, 55%, 75%, 87%": {
        animationTimingFunction: "ease-out",
        transform: "translateY(0px)",
      },

      "100%": {
        animationTimingFunction: "ease-out",
        opacity: "1",
        transform: "translateY(0px)",
      },
    },

    animation: "myAnim 2s infinite",
    animationDuration: "1.5s",
    animationIterationCount: "1",
    animationTimingFunction: "ease-in-out",
    opacity: "1",
  },
}));

export default function LandingPage({ isMobile }) {
  return (
    <StyledBox className={classes.hero} data-testid="hero">
      <Typography className={classes.landingName} variant="h1">
        Hello, I am Arshad!
      </Typography>

      <Typography className={classes.landingDesc} variant="body1">
        <b>Computer Science</b> Student and <b>Software Engineer</b>.
      </Typography>
      <Typography variant="body1">
        Get in touch <b>@</b>
        <SocialLinks
          sx={{
            color: "#000000",
            transition: "all 0.3s ease-out",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "all 0.13s ease-in",
            },
          }}
        />
      </Typography>
      {!isMobile ? (
        <Link
          role="button"
          to="aboutme"
          spy
          smooth
          className={classes.ScrollDown}
          data-testid="scrollDown"
          aria-label="scroll down button"
          data-block="scrolldown"
        >
          <FiArrowDown />
        </Link>
      ) : null}
    </StyledBox>
  );
}

LandingPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
