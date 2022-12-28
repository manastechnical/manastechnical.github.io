import React,{useState} from 'react';
// import {ReactToolTip} from 'react-tooltip';
import {motion} from 'framer-motion';
import AppWrap from '../wrapper/AppWrapper';
import tcss from '../assets/tcss.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import git from '../assets/git.png';
import mongodb from '../assets/mongodb.jpg';
import firebase from '../assets/firebase.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import java from '../assets/java.png';

const Skills = () => {

    const data = [
        {name:'React',icon:react,bgColor:''},
        {name:'JavaScript',icon:js,bgColor:''},
        {name:'CSS',icon:css,bgColor:''},
        {name:'HTML',icon:html,bgColor:''},
        {name:'Firebase',icon:firebase,bgColor:''},
        {name:'MongoDB',icon:mongodb,bgColor:''},
        {name:'Tailwind CSS',icon:tcss,bgColor:''},
        {name:'Git',icon:git,bgColor:''},
        {name:'NodeJS',icon:node,bgColor:''},
        {name:'Java',icon:java,bgColor:''},
    ]

    const [experience,setExperience] = useState();
    const [skills,setSkills] = useState(data);

  return (
    <div className='flex-1 w-full flex-col font-allerta'>
      <h2 className='mt-16 text-3xl sm:text-5xl text-purple-900 font-extrabold text-center capitalize 4xl:text-7xl'>Skills <span className='text-black'>&</span> Experience</h2>
      <div className='flex lg:flex-row w-full flex-col '>
        <motion.div className='flex-1 flex flex-wrap gap-4 mt-20 mr-0 justify-center items-center'>
            {skills.map((skill)=>(
                <motion.div className='flex-col text-center m-4 transition-all duration-300 ease-in-out flex justify-center items-center 4xl:my-4 4xl:mx-8' whileInView={{opacity:[0,1]}} transition={{duration:0.5}} key={skill.name}>
                    <div className='flex justify-center items-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] rounded-[50%] bg-white 4xl:w-[150px] 4xl:h-[150px] hover:shadow-xl shadow-purple-900' style={{backgroundColor:skill.bgColor}}>
                        <img className='w-1/2 h-1/2' src={skill.icon} alt={skill.name} />
                    </div>
                    <p className='text-sm text-left text-gray-500 4xl:text-2xl font-medium mt-2 4xl:mt-4'>{skill.name}</p>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export default AppWrap(Skills,'skills');
