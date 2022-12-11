import './App.css';
import ColorForm from './components/ColorForm';
import { useState } from 'react';
import ColorBox from './components/ColorBox';

function App() {
  const [boxes, setBoxes] = useState([]);
  const addColorToList = (color) => {
    setBoxes(boxes.concat(color));
    console.log(boxes);
    addColorToList.bind(App);
  }
  return (
    <div className="App">
      <ColorForm submitColor={addColorToList}/>
      <ColorBox boxes={boxes}/>
    </div>
  );
}

export default App;
