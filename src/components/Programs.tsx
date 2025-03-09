
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programsRef = useRef<HTMLDivElement>(null);

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

    if (programsRef.current) {
      observer.observe(programsRef.current);
    }

    return () => {
      if (programsRef.current) {
        observer.unobserve(programsRef.current);
      }
    };
  }, []);

  const programs = [
    {
      id: 1,
      title: "Education Initiatives",
      description: "Providing quality education and learning resources to underprivileged children to help them build a better future.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80",
    },
    {
      id: 2,
      title: "Healthcare Programs",
      description: "Organizing health camps and providing medical assistance to communities with limited access to healthcare facilities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 3,
      title: "Community Development",
      description: "Working with local communities to identify and address their specific needs through sustainable development programs.",
      image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <section 
      id="programs" 
      className="py-16 md:py-24"
      ref={programsRef}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="title-chip mx-auto reveal reveal-from-bottom">What We Do</div>
          <h2 className="text-3xl md:text-4xl font-bold reveal reveal-from-bottom">Our Programs</h2>
          <p className="text-foundation-muted max-w-3xl mx-auto mt-4 reveal reveal-from-bottom">
            We work across various domains to create meaningful and lasting change in the lives of those who need it the most.
          </p>
          <div className="w-20 h-1 bg-foundation-accent mx-auto mt-6 reveal reveal-from-bottom"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="backdrop-blur-element rounded-xl overflow-hidden shadow-lg reveal reveal-from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover image-hover-zoom"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-foundation-muted">{program.description}</p>
                <Button 
                  variant="ghost" 
                  className="mt-4 text-foundation-accent hover:text-foundation-accent/90 hover:bg-foundation-accent/5 p-0"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal reveal-from-bottom">
          <Button 
            className="bg-foundation-accent hover:bg-foundation-accent/90 text-white font-medium px-8"
            size="lg"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
