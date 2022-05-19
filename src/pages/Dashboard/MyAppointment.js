import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            fetch(` https://serene-refuge-65554.herokuapp.com/booking?patient=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                console.log('res',res);
                if(res.status===401 || res.status===403){
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/home');
                }
               return res.json()
            }).then(data => {
                setAppointments(data)
            });
        }
    }, [user]);
    return (
        <div>
            
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            {/* <th>Time</th> */}
                            <th>Treathment</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((a, index)=> <tr >
                            <td>{index +1 }</td>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            {/* <td>{a.time}</td> */}
                            <td>{a.treatment}</td>
                            <td>{a.slot}</td>
                        </tr>)
                        }
                        {/* <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        
                       
                     
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;