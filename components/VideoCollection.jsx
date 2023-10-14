'use client '
import React from 'react'
import VideoCarousel from '../components/VideoCarousel'

const VideoCollection = ({videoURL,title}) => {
  return (
    <div>
         <div className='justify-center lg:flex hidden mt-20 my-special-div '>
        <h className='text-black text-4xl '>{title}</h>
        </div>
        <div className=' shadow-xl'>
        <VideoCarousel videoSrc={videoURL} />
        </div>

{/*         
        <div className='justify-center md:flex hidden mt-24 my-special-div '>
        <h1 className='text-black text-4xl'>Podcast and Trailers Collection</h1>
        </div>
        <div className=' shadow-xl'>
        <VideoCarousel videoSrc={videoURL} />
        </div>

        <div className='justify-center md:flex hidden mt-24 my-special-div '>
        <h1 className='text-black text-4xl'>Long Form Collection</h1>
        </div>
        <div className=' shadow-xl'>
        <VideoCarousel videoSrc={videoURL} />
        </div> */}
    </div>
  )
}

export default VideoCollection