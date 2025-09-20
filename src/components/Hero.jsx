//import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

export const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center 
        justify-between min-h-[calc(90vh-6rem)]
        ">

            <div className="max-w-xl ml-[5%] z-10 mt-10 md:mb-16 lg:mt-0 sm:mb-0 ">



                {/* tag box */}
                {/* <div className='relative w-[95%] sm:w-48 h-10
                rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63]
                shadow-[0_0_15px_rgba(255,255,255,0.4)]'>
                    <div className='absolute rounded-full flex items-center
                    justify-center gap-1
                   inset-[3px] bg-black m-0.5 bg-black'>
                        <i className='bx bx-code-alt'></i>
                         PORTFOLIO
                    </div>
                </div> */}

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-simibold tracking-wider my-8
            
                 '> HI, I'M YOUSEF</h1>
                <br />
                FULL-STACK DEVELOPER


                <p className='text-base sm:text-lg tracking-wider text-gray-400
                    max-w-[25rem] lg:max-w-[30rem]'>
                    Passionate about building clean, modern, and user-friendly
                    applications. From crafting intuitive UIs to writing scalable 
                    backend systems, I love turning ideas into reality through code.
                    </p>

                <div className='mt-12 flex flex-row gap-4 flex-nowrap'>
                    <a className='shrink border border-[#2a2a2a]
                        py-2 sm:py-3 px-4 sm:px-5 rounded-full
                        sm:text-lg text-sm font-semibold 
                        tracking-wider transition-all duration-300
                        hover:bg-white hover:text-black' href="#">
                        My Projects <i className='bx bx-folder-open'></i>
                    </a>

                    <a className='shrink border border-[#2a2a2a]
                        py-2 sm:py-3 px-4 sm:px-5 rounded-full
                        sm:text-lg text-sm font-semibold 
                        tracking-wider transition-all duration-300
                        hover:bg-[#1a1a1a] hover:text-white
                        bg-gray-300 text-black' href="#">
                        Contact Me
                    </a>
                </div>

            </div>

            {/* 3D Robot */}

            <Spline data-aos="zoom-in" data-aos-duration="2000"
            className='absolute lg:top-0 top-[-20%]
            lg:bottom-0 lg:left-[25%] sm:left-[-2%] h-full' 
            scene="https://prod.spline.design/xKsp0ZdQMJwsIeVy/scene.splinecode" />

        </main>
    )
}
