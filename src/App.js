import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { IndexPage, SearchPage, RepoPage, Page404 } from './pages';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {

  return (    
    <div className="App">
      <NavBar />
      <UserProvider>
        <Routes path='/' >

          <Route path='/' element={<IndexPage />} />
          <Route path='search'>
            <Route path='/search' element={<SearchPage />} />
              <Route path=':name' element={<RepoPage />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </UserProvider>
    </div>       
  );
}

export default App;
