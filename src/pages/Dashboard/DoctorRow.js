import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor,refetch}) => {
    const {name,email,speacility,img} = doctor;
    const handleDelete= email =>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:'DELETE',
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                toast(`doctor ${name} is deleted successfully`);
                refetch();
            }
        })
    }
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{name}</div>
                        <div class="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                {/* <span class="badge badge-ghost badge-sm"></span> */}
            </td>
            <td>{speacility}</td>
            <th>
                <button onClick={()=> handleDelete(email)} class="btn btn-error btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default DoctorRow;