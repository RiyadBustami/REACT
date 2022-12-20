import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorCreate from './views/AuthorCreate';
import AuthorEdit from './views/AuthorEdit';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<AuthorCreate />} />
        <Route path='/edit/:id' element={<AuthorEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
