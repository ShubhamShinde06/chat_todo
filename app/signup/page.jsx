"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { Context } from "../../components/client/Client";
import { redirect } from "next/navigation";
import { toast } from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(Context);

  const signupHandler = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('/api/auth/register',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },body:JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      setUser(data.user);
      toast.success(data.message);
    } catch(error) {
      return toast.error(data.message.error);
    }
   
  };

  if (user._id) return redirect("/");

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#04C582]">
      <Link href={"/"}><h2 className="font-bold absolute top-0 left-0 mt-2 ml-2 md:mt-10 md:ml-10 text-[30px] cursor-pointer"><IoMdArrowRoundBack/></h2></Link>
      <section className="md:w-[400px] w-[350px] h-auto  rounded-3xl p-10 text-center text-[white] bg-[#2E3137]">
        <h2 className="text-[30px] font-bold">Sign up</h2>
        <form onSubmit={signupHandler}>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="name"
            placeholder="Enter Name"
            className="w-[100%] h-[35px] rounded-lg p-3 bg-[#545D6A] text-white mt-5"
          /><br></br>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            className="w-[100%] h-[35px] rounded-lg p-3 bg-[#545D6A] text-white mt-5"
          /><br></br>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
             className="w-[100%] h-[35px] rounded-lg p-3 bg-[#545D6A] text-white mt-6"
          /><br></br>
          <button type="submit" className="w-[150px] h-[35px] rounded-xl bg-[#04C582] mt-5 text-[18px] mb-5">Sign up</button>
          <br></br>
          <p>OR</p>
          <Link href={"/login"}>Old User</Link>
        </form>
      </section>
    </div>
  );
};

export default Page;