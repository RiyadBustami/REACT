import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './views/ProductDetails';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route element={<Update/>} path="/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
