import React, { FC } from "react";

type Props = {
  videoId: string; // Vimeo video ID
};

const CoursePlayer: FC<Props> = ({ videoId }) => {
  console.log(videoId + "nvcnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnkrfndnsn");
  return (
    <div
      style={{
        position: "relative",
        padding: "56.25% 0 0 0", // Maintains a 16:9 aspect ratio
      }}>
      <div>
        <div className='relative w-full' style={{ paddingTop: "56.25%" }}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture; clipboard-write'
            className='absolute top-0 left-0 w-full h-full'
            title='Vimeo Video Player'></iframe>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;
