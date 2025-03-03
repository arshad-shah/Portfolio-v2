import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const data = [
	{
		heading: 'Portfolio website version 1.0',
		description:
			'A Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the first version written in pure HTML, CSS and javascript with a pinch of jquery.',
		languages: ['HTML', 'CSS', 'Javascript', 'jQuery'],
		linkAriaLabel: 'link to Github for portfolio version 1',
		repoLink: 'https://github.com/arshad-shah/arshad-shah.github.io',
		siteLink: 'https://arshad-shah.github.io/portfoliov1/index.html',
	},
];
describe('ProjectCard of the site:', () => {
	it('should render ProjectCard with all the information in it', () => {
		const { container } = render(
			<ProjectCard
				heading={data[0].heading}
				description={data[0].description}
				languages={data[0].languages}
				linkAriaLabel={data[0].linkAriaLabel}
				repoLink={data[0].repoLink}
				siteLink={data[0].siteLink}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it("should render the heading 'Portfolio website version 1.0'", () => {
		render(
			<ProjectCard
				heading={data[0].heading}
				description={data[0].description}
				languages={data[0].languages}
				linkAriaLabel={data[0].linkAriaLabel}
				repoLink={data[0].repoLink}
				siteLink={data[0].siteLink}
			/>
		);

		const projectHeading = screen.getByText('Portfolio website version 1.0');

		expect(projectHeading).toBeInTheDocument();
	});

	it('should render the description', () => {
		render(
			<ProjectCard
				heading={data[0].heading}
				description={data[0].description}
				languages={data[0].languages}
				linkAriaLabel={data[0].linkAriaLabel}
				repoLink={data[0].repoLink}
				siteLink={data[0].siteLink}
			/>
		);

		const description = screen.getByText(
			'A Portfolio site that contains all the work i have done so far. Includes work from college such as exercises, projects and also from outside college such as the android app.This is the first version written in pure HTML, CSS and javascript with a pinch of jquery.'
		);

		expect(description).toBeInTheDocument();
	});
});
