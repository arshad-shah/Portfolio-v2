import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import Logo from "../assets/logo.svg";
import useStyles from "./Loading.styles";

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={Logo} alt="Logo" width="100" height="100" />
      <Typography className={classes.name} variant="h4">
        A SHAH
      </Typography>
      <CircularProgress color="secondary" />
    </div>
  );
}
