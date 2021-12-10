import React from "react";
import useStyles from "./styles/LandingPage.styles";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import TypeWriter from "react-typewriter";

import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <TypeWriter typing={1} initDelay={2000}>
        <Typography className={classes.typography} variant="h4">
          Hi, My Name Is
          <Typography className={classes.typography} variant="h1">
            Arshad Shah!
            <Typography className={classes.typography} variant="h4">
              A Third Year Computer Science Student, With a love for everything
              programming.
            </Typography>
          </Typography>
        </Typography>
      </TypeWriter>

      <Box className={classes.Links}>
        <IconButton
          role="button"
          className={classes.socialLinks}
          color="primary"
          aria-label="link to Github account of Arshad shah"
          data-block="linktoGithub"
          href="https://github.com/arshad-shah"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          role="button"
          className={classes.socialLinks}
          color="primary"
          aria-label="link to Linkedin account of Arshad shah"
          data-block="linktoLinkedin"
          href="https://www.linkedin.com/in/arshadshah"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          className={classes.socialLinks}
          color="primary"
          role="button"
          aria-label="link to mail account of Arshad shah"
          data-block="linktoMail"
          href="mailto:shaharshad1999@outlook.com"
        >
          <MailIcon fontSize="large" />
        </IconButton>
      </Box>
      <Link to="aboutme" spy={true} smooth={true}>
        <Button
          aria-label="scroll down button"
          size="large"
          color="secondary"
          variant="outlined"
          data-block="scrolldown"
        >
          <ArrowDownwardRoundedIcon fontSize="large" />
        </Button>
      </Link>
    </Box>
  );
}
