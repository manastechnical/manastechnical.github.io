import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import about1 from '../assets/about01.png';
import about2 from '../assets/about02.png';
import about3 from '../assets/about03.png';
import about4 from '../assets/about04.png';
import frontend from '../assets/frontend.png';
import backend from '../assets/backend.jpeg';
import AppWrap from '../wrapper/AppWrapper';

const About = () => {

    const abouts = [
        {title:"Web Developer",description:"I have quite knowledge of Web Development. Some of my work is given below", imageUrl:about2 },
        {title:"Android Developer",description:"I am even good at Android Development. I've developed various apps using Java.", imageUrl:about1 },
        {title:"Software Tester",description:"I am into Software Development as well as Software Testing too.", imageUrl:about3 },
        {title:"Database Manager",description:"I also have knowledge about various Databases & its managing methods too.", imageUrl:about4 },
        {title:"Frontend Developer",description:"Some of the frontend tools I know include React, HTML, CSS, etc.", imageUrl:frontend },
        {title:"Backend Developer",description:"Some of the backend tools I know include JS, MongoDB, PostMan, etc.", imageUrl:backend }
    ];

  return (
    <div className='flex-1 w-full flex-col xl:flex-col-3 justify-center items-center'>
        {/* <div className='uppercase flex justify-center items-center text-5xl font-allerta text-purple-900 sm:pt-8 md:pt-16 xl:pt-24'>
            About Me
        </div> */}
        <h2 className='font-allerta sm:text-5xl font-extrabold text-center uppercase text-black 4xl:text-[4rem] text-3xl sm:pt-8 md:pt-16 xl:pt-24'>My <span className='text-purple-900'>About Me</span> Section</h2>
        <div className='flex justify-center items-center flex-wrap mt-8 font-allerta'>
            {abouts.map((about,index)=>(
                <motion.div whileInView={{opacity:[0,1],scale:1,transition:{duration:0.5,ease:'easeInOut'}}} whileHover={{scale:1.1}} transition={{duration:0.5, type:'tween'}} className='w-[190px] flex justify-start items-start flex-col m-8 4xl:w-[370px] 4xl:my-8 4xl:mx-16' key={about.title+index}>
                    <img className='w-full h-[170px] rounded-[15px] object-cover 4xl:h-[320px]' src={about.imageUrl} alt={about.title} />
                    <div className='text-purple-900 text-xs sm:text-base text-left font-bold 4xl:text-3xl' style={{marginTop:10}}>{about.title}</div>
                    <p className='text-xs text-left text-[#6b7688] 4xl:text-3xl' style={{marginTop:10}}>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
  );
}

export default AppWrap(About,'about');
