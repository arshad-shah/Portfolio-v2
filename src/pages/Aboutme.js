import { Typography, Toolbar, Box, Chip, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { aboutMeData } from "../data/aboutMeData";
import blob from "../assets/blob-scene-haikei.svg";

const PREFIX = "Aboutme";

const classes = {
  root: `${PREFIX}-root`,
  intro: `${PREFIX}-intro`,
  aboutMeLink: `${PREFIX}-aboutMeLink`,
  row: `${PREFIX}-row`,
  aboutMePicture: `${PREFIX}-aboutMePicture`,
  aboutMeDesc: `${PREFIX}-aboutMeDesc`,
  picture: `${PREFIX}-picture`,
  subheading: `${PREFIX}-subheading`,
  TechChip: `${PREFIX}-TechChip`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${blob})`,
  },

  [`& .${classes.intro}`]: {
    padding: "1rem",
  },

  [`& .${classes.aboutMeLink}`]: {
    minHeight: 0,
  },

  [`& .${classes.row}`]: {
    display: "flex",
    flexDirection: "row",
    padding: "1rem",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },

  [`& .${classes.aboutMePicture}`]: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    width: "25%",
    height: "60%",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      width: "30%",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "50%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "100%",
      height: "100%",
    },
  },

  [`& .${classes.aboutMeDesc}`]: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    textAlign: "left",
  },

  [`& .${classes.picture}`]: {
    borderRadius: "1rem",
    width: "auto",
    height: "auto",
    boxShadow: "0px 0px 10px #000000",
    transition: "all 0.5s ease-out",
  },

  [`& .${classes.subheading}`]: {
    paddingTop: "1rem",
  },

  [`& .${classes.TechChip}`]: {
    margin: "0.3rem",
    borderRadius: "5px",
    padding: "0.5rem",
    fontWeight: "bold",
  },
}));

export default function Aboutme(props) {
  return (
    <StyledBox className={classes.root}>
      <Toolbar className={classes.aboutMeLink} id="aboutme" />
      <Typography align="center" gutterBottom variant="h1">
        {aboutMeData.aboutMeTitle}
      </Typography>
      <Box className={classes.aboutMeDesc}>
        <Typography gutterBottom variant="h6">
          I am a <b>Software Engineer</b> with a passion for building
          <b> Beautiful</b> and <b>Intuitive</b> user interfaces and{" "}
          <b>Learning</b> new technologies to building products that{" "}
          <b>solve real-world problems</b>.
          <br />I have real world experience in{" "}
          <b>Frontend ,Backend Development</b> and <b>Full Stack Development</b>
          .
          <br />
          My goal is to make <b>Cross Platform</b>, <b>Efficient</b>, and{" "}
          <b>Clean Application</b> that give an easy and Perfect experience.
        </Typography>

        <Typography gutterBottom className={classes.subheading} variant="h5">
          {aboutMeData.Technologies}
        </Typography>

        <Typography gutterBottom variant="body1">
          {aboutMeData.TechnologiesList.map((tech) => (
            <Chip
              color="secondary"
              key={tech}
              label={tech}
              className={classes.TechChip}
              data-testid="languageChip"
            />
          ))}
        </Typography>

        <Typography className={classes.subheading} gutterBottom variant="h5">
          Work Experience
        </Typography>

        <Typography gutterBottom variant="body1">
          <b>Software Engineer</b> - Intern {aboutMeData.jobDate}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          <b>Houghton Mifflin Harcourt</b> - Dublin, Ireland
        </Typography>
        <Typography variant="body1">
          I worked on a <b>Frontend Team</b> team responsible for the HMH
          flagship product <b>HMH ED</b>.
          <br />
          My responsibilities included:
          <ul>
            <li>
              Developing and maintaining the <b>Frontend</b> of the product
            </li>
            <li>
              Cross Team Collaboration with multiple teams across the company
            </li>
            <li>
              <b>Testing</b> and <b>Deployment</b> of the product
            </li>
          </ul>
        </Typography>
      </Box>
    </StyledBox>
  );
}
