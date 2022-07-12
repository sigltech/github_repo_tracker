import IndexPage from ".";
import { screen, render } from "@testing-library/react";
import {UserEvent} from "@testing-library/user-event";
describe("IndexPage", () => {

    beforeEach(() => {
        render(<IndexPage />);
    });

    it('should render a H1 element with text', () => {
        // setup
        const heading = screen.getByRole('heading');
        // assert
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('Learn about a Github Users information');
    });

    describe('button', () => {
        it('should render a button element with text', () => {
            // setup
            const button = screen.getByRole('button');
            // assert
            expect(button).toBeInTheDocument();
            expect(button.textContent).toBe('Press to begin Search');
        });

        it('Button should navigate to /search', () => {
            // setup
            const button = screen.getByRole('button');
            // assert
            expect(button)
        })
    });
})
