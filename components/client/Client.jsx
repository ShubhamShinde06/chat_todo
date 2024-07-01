'use client'
import { createContext, useContext, useEffect, useState } from "react"
import Link from "next/link";
import toast, {Toaster} from "react-hot-toast"
import LoginSign from "@/design/LoginSign";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Titles from "@/design/Titles";

//create context
export const Context = createContext({user:{}});

//function 1
export const ContextProvider = ({children}) => {
    
    const [user,setUser] = useState({});
    const[show,setShow] = useState(false);


    useEffect(() => {
        fetch("/api/auth/me")
        .then((res) => res.json())
        .then((data) => {
            if(data.success) setUser(data.user);
        });
    },[]);



    return <Context.Provider
        value={{
            user,
            setUser,
            show,
            setShow,
        }}
    >
        {children}
        <Toaster/>
    </Context.Provider>;
}

//funtion 2
export const LogoutBtn = () => {
    const {user,setUser}  = useContext(Context);

    const logoutHandler = async () => {
        try{  
            const res = await fetch("/api/auth/logout");
            const data = await res.json();

            if(!data.success) return toast.error(data.message);
            setUser({});
            toast.success(data.message);

        }catch(error){
            toast.success(data.message); 
        }
    }
    return(
        <>
            {
                user._id ?  
                <button onClick={logoutHandler} className='w-[200px] h-[40px] bg-[#1A7F64] text-white rounded-md mb-4 flex items-center justify-center'>Logout</button>
                :
                <LoginSign/>
            }      
        </>
    )
}

export const SideHideShow = () => {

    const {show,setShow} = useContext(Context);

    const toggle = () => {
        setShow(!show)
    }

    return(
        <>
            {
                show ?
                <div className='w-[230px] md:w-[250px] h-[100vh] bg-[#171717] text-[#A9A9A9] p-5 absolute'>
                    <div className='flex items-center text-[20px] cursor-pointer'> 
                        <button onClick={toggle}><IoMdClose/></button>
                        <div className='ml-4'><h1>ChatNotes</h1></div>
                    </div>
                    <div className="w-auto h-auto pt-5 overflow-scroll">
                        <Titles/>
                    </div>
                    <div className='bottom-0 absolute'>
                        <LogoutBtn/>
                    </div>
                </div>
                :
                // <div className='w-[250px] h-[100vh] bg-[#171717] text-[#A9A9A9] p-5'>
                    <div className='flex items-center text-[20px] cursor-pointer text-white p-5 absolute'>
                        <button onClick={toggle}><LuMenu/></button>
                        <div className='ml-4'><h1>ChatNotes</h1></div>
                    </div>
            }
        </>
    )

}
