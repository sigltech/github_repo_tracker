import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexPage, SearchPage, RepoPage, Page404 } from './pages';
import { NavBar } from './components/NavBar';


function App() {
  return (    
    <div className="App">
      <NavBar />
      <Routes path='/' >

        <Route path='/' element={<IndexPage />} />
        <Route path='search'>

          <Route path='/search' element={<SearchPage />} />          
            <Route path=':repo' element={<RepoPage />} />

          </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>       
  );
}

export default App;
