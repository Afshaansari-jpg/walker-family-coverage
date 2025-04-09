
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, insuranceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted!",
      description: "A member of our team will contact you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: ""
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Started.</h2>
            <p className="text-lg mb-8 text-white/90">
              Ready to protect what matters most? Our team of licensed advisors is here to help you find the perfect coverage for your needs and budget.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-medium text-lg">Email Us</h3>
                  <p className="text-white/80">info@walkerinsurance.ca</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-medium text-lg">Call Us</h3>
                  <p className="text-white/80">1-800-555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-4 h-6 w-6 text-accent" />
                <div>
                  <h3 className="font-medium text-lg">Business Hours</h3>
                  <p className="text-white/80">Monday - Friday: 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
              />
              
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
              />
              
              <Input
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/20 border-white/30 placeholder:text-white/60 text-white"
              />
              
              <Select onValueChange={handleSelectChange} value={formData.insuranceType}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white">
                  <SelectValue placeholder="Type of Insurance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term-life">Term Life</SelectItem>
                  <SelectItem value="critical-illness">Critical Illness</SelectItem>
                  <SelectItem value="health-dental">Health & Dental</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              
              <Textarea
                name="message"
                placeholder="Tell us about your insurance needs"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/20 border-white/30 placeholder:text-white/60 text-white min-h-[120px]"
              />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
                >
                  <Send className="mr-2 h-4 w-4" /> Request a Quote
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="border-white/40 text-white hover:bg-white/20 w-full sm:w-auto"
                >
                  <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
