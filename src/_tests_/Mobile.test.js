import React from 'react';
import { render, screen } from '@testing-library/react';
import Mobile from '../components/navigation/Mobile';

describe('Mobile layout of the site:', () => {
	it('should render Mobile menu with the About me link', () => {
		render(<Mobile />);
		const aboutme = screen.getByText('About Me');
		expect(aboutme).toBeInTheDocument();
	});

	it('should render Mobile menu with the Projects link', () => {
		render(<Mobile />);
		const Projects = screen.getByText('Projects');
		expect(Projects).toBeInTheDocument();
	});

	it('should render Mobile menu with the Resume link', () => {
		render(<Mobile />);
		const Resume = screen.getByText('Resume');
		expect(Resume).toBeInTheDocument();
	});

	it('should render Mobile', () => {
		const { container } = render(<Mobile />);
		expect(container).toMatchSnapshot();
	});
});
