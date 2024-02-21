import React, { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Drawer } from '@mui/material';

const LeftDrawer = ({open ,toggleDrawer}) => {
    const drawerWidth = 250;
  
  return (
    <div>
      <Drawer anchor="left" open={open} onClose={toggleDrawer} sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: 'linear-gradient(116.83deg, #070D28 0%, #09264F 100.23%, #0D61AA 100.24%)',
            color:'white'
            // Set your desired background color
          },
        }}>
        <div
        
        >
          <List>
            
          <div className='w-full min-h-[100vh] p-[20px] relative'>
      <div className="flex flex-col h-full pt-4">
        <div className="items">
          <div className="logo flex items-center justify-center lg:justify-between">
            <div >

            <img src="/assets/images/3.png" className='h-[31.14px] w-[99.95px] ml-[20px]' alt="" />
   
</div>
          
          </div>
          <div className="py-[30px]">
              <div className="list">
                <ul className='p-0 m-0 list-none '>
                  <li className='relative  active text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/Home.svg" className='h-[26.27px] w-[26.27px]' alt="" />
                    <p >

                      Dashboard
                    </p>

                  </li>
                  <li className='relative  text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/command.svg" className='h-[26.27px] w-[26.27px]' alt="" />

                    <p >

                      Overview
                    </p>
                  </li>
                  <li className='relative  text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/setting.svg" className='h-[26.27px] w-[26.27px]' alt="" />

                    <p >

                      Settings
                    </p>
                  </li>
                  <li className='relative  text-[15.57px] flex gap-2 items-center leading-[31.14px] px-[20px] py-[10px] font-normal text-white'>
                    <img src="/assets/images/box-add.svg" className='h-[26.27px] w-[26.27px]' alt="" />
                    <p >

                      New Project
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          <div className='absolute bottom-5 '>
            <div className="flex flex-col gap-2 ml-[20px]">
              <div className="flex relative  ">
                <img src="/assets/images/gallery.svg" className='h-[60px] w-[60px]' alt="" />
                <img src="/assets/images/gallery2.svg" className='h-[60px] w-[60px] absolute right-[40px]' alt="" />
                <img src="/assets/images/gallery.png" className='h-[60px] w-[60px] absolute right-[0px] z-10' alt="" />
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
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
