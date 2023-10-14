import React from 'react';
import Image from 'next/image';

const AboutUssm = () => {
  return (
    <div className="   py-8 md:py-16 mt-10 mb-10">
      <div className="container mx-auto text-center">
        <div className='my-special-div'>
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-12 text-black">
          Meet Our Team
        </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-24 h-24 md:w-40 md:h-40 border-4 border-cyan hover:border-teal">
              <Image src="/fur.png" alt="Furqan Khan" width={160} height={160} />
            </div>
            <h2 className="text-lg md:text-2xl font-semibold mt-4 text-black ">Furqan Khan</h2>
            <h3 className='text-xs mt-1 mb-2 italic'>Head of Production (Co-Founder)</h3>
            <p className="text-gray-700 mt-2 md:text-sm text-xs">
              Furqan is a professional content creator and editor with 7+ years of experience delivering high-quality content and helping grow the social media following of top brands and creators.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-24 h-24 md:w-40 md:h-40 border-4 border-cyan hover:border-teal">
              <Image src="/abdullah1.png" alt="Abdullah Khan" width={160} height={160} />
            </div>
            <h2 className="text-lg md:text-2xl font-semibold mt-4 text-black">Abdullah Kashif</h2>
            <h3 className='text-xs mt-1 mb-2 italic'>Head of Editing (Co-Founder)</h3>
            <p className="text-gray-700 mt-2 md:text-sm text-xs">
              Abdullah is a professional video editor with 9+ years of experience editing engaging social media content for high-level clients such as Zaid El-Omar, Launch Good, and Rhyad Muslim.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="rounded-full overflow-hidden mx-auto w-24 h-24 md:w-40 md:h-40 border-4 border-cyan hover:border-teal">
              <Image src="/saif1.png" alt="Saif" width={160} height={160} />
            </div>
            <h2 className="text-lg md:text-2xl font-semibold mt-4 text-black">Saif</h2>
            <h3 className='text-xs mt-1 mb-2 italic'>Senior Board Member</h3>
            <p className="text-gray-700 mt-2 md:text-sm text-xs">
              Saif is an entrepreneur and brand advisor who helps business executives brand themselves better and change the world. He is the Co-Founder and Director at M.I.N and Creed & Culture.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default AboutUssm;
