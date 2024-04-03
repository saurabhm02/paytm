import React from 'react';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/InputBox';
import { SubHeading } from '../components/SubHeading';
import signup from "../assets/signup.png"

const SignUp = () => {
  return (
    <div className="bg-[#00ADB5] p-20 rounded-md flex justify-center pb-8">
      <div className="flex justify-center gap-16 ">
        <img src={signup} alt="signup logo"  className="w-96 h-[26rem] object-cover"/>
        <div className="rounded-lg bg-white  text-center p-2 h-max px-4 pb-6">
          <Heading title={"Sign up"} />
          <SubHeading title={"Enter your infromation to create an account"} />

          <div>
            <div className="flex gap-6">
              <InputBox label={"First Name"} placeholder={"Enter your first name"} />
              <InputBox label={"Last Name"} placeholder={"Enter your last name"} />
            </div>
            <InputBox label={"Username"} placeholder={"Choose a unique username"} />
            <InputBox label={"Email"} placeholder={"Enter your email address"} />
            <InputBox label={"Password"} placeholder={"Please enter a secure password"} />
            
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default SignUp