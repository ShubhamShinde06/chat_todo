import React from 'react'
import SideBar from './SideBar'
import Create from './Create'

const Layout = () => {
  return (
    <>
        <div className='flex'>
            <div><SideBar/></div>
            <div><Create/></div>
        </div>
    </>
  )
}

export default Layout