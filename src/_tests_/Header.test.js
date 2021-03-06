import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header of the site:', () => {
	it('should render Header with the creater name in it', () => {
		render(<Header />);
		const creator = screen.getByText(/ARSHAD Shah/i);
		expect(creator).toBeInTheDocument();
	});

	it('should open mobile menu when menu button is clicked', () => {
		render(<Header />);
		expect(screen.getByText(/About me/i)).toBeInTheDocument();
		expect(screen.getByText(/Projects/i)).toBeInTheDocument();
		expect(screen.getByText(/Resume/i)).toBeInTheDocument();
	});

	it('should render the Desktop menu', () => {
		render(<Header />);
		const menu = screen.getByLabelText('desktopMenu');
		expect(menu).toBeInTheDocument();
	});

	it('should render Header', () => {
		const { container } = render(<Header />);
		expect(container).toMatchSnapshot();
	});
});
