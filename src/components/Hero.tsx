
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      ref={heroRef}
    >
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="title-chip reveal reveal-from-bottom">A Humanitarian Initiative</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight reveal reveal-from-bottom">
              Empowering Lives Through <span className="text-gradient">Compassion</span>
            </h1>
            <p className="text-lg text-foundation-muted mt-6 max-w-2xl reveal reveal-from-bottom">
              Shiva Aradhya Foundation is dedicated to uplifting communities through education, 
              healthcare, and sustainable development initiatives across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal reveal-from-bottom">
              <Button 
                className="bg-foundation-accent hover:bg-foundation-accent/90 text-white font-medium px-8 py-6"
                size="lg"
              >
                Our Initiatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-foundation-dark/20 hover:bg-foundation-dark/5 text-foundation-dark font-medium px-8 py-6"
                size="lg"
              >
                Get Involved
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foundation-accent/5 blur-3xl"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl reveal reveal-from-right">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd59a93c5623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="Children in a classroom"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-24 pt-8 border-t border-foundation-dark/10 reveal reveal-from-bottom">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foundation-accent">10+</h3>
            <p className="text-foundation-muted mt-2">Years of Service</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foundation-accent">100+</h3>
            <p className="text-foundation-muted mt-2">Communities Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foundation-accent">50+</h3>
            <p className="text-foundation-muted mt-2">Active Volunteers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foundation-accent">5000+</h3>
            <p className="text-foundation-muted mt-2">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
