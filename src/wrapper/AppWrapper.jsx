import React from 'react';
import NavigationDots from '../components/NavigationDots';
import SocialMedia from '../components/SocialMedia';

const AppWrapper = (Component,idName,classNames)=>function HOC() {
  return (
    <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
      <SocialMedia/>
      <div className='flex-1 w-full flex-col flex justify-center items-center'>
        <Component/>
      </div>
      <NavigationDots active={idName}/>
    </div>
  );
}

export default AppWrapper;
