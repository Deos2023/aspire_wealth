
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Services = () => {
  // Financial services
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 21V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v13"/><path d="M2 11h20"/><path d="M11 3h2"/><path d="m15 21-3-4.5-3 4.5"/></svg>,
      title: "Equity",
      description: "Expert stock market investment advice and portfolio management to help you grow your wealth over time.",
      features: [
        "Personalized stock selection",
        "Portfolio diversification",
        "Regular market updates",
        "Systematic investment plans"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="8"/><line x1="3" x2="6" y1="3" y2="6"/><line x1="21" x2="18" y1="3" y2="6"/><line x1="3" x2="6" y1="21" y2="18"/><line x1="21" x2="18" y1="21" y2="18"/></svg>,
      title: "Mutual Funds",
      description: "Diversify your investments through our carefully selected mutual fund options tailored to your risk profile.",
      features: [
        "Fund selection based on goals",
        "Risk assessment",
        "Performance tracking",
        "Tax-efficient investing"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><line x1="9" y1="9" x2="10" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>,
      title: "Life Insurance",
      description: "Secure your family's future with comprehensive life insurance solutions that provide financial protection.",
      features: [
        "Term life insurance",
        "Whole life coverage",
        "Child education plans",
        "Retirement planning"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M8 10h8"/><path d="M8 14h4"/><path d="M13 19c-2 0-5-3-5-3V8c0-1.1.9-2 2-2h3v5h4l-3 6c-.7 1.3-1 2-1 2z"/><path d="M18 12V7c0-1.1-.9-2-2-2h-2"/></svg>,
      title: "Health Insurance",
      description: "Protect yourself and your loved ones with comprehensive health insurance plans for medical emergencies.",
      features: [
        "Family health coverage",
        "Critical illness protection",
        "Hospitalization benefits",
        "OPD coverage options"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>,
      title: "Bonds",
      description: "Secure fixed-income investments through government and corporate bonds for stable returns.",
      features: [
        "Government bonds",
        "Corporate bonds",
        "Tax-free bonds",
        "Regular income options"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 9.33V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.33a2 2 0 0 1 1.34-1.89L12 4l8.66 3.44A2 2 0 0 1 22 9.33z"/><line x1="12" y1="10" x2="12" y2="16"/><line x1="9" y1="13" x2="15" y2="13"/></svg>,
      title: "Financial Planning",
      description: "Comprehensive financial planning services to help you achieve your short and long-term financial goals.",
      features: [
        "Goal-based planning",
        "Retirement planning",
        "Estate planning",
        "Tax optimization"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Our Financial Services" 
        subtitle="Comprehensive financial solutions tailored to your unique goals and aspirations."
        backgroundImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
        align="center"
        showButton={false}
      />

      {/* Services Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Comprehensive Financial Solutions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At BSK ASPIRE, we offer a wide range of financial products and services designed to help you build, manage, and protect your wealth. Our expert team will guide you through each option to create a personalized financial strategy aligned with your goals.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={index} 
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          id={service.title.toLowerCase().replace(' ', '-')}
        >
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <div className="text-secondary mb-4">
                  {service.icon}
                </div>
                <h2 className="heading-lg mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <img 
                  src={`https://images.unsplash.com/photo-${1550565118 + index * 100}-3a14e8d0386f?auto=format&fit=crop&q=80`} 
                  alt={service.title} 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Approach to Financial Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a client-centered approach to ensure that our services meet your specific needs and help you achieve your financial goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Understanding your financial situation, goals, and risk tolerance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Developing a customized financial strategy aligned with your objectives</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">3</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing the plan with carefully selected financial products</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">4</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Review</h3>
              <p className="text-gray-600">Regular monitoring and adjustments to ensure continued alignment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Ready to Build Your Financial Portfolio?</h2>
            <p className="mb-8 text-gray-200">
              Connect with our expert advisors to start creating your personalized financial strategy today.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-medium">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
