import React from 'react';

const AppointmentCard = ({service,setTreatment}) => {
    const {name , slots} = service;
    return (
        <div class="card  bg-base-100 shadow-xl">
        <div class="card-body  ">
          <h2 class="card-title inline text-center text-xl text-primary">{name}</h2>
          <p className='inline text-center text-xl'>

              {
                  slots.length > 0 ? <span>{slots[0]}</span>:<span className='text-red-500'>No Slots Available</span>
              }
          </p>
          <p className='inline text-center text-xl text-light'>
              
                 {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available
              
              </p>
          <button 
          disabled={slots.length===0}
           class="btn btn-primary text-white bg-secondary">Book Appointment</button>
        </div>
      </div>
    );
};

export default AppointmentCard;