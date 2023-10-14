'use client'

import React, { useState, useEffect, useRef } from 'react';

const LongformCarousel = ({ videoURLs, tittle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(new Array(videoURLs.length).fill(false));
  const [showControls, setShowControls] = useState(true);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const deltaX = touchEndX.current - touchStartX.current;

      if (deltaX > 50) {
        goToPreviousImage(); // Swipe right, go to the previous image
      } else if (deltaX < -50) {
        goToNextImage(); // Swipe left, go to the next image
      }

      touchStartX.current = null;
      touchEndX.current = null;
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (index === currentImageIndex) {
        if (isPlaying[index]) {
          videoRef.play();
        } else {
          videoRef.pause();
        }
      } else {
        videoRef.pause();
      }
    });

    // Add event listeners for touch events within the video carousel container
    const carouselContainer = document.getElementById('longformB-carousel-container');
    carouselContainer.addEventListener('touchstart', handleTouchStart);
    carouselContainer.addEventListener('touchmove', handleTouchMove);
    carouselContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      // Remove event listeners when component unmounts
      carouselContainer.removeEventListener('touchstart', handleTouchStart);
      carouselContainer.removeEventListener('touchmove', handleTouchMove);
      carouselContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentImageIndex, isPlaying]);

  const togglePlayPause = (index) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);
    setShowControls(false); // Hide controls when video is clicked
    if (newIsPlaying[index]) {
      videoRefs.current[index].play();
    } else {
      videoRefs.current[index].pause();
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % videoURLs.length);
    setShowControls(true); // Show controls when changing videos
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + videoURLs.length) % videoURLs.length
    );
    setShowControls(true); // Show controls when changing videos
  };

  return (
    <div id="longformB-carousel-container" className="bg-black pt-24 lg:hidden" data-carousel="static">
      <div className='  font-medium my-special-div flex justify-center pb- '>
        <h2 className='md:text-4xl text-2xl  text-white'>{tittle} </h2>
      </div>
      <div className="relative">
        <div className="flex flex-row h-fit justify-center ">
          {videoURLs.map((url, index) => (
            <div
              key={index}
              className={`duration-200 ease-linear flex flex-row justify-center mx-2 my-2 ${index === currentImageIndex ? 'block' : 'hidden'
                }`}
              data-carousel-item={index === currentImageIndex ? 'active' : ''}
            >
              <video
                className={`rounded-lg xl:h-screen ${index === currentImageIndex ? ' ' : 'hidden'
                  }`}
                ref={(el) => (videoRefs.current[index] = el)}
                onClick={() => togglePlayPause(index)}
              >
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Play/Pause Button */}
              {showControls && (
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
                  style={{
                    left: index === currentImageIndex ? '10px' : '-100px', // Adjust left position
                    right: index === currentImageIndex ? '-100px' : '10px', // Adjust right position
                  }}
                  onClick={() => togglePlayPause(index)}
                >
                  {/* Your play/pause button content */}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="absolute left-0  top-1/2 transform -translate-y-1/2 cursor-pointer md:ml-44   rounded-lg" onClick={goToPreviousImage}>
          <button
            type="button"
            className="xs:my-52 my-10"
            data-carousel-prev
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <path fill="cyan" d="M14 7l-5 5 5 5V7z" />
              <path fill="none" d="M24 0v24H0V0h24z" />
            </svg>
          </button>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer md:mr-44  md:bg-transparent     rounded-lg" onClick={goToNextImage}>
          <button
            type="button"
            className="xs:my-52 my-10"
            data-carousel-next
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
              <path fill="cyan" d="M10 7l5 5-5 5V7z" />
              <path fill="none" d="M0 0h24v24H0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full mb-2"> {/* Added margin top */}
        {videoURLs.map((_, index) => (
          <div
            key={index}
            className={`mx-0.5  rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-blue-500 w-2 h-2 md:w-3 md:h-3 mx-1' : 'w-1 h-1 md:w-2 md:h-2 bg-gray-300'
              }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LongformCarousel;
