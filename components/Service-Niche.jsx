import React from 'react';
import Image from 'next/image';

const ServiceNiche = () => {
  return (
    <div className=" bg-cyan-100 mx-4 py-4  pb-6">
      <div className="container mx-auto text-center">
        <div className='my-special-div '>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8">
          Our Services
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 ">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-xl p-4 hover:shadow-2xl hover:scale-105 transition duration-300">
            <div className="flex justify-center">
              <Image src='/produc.svg' alt="Production Assistance" height={80} width={80} />
            </div>
            <h3 className="md:text-2xl font-semibold mt-4">Production Assistance</h3>
            <ul className="text-gray-700 mt-2 md:text-sm text-xs">
              
              <li>Elevate your videos with stunning visuals.</li>
              <li>Seamless editing for flawless content.</li>
              <li>Tailored support for social media success.</li>
              
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 hover:scale-105">
            <div className="flex justify-center">
              <Image src='/edit.svg' alt="Premium Editing" height={80} width={80} />
            </div>
            <h3 className="md:text-2xl  font-semibold mt-4 md:mt-8 lg:mt-4">Premium Editing</h3>
            <ul className="text-gray-700 mt-2 md:text-sm text-xs">
              
              <li>Transform content with artistic editing.</li>
              <li>Add impressive effects and enhancements.</li>
              <li>Editing that matches your unique style.</li>
              
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 hover:scale-105 ">
            <div className="flex justify-center mt-2  ">
              <Image src='/support.svg' alt="Professional Support" height={80} width={70} />
            </div>
            <h3 className="md:text-2xl font-semibold mt-4 sm:mt-6 md:mt-4">Professional Support</h3>
            <ul className="text-gray-700 mt-2 md:text-sm text-xs">
              
              <li>Expert insights for content creators.</li>
              <li>Resolve issues with professional help.</li>
              <li>Support whenever you need it.</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNiche;
