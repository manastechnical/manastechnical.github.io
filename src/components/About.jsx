import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import about1 from '../assets/about01.png';
import about2 from '../assets/about02.png';
import about3 from '../assets/about03.png';
import about4 from '../assets/about04.png';
import AppWrap from '../wrapper/AppWrapper';

function About() {

    const abouts = [
        {title:"Web Development",description:"I have quite knowledge of Web Development. Some of my work is given below", imageUrl:about2 },
        {title:"Android Development",description:"I am even good at Android Development. I've developed various apps using Java.", imageUrl:about1 },
        {title:"Software Testing",description:"I am into Software Development as well as Software Testing too.", imageUrl:about3 },
        {title:"Database Manager",description:"I also have knowledge about various Databases & its managing methods too.", imageUrl:about4 }
    ];

  return (
    <div className='flex-1 w-full flex-col justify-center items-center bg-[url("https://i.ibb.co/0nkXPzr/bgIMG.png")] bg-cover bg-repeat bg-center'>
        <div className='flex justify-center items-center text-5xl font-allerta text-purple-900 sm:pt-8 md:pt-16 xl:pt-24'>
            About Me
        </div>
        <div className='flex justify-center sm:pt-8 xl:pt-24 items-center flex-wrap mt-8 font-allerta'>
            {abouts.map((about,index)=>(
                <motion.div whileInView={{opacity:1}} whileHover={{scale:1.1}} transition={{duration:0.5, type:'tween'}} className='w-[190px] flex justify-start items-start flex-col m-8 4xl:w-[370px] 4xl:my-8 4xl:mx-16' key={about.title+index}>
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
