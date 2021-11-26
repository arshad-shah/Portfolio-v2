import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./Loading.styles";

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress primary />
      <Typography variant="h3">Loading...</Typography>
    </div>
  );
}
