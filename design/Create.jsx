'use client'
import { Context } from '@/components/client/Client';
import axios from 'axios';
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { FaArrowUp } from "react-icons/fa";

const Create = () => {

  const router = useRouter();

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {user} = useContext(Context) 

    const submithandle = async (e) => {
        e.preventDefault();

        try{
          await axios.post('/api/newtask',{
            title,
            description,
          },{
            withCredentials: true,
            headers: {
              "content-Type":"application/json",
            },
          }
        );
          toast.success("Add note")
          setTitle("");
          setDescription("");
        }
        catch (err){
          toast.error("Null")
          if (!user._id) return toast.error("First Login")
        }
        };
      
        



  return (
    <div className='w-[100vw] h-[100vh] p-5 flex items-center justify-center'>
        <div className='w-[800px] h-[100vh] p-5 pt-10'>
            <div className='p-5 h-[80vh]'>
                
            </div>
            <div className='h-[15vh] w-auto p-2 '>
                <div className='bg-[#171717] p-2 rounded-xl text-white'>
                    <form onSubmit={submithandle} className='flex'>
                        <div>
                            <div>
                                <input type="text" 
                                className='bg-none p-1 border-0 outline-0 bg-[#171717] mb-2 w-[220px] md:w-[580px] font-bold ' 
                                placeholder='Title' 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} 
                                />
                            </div>
                            <div>
                                <textarea
                                    className='bg-none p-1 border-0 outline-0 bg-[#171717] mb-2 w-[220px] md:w-[580px] h-[35px] md:h-[60px]' 
                                    placeholder='Code / notes / other'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} 
                                >   
                                </textarea>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-[50px] ml-8 mt-2 h-[80px] md:w-[100px] md:h-[100px] flex items-center justify-center border-2 rounded-full bg-white text-black text-3xl'><FaArrowUp /></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Create