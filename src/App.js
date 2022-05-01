import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "Truong Cong Tuan";
  const age = 18;
  const isFemale = false;
  const student = {
    name: 'Easy Frontend'
  }
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello {name} {isFemale ? 'Female' : 's'}</p>
        {isFemale ? <p>Male</p> : <p>Female</p>}

        {isFemale && <p>$Male</p>}

        {isFemale && (
          <div>
            <p> &&Male 1</p>
            <p> &&Male 2</p>
          </div>
        )}

        {isFemale && (
          <React.Fragment>
            <p>Fragment Male 1</p>
            <p>Fragment Male 2</p>
          </React.Fragment>
        )}

        {isFemale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
          </>

        )}

        {!isFemale && <p>Female</p>}

        <ul>
          {colorList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
