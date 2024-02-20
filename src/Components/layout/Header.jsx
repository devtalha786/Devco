import React from 'react'
import './layout.css'

const Header = () => {
  return (
    <div className='p-[30px]'>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h2 className='text-white text-[15.57px] leading-[18.84px] font-normal'>
            Dashboard
          </h2>
          <img src="/assets/images/arrow-down.svg" className='h-[10.7px] w-[10.7px]' alt="" />
          <h2 className='text-white text-[15.57px] leading-[18.84px] font-normal'>
            Home Page
          </h2>
        </div>
        <div className="flex gap-4 items-center">
        <button className='rounded-[68.65px] btn-gradient   text-white'
        style={{
          padding: '9.73px 38.92px 9.73px 38.92px'
        }}>
        Active
</button>
          <img src="/assets/images/Ellipse 11.png" className='h-[42.81px] w-[42.81px]' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header