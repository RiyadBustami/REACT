import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PlayersTableView from './views/PlayersTableView';
import PlayerAddView from './views/PlayerAddView';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/players/list' element={<PlayersTableView/>}/>
        <Route path='/players/new' element={<PlayerAddView/>}/>
      </Routes>
    </div>
  );
}

export default App;
