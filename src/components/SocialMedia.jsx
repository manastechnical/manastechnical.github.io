import React from 'react';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='hidden sm:flex justify-end items-center flex-col p-4'>
      <a href='https://twitter.com/manas_jagtap20' target="_blank" className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <BsTwitter className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </a>
      <a href='https://www.instagram.com/manas_jagtap20/' target="_blank" className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <BsInstagram className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </a>
      <a href='https://www.linkedin.com/in/manas-jagtap-1ba90a241/' target="_blank" className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <FaLinkedin className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </a>
    </div>
  );
}

export default SocialMedia;
