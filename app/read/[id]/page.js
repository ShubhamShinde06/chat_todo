import SideBar from '@/design/SideBar'
import Link from 'next/link'
import React from 'react'
import { IoCreateOutline } from 'react-icons/io5'


const page = ({params,searchParams}) => {
  console.log(params.id)
  return (
    <div>
        {/* <Read/> */}
        {/* {params.id}<br></br>
        {searchParams.msg ? searchParams.msg : null} */}
        <div className='flex'>
            <SideBar/>
            <div className='w-[100vw] h-[100vh] p-5 flex items-center justify-center'>
                <div className='w-[800px] h-[100vh] p-5 pt-10'>
                    <Link href={'/'}><h2 className='p-3  rounded-2xl font-bold  text-white text-2xl'><IoCreateOutline /></h2></Link> 
  
                        <div className='p-5 h-[90vh] '>
                            <div className='flex justify-end items-center w-auto h-50px text-2xl text-white '>
                                <h2 className='p-3 bg-[#171717] rounded-2xl font-bold'>{searchParams.msg1 ? searchParams.msg1 : null}</h2>
                            </div>
                            <div className='p-5 mt-10 text-white'>
                                <h4>{searchParams.msg ? searchParams.msg : null}</h4>
                            </div>
                        </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default page