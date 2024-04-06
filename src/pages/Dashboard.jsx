import React, { useEffect, useState } from 'react';
import { AppBar } from '../components/AppBar';
import { Balance } from '../components/Balance';
import { Users } from '../components/Users';
import axios from "axios";

const Dashboard = () => {

  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const [balance, setBalance ] = useState(null);

  useEffect(()=>{
    if(user) {
      axios.get("http://localhost:4000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token") 
        }
      })
      .then(response => {
        setBalance(response.data.balance);
      })
      .catch(error => {
        console.error('Error fetching balance:', error);
      });
    }
  }, [user]);


  return (
    <div>
      <AppBar user={user}/>
      <div className="h-full w-screen px-24 mt-[-6rem] flex flex-col gap-8">
        <Balance value={balance} />
        <Users currentUser={user}/>
      </div>
    </div>
  )
}

export default Dashboard