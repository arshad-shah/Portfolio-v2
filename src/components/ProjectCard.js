import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Chip, IconButton, Tooltip, Typography } from '@material-ui/core';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
	SiCss3,
	SiHtml5,
	SiJava,
	SiJavascript,
	SiJquery,
	SiKotlin,
	SiMaterialui,
	SiNextdotjs,
	SiReact,
	SiRedux,
	SiSqlite,
	SiStyledcomponents,
	SiTailwindcss,
	SiGoogleplay,
} from 'react-icons/si';
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
	//a function that find the correct icon for a given language array
	const getIcon = (language) => {
		switch (language) {
			case 'Kotlin':
				return <SiKotlin />;
			case 'React Native':
			case 'ReactJS':
				return <SiReact />;
			case 'Redux toolkit':
				return <SiRedux />;
			case 'Tailwind CSS':
				return <SiTailwindcss />;
			case 'NextJS':
				return <SiNextdotjs />;
			case 'Material UI':
				return <SiMaterialui />;
			case 'Styled components':
				return <SiStyledcomponents />;
			case 'HTML':
				return <SiHtml5 />;
			case 'CSS':
				return <SiCss3 />;
			case 'Javascript':
				return <SiJavascript />;
			case 'JQuery':
				return <SiJquery />;
			case 'Java':
				return <SiJava />;
			case 'SQLite':
				return <SiSqlite />;
			default:
				return null;
		}
	};

	return (
		<Card raised className={classes.root}>
			<CardHeader id="heading" title={heading} data-testid="projectHeading" />
			<CardContent>
				<Typography variant="body2">{description}</Typography>
				<Typography variant="overline">
					<br />
					{languages.map((language) => (
						<Chip
							icon={getIcon(language)}
							color="secondary"
							key={language}
							label={language}
							className={classes.LanguageChip}
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
						<FiGithub />
					</IconButton>
				</Tooltip>

				{shopLink && (
					<Tooltip title="Play Store Link" arrow>
						<IconButton
							data-testid="shoplink"
							data-block="shoplink"
							role="button"
							color="secondary"
							aria-label={linkAriaLabel}
							href={shopLink}>
							<SiGoogleplay />
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
							<FiExternalLink />
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
