import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  hero: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      fontSize: theme.spacing(2),
    },
  },
  landingIntro: {
    padding: "0.7rem",
    transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
  },
  landingName: {
    padding: "0.7rem",
    transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
  },
  landingDesc: {
    padding: "0.7rem",
    transitionDelay: "3s",
    transition: "width 1s, height 1s, opacity 1s 1s",
  },
  socialLinks: {
    padding: "1rem",
  },
  Links: {
    padding: "1rem",
  },
}));
