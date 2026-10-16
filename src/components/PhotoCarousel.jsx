// ============================================
// IMPORTS
// ============================================

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// ============================================
// CAROUSEL PHOTOS
// Add as many photos as you want here
// ============================================

const photos = [
  {
    src: import.meta.env.BASE_URL + 'projects/deck-photo.jpeg',
    alt: 'Completed kitchen carpentry project',
  },
  {
    src: import.meta.env.BASE_URL + 'projects/deck1.jpeg',
    alt: 'Detailed finish carpentry work',
  },
  {
    src: import.meta.env.BASE_URL + 'projects/br1.jpeg',
    alt: 'Completed home renovation project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck2.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/br2.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck3.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/br3.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck4.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/br4.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck5.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck6.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck7.jpeg',
    alt: 'Completed kitchen carpentry project',
  },

  {
    src: import.meta.env.BASE_URL + 'projects/deck-photo.jpeg',
    alt: 'Completed kitchen carpentry project',
  },];

  // Add more photos below this line
  // {
  //   src: import.meta.env.BASE_URL + 'projects/another-photo.jpeg',
  //   alt: 'Description of the project',
  // },



// ============================================
// PHOTO CAROUSEL COMPONENT
// ============================================

function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Duplicate the first photo at the end for seamless looping
  const slides = [...photos, photos[0]];


  // ==========================================
  // NAVIGATION
  // ==========================================

  function nextPhoto() {
    setCurrent((index) => index + 1);
  }

  function previousPhoto() {
    if (current === 0) {
      // Jump to the duplicate of the last photo
      setTransitionEnabled(false);
      setCurrent(photos.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setCurrent(photos.length - 1);
        });
      });

      return;
    }

    setCurrent((index) => index - 1);
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
      setCurrent((index) => index + 1);
    }, 4500);

    return () => clearInterval(timer);
  }, [paused]);


  // ==========================================
  // HANDLE THE INFINITE LOOP
  // ==========================================

  function handleTransitionEnd() {
    if (current === photos.length) {
      // Reached the duplicate first photo.
      // Jump back to the real first photo without animation.
      setTransitionEnabled(false);
      setCurrent(0);
    }
  }

  useEffect(() => {
    if (!transitionEnabled) {
      // Force the browser to recognize the transition change
      const frame = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [transitionEnabled]);


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
      <div className="carousel-image-wrap">

        {/* Sliding track */}
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transitionEnabled
              ? 'transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)'
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((photo, index) => (
            <img
              key={`${photo.src}-${index}`}
              src={photo.src}
              alt={index === photos.length ? '' : photo.alt}
              className="carousel-image"
              aria-hidden={index === photos.length}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoCarousel;
