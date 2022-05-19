import logo from './logo.svg';
import './App.css';
import Navber from './SharedPages/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Footer from './SharedPages/Navber/Footer';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyReveiw from './pages/Dashboard/MyReveiw';
import Review from './pages/Review/Review';
import History from './pages/Dashboard/History';
import Users from './pages/Dashboard/Users';
import AddDoctor from './pages/Dashboard/AddDoctor';
import ManageDoctor from './pages/Dashboard/ManageDoctor';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
         <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReveiw></MyReveiw>}></Route>
          <Route path='history' element={<History></History>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='adddoctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='managedoctor' element={<ManageDoctor></ManageDoctor>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
      </Routes>
      <ToastContainer />
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
