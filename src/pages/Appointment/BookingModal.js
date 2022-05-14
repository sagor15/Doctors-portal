import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treathment, date }) => {
    const {_id ,name , slots} = treathment;
    const [user, loading] = useAuthState(auth);
    const handleBooking = e =>{
        e.preventDefault();
        const slot = e?.target?.slot?.value;
        const email = e?.target?.email?.value;
        const number = e?.target?.number?.value;
        console.log(_id , slot,name, email, number);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <h3 className="font-bold text-lg text-center text-secondary">Booking for : {name}</h3>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                           
                            {
                                slots.map(slot=> <option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;