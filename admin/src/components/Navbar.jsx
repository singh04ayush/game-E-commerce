import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img onClick={()=> navigate('/')} className='w-[max(10%,80px)] cursor-pointer' src={assets.logo} alt="" />

      <div className='flex items-center gap-4'>
        <button
          onClick={() => navigate('/')}
          type='button'
          className='bg-blue-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full cursor-pointer'
        >
          Dashboard
        </button>

        <button
          onClick={() => {
            setToken('');
            localStorage.removeItem('token');
          }}
          type='button'
          className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
