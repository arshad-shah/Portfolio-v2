import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { Link } from "react-scroll";

import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import useStyles from "./styles/LandingPage.styles";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.hero} data-testid="hero">
      <Typography className={classes.landingIntro} variant="h4">
        Hi, My Name Is
      </Typography>

      <Typography className={classes.landingName} variant="h2">
        Arshad Shah!
      </Typography>

      <Typography className={classes.landingDesc} variant="h4">
        A Third Year Computer Science Student and a software Engineer.
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
          >
            <GitHubIcon fontSize="large" />
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
          >
            <LinkedInIcon fontSize="large" />
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
          >
            <MailIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Tooltip title="Scroll Down" arrow>
        <Link to="aboutme" spy smooth>
          <Button
            data-testid="scrollDown"
            aria-label="scroll down button"
            size="large"
            color="secondary"
            variant="outlined"
            data-block="scrolldown"
          >
            <ArrowDownwardRoundedIcon fontSize="large" />
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
}
