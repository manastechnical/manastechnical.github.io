import React from 'react';
import {BsTwitter,BsInstagram} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='hidden sm:flex justify-end items-center flex-col p-4'>
      <div className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <BsTwitter className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </div>
      <div className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <BsInstagram className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </div>
      <div className='w-[40px] h-[40px] rounded-[50%] bg-white my-1 mx-0 border-2 border-solid border-[#e4e4e4] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#313bac] hover:border-[#313bac]'>
        <FaFacebook className='w-[15px] h-[15px] text-[#6b7688] hover:text-white'/>
      </div>
    </div>
  );
}

export default SocialMedia;
