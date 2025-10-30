import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop', alt: 'Community helping hands' },
  { src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d55?w=1200&h=600&fit=crop', alt: 'Hands together in unity' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop', alt: 'Charity event gathering' },
];

const Slideshow = () => {
  return (
    <div style={{ position: "relative", marginTop: "2rem" }}>
      <Slide
        easing="ease"
        duration={5000}      // 5 seconds per slide
        pauseOnHover={false}
        indicators={true}    // show dots
        arrows={true}        // navigation arrows
        infinite={true}      // loop slides
      >
        {slideImages.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              width: "100%",
              height: "500px",    // adjust as needed
              overflow: "hidden",
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "1rem",
            }}>
              <h1 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}>
                Empowering Lives Through Compassion
              </h1>
              <p style={{ fontSize: "1rem" }}>
                Join us in making a difference, one act of kindness at a time.
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
