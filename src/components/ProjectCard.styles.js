import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  (theme) => ({
    root: {
      backgroundColor: "#ffffff",
      padding: "1rem",
    },
    projectsCard: {},
    githubLinksAnchor: {
      "&:visited": {
        color: "#000000",
      },
      "&:link": {
        color: "#000000",
      },
    },
    GooglePlayIcon: {
      width: "50%",
    },
  }),
  { name: "ProjectCard" }
);
