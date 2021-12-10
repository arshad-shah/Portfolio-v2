import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./Loading.styles";

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.name} variant="h4">
        Loading.....
      </Typography>
      <CircularProgress color="secondary" />
    </div>
  );
}
