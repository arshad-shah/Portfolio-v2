import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

// icons
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaHackerrank } from "react-icons/fa";
export default function Footer({ isMobile }) {
  const desktopStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "1rem",
  };

  const mobileStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "1rem",
    marginBottom: "5rem",
  };
  return (
    <Box sx={isMobile ? mobileStyles : desktopStyles}>
      <Typography variant="h6">
        &copy; {new Date().getFullYear()} Arshad Shah
      </Typography>
      <Box>
        <Tooltip title="Github Profile" arrow>
          <IconButton
            sx={{
              color: "#000000",
            }}
            role="button"
            color="default"
            aria-label="link to Github account of Arshad shah"
            data-block="linktoGithub"
            data-testid="githubForFooter"
            href="https://github.com/arshad-shah"
            size="large"
          >
            <FiGithub />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn Profile" arrow>
          <IconButton
            sx={{
              color: "#000000",
            }}
            role="button"
            color="default"
            aria-label="link to Linkedin account of Arshad shah"
            data-block="linktoLinkedin"
            data-testid="linkedinForFooter"
            href="https://www.linkedin.com/in/arshadshah"
            size="large"
          >
            <FiLinkedin />
          </IconButton>
        </Tooltip>

        <Tooltip title="Hacker Rank Profile" arrow>
          <IconButton
            data-testid="hackerRankForFooter"
            role="button"
            sx={{
              color: "#000000",
            }}
            color="default"
            aria-label="link to Hacker Rank account of Arshad shah"
            data-block="linktoHackerRank"
            href="https://www.hackerrank.com/shaharshad57"
            size="large"
          >
            <FaHackerrank />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email Me" arrow>
          <IconButton
            sx={{
              color: "#000000",
            }}
            color="default"
            role="button"
            aria-label="link to mail account of Arshad shah"
            data-block="linktoMail"
            data-testid="emailForFooter"
            href="mailto:arshad@arshadshah.com"
            size="large"
          >
            <FiMail />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="subtitle2">
        V2.7 Date: 09 / December / 2021
      </Typography>
    </Box>
  );
}

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
