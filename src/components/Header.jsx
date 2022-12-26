import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import circle from '../assets/circle.svg';
import java from '../assets/java.png';
import react from '../assets/react.svg';
import mongodb from '../assets/mongodb.jpg';


function Header() {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    }

    return (
            <div id='home' className='relative bg-[url("https://i.ibb.co/0nkXPzr/bgIMG.png")] bg-cover bg-repeat bg-center flex-1 w-full h-full flex-row pt-24 px-8 pb-0 4xl:pt-2 btnMd:flex py-8'>
            <motion.div className='flex-[0.65] flex flex-col justify-start items-start h-full 4xl:w-full 4xl:mr-0' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                <div className='w-full flex justify-start items-start md:justify-end md:items-end flex-col'>
                    <div className='py-4 px-8 border-white rounded-[15px] flex w-auto justify-evenly shadow-md shadow-gray-500'>
                        <span className=' text-5xl justify-center items-center'>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text font-allerta'>Hello, I am</p>
                            <h1 className='text-4xl font-allerta'>Manas</h1>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-8 border-white rounded-[15px] flex-col mt-12 w-auto shadow-md shadow-gray-500'>
                    <p className='w-full uppercase font-allerta text-right'>Web Developer</p>
                    <p className='w-full font-allerta uppercase text-right'>Self Learner</p>
                </div>
            </motion.div>

            <motion.div className='flex-1 h-full flex justify-end items-end relative my-8 mx-0 lg:my-0' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildre: 0.5 }}>
                <img className='w-full object-contain z-1' src={profile} alt="img" />
                <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }} className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]" src={circle} alt='profile' />
            </motion.div>

            
            <motion.div className='flex-[0.75] flex btnMd:flex-col items-start ml-4 h-full btnMd:pb-8 btnLg:pt-16 xl:pb-0' variants={scaleVariants} whileInView={scaleVariants.whileInView}> 
                <div className='w-[100px] h-[100px] rounded-[50%] bg-white shadow-md shadow-gray-500' key={3}>
                    <img className='w-full h-full p-4' src={mongodb} alt="mongodb" />
                </div>
                <div className='w-[150px] h-[150px] m-7 rounded-[50%] bg-white shadow-md shadow-gray-500 2xl:w-[170px] 2xl:h-[170px]' key={2}>
                    <img className='w-full h-full p-4' src={react} alt="react" />
                </div>
                <div className='w-[70px] h-[70px] rounded-[50%] bg-white shadow-md shadow-gray-500 2xl:w-[100px] 2xl:h-[100px]' key={1}>
                    <img className='w-full h-full p-4' src={java} alt="java" />
                </div>
            </motion.div>
        </div>
    );
}

export default Header;
