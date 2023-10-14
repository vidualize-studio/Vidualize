import React from 'react';
import '../styles/tagline.css'

const Tagline = () => {
  return (
   <div className='text-white flex flex-col md:mx-10  mx-5 '>
      <div className=' text-center'>
        <span className='mx-1  mt-8 md:text-3xl '>Discover</span>
        <span className='mx-1 md:text-3xl'>the</span>
        <span className='mx-1 md:text-3xl'>art</span>
        <span className='mx-1 md:text-3xl'>of</span>
        <span className='mx-1 md:text-3xl'>visual</span>
        <span className='mx-1 md:text-3xl'>storytelling</span>
        <span className='mx-1 md:text-3xl '>at</span>
        <span className='mx-1 md:text-3xl'>Vidualize.</span>
        
        <span className='mx-1 md:text-3xl'>We </span>
        <span className='mx-1 md:text-3xl'>embark</span>
        <span className='mx-1 md:text-3xl '>on</span>
        <span className='mx-1 md:text-3xl'>a</span>
        <span className='mx-1 md:text-3xl'>journey</span>
        <span className='mx-1 md:text-3xl'>where</span>
        <span className='mx-1 md:text-3xl text-heather'>creativity</span>
        <span className='mx-1 md:text-3xl'>knows</span>
        <span className='mx-1 md:text-3xl'>no</span>
        <span className='mx-1 md:text-3xl'>bounds.</span>
        <div className=' my-6'>
        <span className='mx-1 md:text-3xl '>Transforming</span>
        <span className='mx-1 md:text-3xl text-heather'>ordinary</span>
        <span className='mx-1 md:text-3xl'>into</span>
        <span className='mx-1  md:text-3xl text-cyan'>extraordinary</span>
        <span className='mx-1 md:text-3xl'>stories.</span>
        </div>
      </div>
    </div>
  );
};

export default Tagline;