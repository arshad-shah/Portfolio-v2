import { Box, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles/Projects.styles";
import ProjectCard from "../components/ProjectCard";
import { cardData } from "../data/projectData";

export default function Projects() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Toolbar className={classes.projectsLink} id="projects" />
      <Typography align="center" gutterBottom variant="h2">
        Projects
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="space-around"
        alignContent="center"
        alignItems="center"
      >
        {cardData.map((data, key) => (
          <Grid key={key} aria-label="ProjectCard" item lg={4} xs={12} sm={6}>
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
    </Box>
  );
}
