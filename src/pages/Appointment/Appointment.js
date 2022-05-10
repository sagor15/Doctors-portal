import React, { useState } from 'react';
import Footer from '../../SharedPages/Navber/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    
    return (
        <div className='container'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
        
    );
};

export default Appointment;