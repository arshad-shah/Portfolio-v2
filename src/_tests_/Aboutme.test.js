import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../pages/AboutMe';

describe('AboutMe of the site:', () => {
	it('should render with all the information in it', () => {
		const { container } = render(<AboutMe />);
		expect(container).toMatchSnapshot();
	});

	it("should render the 'About Me' heading in aboutme", () => {
		render(<AboutMe />);
		const heading = screen.getByText('About Me');
		expect(heading).toBeInTheDocument();
	});
});
