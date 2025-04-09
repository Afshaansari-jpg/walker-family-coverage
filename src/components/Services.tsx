
import { Heart, Activity, Smile } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-12 w-12 text-accent" />,
      title: "Term Life",
      description: "Protect your family's financial future with affordable term life insurance tailored to your needs and budget."
    },
    {
      icon: <Activity className="h-12 w-12 text-accent" />,
      title: "Critical Illness",
      description: "Financial support when you need it most to help cover costs during recovery from critical illness."
    },
    {
      icon: <Smile className="h-12 w-12 text-accent" />,
      title: "Health & Dental",
      description: "Comprehensive coverage for healthcare needs not covered by provincial plans, including dental and vision care."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Coverage That Fits You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Tailored insurance solutions designed to protect what matters most to you and your family.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card flex flex-col items-center text-center"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="mb-6 p-4 bg-primary/5 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
