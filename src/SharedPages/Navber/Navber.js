import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Navber = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const navigate = useNavigate();
    const doctorPortal = () => {
        navigate('/')
    }

    const menuItems = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/review'>Reviews</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/about' >About</Link></li>
        {
            user && <li><Link to='/dashboard' >Dashboard</Link></li>
        }
        <li>{user ? <button class="btn btn-active btn-ghost" onClick={logout} >Sign Out</button> : <Link to='/login'>Login</Link>}</li>

    </>


    return (






<div class="drawer lg:h-16 ">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content  flex flex-col">
    
    <div class=" navbar  ">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div onClick={doctorPortal} class="flex-1 px-2 mx-2 btn btn-ghost normal-case text-xl">Doctor Portal</div>
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          
        {menuItems}
        </ul>
      </div>
    </div>
    
    
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-3" class="drawer-overlay h-80"></label> 
    <ul class="menu p-4 h-auto bg-base-100">
     
    {menuItems}
      
    </ul>
    
  </div>
</div>



        // <div className="navbar bg-base-100 sticky top-0 px-12">
        //     <div className="navbar-start">
        //         <div className="dropdown z-0 sm:z-50 ">
        //             <label tabindex="0" className="btn btn-ghost  lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </label>
        //             <ul tabindex="1" className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 {menuItems}

        //             </ul>
        //         </div>
        //         <a onClick={doctorPortal} className="btn btn-ghost normal-case text-xl">Doctor Portal</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal p-0">
        //             {menuItems}
        //         </ul>
        //     </div>
        //     <div className='navbar-end'>
        //         <label tabindex="1" for="my-drawer-2" className="btn btn-ghost  lg:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //         </label>
                
        //     </div>
        // </div>
    );
};

export default Navber;