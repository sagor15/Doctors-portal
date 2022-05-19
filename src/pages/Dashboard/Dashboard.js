import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import chair from "../../assets/images/appointment.png";

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div  class="drawer-content ">
      <h1 className='text-3xl text-purple-500 text-center mb-5'>Wellcome to your Dashboard</h1>
  <Outlet></Outlet>
  </div> 
  <div  class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul  style={{background:`url(${chair})` ,
     backgroundRepeat: 'no-repeat' , backgroundSize:'cover',
     backgroundAttachment:'fixed'} }
     class="menu p-4 bg-opacity-60 overflow-y-auto w-60 text-white font-bold"
     >
     
      <li><Link to='/dashboard'>My Appointment</Link></li>
      <li><Link to='/dashboard/review'>My Reveiw</Link></li>
      <li><Link to='/dashboard/history'>My Histoy</Link></li>
      <li><Link to='/dashboard/users'>All Users</Link></li>
      <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
      <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;