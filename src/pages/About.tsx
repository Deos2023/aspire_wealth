import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  // Timeline events
  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "BSK ASPIRE PVT LTD was established on June 28, 2018."
    },
    {
      year: "2019",
      title: "Expansion of Services",
      description: "Expanded our offerings to include mutual funds and insurance products."
    },
    {
      year: "2020",
      title: "Surviving the Pandemic",
      description: "Successfully navigated clients through market volatility during COVID-19."
    },
    {
      year: "2021-2022",
      title: "Growing Client Base",
      description: "Expanded our client base across various segments."
    },
    {
      year: "2023-Present",
      title: "Continuous Evolution",
      description: "Adapting to changing financial landscapes and enhancing digital services."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="About BSK ASPIRE" 
        subtitle="Learn about our journey, mission, and the team behind our success since 2018."
        backgroundImage="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
        align="center"
        showButton={false}
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/b058fdf4-4f49-4b81-88bf-3c8288b3b227.png" 
                alt="BSK ASPIRE Logo" 
                className="rounded-lg shadow-lg max-w-full mx-auto"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                BSK ASPIRE PVT LTD was established on June 28, 2018, with a vision to provide personalized financial solutions to clients from all walks of life. 
              </p>
              <p className="text-gray-700 mb-4">
                Located in Vinayak Enclave, Garia, West Bengal, we've grown from a small advisory firm to a comprehensive wealth management company serving clients across various segments including individual, retail, HNI, ultra-HNI, and NRI clients.
              </p>
              <p className="text-gray-700 mb-8">
                Our journey has been marked by a steadfast commitment to client success, ethical business practices, and continuous improvement in our service offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that define who we are and how we serve our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted wealth management firm, enabling our clients to achieve financial freedom and security.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To deliver personalized financial planning and solutions that align with each client's unique goals and aspirations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-secondary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, client-focus, and excellence guide every aspect of our service and business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A timeline of key milestones in BSK ASPIRE's growth and evolution.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-secondary rounded-full transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className={`md:w-1/2 bg-white p-6 rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <div className="text-secondary font-semibold mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team - Modified to remove individual images */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Meet the dedicated professionals who make your financial success their priority.
            </p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b058fdf4-4f49-4b81-88bf-3c8288b3b227.png" 
                alt="BSK ASPIRE Team" 
                className="max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">Join Our Growing Client Family</h2>
            <p className="mb-8 text-gray-200">
              Experience the difference of working with a team that puts your financial goals first.
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

export default About;
