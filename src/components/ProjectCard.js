import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Chip, IconButton, Tooltip, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import useStyles from '../styles/ProjectCard.styles';
import PropTypes from 'prop-types';

export default function ProjectCard({
	heading,
	description,
	languages,
	linkAriaLabel,
	repoLink,
	siteLink,
	shopLink,
}) {
	const classes = useStyles();
	return (
		<Card raised className={classes.root}>
			<CardHeader id="heading" title={heading} data-testid="projectHeading" />
			<CardContent>
				<Typography variant="body2">{description}</Typography>
				<Typography variant="overline">
					Languages Used: <br />
					{languages.map((language) => (
						<Chip
							color="secondary"
							key={language}
							label={language}
							data-testid="languageChip"
						/>
					))}
				</Typography>
			</CardContent>
			<CardActions>
				{/* Link to github */}
				<Tooltip title="Github Repo" arrow>
					<IconButton
						data-testid="githublink"
						data-block="projectlink"
						role="button"
						color="secondary"
						aria-label={linkAriaLabel}
						href={repoLink}>
						<GitHubIcon fontSize="large" />
					</IconButton>
				</Tooltip>

				{shopLink && (
					<Tooltip title="Play Store Link" arrow>
						<IconButton
							data-testid="shoplinkfornimaz"
							data-block="shoplinkfornimaz"
							role="button"
							color="secondary"
							aria-label={linkAriaLabel}
							href={shopLink}>
							<ShopRoundedIcon fontSize="large" />
						</IconButton>
					</Tooltip>
				)}

				{siteLink ? (
					<Tooltip title="Live Site Link" arrow>
						<IconButton
							data-testid="externalSiteLink"
							data-block="projectLinkToSite"
							role="button"
							color="secondary"
							aria-labelledby={heading}
							href={siteLink}>
							<LaunchRoundedIcon fontSize="large" />
						</IconButton>
					</Tooltip>
				) : null}
			</CardActions>
		</Card>
	);
}

ProjectCard.propTypes = {
	heading: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	languages: PropTypes.arrayOf(PropTypes.string).isRequired,
	linkAriaLabel: PropTypes.string.isRequired,
	repoLink: PropTypes.string.isRequired,
	siteLink: PropTypes.string,
	shopLink: PropTypes.string,
};
