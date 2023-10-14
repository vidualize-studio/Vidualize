import React from 'react';
import Image from 'next/image';


const NavBar = () => {
  return (
    <nav className=" pt-1 borger-heather text-xs md:text-base bg-black zabove w-full flex flex-col sm:flex sm:flex-col items-center lg:pb-1 sm:justify-between lg:flex-row">
      <div className="flex items-center mb-2 lg:mb-0  ">
        <a className=' flex items-center mr-8 mb-2 lg:mb-0' href='/'>
          <div className="relative ml-3">
            <Image className='py-1  rounded-lg' src="/cyan logo1.png" alt="Logo" width={70} height={70} />
          </div>
          <div className=" text-cyan  font-bold  text-3xl  my-special-div ">Vidualize</div>
        </a>




      </div>
      <div className=" lg:gap-1  lg:flex md:mb-0 mb-1 font-semibold lg:space-x-4 lg:mr-6 lg:items-center lg:space-y-0 space-x-4 flex text-heather">

        
        <a href="https://pk.linkedin.com/in/vidualize-studio-70ba61272" className=" hover:text-black transition  text-white duration-100 ease-in-out">
          <Image className='py-1 hover:scale-110' src="/linkedinicon1.svg" alt="Logo" width={32} height={32} />
        </a>

        <a href="https://www.facebook.com/vidualize.s" className="hover:text-black transition  text-white duration-100 ease-in-out ">
          <Image className='py-1 hover:scale-110  rounded-lg' src="/facebookicon.svg" alt="Logo" width={35} height={38} />
        </a>
        <a href="https://www.instagram.com/p/CsRKwMQArwJ" className="hover:text-black transition  text-white duration-100 ease-in-out">
          <Image className='py-1  rounded-lg hover:scale-110' src="/instagramicon.svg" alt="Logo" width={34} height={34} />
        </a>

      </div>
    </nav>
  );
};

export default NavBar;
