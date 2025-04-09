
import { CheckCircle2, Clock, Banknote, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Digital Approvals",
      description: "Get approved quickly with our streamlined digital application process."
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Transparent Pricing",
      description: "No hidden fees or surprises. We provide clear, upfront pricing."
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Personalized Advice",
      description: "Our advisors take the time to understand your unique needs."
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: "Licensed Canadian Advisors",
      description: "Work with experienced professionals who understand Canadian insurance."
    }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We go beyond selling policies. We build relationships and provide protection that grows with your family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="mb-4 text-accent">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
