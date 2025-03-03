import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer of the site:', () => {
	it('should render footer with the creater name in it', () => {
		render(<Footer />);
		const creator = screen.getByText(/Arshad Shah/i);
		expect(creator).toBeInTheDocument();
	});

	it('should render the social account links', () => {
		render(<Footer />);
		const githubIcon = screen.getByRole('button', {
			name: /link to Github account of Arshad shah/i,
		});
		const linkedInIcon = screen.getByRole('button', {
			name: /link to Linkedin account of Arshad shah/i,
		});

		const hackerRankIcon = screen.getByRole('button', {
			name: /link to Hacker Rank account of Arshad shah/i,
		});
		const mailIcon = screen.getByRole('button', {
			name: /link to mail account of Arshad shah/i,
		});

		expect(githubIcon).toBeInTheDocument();
		expect(linkedInIcon).toBeInTheDocument();
		expect(hackerRankIcon).toBeInTheDocument();
		expect(mailIcon).toBeInTheDocument();
	});

	it('should render footer', () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});
});
