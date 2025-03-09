
import { useEffect, useRef } from 'react';

const Mission = () => {
  const missionRef = useRef<HTMLDivElement>(null);

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

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="mission" 
      className="py-16 md:py-24 bg-gradient-to-b from-white to-foundation-light"
      ref={missionRef}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="title-chip mx-auto reveal reveal-from-bottom">Our Purpose</div>
          <h2 className="text-3xl md:text-4xl font-bold reveal reveal-from-bottom">Mission & Vision</h2>
          <div className="w-20 h-1 bg-foundation-accent mx-auto mt-6 reveal reveal-from-bottom"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-element rounded-xl p-8 shadow-lg reveal reveal-from-left">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-foundation-muted">
              To create sustainable and inclusive communities by providing access to quality education, 
              healthcare, and livelihood opportunities to underprivileged sections of society, ensuring 
              that everyone has the chance to live with dignity and reach their full potential.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foundation-accent/10 flex items-center justify-center">
                  <span className="text-foundation-accent font-bold">01</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Empower Through Education</h4>
                  <p className="text-foundation-muted mt-1">Providing quality education to underprivileged children</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foundation-accent/10 flex items-center justify-center">
                  <span className="text-foundation-accent font-bold">02</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Healthcare for All</h4>
                  <p className="text-foundation-muted mt-1">Making healthcare accessible to underserved communities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foundation-accent/10 flex items-center justify-center">
                  <span className="text-foundation-accent font-bold">03</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Sustainable Development</h4>
                  <p className="text-foundation-muted mt-1">Creating lasting positive change in communities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-element rounded-xl p-8 shadow-lg reveal reveal-from-right">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-foundation-muted">
              We envision a world where every individual has equal opportunities to grow, learn, and 
              thrive regardless of their socio-economic background. A society where compassion, 
              equality, and sustainability are the guiding principles for growth and development.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-foundation-accent/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foundation-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-medium">Education</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-foundation-accent/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foundation-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-medium">Healthcare</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-foundation-accent/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foundation-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="font-medium">Community</h4>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-foundation-accent/10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foundation-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                  </svg>
                </div>
                <h4 className="font-medium">Environment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
