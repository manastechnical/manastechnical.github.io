import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.png';
import circle from '../assets/circle.svg';
import javascript from '../assets/javascript.png';
import react from '../assets/react.svg';
import html from '../assets/html.png';


function Header() {

    const scaleVariants ={
        whileInView:{
            scale:[0,1],
            opacity:[0,1],
            transition:{
                duration:1,
                ease:'easeInOut'
            }
        }
    }

    return (
        <div id='home' className='relative bg-[url("https://i.ibb.co/0nkXPzr/bgIMG.png")] bg-cover bg-repeat bg-center flex-1 w-full h-full flex-row pt-24 px-8 pb-0 4xl:pt-2 md:flex'>
            <motion.div className='flex-[0.65] flex flex-col justify-start items-start h-full 4xl:w-full 4xl:mr-0' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                <div className='w-full flex justify-end items-end flex-col'>
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

            <motion.div className='img' whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, delayChildre:0.5 }}>
                <img src={profile} alt="img" />
                <motion.img whileInView={{scale:[0,1]}} transition={{duration:1,ease:'easeInOut'}} className="overlay_circle" src={circle} alt='profile' />
            </motion.div>

            <motion.div className='flex-[0.75] flex flex-col justify-evenly items-start ml-4 h-full' variants={scaleVariants} whileInView={scaleVariants.whileInView}>
                {[react,javascript,html].map((circle,index)=>(
                    <div className='w-full h-full rounded-[50%] bg-white shadow-md shadow-gray-500' key={`circle-${index}`}>
                        <img className='w-full h-full' src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Header;
