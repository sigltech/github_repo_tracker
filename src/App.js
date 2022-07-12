import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { IndexPage, SearchPage, UserDataPage, RepoPage } from './pages';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes path='/' >
        <Route path='/' element={<IndexPage />} />
        <Route path='search'>
          <Route path='/search' element={<SearchPage />} />
          <Route path=':UserDataPage' element={<UserDataPage />} >
            <Route path=':repo' element={<RepoPage />} />
          </Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
