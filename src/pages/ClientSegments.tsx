
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ClientSegments = () => {
  // Client segments
  const segments = [
    {
      title: "Individual Clients",
      description: "Personalized financial solutions for individuals looking to build and grow their wealth.",
      image: "https://images.unsplash.com/photo-1573497019236-61e1a8b00b7f?auto=format&fit=crop&q=80",
      features: [
        "Retirement planning",
        "Tax-efficient investments",
        "Education funding",
        "Insurance solutions"
      ]
    },
    {
      title: "Retail Clients",
      description: "Accessible investment options and financial advice for everyday investors.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&q=80",
      features: [
        "Mutual fund investments",
        "Systematic investment plans",
        "Fixed income solutions",
        "Small portfolio management"
      ]
    },
    {
      title: "High Net Worth Individuals",
      description: "Sophisticated wealth management solutions for clients with significant assets.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80",
      features: [
        "Advanced tax planning",
        "Estate planning",
        "Alternative investments",
        "Customized portfolio management"
      ]
    },
    {
      title: "Ultra High Net Worth Clients",
      description: "Comprehensive wealth management and preservation strategies for ultra-affluent clients.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?auto=format&fit=crop&q=80",
      features: [
        "Family office services",
        "Legacy planning",
        "Philanthropic advisory",
        "Global investment opportunities"
      ]
    },
    {
      title: "NRI Clients",
      description: "Specialized financial services for Non-Resident Indians looking to invest in their home country.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      features: [
        "NRI-specific investment solutions",
        "Currency management",
        "Repatriation planning",
        "Tax-efficient global strategies"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="Client Segments" 
        subtitle="We serve diverse client needs with tailored financial solutions for every stage of wealth building."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        align="center"
        showButton={false}
      />

      {/* Client Segments Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Solutions for Every Client Profile</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At BSK ASPIRE, we understand that financial needs vary widely based on your wealth stage, goals, and circumstances. We've developed specialized services for various client segments to address your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Segment Sections */}
      {segments.map((segment, index) => (
        <section 
          key={index} 
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          id={segment.title.toLowerCase().replace(' ', '-')}
        >
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <h2 className="heading-lg mb-4">{segment.title}</h2>
                <p className="text-gray-700 mb-6">
                  {segment.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {segment.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
              
              <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <img 
                  src={segment.image} 
                  alt={segment.title} 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Client Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Approach to Client Service</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Regardless of your wealth segment, our commitment to excellence remains the same. We believe in building lasting relationships founded on trust, transparency, and personalized service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Strategy</h3>
              <p className="text-gray-600">
                Every client receives a custom financial plan tailored to their unique needs, goals, and risk tolerance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="m18 15-6-6-6 6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous guidance and regular reviews to ensure your financial plan evolves with your life changes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Access to knowledgeable advisors who stay current with market trends and investment strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Find Your Perfect Financial Match</h2>
            <p className="mb-8 text-gray-200">
              Discover how our segment-specific approach can help you achieve your financial goals and secure your future.
            </p>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-medium">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClientSegments;
