import logo from './logo.svg';
import './App.css';
import Navber from './SharedPages/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    </div>
  );
}

export default App;
