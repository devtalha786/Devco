import React, { useState } from 'react';
import './layout.css';
import Hamburger from 'hamburger-react';
import LeftDrawer from '../drawer/SideBarMenuDrawer';

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
    <LeftDrawer open={open} setOpen={setOpen}  toggleDrawer={toggleDrawer}  />
    <div className='w-full min-h-[100vh] p-[20px] relative'>
      <div className="flex flex-col h-full pt-4">
        <div className="items">
          <div className="logo flex items-center justify-center lg:justify-between">
            <div className='lg:block hidden'>

            <img src="/assets/images/3.png" className='h-[31.14px] w-[99.95px] ml-[20px]' alt="" />

</div>
            <div className='lg:hidden flex justify-center' onClick={toggleDrawer}>

            <Hamburger color="#4FD1C5"  />
            </div>
          </div>
          <div className="py-[30px]">
              <div className="list">
                <ul className='p-0 m-0 list-none '>
                  <li className='relative justify-center lg:justify-start active text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/Home.svg" className='h-[26.27px] w-[26.27px]' alt="" />
                    <p className='hidden lg:block'>

                      Dashboard
                    </p>

                  </li>
                  <li className='relative justify-center lg:justify-start text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/command.svg" className='h-[26.27px] w-[26.27px]' alt="" />

                    <p className='hidden lg:block'>

                      Overview
                    </p>
                  </li>
                  <li className='relative justify-center lg:justify-start text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/setting.svg" className='h-[26.27px] w-[26.27px]' alt="" />

                    <p className='hidden lg:block'>

                      Settings
                    </p>
                  </li>
                  <li className='relative justify-center lg:justify-start text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/box-add.svg" className='h-[26.27px] w-[26.27px]' alt="" />
                    <p className='hidden lg:block'>

                      New Project
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          <div className='absolute bottom-5 hidden lg:block'>
            <div className="flex flex-col gap-2 ml-[20px]">
              <div className="lg:flex relative flex-wrap hidden">
                <img src="/assets/images/gallery.svg" className='h-[60px] w-[60px]' alt="" />
                <img src="/assets/images/gallery2.svg" className='h-[60px] w-[60px] lg:absolute right-[40px]' alt="" />
                <img src="/assets/images/gallery.png" className='h-[60px] w-[60px] lg:absolute right-[0px] z-10' alt="" />
              </div>
              <div>
                <h2 className='font-semibold text-[15.57px] leading-[18.84px] line-colr' style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(168.95deg, #2DF8BB 8.11%, rgba(44, 241, 183, 0.5) 91.83%)',
                }}>
                  Active Developers
                </h2>
                <h2 className='font-semibold pt-1 text-[15.57px] leading-[18.84px] line-colr' style={{
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'
                }}>
                  22 Active
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
