import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Display from './components/Display';

function App() {
  const [id, setId] = useState(1);
  const [category, setCategory] = useState("people");
  const [categories] = useState(["people", "planets"]);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/" + category + "/" + id);
  }
  return (
    <div className="App">
      <div style={{ display: "inline" }}>
        <form onSubmit={(e) => handleSearch(e)}>
          <label htmlFor='category'>Search for:</label>
          <select name='category' onChange={e => setCategory(e.target.value)}>
            {categories.map((item, i) => <option key={i}>{item}</option>)}
          </select>
          <label htmlFor='id'>ID: </label>
          <input type='text' name='id' onChange={e => setId(e.target.value)}></input>
          <button>Search</button>
        </form>
      </div>
      <Routes>
        <Route path="/:category/:id" element={<Display/>} />
      </Routes>
    </div>
  );
}

export default App;
