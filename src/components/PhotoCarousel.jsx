// ============================================
// IMPORTS
// ============================================

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// ============================================
// CAROUSEL PHOTOS
// ============================================

const photos = [
  {
    src: import.meta.env.BASE_URL + 'projects/deck-photo.jpeg',
    alt: 'Completed kitchen carpentry project',
  },
  {
    src: import.meta.env.BASE_URL + 'projects/hawg.jpeg',
    alt: 'Detailed finish carpentry work',
  },
  {
    src: import.meta.env.BASE_URL + 'projects/babies.jpeg',
    alt: 'Completed home renovation project',
  },
];


// ============================================
// PHOTO CAROUSEL COMPONENT
// ============================================

function PhotoCarousel() {

  // Current photo index
  const [current, setCurrent] = useState(0);

  // Pause automatic rotation when interacting
  const [paused, setPaused] = useState(false);


  // ==========================================
  // NAVIGATION
  // ==========================================

  function previousPhoto() {
    setCurrent((index) => (index - 1 + photos.length) % photos.length);
  }

  function nextPhoto() {
    setCurrent((index) => (index + 1) % photos.length);
  }


  // ==========================================
  // AUTOMATIC ROTATION
  // ==========================================

  useEffect(() => {
    if (
      paused ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((index) => (index + 1) % photos.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused]);


  // ==========================================
  // CAROUSEL DISPLAY
  // ==========================================

  return (
    <div
      className="photo-carousel"
      aria-label="Examples of our carpentry work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >

      {/* Sliding image track */}
      <div className="carousel-image-wrap">

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >

          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="carousel-image"
              loading="eager"
            />
          ))}

        </div>


        {/* Previous and next buttons */}
        <div className="carousel-controls">

          <button
            type="button"
            className="carousel-arrow"
            onClick={previousPhoto}
            aria-label="Previous photo"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            className="carousel-arrow"
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default PhotoCarousel;