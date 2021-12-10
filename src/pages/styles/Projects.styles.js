import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(
  () => ({
    root: {
      backgroundColor: "#ffffff",
      padding: "1rem",
    },
    projectsLink: {
      minHeight: 0,
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
  }),
  { name: "Projects" }
);
