import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Updated stats
  const stats = [
    { label: "Years Experience", value: "6+" },
    { label: "Clients Served", value: "750+" },
    { label: "Assets Managed", value: "₹250+ Cr" },
    { label: "Financial Products", value: "15+" }
  ];

  // Features for why choose us section
  const features = [
    {
      title: "Expert Guidance",
      description: "Our team of certified financial advisors will help you navigate complex financial decisions."
    },
    {
      title: "Tailored Solutions",
      description: "We create personalized financial strategies aligned with your unique goals and risk tolerance."
    },
    {
      title: "Transparent Approach",
      description: "Clear communication and complete transparency in all our investment recommendations."
    },
    {
      title: "Long-term Partnership",
      description: "We build lasting relationships, continuously adapting your plan as your life evolves."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Secure Your Financial Future with BSK ASPIRE" 
        subtitle="Since 2018, we've been helping clients achieve financial independence through expert guidance and personalized wealth management solutions."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="heading-lg mb-4">Your Trusted Financial Partner</h2>
              <p className="text-gray-600 mb-6">
                BSK ASPIRE PVT LTD is a premier wealth management firm established in 2018. 
                We specialize in comprehensive financial solutions tailored to your unique needs and goals.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80" 
                alt="Financial Planning" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Financial Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of financial products and services designed to help you build, manage, and protect your wealth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 21V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v13"/><path d="M2 11h20"/><path d="M11 3h2"/><path d="m15 21-3-4.5-3 4.5"/></svg>}
              title="Equity"
              description="Invest in the stock market with our expert guidance and research-backed recommendations."
            />
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="8"/><line x1="3" x2="6" y1="3" y2="6"/><line x1="21" x2="18" y1="3" y2="6"/><line x1="3" x2="6" y1="21" y2="18"/><line x1="21" x2="18" y1="21" y2="18"/></svg>}
              title="Mutual Funds"
              description="Diversify your investments with our curated selection of top-performing mutual funds."
            />
            <ServiceCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><line x1="9" y1="9" x2="10" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>}
              title="Life Insurance"
              description="Protect your loved ones' future with comprehensive life insurance solutions."
            />
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="mt-4">
              <Link to="/services" className="inline-flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Choose BSK ASPIRE</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart in the financial services industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex p-6 bg-white rounded-lg shadow-sm">
                <div className="mr-4 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Ready to Secure Your Financial Future?</h2>
            <p className="mb-8 text-gray-200">
              Schedule a consultation with our expert financial advisors and take the first step toward financial independence.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-medium">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
