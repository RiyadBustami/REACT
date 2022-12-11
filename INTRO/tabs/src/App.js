import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const arr=[["Riyad","Riyad is a self-sufficient developer"], ["Saeed","Saeed is a self-sufficient developer"], ["Reina","Reina is a self-sufficient developer"], ["Ameer","Ameer is a self-sufficient developer"], ["Baraa","Baraa is a self-sufficient developer"],["Lina","Lina is our beloved coordinator"]];
  const [display, setDisplay]=useState(arr[0]);
  const setIndex = (i) => {
    setDisplay(arr[i]);
  }
  return (
    <div className="App">
      <Tabs showTab={setIndex} arr={arr}/>
      <Display toShow={display}/>
    </div>
  );
}

export default App;
