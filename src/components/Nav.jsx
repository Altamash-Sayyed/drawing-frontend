
import React from 'react'
import {Link, Navigate  } from "react-router-dom";
const Nav = () => {
    const token = localStorage.getItem('token')
    const navigate =Navigate
const logout =()=>{
    localStorage.clear()
   window.location ='/login'
}

  return (
  <div className='text-3xl bg-black text-white w-full flex justify-between p-2'>
      <ul>
         <Link to="/"> <li>Drawing</li></Link>
      </ul>
        <div>
          { token?<ul>
            <Link to="/">    <li onClick={logout}>LogOut</li>     </Link>
            </ul> :
           <ul className='flex'>
             <Link to="/login">   <li className='mx-3'>Login</li></Link>
             <Link to="/signup">   <li className='mx-3'>SignUp</li></Link>
           </ul>
          }
   </div>
    </div>
  )
}

export default Nav

