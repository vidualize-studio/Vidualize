'use client'

import '../styles/carousel.css';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const VideoCarousel = ({ videoSrc }) => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // Track whether the carousel is being dragged

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Adjust the value to control the speed
    }
  }, []);

  useEffect(() => {
    const video = document.getElementById('videoPlayer');

    const handleVideoEnded = () => {
      video.currentTime = 0; // Reset the video to the beginning
      video.play();
    };

    if (video) {
      video.muted = true; // Mute the video if needed
      video.playsInline = true;
      video.addEventListener('ended', handleVideoEnded);
      video.play();
    }
  });

  const SwipeHandIcon = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="31" stroke="black" strokeWidth="2" />
      <path
        d="M20 32H44"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 40L48 32L40 24"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24L16 32L24 40"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 48C35 48 36.5 46 36.5 43.5C36.5 41 35 40 33.5 40C32 40 30.5 41 30.5 43.5C30.5 46 32 48 32 48Z"
        fill="black"
      />
      <path
        d="M32 36V28"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
  
  

  // Handle the video click to center it and play
  const handleVideoClick = (index) => {
    // Check if the carousel is being dragged; if not, open the video
    if (!isDragging) {
      setSelectedVideoIndex(index);
    }
  };

  return (
    <div className=' lg:flex hidden my-2'>
      
      <motion.div className='carousel mx-24'>

        <motion.div
          className='inner-carousel  '
          drag='x'
          dragConstraints={{ right: 0, left: -650 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {videoSrc.map((src, index) => (
            <motion.div
              className='item'
              key={index}
              onClick={() => handleVideoClick(index)}
            >

              <video className='border-2 border-heather hover:border-black' id={`videoPlayer${index}`} ref={videoRef} autoPlay muted loop>
                <source src={src} type='video/mp4' autoPlay muted />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Arrow for the Carousel */}
      <div className="relative top-60 right-10 transform ">
        <Image width={110} height={110} src='/swipe-right.svg'/>
      </div>

      {/* Render video modal if a video is clicked */}
      {selectedVideoIndex !== null && (
        <div className='video-modal flex w-screen ' onClick={() => setSelectedVideoIndex(null)}>
          <div className='video-player hover:border-heather rounded-lg border-4 border-black flex'>
            <video
              controls
              autoPlay
              src={videoSrc[selectedVideoIndex]}
              type='video/mp4'
              className=' flex-1'
            />
          </div>
          <button className='' onClick={() => setSelectedVideoIndex(null)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="cyan" // Set the icon color to cyan
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};



export default VideoCarousel










//https://www.youtube.com/watch?v=W0bEL93tt4k    (reference URL)