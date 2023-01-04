import React from 'react';
import { motion } from 'framer-motion';
import profile1 from '../assets/profile1.png';
import circle from '../assets/circle.svg';
import java from '../assets/java.png';
import react from '../assets/react.svg';
import mongodb from '../assets/mongodb.jpg';
import AppWrap from '../wrapper/AppWrapper';


const Header = () => {

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
        <div className='flex-1 w-full h-full flex-col lg:flex-row flex justify-center items-center'>
            <motion.div className='flex-[0.65] flex flex-col justify-center items-center h-full my-16 lg:my-0 mx-8 4xl:w-full 4xl:mr-0 pb-16' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                <div className='w-full flex justify-center items-center lg:justify-end md:items-end flex-col'>
                    <div className='py-4 px-8 border-white rounded-[15px] flex w-auto shadow-md shadow-gray-500'>
                        <span className='sm:text-5xl text-2xl justify-center items-center'>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='font-allerta text-xs text-left text-[#6b7688] 4xl:text-3xl'>Hello, I am</p>
                            <h1 className='sm:text-5xl font-allerta text-2xl font-extrabold text-black 4xl:text-[4rem] '>Manas</h1>
                        </div>
                    </div>
                    <div className='py-4 px-8 border-white rounded-[15px] flex w-auto shadow-md shadow-gray-500 flex-col mt-12'>
                        <p className='text-sm text-[#6b7688] 4xl:text-3xl w-full uppercase font-allerta text-right'>Web Developer</p>
                        <p className='text-sm text-[#6b7688] 4xl:text-3xl w-full font-allerta uppercase text-right'>Self Learner</p>
                    </div>
                </div>
            </motion.div>

            <motion.div className='flex-1 h-full flex justify-end items-end relative' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildre: 0.5 }}>
                <img className='w-full h-full object-contain z-1' src={profile1} alt="img" />
                <motion.img whileInView={{ scale: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }} className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%] my-8 mx-0 lg:my-0" src={circle} alt='circle' />
            </motion.div>


            <motion.div className='flex-[0.75] flex lg:flex-col items-start justify-evenly ml-4 h-full pt-16 lg:pb-0' variants={scaleVariants} whileInView={scaleVariants.whileInView}>
                <div className='w-[100px] h-[100px] rounded-[50%] bg-white shadow-md shadow-gray-500 xl:w-[100px] xl:h-[100px]' key={3}>
                    <img className='w-full h-full p-4' src={mongodb} alt="mongodb" />
                </div>
                <div className='flex justify-center items-center w-[150px] h-[150px] m-7 rounded-[50%] bg-white shadow-md shadow-gray-500 xl:w-[150px] xl:h-[150px]' key={2}>
                    <img className='w-full h-full p-4' src={react} alt="react" />
                </div>
                <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50%] bg-white shadow-md shadow-gray-500  xl:w-[70px] xl:h-[70px]' key={1}>
                    <img className='w-full h-full p-4' src={java} alt="java" />
                </div>
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'home');
