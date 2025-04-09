
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Heart, Shield, Star, Smile, Clock, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')" }}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Insurance That Understands Your Life.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Affordable, dependable coverage — made for Canadians.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="text-lg px-8 py-6">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              <Calendar className="mr-2 h-5 w-5" /> Book a Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Choose the Coverage That Fits You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Term Life */}
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 h-full">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <Shield className="h-24 w-24 text-blue-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-blue-500 mr-2">💙</span> Term Life
                </CardTitle>
                <CardDescription className="text-base">
                  Protect your family's financial future with flexible coverage options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our term life insurance provides peace of mind knowing your loved ones will be taken care of financially.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Critical Illness */}
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 h-full">
              <div className="h-48 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <Heart className="h-24 w-24 text-red-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-red-500 mr-2">💓</span> Critical Illness
                </CardTitle>
                <CardDescription className="text-base">
                  Financial support when you need to focus on recovery.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Get coverage for serious health conditions with a lump-sum payment to use however you need.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Health & Dental */}
            <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 h-full">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <Smile className="h-24 w-24 text-green-500" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="text-green-500 mr-2">🦷</span> Health & Dental
                </CardTitle>
                <CardDescription className="text-base">
                  Comprehensive coverage for your day-to-day health needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Fill the gaps in provincial healthcare with plans tailored to your specific needs.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-cover bg-center rounded-lg shadow-xl" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')" }}>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg mb-6">
                Walker Insurance is dedicated to protecting what matters most to Canadians. 
                With decades of combined experience, our team of licensed advisors provides personalized 
                insurance solutions that give you confidence in your family's future.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
                <div className="text-xl">Canadian Families Protected</div>
              </div>
              <Button>Meet Our Team</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Walker */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg transition-all hover:bg-gray-700 text-center">
              <Clock className="mx-auto h-12 w-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3">Fast Digital Approvals</h3>
              <p className="text-gray-300">
                Get coverage in days, not weeks, with our streamlined application process.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-all hover:bg-gray-700 text-center">
              <CheckCircle className="mx-auto h-12 w-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-300">
                Clear, honest pricing with no hidden fees or unexpected premium increases.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-all hover:bg-gray-700 text-center">
              <Award className="mx-auto h-12 w-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-3">Personalized Advice</h3>
              <p className="text-gray-300">
                Tailored recommendations based on your unique situation and needs.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg transition-all hover:bg-gray-700 text-center">
              <Shield className="mx-auto h-12 w-12 mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-3">Licensed Canadian Advisors</h3>
              <p className="text-gray-300">
                Expert guidance from professionals who understand Canadian insurance laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Hear It from Our Clients
          </h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mr-4">
                      JM
                    </div>
                    <div>
                      <h4 className="font-semibold">Jennifer Miller</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic">
                    "Walker Insurance made finding the right term life policy so easy. Their advisor took the time to understand my needs and found me coverage that fit my budget."
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mr-4">
                      RL
                    </div>
                    <div>
                      <h4 className="font-semibold">Robert Lee</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic">
                    "After my diagnosis, the critical illness coverage from Walker Insurance provided the financial support I needed. The claims process was straightforward and quick."
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold mr-4">
                      SK
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Kim</h4>
                      <div className="flex">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic">
                    "Our family's health and dental plan has saved us thousands. The coverage is comprehensive and the customer service team is always helpful when we have questions."
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Your Questions, Answered
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                ❓ How do I know which insurance policy is right for me?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Our licensed advisors will work with you to understand your specific needs, budget, and 
                future goals before recommending the best coverage options. We take the time to explain 
                each policy in plain language, not insurance jargon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                ❓ How quickly can I get approved for coverage?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Many of our policies offer immediate approval through our digital application process. 
                Depending on the coverage amount and type, some policies may require additional health 
                information, but we work to get you approved as quickly as possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                ❓ Can I adjust my coverage as my life circumstances change?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Absolutely! We understand that life changes, and your insurance should too. Our policies 
                are designed with flexibility in mind, allowing you to adjust coverage amounts, add riders, 
                or make other changes as your needs evolve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                ❓ What makes Walker Insurance different from other providers?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Walker Insurance combines the personal touch of a family business with the technological 
                efficiency of modern insurance. We prioritize education over sales, transparent pricing, 
                and ongoing support throughout the life of your policy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Get Started.</h2>
              <p className="text-lg mb-6">
                Ready to protect what matters most? Our team is here to help you find the perfect 
                coverage for your needs and budget.
              </p>
              <p className="text-lg mb-6">
                Fill out the form and we'll be in touch within one business day.
              </p>
            </div>
            <div>
              <form className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1" htmlFor="name">Full Name</label>
                    <Input id="name" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="phone">Phone</label>
                    <Input id="phone" placeholder="(123) 456-7890" />
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="insurance-type">Type of Insurance</label>
                    <select id="insurance-type" className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select an option</option>
                      <option value="term-life">Term Life Insurance</option>
                      <option value="critical-illness">Critical Illness</option>
                      <option value="health-dental">Health & Dental</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full">Request a Quote</Button>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Walker Insurance</div>
              <p className="mb-4">
                Providing Canadians with peace of mind through comprehensive 
                insurance solutions tailored to your needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>123 Insurance Ave, Toronto, ON</li>
                <li>info@walkerinsurance.ca</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                © 2025 Walker Insurance. All rights reserved.
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
