import Link from 'next/link'
import React from 'react'

const LoginSign = () => {
  return (
    <div>
        <div className='bottom-0 absolute w-[200px]'>
            <Link href={"/signup"}><li className='w-[100%] h-[40px] bg-[#1A7F64] text-white  rounded-md mb-4 flex items-center justify-center'>sign up</li></Link> 
            <Link href={"/login"}><li className='w-[100%] h-[40px] text-white border-2 border-[#4E4E4E] rounded-md mb-4 flex items-center justify-center'>Log in</li></Link> 
        </div>
    </div>
  )
}

export default LoginSign