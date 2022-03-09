import React from "react";
import { styled } from "@mui/material/styles";
import { CircularProgress, Typography } from "@mui/material";
const PREFIX = "Loading";

const classes = {
  root: `${PREFIX}-root`,
  name: `${PREFIX}-name`,
  progress: `${PREFIX}-progress`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "nowrap",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "fixed",
  },

  [`& .${classes.name}`]: {
    padding: "1rem",
  },

  [`& .${classes.progress}`]: {
    padding: "1rem",
  },
}));

export default function Loading() {
  return (
    <Root className={classes.root}>
      <CircularProgress
        className={classes.progress}
        color="secondary"
        size={100}
        thickness={5}
      />
      <Typography className={classes.name} variant="h3">
        Loading....
      </Typography>
    </Root>
  );
}
