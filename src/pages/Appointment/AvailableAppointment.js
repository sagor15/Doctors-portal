import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from "../../SharedPages/Loading";

const AvailableAppointment = ({ date, setDate }) => {
    // const [services , setServices] = useState([]);
    const [treathment , setTreathment] = useState(null);

    const formattedDate = format(date,'PP');



    const { isLoading, data:services,refetch } = useQuery(['available',formattedDate], () =>
    fetch(` https://serene-refuge-65554.herokuapp.com/available?date=${formattedDate}`)
        .then(res=>res.json())
     
   )
   if(isLoading){
       return <Loading></Loading>
   }

    // useEffect(()=>{
    //     fetch(` https://serene-refuge-65554.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=> setServices(data));
    // },[])




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
             setTreathment={setTreathment}
             ></AppointmentCard>)
         }
         </div>
         {treathment && <BookingModal refetch={refetch} date={date} setTreathment={setTreathment} treathment={treathment}></BookingModal>}
     </div>
    );
};

export default AvailableAppointment;