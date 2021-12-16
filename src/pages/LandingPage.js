import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-scroll";
// icons
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { FaHackerrank } from "react-icons/fa";

import PropTypes from "prop-types";
const PREFIX = "LandingPage";

const classes = {
  hero: `${PREFIX}-hero`,
  landingIntro: `${PREFIX}-landingIntro`,
  landingName: `${PREFIX}-landingName`,
  landingDesc: `${PREFIX}-landingDesc`,
  socialLinks: `${PREFIX}-socialLinks`,
  Links: `${PREFIX}-Links`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.hero}`]: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      fontSize: theme.spacing(2),
    },
  },

  [`& .${classes.landingIntro}`]: {
    padding: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0",
    },
  },

  [`& .${classes.landingName}`]: {
    padding: "0.7rem",
  },

  [`& .${classes.landingDesc}`]: {
    padding: "0.7rem",
  },

  [`& .${classes.socialLinks}`]: {
    padding: "1rem",
    fontSize: "2rem",
  },

  [`& .${classes.Links}`]: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0",
    },
  },
}));

export default function LandingPage({ isMobile }) {
  return (
    <StyledBox className={classes.hero} data-testid="hero">
      <Typography className={classes.landingIntro} variant="h4">
        Hi, My Name Is -
      </Typography>

      <Typography className={classes.landingName} variant="h2">
        Arshad Shah!
      </Typography>

      <Typography className={classes.landingDesc} variant="h4">
        A Third Year <b>Computer Science</b> Student and a{" "}
        <b>Software Engineer</b>.
      </Typography>

      <Box className={classes.Links}>
        <Tooltip title="Github Profile" arrow>
          <IconButton
            data-testid="githubForHero"
            role="button"
            className={classes.socialLinks}
            color="primary"
            aria-label="link to Github account of Arshad shah"
            data-block="linktoGithub"
            href="https://github.com/arshad-shah"
            size="large"
          >
            <FiGithub />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn Profile" arrow>
          <IconButton
            data-testid="linkedInForHero"
            role="button"
            className={classes.socialLinks}
            color="primary"
            aria-label="link to Linkedin account of Arshad shah"
            data-block="linktoLinkedin"
            href="https://www.linkedin.com/in/arshadshah"
            size="large"
          >
            <FiLinkedin />
          </IconButton>
        </Tooltip>

        <Tooltip title="Hacker Rank Profile" arrow>
          <IconButton
            data-testid="hackerRankForHero"
            role="button"
            className={classes.socialLinks}
            color="primary"
            aria-label="link to Hacker Rank account of Arshad shah"
            data-block="linktoHackerRank"
            href="https://www.hackerrank.com/shaharshad57"
            size="large"
          >
            <FaHackerrank />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email Me" arrow>
          <IconButton
            data-testid="mailForHero"
            className={classes.socialLinks}
            color="primary"
            role="button"
            aria-label="link to mail account of Arshad shah"
            data-block="linktoMail"
            href="mailto:arshad@arshadshah.com"
            size="large"
          >
            <FiMail />
          </IconButton>
        </Tooltip>
      </Box>
      {!isMobile ? (
        <Link to="aboutme" spy smooth>
          <Button
            data-testid="scrollDown"
            aria-label="scroll down button"
            size="large"
            className={classes.socialLinks}
            color="secondary"
            variant="outlined"
            data-block="scrolldown"
          >
            <FiArrowDown />
          </Button>
        </Link>
      ) : null}
    </StyledBox>
  );
}

LandingPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
