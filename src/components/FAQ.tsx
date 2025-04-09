
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How do I know which insurance plan is right for me?",
      answer: "Our licensed advisors will walk you through a personalized needs assessment to determine what coverage best fits your situation. We consider your family structure, financial goals, budget, and existing coverage to recommend options that provide the best protection."
    },
    {
      question: "Can I change my coverage as my life circumstances change?",
      answer: "Absolutely! Life is dynamic, and your insurance should be too. You can adjust your coverage as your family grows, your career advances, or your financial situation changes. We recommend an annual review of your policies to ensure they still meet your needs."
    },
    {
      question: "How quickly can I get approved for insurance?",
      answer: "Many of our policies offer quick digital approval processes that can be completed within days. Some policies may require medical exams or additional information, which can extend the timeline. Our team will guide you through the process and keep you informed at every step."
    },
    {
      question: "Are there any discounts available when bundling multiple policies?",
      answer: "Yes! We offer multi-policy discounts when you bundle different types of coverage. This not only saves you money but also simplifies your insurance management by keeping everything with one provider."
    },
    {
      question: "How do I file a claim?",
      answer: "Filing a claim is simple. You can submit claims through our online portal, mobile app, or by calling our dedicated claims support team. We've streamlined the process to ensure you receive your benefits quickly when you need them most."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Questions, Answered</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our insurance coverage.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="w-full flex items-center justify-between py-4 text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? 
                  <ChevronUp className="h-5 w-5 text-primary" /> : 
                  <ChevronDown className="h-5 w-5 text-primary" />
                }
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
