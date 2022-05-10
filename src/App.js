import logo from './logo.svg';
import './App.css';
import Navber from './SharedPages/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Footer from './SharedPages/Navber/Footer';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div>
     <Navber></Navber>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
     </Routes>
     {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
