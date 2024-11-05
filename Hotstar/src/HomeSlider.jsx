import React, { useState, useRef } from 'react'; 
import './HomeSlider.css';
import sita from './assets/sita.jpeg';
import skanda from './assets/skanda.jpeg';
import stree2 from './assets/stree2.jpeg';

const HomeSlider = () => {
  const videos = [
    {
      id: 'VIDEO_ID_1',
      title: 'Lubber Pandhu',
      description: 'Gully cricket icon Gethu’s reign is at risk with a rising star in town...',
      thumbnail: skanda,
      videoSrc: 'https://www.youtube.com/embed/GqBsBTQ-Fh0',
    },
    {
      id: 'VIDEO_ID_2',
      title: 'Asuran',
      description: 'Description of the second video...',
      thumbnail: sita,
      videoSrc: 'https://www.youtube.com/embed/7ykeq72RXK8',
    },
    {
      id: 'VIDEO_ID_3',
      title: 'Mr. Majnu',
      description: 'Description of the third video...',
      thumbnail: stree2,
      videoSrc: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleThumbnailClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const handleVideoClick = () => {
    const iframe = videoRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="home-slider">
      <div className="video-section" onClick={handleVideoClick}>
        <iframe
          ref={videoRef}
          src={`${videos[currentVideoIndex].videoSrc}?autoplay=1&mute=1&controls=1`}
          title={videos[currentVideoIndex].title}
          width="100%"
          height="100%"
          allow="autoplay; fullscreen"
        ></iframe>
        <div className="video-info">
          <h2>{videos[currentVideoIndex].title}</h2>
          <p>{videos[currentVideoIndex].description}</p>
        </div>
      </div>

      <div className="thumbnail-strip">
        {videos.map((video, index) => (
          <img
            key={video.id}
            src={video.thumbnail}
            alt={video.title}
            className={`thumbnail ${index === currentVideoIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
