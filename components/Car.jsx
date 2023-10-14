'use client'
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import '../styles/cardtext.scss';



const FlipCard = ({ frontContent, backContent, thumbnail, scroll, setScroll }) => {
  const videoURL = [
    '/video/video1.mp4',
    '/video/video1.mp4',
    '/video/video1.mp4',
    '/video/video1.mp4',
    '/video/video1.mp4',
    // Add more video URLs as needed
  ];

  const [isFlipped, setIsFlipped] = useState(false);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    setScroll(!scroll);
  };

  return (
    <div className='flipCard flex flex-col mx-4 my-4 rounded-xl mt-10 '>
      <div className={`flipCardInner rounded-xl  items-center bg-black sm:bg-transparent`}>
        <div className={`flipCardFront flipCardFrontF rounded-xl flex-col-reverse `}>
          <div className='flex rounded-xl mb-10'>
            <img src={thumbnail} className='rounded-xl sm:mb-0 mb-20 xs:mb-12' />
          </div>
          <div className='font-medium my-special-div'>
            <h2 className='sm:text-2xl text-xl text-white'>{frontContent}</h2>
          </div>
        </div>
        <div className={`flipCardBack flex-col rounded-xl `}>
          <video className='mt-16 sm:rounded sm:mt-0 xs:mt-4 border-2 border-heather' id="videoPlayer" autoPlay muted loop>
            <source src={backContent} type="video/mp4" />
          </video>
          <div className='sm:absolute button-container flex sm:mb-0 mb-8'>
            <button className='border  px-2 rounded-md text-lg flex bg-heather border-cyan ' onClick={handleButtonClick}>Click for more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="-2 -4 25 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;
