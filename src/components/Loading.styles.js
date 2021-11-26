import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
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
    name: {
      padding: "1rem",
    },
  }),
  { name: "Loading" }
);
