import React from 'react';
import Image from 'next/image';

const clients = [
  { name: 'Careem', logoSrc: '/workedwithlogos/careem.svg', link: 'https://www.careem.com/' },
  { name: 'Islam', logoSrc: '/workedwithlogos/islam_1.webp', link: 'https://www.theguiderapp.com/' },
  { name: 'launchgood', logoSrc: '/workedwithlogos/launchgood.webp', link: 'https://www.launchgood.com/' },
  { name: 'openai', logoSrc: '/workedwithlogos/openai_1.webp', link: 'https://example.com/openai' },
  { name: 'saqibqureshi', logoSrc: '/workedwithlogos/saqibqureshi.webp', link: 'https://www.linkedin.com/in/saqib-qureshi/' },
  { name: 'numad', logoSrc: '/workedwithlogos/numad_1.webp', link: 'https://example.com/numad' },
  { name: 'whenshifthappens', logoSrc: '/workedwithlogos/whentheshifthappens.webp', link: 'https://podcasts.apple.com/us/podcast/when-shift-happens-podcast/id1596083462' },
  // Add more clients here
];

const WeHaveWorkedWith = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center my-special-div">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-12">
          We Have Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
          <div className="flex justify-center items-center">
            <a href={clients[0].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[0].logoSrc}
                alt={clients[0].name}
                width={130}  
                height={130}
                className="h-12 sm:h-20 md:h-24 rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[1].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[1].logoSrc}
                alt={clients[1].name}
                width={87}  
                height={87}
                className="h-10 sm:h-16 md:h-20 rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[2].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[2].logoSrc}
                alt={clients[2].name}
                width={130}  
                height={130}
                className="h-14 sm:h-20 md:h-28 rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[3].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[3].logoSrc}
                alt={clients[3].name}
                width={87}  
                height={87}
                className="h-10 sm:h-16 md:h-20 rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[4].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[4].logoSrc}
                alt={clients[4].name}
                width={150}  
                height={150}
                className="h-14 sm:h-20 md:h-28 rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[5].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[5].logoSrc}
                alt={clients[5].name}
                width={140}  
                height={140}
                className="h-16 sm:h-24 md:h-28 rounded-full"
              />
            </a>
          </div>
          <div className=" justify-center items-center hidden md:flex">
            <a href={clients[6].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[6].logoSrc}
                alt={clients[6].name}
                width={130}  
                height={130}
                className="h-14 sm:h-20 md:h-24 "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHaveWorkedWith;
