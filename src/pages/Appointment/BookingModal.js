import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treathment, date }) => {
    const {_id ,name , slots} = treathment;
    const handleBooking = e =>{
        e.preventDefault();
        const slot = e?.target?.slot?.value;
        const email = e?.target?.email?.value;
        const number = e?.target?.number?.value;
        console.log(_id , slot,name, email, number);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <h3 class="font-bold text-lg text-center text-secondary">Booking for : {name}</h3>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                           
                            {
                                slots.map(slot=> <option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email address" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;