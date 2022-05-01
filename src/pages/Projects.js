import { Box, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { cardData } from "../data/projectData";
import blobscatter from "../assets/blob-scatter-haikei.svg";

const PREFIX = "Projects";

const classes = {
  root: `${PREFIX}-root`,
  projectsLink: `${PREFIX}-projectsLink`,
  projectsCard: `${PREFIX}-projectsCard`,
  githubLinksAnchor: `${PREFIX}-githubLinksAnchor`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${blobscatter})`,
  },

  [`& .${classes.projectsLink}`]: {
    minHeight: 0,
  },

  [`& .${classes.projectsCard}`]: {},

  [`& .${classes.githubLinksAnchor}`]: {
    "&:visited": {
      color: "#000000",
    },
    "&:link": {
      color: "#000000",
    },
  },
}));

export default function Projects() {
  return (
    <StyledBox className={classes.root}>
      <Toolbar className={classes.projectsLink} id="projects" />
      <Typography align="center" gutterBottom variant="h1">
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="center"
        alignContent="center"
        justifyContent="space-around"
      >
        {cardData.map((data, key) => (
          <Grid
            key={key}
            aria-label="ProjectCard"
            item
            lg={4}
            md={6}
            sm={10}
            xs={12}
          >
            <ProjectCard
              heading={data.heading}
              description={data.description}
              languages={data.languages}
              linkAriaLabel={data.linkAriaLabel}
              repoLink={data.repoLink}
              siteLink={data.siteLink}
              shopLink={data.shopLink}
            />
          </Grid>
        ))}
      </Grid>
    </StyledBox>
  );
}
