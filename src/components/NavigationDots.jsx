import React from 'react';

function NavigationDots({ active }) {
    return (
        <div className='hidden sm:flex justify-center items-center flex-col p-4'>
            {['home', 'about', 'skills', 'work', 'testimonials', 'contact'].map((item, index) => (
                <a onClick={() => setToggle(false)} className='w-[10px] h-[10px] rounded-[50%] bg-[#cbcbcb] m-2 transition-all ease-in-out duration-200 hover:bg-[#313bac] 4xl:w-[20px] 4xl:h-[20px]' style={active===item ? {backgroundColor:'#313bac'}:{}} href={`#${item}`} key={item+index}/>
            ))}
        </div>
    );
}

export default NavigationDots;
