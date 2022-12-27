import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='flex w-full justify-between items-center py-4 px-8 bg-white/20 backdrop-blur-sm -webkit-backdrop-blur-sm fixed border-2 border-solid border-white/10 z-10'>
            <div className='flex justify-start items-center'>
                {/* <img className='w-full h-10' src={logo} alt="logo" /> */}
                <div className='text-4xl font-allerta font-extrabold text-gray-600 hover:shadow-white hover:shadow-lg hover:cursor-pointer '>MANAS</div>
            </div>
            <ul className='hidden md:flex justify-center items-center list-none '>
                {['home', 'about', 'work','skills', 'contact'].map((item) => (
                    <li className='my-0 mx-4 cursor-pointer flex-col' key={`link-${item}`}>
                        <div className='w-1 h-1 bg-transparent rounded-[50%] mb-1 hover:bg-blue-900' />
                        <a className='text-gray-600 uppercase flex-col font-medium transition-all ease-in duration-400 hover:text-gray-800' href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className='md:hidden w-9 h-9 rounded-[50%] relative flex justify-center items-center bg-blue-800'>
                <HiMenuAlt4 className='w-[75%] h-[75%] text-white/80' onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div className='fixed top-0 bottom-0 right-0 z-10 p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-cover bg-white bg-repeat bg-[url("https://i.ibb.co/LCC3g4g/bgWhite.png")] shadow-md' whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                        <HiX className='w-9 h-9 text-gray-900 my-2 mx-4' onClick={() => setToggle(false)} />
                        <ul className='list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col'>
                        {['home', 'about', 'work','skills','contact'].map((item) => (
                            <li className='m-4' key={item}>
                                <a onClick={() => setToggle(false)} className='text-gray-600 uppercase flex-col font-medium transition-all ease-in duration-400 hover:text-gray-900' href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
