import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../SharedPages/Loading';
import Row from './Row';

const Users = () => {
    const { data: users, isLoading,refetch} = useQuery('users', () => fetch(' https://serene-refuge-65554.herokuapp.com/user',{
     method:'GET',   
    headers:{
        authoraization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-xl text-center text-primary py-5'>All Users </h1>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>email</th>
                        <th>make admin</th>
                        <th>remove user</th>
                    </tr>
                </thead>
               <tbody>
                {
                    users.map((user,index) => { return(<Row
                        key={user._id}
                        user={user}
                        refetch={refetch}
                        index={index}
                    ></Row>)})
                }
                </tbody>
                 </table>
            </div>
        
</div >
            );
};

export default Users;