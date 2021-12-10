import React from "react";
import useStyles from "./styles/LandingPage.styles";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import { Link } from "react-scroll";

import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Typography className={classes.typography} variant="h4">
        Hi, My Name Is
      </Typography>

      <Typography className={classes.typography} variant="h2">
        Arshad Shah!
      </Typography>

      <Typography className={classes.typography} variant="h4">
        A Second Year Computer Science Student, With a love for everything
        programming.
      </Typography>

      <Box>
        <IconButton
          role="button"
          className={classes.socialLinks}
          color="primary"
          aria-label="link to Github account of Arshad shah"
          data-block="link to Github"
          href="https://github.com/arshad-shah"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          role="button"
          className={classes.socialLinks}
          color="primary"
          aria-label="link to Linkedin account of Arshad shah"
          data-block="link to Linkedin"
          href="https://www.linkedin.com/in/arshadshah"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          className={classes.socialLinks}
          color="primary"
          role="button"
          aria-label="link to mail account of Arshad shah"
          data-block="link to Mail"
          href="mailto:shaharshad1999@outlook.com"
        >
          <MailIcon />
        </IconButton>
      </Box>
      <Button
        aria-label="scroll down button"
        size="small"
        color="secondary"
        variant="outlined"
        data-block="scroll down"
      >
        <Link to="aboutme" spy={true} smooth={true}>
          <ArrowDownwardRoundedIcon />
        </Link>
      </Button>
    </Box>
  );
}
