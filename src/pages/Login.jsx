import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox';
import login from "../assets/login.png";
import { Button } from '../components/Button';
import { BottomMessage } from '../components/BottomMessage';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#00ADB5] p-20 rounded-md flex justify-center">
      <div className="flex justify-center gap-16">
        <img src={login} alt="login logo"  className=" w-[19rem] h-[25rem] object-cover"/>
        <div className="rounded-lg bg-white  text-center p-2 h-max px-4 pb-8">
          <Heading title={"Login"} />
          <SubHeading title={"Enter your infromation login yourself"} />
          <div>
            <InputBox label={"Email"} placeholder={"email"} onChange={e => {setEmail(e.target.value)}} />
            <InputBox label={"Password"} placeholder={"password"} onChange={e => {setPassword(e.target.value)}} />
          </div>

          <div className="pt-4">
            <Button label={"login"} onClick={async() =>{
              try {
                const response = await axios.post(
                  "http://localhost:4000/api/v1/user/login",
                  {
                    email,
                    password,
                  }
                );
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                const userData = localStorage.getItem("user");
                const user = userData ? JSON.parse(userData) : null;
                toast.success(`Welcome, ${user.userName}`);
                navigate("/");
              } catch (error) {
                console.error("Error during login:", error);
              }
            }} />
          </div>

          <BottomMessage label={"Don't have an account"}  buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default Login