'use client'
import {client} from '@/app/studio/lib/sanityClient'
export const getVideoData = async () => {
  const res = await client.fetch(`*[_type == "video_schema"]{
    Description,
    Homepagevideo,
    Video {
      asset {
        _ref
      }
    }
  }`);

  // Create asset URLs for each video
  const videosWithUrls = res.map((video) => ({
    Description: video.Description,
    Homepagevideo: video.Homepagevideo,
    videoURL: video.Video.asset?._ref
      ? video.Video.asset._ref.replace(/^file-|-mp4$/g, '')
      : null,
  }));

  // Extract and return an array of video URLs
  const videoURLs = videosWithUrls.map((video) => video.videoURL).filter(Boolean);
  return videoURLs;
};


/* videoURL:video.Video.asset?._ref
? `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${video.Video.asset._ref}.mp4`
: null, // Create the video URL using the _ref field
})); */






//https://cdn.sanity.io/files/r9425prr/production/0a79498bd1d2c66ce294be710cedd02913014bd2.mp4