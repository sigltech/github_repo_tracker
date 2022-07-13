import IndexPage from ".";
import { screen } from "@testing-library/react";
import{ render } from "@testing-library/react";
import userEvent, {UserEvent} from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

describe("IndexPage", () => {

    beforeEach(() => {
        render(<Router><IndexPage /></Router>);
    });

    it('should render a H1 element with text', () => {
        // setup
        const heading = screen.getByRole('heading');
        // assert
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('Learn about a Github Users information');
    });

    describe('button', () => {
        // it('should render a button element with text', () => {
        //     // setup
        //     const button = screen.getByRole('button');
        //     // assert
        //     expect(button).toBeInTheDocument();
        //     expect(button.textContent).toBe('Press to begin Search');
        // });

        // it('Button should navigate to /search', async () => {
        //     // setup
        //     const button = screen.getByRole('button');
        //     // assert
        //     const buttonClick = await userEvent.click(button);
            
        // })
    });
})
