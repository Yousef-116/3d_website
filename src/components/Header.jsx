//import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    //toggle menu
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }


    return (
        <header className="flex justify-between items-center 
            py-4 px-4 lg:px-20">
            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                className='relative w-[95%] sm:w-48 h-10
                rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63]
                shadow-[0_0_15px_rgba(255,255,255,0.4)]'>
                <div className='absolute rounded-full flex items-center
                    justify-center gap-1
                   inset-[3px] bg-black m-0.5 bg-black'>
                    <i className='bx bx-code-alt'></i>
                    PORTFOLIO
                </div>
            </div>

            {/* <h1 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="text-3xl md:text-4xl lg:text-5xl
            "><i className='bx bx-code-alt'></i>
                         PORTFOLIO</h1> */}

            <nav className='hidden md:flex items-center
             gap-8 lg:gap-12'>
                {/* <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className='text-base tracking-wider
                transition-colors hover:text-gray-300
                z-50' href="#">Contact</a> */}

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">GITHUB</a>

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">PROJECTS</a>

                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">SKILLS</a>

            </nav>

            <button className='hidden md:block
            bg-[#a7a7a7] text-black 
            py-3 px-8 rounded-full border-none
            font-medium transition-all duration-500 
            hover:bg-white cursor-pointer z-50'>Email me</button>

            {/* menu for Mobile */}
            <button onClick={toggleMenu} className='md:hidden
                text-white text-3xl z-50
                px-1 rounded-full border-none'> <i class='bx bx-menu'></i></button>

            {/* sidebar */}
            <div id="mobileMenu" className='hidden fixed top-16 right-0 bottom-0 left-0
                p-5 md:hidden z-40 bg-black/70 backdrop-blur-sm 
                bg-opacity-30
                '>
                <nav className='flex flex-col gap-6 items-center'>
                    <a className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">CONTACT</a>

                    <a className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">GITHUB</a>

                    <a className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">PROJECTS</a>

                    <a className='text-base tracking-wider
                    transition-colors hover:text-gray-300
                    z-50' href="#">SKILLS</a>

                </nav>
            </div>

        </header>
    )
}

export default Header