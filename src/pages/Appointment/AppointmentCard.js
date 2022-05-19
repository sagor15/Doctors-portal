import React from 'react';

const AppointmentCard = ({ service, setTreathment }) => {
    const { name, slots } = service;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body  ">
                <h2 className="card-title inline text-center text-xl text-primary">{name}</h2>
                <p className='inline text-center text-xl'>

                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots Available</span>
                    }
                </p>
                <p className='inline text-center text-xl text-light'>

                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available

                </p>
             

                <label 
                for="booking-modal"
                disabled={slots.length === 0}
                onClick={() => setTreathment(service)}
                 className="btn btn-primary text-white bg-secondary">Book Appointment</label>
            </div>
        </div>
    );
};

export default AppointmentCard;