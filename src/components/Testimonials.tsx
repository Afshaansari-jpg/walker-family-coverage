
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      location: "Vancouver, BC",
      quote: "Walker Insurance made finding the right coverage for my family so simple. Their team took the time to explain everything and found us a great rate.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    {
      name: "Michael Chen",
      location: "Toronto, ON",
      quote: "As a new parent, I wanted to make sure my family was protected. The advisors at Walker helped me understand my options and set up a plan that gives us peace of mind.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emma Wilson",
      location: "Calgary, AB",
      quote: "After comparing several options, Walker Insurance offered the most comprehensive coverage at the best value. Their customer service is exceptional.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      name: "David Patel",
      location: "Montreal, QC",
      quote: "I appreciate how transparent they were throughout the entire process. No hidden fees, clear explanations, and genuine care for my family's needs.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;
  const maxIndex = testimonials.length - visibleTestimonials;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-white to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear It from Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to have helped thousands of Canadian families find the right insurance coverage.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Slider */}
          <div className="hidden md:block">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <div className="testimonial-card h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground flex-grow">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Slider - Single item visible */}
          <div className="md:hidden">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonials[currentIndex].quote}</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
