
import { useEffect, useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetNumber = 1000;
    const duration = 2000; // 2 seconds
    const step = Math.ceil(targetNumber / (duration / 16)); // 16ms per frame (approx 60fps)
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setCount(prev => {
              const nextCount = prev + step;
              if (nextCount >= targetNumber) {
                clearInterval(interval);
                return targetNumber;
              }
              return nextCount;
            });
          }, 16);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('counter-section');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-primary/10 absolute inset-0 rounded-xl -rotate-3 transform"></div>
            <img 
              src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Insurance advisor with client" 
              className="rounded-xl relative z-10 shadow-lg"
            />
          </div>
          
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg mb-8">
              At Walker Insurance, we've been protecting Canadian families for over 15 years. 
              We believe insurance should be accessible, transparent, and tailored to your unique needs. 
              Our team of licensed advisors works with you to find coverage that protects what matters most, 
              at rates that respect your budget.
            </p>
            
            {/* Counter Section */}
            <div id="counter-section" className="bg-primary text-white p-8 rounded-xl shadow-md">
              <div className="text-center">
                <p className="text-xl mb-2">Trusted by</p>
                <div className="text-4xl md:text-5xl font-bold mb-2">{count}+</div>
                <p className="text-xl">Canadian Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
