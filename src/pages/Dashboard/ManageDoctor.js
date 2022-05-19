import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPages/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const { data: doctors, isLoading,refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        method: 'GET',
        // headers:{
        //     authoraization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>manage doctors : {doctors.length}</h1>
            <div class="overflow-x-auto w-full">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>speacility</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(doctor=><DoctorRow
                            key={doctor._key}
                            doctor={doctor}
                            refetch={refetch}
                            >

                            </DoctorRow>)
                        }

                    </tbody>
                </table>

            </div>
        </div>


    );
};

    export default ManageDoctor;