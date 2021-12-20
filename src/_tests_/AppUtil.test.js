import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('the full app:', () => {
	it('back to top button appears if user scrolls down', async () => {
		render(<App />);
		window.scrollTo(0, 1000);
		const linkElement = await screen.findByLabelText('scroll back to top');
		expect(linkElement).toBeInTheDocument();
	});

	//and click of the button scrolls the page to top
	it('back to top button click scrolls the page to top', async () => {
		render(<App />);
		window.HTMLElement.prototype.scrollIntoView = jest.fn();
		window.scrollTo(0, 1000);
		const linkElement = await screen.findByLabelText('scroll back to top');
		expect(linkElement).toBeInTheDocument();
		linkElement.click();
		expect(window.scrollY).toBe(0);
	});
});
