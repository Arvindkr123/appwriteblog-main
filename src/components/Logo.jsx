import React from 'react'

function Logo({ width = '100px' }) {
  return (
    <div className='text-3xl text-yellow-950 font-700 flex w-[50px] rounded-lg'>
      <img src="https://img.freepik.com/premium-vector/initial-letter-x-logo-with-splash-motion_8586-266.jpg?w=740" alt="" />
    </div>
  )
}

export default Logo