import React from "react";
import useStyles from "./styles/LandingPage.styles";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-scroll";

import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";

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

      <Button
        aria-label="scroll down button"
        size="small"
        color="secondary"
        variant="outlined"
      >
        <Link to="aboutme" spy={true} smooth={true}>
          <ArrowDownwardRoundedIcon />
        </Link>
      </Button>
    </Box>
  );
}
