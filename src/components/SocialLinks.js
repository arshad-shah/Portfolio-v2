import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { FaHackerrank } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import PropTypes from 'prop-types';

function SocialLinks(props) {
	return (
		<Box>
			<Tooltip title="Github Profile" arrow>
				<IconButton
					data-testid="githubLink"
					role="button"
					sx={props.sx}
					aria-label="link to Github account of Arshad shah"
					data-block="linktoGithub"
					href="https://github.com/arshad-shah"
					size="large">
					<FiGithub />
				</IconButton>
			</Tooltip>

			<Tooltip title="LinkedIn Profile" arrow>
				<IconButton
					data-testid="linkedInLink"
					role="button"
					sx={props.sx}
					aria-label="link to Linkedin account of Arshad shah"
					data-block="linktoLinkedin"
					href="https://www.linkedin.com/in/arshadshah"
					size="large">
					<FiLinkedin />
				</IconButton>
			</Tooltip>

			<Tooltip title="Hacker Rank Profile" arrow>
				<IconButton
					data-testid="hackerRankLink"
					role="button"
					sx={props.sx}
					aria-label="link to Hacker Rank account of Arshad shah"
					data-block="linktoHackerRank"
					href="https://www.hackerrank.com/shaharshad57"
					size="large">
					<FaHackerrank />
				</IconButton>
			</Tooltip>

			<Tooltip title="Email Me" arrow>
				<IconButton
					data-testid="mailLink"
					sx={props.sx}
					role="button"
					aria-label="link to mail account of Arshad shah"
					data-block="linktoMail"
					href="mailto:arshad@arshadshah.com"
					size="large">
					<FiMail />
				</IconButton>
			</Tooltip>
		</Box>
	);
}

SocialLinks.propTypes = {
	sx: PropTypes.object,
};

export default SocialLinks;
