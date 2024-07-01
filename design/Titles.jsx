'use client'
import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { IoTrashOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import toast from 'react-hot-toast';
import Link from 'next/link';

const Titles = () => {

  const [tasks,setTask] = useState([]);
  useEffect(()=> {
    axios.get('/api/mytask',{
      withCredentials:true,
    }).then(res=> {
      setTask(res.data.tasks);
    }).catch(err => {
      console.log(err)
    })
  },);

//   function handleDelete(id){
//     axios.delete(`/api/task/${id}`)
//     .then((res)=>{
//         setDeleted(true)
//         toast.success("Deleted")
//     })
//     .catch((err)=> console.log(err))
// }

const handleDelete = async (id) => {
  try{
    const {data} = await axios.delete(`/api/task/${id}`,
      {
        withCredentials: true,
      }
    );
    toast.success(data.message);
    //setRefresh(prev => !prev)
  }catch(err){
    toast.error(err)
  }
}

  return (
    <>
    {
        tasks && tasks.map((i,index) => (
            <>
                <div className='mt-4' key={index}>
                    <div className='text-[13px]'>
                        {i.createdAt}
                    </div>
                    <div className='text-white mt-1 p-1 bg-[#00000051] rounded-lg flex justify-between items-center overflow-hidden'>
                        {i.title}
                        <div className='mt-1 flex '>
                          <Link href={{
                            pathname:`/read/${i._id}`,
                            query:{msg:`${i.title}`},
                            query:{msg:`${i.description}`}
                          }}><button className='mr-4'><GrView /></button></Link>
                          <button onClick={()=> handleDelete(i._id)}><IoTrashOutline /></button>
                        </div>
                    </div>
                </div>
            </>
        ))
    }
    </>
  )
}

export default Titles