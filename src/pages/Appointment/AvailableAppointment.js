import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date, setDate }) => {
    const [services , setServices] = useState([]);
    const [treathment , setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[])




    return (
     <div className='py-20'>
         <h1 className='text-xl text-light text-center'>
         Available Appointments on {format(date, 'PP')}
         </h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
         {
             services.map(service=> <AppointmentCard
             key={service._id}
             service={service}
             setTreatment={setTreatment}
             ></AppointmentCard>)
         }
         </div>
         {treathment && <BookingModal date={date} treathment={treathment}></BookingModal>}
     </div>
    );
};

export default AvailableAppointment;