import React from 'react'
import '../styles/maintext.css'
import Tagline from '../components/Tagline'
import Image from 'next/image';

const MainText = () => {

  

  return (
    <div className=' flex md:h-screen flex-col bg-black'>
      {/* Fixed Navigation Area */}
      <div className="context  md:mt-48 mt-5 flex flex-col-reverse">
        <Tagline />
        <div className="md:mt-4 mt-12 text-5xl xs:text-7xl md:text-9xl animate-charcter mx-10 md:mx-24  md:justify-end justify-center my-special-div ">
          <p className="  ">Vidualize</p>

        </div>

      </div>

      <div className=" flex justify-center zaxis mx-2 sm:mb-0 mb-10">
        <button className="hover:animate-none animate-pulse sm:text-3xl hover:font-bold  hover:text-cyan text-white border-heather xl:my-20 lg:my-10 sm:w-96 sm:h-16 xs:w-72 xs:h-12 xs:text-2xl  w-60 h-8 text-xl hover:border-white border-2 mx-2 rounded-xl hover:bg-black ">
          <a href='/pages/CalendlyButton' className=''>
            <h1 className=' ml-1 '> BOOK A FREE CALL</h1>
    
            
          </a>
        </button>
      </div>

      {/* Section with Floating Logos */}
      <div class="area">
        <ul class="circles">
          <li><img src="/cyan logo.png" alt='Logo 1' /></li>
          <li><img src="/cyan logo.png" alt='Logo 2' /></li>
          <li><img src="/cyan logo.png" alt='Logo 3' /></li>
          <li><img src="/cyan logo.png" alt='Logo 4' /></li>
        </ul>
      </div>
    </div>
  )
}

export default MainText
