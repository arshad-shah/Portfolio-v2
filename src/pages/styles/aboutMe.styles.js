import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      padding: "1rem",
      textAlign: "center",
    },
    intro: {
      padding: "1rem",
    },
    aboutMeLink: {
      minHeight: 0,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      padding: "1rem",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
    aboutMePicture: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      width: "30%",
      height: "50%",
      margin: "auto",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        width: "100%",
        height: "100%",
      },
    },
    aboutMeDesc: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem",
      textAlign: "left",
    },
    picture: {
      borderRadius: "1rem",
      width: "auto",
      height: "auto",
    },
    subheading: {
      paddingTop: "1rem",
    },
  }),
  { name: "Aboutme" }
);
