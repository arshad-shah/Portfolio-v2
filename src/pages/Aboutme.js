import { Typography, Toolbar } from "@material-ui/core";
import React from "react";
import useStyles from "./styles/aboutMe.styles";
import Picture from "../assets/Picture.webp";

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
            I have real world experience with front end technologies, such as
            React for web developement, Ionic and capacitor for javascript to
            native application development.
            <br />
            I like designing and creating stuff for all domains from mobile to
            desktop.
            <br />
            My goal is to make Cross Platform efficient, Clean application that
            give an easy and Perfect experience.
          </Typography>

          <Typography className={classes.subheading} variant="h5">
            Certificates:
          </Typography>

          <Typography variant="body1">
            QQI Level 5 Certificate in Software Development
          </Typography>
          <Typography variant="subtitle1">With Distinction</Typography>
          <Typography variant="body2">
            Software Development, Web Development, Algorithms, Software
            Architecture
          </Typography>
          <Typography variant="subtitle2">08/2018 - 08/2019</Typography>

          <Typography className={classes.subheading} variant="h5">
            Work Experience:
            <Typography variant="body1">
              Software Engineer - Intern
              <Typography variant="subtitle1">
                Houghton Mifflin Harcourt - Dublin
              </Typography>
            </Typography>
            <Typography variant="body2">
              During this internship i worked on one of the UI team responsible
              for the HMH flagship product HMH ED.
              <br />
              Here i learned the React framework using the Single SPA pattern,
              unit testing, integration testing, and End to End testing.
              <br />i learned crucial skills, following an agile development
              methodology participating in sprints, completing tickets. The most
              important aspect that i learned was the CI pipeline for building
              complex software and traiging the build process across multiple
              teams.
            </Typography>
            <Typography variant="subtitle2">06/2021 - 08/2021</Typography>
          </Typography>
        </div>
      </div>
    </div>
  );
}
