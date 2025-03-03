import React from 'react';
import { Box, Grid, Toolbar, Typography, styled } from '@mui/material';

import ProjectCard from '../components/ProjectCard';
import { cardData } from '../data/projectData';

const PREFIX = 'Projects';

const classes = {
	root: `${PREFIX}-root`,
	projectsLink: `${PREFIX}-projectsLink`,
	projectsCard: `${PREFIX}-projectsCard`,
	githubLinksAnchor: `${PREFIX}-githubLinksAnchor`,
};

const StyledBox = styled(Box)(() => ({
	[`&.${classes.root}`]: {
		padding: '1rem',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
	},

	[`& .${classes.projectsLink}`]: {
		minHeight: 0,
	},

	[`& .${classes.projectsCard}`]: {},

	[`& .${classes.githubLinksAnchor}`]: {
		'&:visited': {
			color: '#000000',
		},
		'&:link': {
			color: '#000000',
		},
	},
}));

export default function Projects() {
	return (
		<StyledBox className={classes.root}>
			<Toolbar className={classes.projectsLink} id="projects" />
			<Typography align="center" gutterBottom variant="h1">
				Projects
			</Typography>
			<Grid
				container
				spacing={4}
				alignItems="center"
				alignContent="center"
				justifyContent="space-around">
				{cardData.map((data, key) => (
					<Grid
						key={key}
						aria-label="ProjectCard"
						item
						lg={4}
						md={6}
						sm={10}
						xs={12}>
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
		</StyledBox>
	);
}
