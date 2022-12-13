import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Display from './components/Display';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:input/:color/:bgcolor" element={<Display/>}/>
        <Route path="/:input" element={<Display/>}/>
      </Routes>
    </div>
  );
}

export default App;
