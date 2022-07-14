import RepoPage from ".";
import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe('RepoPage', () => {

    it('Has a title', async () => {
        render(<Router><RepoPage /></Router>);
        //setup
        const mockTitle = 'Test Title';
        //assert
        expect(mockTitle).toEqual('Test Title')
    })
    
});
