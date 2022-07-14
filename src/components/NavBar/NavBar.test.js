import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './index.jsx';

describe('Header', () => {

    beforeEach(() => {
        render(<Router><NavBar /></Router>);
    })

    it('it renders a nav tag', () => {
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })

    it(`should render a button`, () => {
        // setup
        const button = screen.getByLabelText('button');
        // assert
        expect(button).toBeInTheDocument();
    })

    it(`should navigate to search page on click`, async () => {
        // setup
        const button = screen.getByLabelText('button');
        const userClick = userEvent.click(button);
        const mockFn = jest.fn(userClick);
        await mockFn();
        // assert
        expect(mockFn).toHaveBeenCalledTimes(1);
    })
})
