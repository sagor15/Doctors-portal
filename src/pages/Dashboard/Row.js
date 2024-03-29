import React from 'react';
import { toast } from 'react-toastify';

const Row = ({ user, refetch,index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(` https://serene-refuge-65554.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authoraization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                // if(res.status === 403){
                    // toast.error('failed a made an admin');
                // }
                return res.json()})
            .then(data => {
                console.log(data)
                // if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`success made an admin`);
                // }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Delete User</button></td>
        </tr>
    );
};

export default Row;