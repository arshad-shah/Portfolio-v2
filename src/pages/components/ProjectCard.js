import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import useStyles from "./ProjectCard.styles";
import { IconButton, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import ShopRoundedIcon from "@material-ui/icons/ShopRounded";

export default function ProjectCard({
  heading,
  description,
  languages,
  linkAriaLabel,
  repoLink,
}) {
  const classes = useStyles();
  return (
    <Card raised className={classes.root}>
      <CardHeader title={heading} />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="overline">
          Languages Used: <br />
          {languages}
        </Typography>
      </CardContent>
      <CardActions>
        {/* Link to github */}
        <IconButton role="button" color="default" aria-label={linkAriaLabel}>
          <a className={classes.githubLinksAnchor} href={repoLink}>
            {heading === "Android App Project | Nimaz" ? (
              <ShopRoundedIcon />
            ) : (
              <GitHubIcon />
            )}
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
