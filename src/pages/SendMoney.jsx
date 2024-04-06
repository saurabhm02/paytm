import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

const SendMoney = () => {

  const [ searchparams ] = useSearchParams();
  const id = searchparams.get("id");
  const name = searchparams.get("username");
  const navigate = useNavigate();

  const [ amount, setAmount ] = useState(0);
  return (
      <div class="flex justify-center h-screen">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#00FFF5] flex items-center justify-center">
                  <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                </div>
                  <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="amount"
                    >
                      Amount (in Rs)
                  </label>
                  <input
                    onChange={(e) => {setAmount(e.target.value)}}
                    type="number"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="amount"
                    placeholder="Enter amount"
                  />
                </div>
                <button onClick={() => {
                  axios.post("http://localhost:4000/api/v1/account/transfer", {
                    to: id,
                      amount
                    }, {
                      headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                      }
                    });
                    toast.success("money transfer successfully");
                    navigate("/");
                  }} className="justify-center items-center rounded-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-[#00FFF5] text-[#222831] text-lg">
                      Initiate Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SendMoney