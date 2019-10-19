import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fields from './components/input';
import Equation from './components/equation';
import Result from './components/result';

function App() {
  return (
    <div className="App">
      <Fields></Fields>
      <Equation/>
      <Result></Result>
    </div>
  );
}

export default App;
