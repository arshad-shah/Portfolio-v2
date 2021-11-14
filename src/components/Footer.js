import { Box, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./Footer.styles";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="overline">
        &copy; {new Date().getFullYear()} Arshad Shah
      </Typography>
      <Box>
        <IconButton
          role="button"
          className={classes.socialLinks}
          color="default"
          aria-label="link to Github account of Arshad shah"
          data-block="linktoGithub"
          href="https://github.com/arshad-shah"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          role="button"
          className={classes.socialLinks}
          color="default"
          aria-label="link to Linkedin account of Arshad shah"
          data-block="linktoLinkedin"
          href="https://www.linkedin.com/in/arshadshah"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          className={classes.socialLinks}
          color="default"
          role="button"
          aria-label="link to mail account of Arshad shah"
          data-block="linktoMail"
          href="mailto:arshad@arshadshah.com"
        >
          <MailIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography variant="subtitle2">
        V2.4 Date: 14 / November / 2021
      </Typography>
    </Box>
  );
}
