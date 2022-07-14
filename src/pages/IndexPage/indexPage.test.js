import IndexPage from ".";
import { screen } from "@testing-library/react";
import{ render } from "@testing-library/react";
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
        expect(heading.textContent).toBe(`Learn about a Github User's information`);
    });

    it(`should render an image`, () => {
        // setup
        const image = screen.getByAltText('github');
        // assert
        expect(image).toBeInTheDocument();
    })

})
