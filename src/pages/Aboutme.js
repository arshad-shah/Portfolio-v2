import { Typography, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles/aboutMe.styles";
import Picture from "../assets/Picture.webp";
import { aboutMeData } from "../data/aboutMeData";

export default function Aboutme() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar className={classes.aboutMeLink} id="aboutme" />
      <Typography align="center" gutterBottom variant="h2">
        About Me
      </Typography>
      <div className={classes.row}>
        <div className={classes.aboutMePicture}>
          <img
            src={Picture}
            aria-label="Picture of Arshad shah."
            className={classes.picture}
            width={150}
            height={150}
          />
        </div>
        <div className={classes.aboutMeDesc}>
          <Typography variant="body1">
            {aboutMeData.aboutMeDescription}
          </Typography>

          <Typography className={classes.subheading} variant="h5">
            Certificates:
          </Typography>

          <Typography variant="body1">{aboutMeData.certificateName}</Typography>
          <Typography variant="subtitle1">{aboutMeData.grade}</Typography>
          <Typography variant="body2">{aboutMeData.modules}</Typography>
          <Typography variant="subtitle2">{aboutMeData.certDate}</Typography>

          <Typography className={classes.subheading} variant="h5">
            Work Experience:
            <Typography variant="body1">
              {aboutMeData.jobTitle}
              <Typography variant="subtitle1">
                {aboutMeData.jobCompany}
              </Typography>
            </Typography>
            <Typography variant="body2">
              {aboutMeData.jobDescription}
            </Typography>
            <Typography variant="subtitle2">{aboutMeData.jobDate}</Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
