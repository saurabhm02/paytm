import React, { useState } from 'react';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { SubHeading } from '../components/SubHeading';
import { Button } from '../components/Button';
import signup from "../assets/signup.png"
import { BottomMessage } from '../components/BottomMessage';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#00ADB5] p-20 rounded-md flex justify-center pb-8">
      <div className="flex justify-center gap-16 ">
        <img src={signup} alt="signup logo"  className="w-96 h-[30rem] object-cover"/>
        <div className="rounded-lg bg-white  text-center p-2 h-max px-4 pb-2">
          <Heading title={"Sign up"} />
          <SubHeading title={"Enter your infromation to create an account"} />

          <div>
            <div className="flex gap-6">
              <InputBox label={"First Name"} placeholder={"Enter your first name"} onChange={e=> {setFirstName(e.target.value)}} />
              <InputBox label={"Last Name"} placeholder={"Enter your last name"} onChange={e=> {setLastName(e.target.value)}} />
            </div>
            <InputBox label={"Username"} placeholder={"Choose a unique username"} onChange={e=> {setUserName(e.target.value)}} />
            <InputBox label={"Email"} placeholder={"Enter your email address"} onChange={e=> {setEmail(e.target.value)}} />
            <InputBox label={"Password"} placeholder={"Please enter a secure password"} onChange={e=> {setPassword(e.target.value)}} />
          </div>
          <div className="pt-4">
              <Button label={"Sign up"} onClick={async() => {
                try{
                  const response = await axios.post("http://localhost:4000/api/v1/user/signup", {
                    firstName,
                    lastName,
                    userName,
                    email,
                    password,
                  });
                  navigate("/login");
                  toast.success("Account created successfully");
                } catch (error) {
                  console.error("Error during signup:", error);
                }
              } } />
          </div>

          <BottomMessage label={"Already have an account?"} buttonText={"Sign in"} to={"/login"} />
        </div>
      </div>
      
    </div>
  )
}

export default SignUp