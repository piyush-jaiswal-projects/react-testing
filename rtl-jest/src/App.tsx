import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Skills } from './components/skills/skills';

const skills: string[] = ['HTML', 'CSS', 'Javascript'];

function App() {
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
