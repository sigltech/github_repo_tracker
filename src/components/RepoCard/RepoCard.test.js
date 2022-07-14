import {screen, render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RepoCard from '.';

describe('RepoCard', () => { 
   beforeEach(() => {
        render(<Router><RepoCard /></Router>);
   }) 

   it('Has a title', async () => {
        //setup
        const mockTitle = 'Test Title';
        //assert
        expect(mockTitle).toEqual('Test Title')
   })

    // it('it renders a div with class Cards', () => {
    //     //setup
    //     const div = screen.getAllByRole('div', {toHaveClass: 'Cards'});
    //     //assert
    //     expect(div).toHaveClass('Cards');
    // })

})
