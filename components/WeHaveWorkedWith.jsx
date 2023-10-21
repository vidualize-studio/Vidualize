import React from 'react';
import Image from 'next/image';
import { useState,useEffect } from 'react';

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
  const [imageSize, setImageSize] = useState({ width: 130, height: 130 });
  const [imageSize1, setImageSize1] = useState({ width: 82, height: 82 });
  const [imageSize2, setImageSize2] = useState({ width: 218, height: 218 });
  

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setImageSize({ width: 70, height: 70 });
        setImageSize1({ width: 40, height: 40 });
        setImageSize2({ width: 120, height: 120 });
      } else {
        setImageSize({ width: 130, height: 130 });
        setImageSize1({ width: 82, height: 82 });
        setImageSize2({ width: 218, height: 218 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="containe mx-auto text-center my-special-div">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-12">
          We Have Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          <div className="flex justify-center items-center">
            <a href={clients[0].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[0].logoSrc}
                alt={clients[0].name}
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[1].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[1].logoSrc}
                alt={clients[1].name}
                width={imageSize1.width}
                height={imageSize1.height}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[2].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[2].logoSrc}
                alt={clients[2].name}
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[3].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[3].logoSrc}
                alt={clients[3].name}
                width={imageSize1.width}
                height={imageSize1.height}
                className="rounded-full"
              />
            </a>
          </div>
          
          <div className="flex justify-center items-center">
            <a href={clients[5].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[5].logoSrc}
                alt={clients[5].name}
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="justify-center items-center hidden md:flex">
            <a href={clients[6].link} target="_blank" rel="noopener noreferrer">
              <Image
                src={clients[6].logoSrc}
                alt={clients[6].name}
                width={imageSize.width}
                height={imageSize.height}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href={clients[4].link} target="_blank" rel="noopener noreferrer">
              <img
                src={clients[4].logoSrc}
                alt={clients[4].name}
                className="h-14 sm:h-20 md:h-28 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHaveWorkedWith;