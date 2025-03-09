
import { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('reveal-visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Children at School",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Community Support",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1731&q=80",
      alt: "Healthcare Camp",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1472746729193-36ad213ac4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80",
      alt: "Volunteer Work",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Educational Activities",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      alt: "Community Gathering",
    },
  ];

  return (
    <section 
      id="gallery" 
      className="py-16 md:py-24 bg-gradient-to-b from-foundation-light to-white"
      ref={galleryRef}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="title-chip mx-auto reveal reveal-from-bottom">Our Impact</div>
          <h2 className="text-3xl md:text-4xl font-bold reveal reveal-from-bottom">Gallery</h2>
          <p className="text-foundation-muted max-w-3xl mx-auto mt-4 reveal reveal-from-bottom">
            A glimpse into our journey of creating positive change and transforming lives.
          </p>
          <div className="w-20 h-1 bg-foundation-accent mx-auto mt-6 reveal reveal-from-bottom"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal reveal-from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveImage(image.src)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foundation-dark/0 hover:bg-foundation-dark/20 transition-colors duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-foundation-dark/90 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-[90vw] animate-fade-in">
            <button 
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setActiveImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={activeImage} 
              alt="Gallery image fullscreen"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
