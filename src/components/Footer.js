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
      <Typography variant="h6">
        &copy; {new Date().getFullYear()} Designed and Created By: Arshad Shah
      </Typography>
      <Box>
        <IconButton
          role="button"
          className={classes.socialLinks}
          color="default"
          aria-label="link to Github account of Arshad shah"
          data-block="link to Github"
          href="https://github.com/arshad-shah"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          role="button"
          className={classes.socialLinks}
          color="default"
          aria-label="link to Linkedin account of Arshad shah"
          data-block="link to Linkedin"
          href="https://www.linkedin.com/in/arshadshah"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          className={classes.socialLinks}
          color="default"
          role="button"
          aria-label="link to mail account of Arshad shah"
          data-block="link to Mail"
          href="mailto:shaharshad1999@outlook.com"
        >
          <MailIcon />
        </IconButton>
      </Box>
      <Typography variant="subtitle2">
        Google Play and the Google Play logo are trademarks of Google LLC.
      </Typography>
      <Typography variant="subtitle2">V2.0 Date: 15/August/2021</Typography>
    </Box>
  );
}
