import App from './App';
import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {
    beforeEach(() => {
        render(<Router><App /></Router>);
    })

    it(`Should render a Navbar`, () => {
        // setup
        const navbar = screen.getByRole('navigation');
        // assert
        expect(navbar).toBeInTheDocument();
    })

})
