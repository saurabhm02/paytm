import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { User } from './User';

export const Users = ({currentUser}) => {

    const [users, setUsers ] = useState([]);
    const [ filter, setFilter ] = useState("");

    useEffect(() => {
        const delay = setTimeout(() => {
            axios.get(`http://localhost:4000/api/v1/user/getUsers?filter=${filter}`)
                .then(response => {
                    const filteredUsers = response.data.user.filter(user => user._id !== currentUser?._id);
                    setUsers(filteredUsers);
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        }, 100); 

        return () => clearTimeout(delay);
    }, [filter]);


    return (
        <div className="text-slate-100">
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2 text-[#1a1f26]">
                <input onChange={(e) => {
                    setFilter(e.target.value)
                }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                {   users.map(user => <User user={user} key={user._id} />)}
            </div>
        </div>
    )
}
