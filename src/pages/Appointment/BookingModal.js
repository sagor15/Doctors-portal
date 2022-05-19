import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ treathment, date, setTreathment,refetch}) => {
    const { _id, name, slots } = treathment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleBooking = e => {
        e.preventDefault();
        const slot = e?.target?.slot?.value;
        // const email = e?.target?.email?.value;
        // const number = e?.target?.number?.value;
        console.log(_id, slot, name);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }
        fetch(' https://serene-refuge-65554.herokuapp.com/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
            
        })
        .then(res=> res.json()).then(data=>{
            if(data.success){
                toast(`Appointment is set ${formattedDate} at ${slot}`);
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
            setTreathment(null);
        })
        
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
                                slots.map((slot,index) => <option value={slot} key={index}>{slot}</option>)
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

