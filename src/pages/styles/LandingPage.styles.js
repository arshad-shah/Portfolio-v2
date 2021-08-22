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
    padding: "1rem",
    minHeight: "100vh",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      fontSize: theme.spacing(2),
    },
  },
  typography: {
    padding: "0.7rem",
  },
  socialLinks: {
    padding: "1rem",
  },
  Links: {
    padding: "1rem",
  },
}));
