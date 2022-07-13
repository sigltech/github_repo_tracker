import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexPage, SearchPage, RepoPage, Page404 } from './pages';
import { NavBar } from './components/NavBar';
import { RepoProvider } from './context/RepoContext';

function App() {
  return (    
    <div className="App">
      <NavBar />
      <RepoProvider>
        <Routes path='/' >

          <Route path='/' element={<IndexPage />} />
          <Route path='search'>
            <Route path='/search' element={<SearchPage />} />
              <Route path=':name' element={<RepoPage />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </RepoProvider>
    </div>       
  );
}

export default App;
