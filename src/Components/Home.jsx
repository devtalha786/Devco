import React from 'react'
import MainLayout from './layout/MainLayout'
import './layout/layout.css'
import RevenueChart from './Charts/RevenueChart'
import AmountChart from './Charts/AmountChart'
import CustomTable from './table/DataTable'


const data = [
    {
        id: 1,
        title: 'Total Revenue',
        value: ' $ 410,000',
        img: '/assets/images/Group 37.svg'
    },
    {
        id: 2,
        title: 'Budget Allocated',
        value: '$ 60,000',
        img: '/assets/images/Group 38.svg'
    },
    {
        id: 3,
        title: 'Active Projects',
        value: '23',
        img: '/assets/images/Group 39.svg'
    },
    {
        id: 4,
        title: 'Projects Completed',
        value: '102',
        img: '/assets/images/Group 40.svg'
    },
]
const Home = () => {
    const tableHeaders = ['Client', 'Project Name', 'Budget','Developers Assigned','Project Status'];
    const tableData = [
        [
          { name: 'John Doe', image: '/assets/images/Ellipse 11.png' },
          'Project 1',
          '$10,000',
          [
            { name: 'Developer 1', image: '/assets/images/Ellipse 8.svg' },
            { name: 'Developer 2', image: '/assets/images/Ellipse 9.svg' },
            { name: 'Developer 3', image: '/assets/images/Ellipse 10.svg' },
          ],
          [
            {
                status:'active',
                image: '/assets/images/Frame 69.svg',
                style: { width: '100%', height: 'auto' },
            },
            {
                link:true,
                image: '/assets/images/link.svg',
                style: { width: '14.49px', height: '14.59px' },

            }
          ],
        ],
        [
          { name: 'Jane Doe', image: '/assets/images/Ellipse 11.png' },
          'Project 2',
          '$15,000',
          [
            { name: 'Developer 1', image: '/assets/images/Ellipse 8.svg' },
            { name: 'Developer 2', image: '/assets/images/Ellipse 9.svg' },
            { name: 'Developer 3', image: '/assets/images/Ellipse 10.svg' },
          ],
          [
            {
                status:'active',
                image: '/assets/images/Frame 69.svg',
                style: { width: '100%', height: 'auto' },
            },
            {
                link:true,
                image: '/assets/images/link.svg',
                style: { width: '14.49px', height: '14.59px' },

            }
          ],
        ],
        [
          { name: 'Bob Smith', image: '/assets/images/Ellipse 11.png' },
          'Project 3',
          '$8,000',
          [
            { name: 'Developer 1', image: '/assets/images/Ellipse 8.svg' },
            { name: 'Developer 2', image: '/assets/images/Ellipse 9.svg' },
            { name: 'Developer 3', image: '/assets/images/Ellipse 10.svg' },
          ],
           [
            {
                status:'active',
                image: '/assets/images/Frame 69.svg',
                style: { width: '100%', height: 'auto' },
            },
            {
                link:true,
                image: '/assets/images/link.svg',
                style: { width: '14.49px', height: '14.59px' },

            }
          ],
        ],
      ];

    return (
        <>
            <MainLayout >
                <div>
                    <div className="grid grid-cols-12 gap-2">
                        {data.map((item)=>
                        <div className="col-span-12 sm:col-span-6 md:col-span-4  lg:col-span-3 p-4   box-gradent rounded-[9.73px]" >
                            <div className="flex  justify-between">
                                <h2 className='font-medium  text-[15.57px] leading-[31.14px]'
                                    style={{
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'

                                    }}>
                                    {item.title}
                                </h2>
                                <img src={item.img} className='h-[37.95px] w-[37.95px]' alt="" />
                            </div>
                            <div className="pt-3">
                                <h1 className='font-bold text-[23.35px] leading-[31.14px]'


                                    style={{
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        backgroundImage: 'linear-gradient(93.94deg, #0D61AA 0%, #35E6EB 100%)',



                                    }}
                                >
                                    {item.value}
                                </h1>
                            </div>
                        </div>
                        )}


                    </div>
                    <div className="py-4">
                        <div className="grid grid-cols-12 gap-2  ">
                            <div className=" text-center col-span-12 md:col-span-6 lg:col-span-4 p-4 box-gradent rounded-[9.73px]">
                                <RevenueChart />
                                <h2 className='font-medium pt-2 text-[9.73px] leading-[11.78px]'
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'
                  
                                  }}
                                >
                                Revenue / Month
                                </h2>
                            </div>
                            <div className=" text-center col-span-12 md:col-span-6 lg:col-span-4 p-4 box-gradent rounded-[9.73px]">
                                <AmountChart />
                                <h2 className='font-medium pt-2 text-[9.73px] leading-[11.78px]'
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'
                  
                                  }}
                                >
                                Amount of projects
                                </h2>
                            </div>
                            <div className=" text-center col-span-12 md:col-span-6 lg:col-span-4 p-4 box-gradent rounded-[9.73px]">
                                <RevenueChart />
                                <h2 className='font-medium pt-2 text-[9.73px] leading-[11.78px]'
                                style={{
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    backgroundImage: 'linear-gradient(93.67deg, #FFFFFF 0%, rgba(255, 255, 255, 0.25) 100%)'
                  
                                  }}
                                >
                                Revenue / Month
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-full  box-gradent rounded-[9.73px]'>
                    <CustomTable headers={tableHeaders} data={tableData} className="my-custom-table" />
                    </div>

                </div>
            </MainLayout>
        </>
    )
}

export default Home
