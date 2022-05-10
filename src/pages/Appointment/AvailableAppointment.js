import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointment = ({ date, setDate }) => {
    const [services , setServices] = useState([]);
    const [treathment , setTreatment] = useState(null);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[])




    return (
     <div className=''>
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
     </div>
    );
};

export default AvailableAppointment;