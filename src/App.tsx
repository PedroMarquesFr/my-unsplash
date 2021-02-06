import React from 'react';
import './App.css';
import Routes from './routes';
import {searchByQuery} from './services/api';

function App() {
  return (
    <div className="App">
      {searchByQuery('office')}
      <Routes/>
    </div>
  );
}

export default App;
