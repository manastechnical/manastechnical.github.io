import React,{useRef,useState} from 'react';
import {motion} from 'framer-motion';
import AppWrap from '../wrapper/AppWrapper';
import email from '../assets/email.png';
import mobile from '../assets/mobile.png';
import emailjs from '@emailjs/browser';

const Footer = () => {

  // const [formData,setFormData] = useState({name:'',email:'',msg:''});
  const form = useRef();
  const [isFormSubmitted,setIsFormSubmitted] = useState(false);
  const [loading,setLoading] = useState(false);

  // destructuring
  // const {name,email,msg} = formData;
  
  // const handleChangeInput = (e) =>{
  //   const {name,value} = e.target;
  //   setFormData({...formData,[name]:value});
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_qbebl5i','template_pvjqtkd',form.current,'dBeJCh4cBjFkWpsRb').then(res=>{console.log(res)}).catch(err=>console.log(err));
    setLoading(false);
    setIsFormSubmitted(true);
  }

  return (
    <div className='font-allerta flex-1 w-full flex-col justify-center items-center'>
      <h2 className='sm:text-5xl font-extrabold text-center text-black 4xl:text-[4rem] text-[2rem]'>Take a coffee and chat with me</h2>
      <div className='flex justify-evenly items-center flex-wrap-reverse mt-24 mb-8 mx-8'>
        <div className='w-full sm:w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl bg-white transition-all duration-300 ease-in-out shadow-2xl hover:shadow-purple-900'>
          <img className='w-[40px] h-[40px] my-0 mx-2' src="https://i.ibb.co/DK4LdpD/email.png" alt={email} />
          <a href="mailto:manasjagtap20@gmail.com" className='text-sm text-left text-gray-500 4xl:text-3xl'>manasjagtap20@gmail.com</a>
        </div>
        <div className='w-full sm:w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-xl bg-white transition-all duration-300 ease-in-out shadow-2xl hover:shadow-purple-900'>
          <img className='w-[40px] h-[40px] my-0 mx-2' src={mobile} alt="mobile" />
          <a href="tel: +91 8169012896" className='text-sm text-left text-gray-500 4xl:text-3xl'>+91 8169012896</a>
        </div>
      </div>
      {!isFormSubmitted?
      <form ref={form} onSubmit={handleSubmit} className='flex-col my-4 mx-8 flex justify-center items-center'>
        <div className='w-full md:w-[80%] lg:w-[60%] my-3 mx-0 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out flex justify-center items-center shadow-2xl hover:shadow-purple-900'>
          <input type="text" className='w-full p-3 border-none rounded-lg bg-white outline-none text-sm text-left text-gray-500 4xl:text-3xl' placeholder='Your Name' name='name' required/>
        </div>
        <div className='w-full md:w-[80%] lg:w-[60%] my-3 mx-0 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out flex justify-center items-center shadow-2xl hover:shadow-purple-900'>
          <input type="email" className='w-full p-3 border-none rounded-lg bg-white outline-none text-sm text-left text-gray-500 4xl:text-3xl' placeholder='Your Email' name='email' required/>
        </div>
        <div className='w-full md:w-[80%] lg:w-[60%] my-3 mx-0 rounded-xl cursor-pointer bg-[#edf2f8] transition-all duration-300 ease-in-out flex justify-center items-center shadow-2xl hover:shadow-purple-900'>
          <textarea name="msg" placeholder="Your Message" className="w-full p-3 border-none rounded-lg bg-white outline-none h-[170px] text-sm text-left text-gray-500 4xl:text-3xl" cols="30" rows="10" required/>
        </div>
        <button type='submit' className="py-4 px-8 rounded-lg bg-purple-900 font-medium shadow-2xl hover:shadow-black transition-all duration-200 ease-in-out mt-8 outline-none text-white text-sm text-left 4xl:text-3xl">
          {loading?"Loading.....":"Send Message"}
        </button>
      </form>
      :
      <h2 className='sm:text-5xl font-extrabold text-center text-black 4xl:text-[4rem] text-[2rem]'>Thank you for getting in touch</h2>
      }
    </div>
  );
}

export default AppWrap(Footer,'contact');
