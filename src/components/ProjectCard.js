import React from 'react';
import {
	Chip,
	IconButton,
	Tooltip,
	Typography,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	styled,
} from '@mui/material';
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
import PropTypes from 'prop-types';

const PREFIX = 'ProjectCard';

const classes = {
	root: `${PREFIX}-root`,
	githubLinksAnchor: `${PREFIX}-githubLinksAnchor`,
	LanguageChip: `${PREFIX}-LanguageChip`,
};

const StyledCard = styled(Card)(() => ({
	[`&.${classes.root}`]: {
		backgroundColor: '#ffffff',
		padding: '1rem',
	},

	[`& .${classes.githubLinksAnchor}`]: {
		'&:visited': {
			color: '#000000',
		},
		'&:link': {
			color: '#000000',
		},
	},

	[`& .${classes.LanguageChip}`]: {
		margin: '0.3rem',
		borderRadius: '5px',
		padding: '0.5rem',
		fontWeight: 'bold',
	},
}));

export default function ProjectCard({
	heading,
	description,
	languages,
	linkAriaLabel,
	repoLink,
	siteLink,
	shopLink,
}) {
	// a function that finds the correct icon for a given array of languages,	frameworks, etc.
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
		<StyledCard raised className={classes.root}>
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
			<CardActions
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					alignContents: 'center',
					borderTop: '1px solid #e0e0e0',
				}}>
				<Tooltip title="Github Repo" arrow>
					<IconButton
						data-testid="githublink"
						data-block="projectlink"
						role="button"
						color="secondary"
						sx={{
							transition: 'all 0.3s ease-out',
							'&:hover': {
								boxShadow: '0px 0px 10px #e0e0e0',
								transform: 'scale(1.2)',
								transition: 'all 0.13s ease-in',
							},
						}}
						aria-label={'Link to github Repo of ' + heading}
						href={repoLink}
						size="large">
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
							sx={{
								transition: 'all 0.3s ease-out',
								'&:hover': {
									boxShadow: '0px 0px 10px #e0e0e0',
									transform: 'scale(1.2)',
									transition: 'all 0.13s ease-in',
								},
							}}
							aria-label={linkAriaLabel}
							href={shopLink}
							size="large">
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
							sx={{
								transition: 'all 0.3s ease-out',
								'&:hover': {
									boxShadow: '0px 0px 10px #e0e0e0',
									transform: 'scale(1.2)',
									transition: 'all 0.13s ease-in',
								},
							}}
							aria-label={'Link to live website of ' + heading}
							href={siteLink}
							size="large">
							<FiExternalLink />
						</IconButton>
					</Tooltip>
				) : null}
			</CardActions>
		</StyledCard>
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
