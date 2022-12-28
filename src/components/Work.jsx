import React,{useState} from 'react';
import {AiFillEye,AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import AppWrap from '../wrapper/AppWrapper';
import movie from '../assets/movie.png';
import kbc from '../assets/kbc.png';
import gallery from '../assets/gallery.png';
import enDe from '../assets/enDe.png';
import camera from '../assets/camera.png';
import animation from '../assets/animation.png';
import authenticator from '../assets/authenticator.png';

const Work = () => {

    const works = [
        {title:"Movie Detail Website",description:"Simple Movie and Series Details website using React, Tailwind CSS & Redux Toolkit", projectLink:'https://series-movie-details.netlify.app/', codeLink:'https://github.com/manastechnical/movie-app',tags:['Web App','ALL'], imageUrl: movie},
        {title:"KBC Website",description:"Simple KBC application using React & Tailwind CSS", projectLink:'https://mj-kbc.netlify.app/', codeLink:'https://github.com/manastechnical/react-kbc',tags:['Web App','ALL'], imageUrl:kbc },
        {title:"Gallery",description:"Simple gallery using React, Tailwind CSS & Firebase.", projectLink:'https://react-gallery20.netlify.app', codeLink:'https://github.com/manastechnical/react-gallery',tags:['Web App','ALL'], imageUrl:gallery },
        {title:"Encryption Decryption App",description:"Built a simple application to encrypt and decrypt a text using various algorithms.", projectLink:'https://github.com/manastechnical', codeLink:'https://github.com/manastechnical',tags:['Mobile App','ALL'], imageUrl:enDe },
        {title:"Camera App",description:"Built a simple application to use Camera.", projectLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/CameraApplication/CameraApp', codeLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/CameraApplication/CameraApp',tags:['Mobile App','ALL'], imageUrl:camera },
        {title:"Animation App",description:"Simple application to implement animation on an image.", projectLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/Animation', codeLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/Animation',tags:['Mobile App','ALL'], imageUrl:animation },
        {title:"Authenticator App",description:"Simple application to aunthenticate users.", projectLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/AuthenticationApp', codeLink:'https://github.com/manastechnical/mobile-app-dev/tree/master/AuthenticationApp',tags:['Mobile App','ALL'], imageUrl:authenticator },

    ];

    const [activeFilter,setActiveFilter] = useState('ALL');
    const [animateCard,setAnimateCard] = useState({y:0,opacity:1})
    const [filterWork,setFilterWork] = useState(works);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{y:100,opacity:0}])
        setTimeout(()=>{
            setAnimateCard([{y:0,opacity:1}])
            if(item==="ALL"){
                setFilterWork(works);
            }else{
                setFilterWork(works.filter((work)=>work.tags.includes(item)));
            }
        },500)
    }
    
  return (
    <div className='flex-1 w-full flex-col'>
      <h2 className='font-allerta sm:text-5xl font-extrabold text-center uppercase text-black 4xl:text-[4rem] text-3xl'>My Creative <span className='text-purple-900'>Portfolio</span> Section</h2>
      <div className='flex flex-row justify-center gap-4 items-center flex-wrap mt-16 mx-0 mb-8'>
        {["Web App","Mobile App","HCJ","ALL"].map((item,index)=>(
            <div key={index} onClick={()=>handleWorkFilter(item)} className={`py-2 px-4 rounded-lg bg-white font-extrabold cursor-pointer transition-all duration-300 ease-out hover:bg-[#313bac] hover:text-white 4xl:py-4 4xl:px-8 4xl:rounded-xl flex justify-center items-center text-sm text-left text-[#6b7688] ${activeFilter === item ? 'bg-[#313bac] text-white': ''}`}>
                {item}
            </div>
        ))}
      </div>
      <motion.div animate={animateCard} transition={{duration:0.5,delayChildren:0.5}} className="flex flex-wrap justify-center items-center">
            {filterWork.map((work,index)=>(
                <div className='sm:w-[270px] flex-col sm:m-8 p-4 rounded-lg bg-white cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl shadow-purple-900 flex justify-center items-center 4xl:w-[470px] 4xl:p-5 4xl:rounded-3xl w-full m-4' key={index}>
                    <div className='w-full h-[230px] relative flex justify-center items-center 4xl:h-[350px]'>
                        <img className='w-full h-full rounded-lg object-cover' src={work.imageUrl} alt={work.title} />
                        <motion.div whileHover={{opacity:[0,1]}} transition={{duration:0.25, staggerChildren:0.5,ease:'easeInOut'}} className='absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-gray-900/50 rounded-lg opacity-0 transition-all duration-300 ease-in flex justify-center items-center'>
                            <a href={work.projectLink} target="_blank" rel="noreferrer">
                                <motion.div whileInView={{scale:[0,1]}} whileHover={{scale:[1,0.9]}} transition={{duration:0.25}} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-gray-500 text-white m-4 font-allerta font-extrabold cursor-pointer transition-all duration-100 ease-in'>
                                    <AiFillEye className='w-[50%] h-[50%] text-white'/>
                                </motion.div>
                            </a>
                            <a href={work.codeLink} target="_blank" rel="noreferrer">
                                <motion.div whileInView={{scale:[0,1]}} whileHover={{scale:[1,0.9]}} transition={{duration:0.25}} className='flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-gray-500 text-white m-4 font-allerta font-extrabold cursor-pointer transition-all duration-100 ease-in'>
                                    <AiFillGithub className='w-[50%] h-[50%] text-white'/>
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>
                    <div className='p-2 w-full relative flex-col flex justify-center items-center'>
                        <h4 className='text-sm sm:text-base font-extrabold text-purple-900 text-left 4xl:text-[2rem] mt-4 4xl:mt-12'>{work.title}</h4>
                        <p className='text-sm text-left text-gray-500'style={{marginTop:10}}>{work.description}</p>
                        <div className='absolute py-2 px-4 bg-white -top-6 flex justify-center items-center'>
                            <p className='text-sm text-left text-gray-500 4xl:text-3xl'>{work.tags[0]}</p>
                        </div>
                    </div>
                </div>
            ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Work,'work');
