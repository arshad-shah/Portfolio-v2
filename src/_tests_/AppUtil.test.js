import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { yellow } from '@mui/material/colors';

describe('All the App Utils:', () => {
	it('back to top button appears if user scrolls down', async () => {
		render(<App />);
		window.scrollTo(0, 1000);
		const linkElement = await screen.findByTestId('backtoTopButton');
		expect(linkElement).toBeInTheDocument();
	});

	// and click of the button scrolls the page to top
	it('back to top button click scrolls the page to top', async () => {
		const user = userEvent.setup();
		render(<App />);
		const linkElement = await screen.findByLabelText('scroll back to top');
		expect(linkElement).toBeInTheDocument();
		// click the button
		await user.click(linkElement);
		// check if the page is at the top
		expect(window.scrollY).toBe(0);
	});
});
