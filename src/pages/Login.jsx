import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox';
import login from "../assets/login.png";
const Login = () => {
  return (
    <div className="bg-[#00ADB5] p-20 rounded-md flex justify-center">
      <div className="flex justify-center gap-16">
        <img src={login} alt="login logo"  className=" w-[19rem] h-[20rem] object-cover"/>
        <div className="rounded-lg bg-white  text-center p-2 h-max px-4 pb-8">
          <Heading title={"Login"} />
          <SubHeading title={"Enter your infromation login yourself"} />
          <div>
            <InputBox label={"Email"} placeholder={"email"} />
            <InputBox label={"Password"} placeholder={"password"} />
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login