import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "./assets/background.webp";

export default makeStyles(
  (theme) => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "fixed",
    },
  }),
  { name: "App" }
);
