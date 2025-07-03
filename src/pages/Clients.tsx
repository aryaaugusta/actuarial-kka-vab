
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLogo from "@/components/ClientLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Clients = () => {
  const {t} = useTranslation();
  // Placeholder client logos
  const clients = [
    { name: "Insurance Corp", logo: "images/clients/sinarmas-asuransi.png" },
    { name: "Insurance Corp", logo: "/images/clients/CTCorp_logo.png" },
    { name: "Pension Trust", logo: "/images/clients/Bank-Mega-Logo.png" },
    { name: "Secure Bank", logo: "/images/clients/PT-Indo-Straits-Tbk.png" },
    { name: "Risk Advisors", logo: "/images/clients/Bank-Muamalat-Logo.png" },
    { name: "Capital Group", logo: "/images/clients/PFI-MEGA-LIFE.png" },
    { name: "Wealth Partners", logo: "/images/clients/new_detikcom_logo.png" },
    { name: "Future Securities", logo: "/images/clients/Lippo-Group.png" },
    { name: "Invest Co", logo: "/images/clients/evergreen-capital.png" },
    { name: "Metro Insurance", logo: "https://cdn-healthcare.hellohealthgroup.com/hospitals/id/siloam-hospitals-bekasi-timur20220211.png" },
    /*{ name: "National Pension", logo: "https://via.placeholder.com/200x100?text=National+Pension" },
    { name: "Alpha Finance", logo: "https://via.placeholder.com/200x100?text=Alpha+Finance" }*/
  ];

  const testimonials = [
    {
      quote: "KKA VAB's expertise in pension valuation has been invaluable to our organization. Their team's thorough analysis and clear recommendations have helped us optimize our pension strategy and ensure long-term sustainability.",
      author: "Sarah Johnson",
      position: "CFO",
      company: "GlobalCorp Insurance"
    },
    {
      quote: "We've worked with KKA VAB for over five years on our insurance pricing strategy. Their actuarial insights have directly contributed to improved profitability while maintaining competitive positioning in the market.",
      author: "David Chen",
      position: "CEO",
      company: "Pacific Risk Solutions"
    },
    {
      quote: "The risk management framework developed by KKA VAB has transformed our approach to financial risk. Their team took the time to understand our unique challenges and delivered a solution that perfectly addressed our needs.",
      author: "Maria Rodriguez",
      position: "Risk Management Director",
      company: "Nationwide Financial"
    }
  ];

  const caseStudies = [
    {
      title: "Insurance Pricing Optimization",
      client: "Major Indonesian Insurance Provider",
      challenge: "Facing declining profitability due to outdated pricing models",
      solution: "Developed sophisticated pricing models incorporating modern risk factors and market dynamics",
      result: "24% improvement in loss ratio and 18% growth in premium volume within 12 months",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pension Scheme Restructuring",
      client: "Multinational Corporation",
      challenge: "Unsustainable defined benefit pension scheme creating significant financial strain",
      solution: "Comprehensive restructuring plan with phased transition to hybrid pension model",
      result: "Reduced long-term liabilities by 35% while maintaining employee satisfaction",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Risk Management Framework",
      client: "Regional Banking Group",
      challenge: "Inadequate risk assessment processes leading to unexpected financial losses",
      solution: "Implemented comprehensive enterprise risk management framework with automated monitoring",
      result: "Early identification of emerging risks and 40% reduction in risk-related financial impacts",
      image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-600 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("clients.title")}</h1>
              <p className="text-xl text-gray-200">
                {t("clients.description")}
              </p>
            </div>
          </div>
        </section>
        
        {/* Client Logos */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                {t("clients.logo.title")}
              </h2>
              <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                {t("clients.logo.description")}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
              {clients.map((client, index) => (
                <ClientLogo 
                  key={index} 
                  name={client.name} 
                  logo={client.logo} 
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        {/*<section className="py-16 md:py-24 bg-navy-50 dark:bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                Case Studies
              </h2>
              <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                Real-world examples of how our actuarial expertise has helped organizations achieve their financial goals
              </p>
            </div>
            
            <div className="space-y-16 mt-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-navy-700 rounded-lg shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-64 lg:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="text-gold-500 font-medium mb-2">{study.client}</div>
                      <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{study.title}</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-navy-700 dark:text-gold-500 mb-1">Challenge</h4>
                          <p className="text-navy-600 dark:text-gray-300">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-navy-700 dark:text-gold-500 mb-1">Solution</h4>
                          <p className="text-navy-600 dark:text-gray-300">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-navy-700 dark:text-gold-500 mb-1">Result</h4>
                          <p className="text-navy-600 dark:text-gray-300">{study.result}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button variant="outline" className="border-navy-600 text-navy-600 dark:border-gold-500 dark:text-gold-500">
                          Read Full Case Study
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}
        
        {/* Testimonials */}
        {/*<section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                Hear directly from organizations that have partnered with KKA VAB
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white dark:bg-navy-700 p-8 rounded-lg shadow-md relative">
                  <div className="absolute top-4 left-4 text-5xl text-gray-200 dark:text-navy-600">"</div>
                  <div className="relative z-10">
                    <p className="text-navy-600 dark:text-gray-300 mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div>
                      <div className="font-bold text-navy-700 dark:text-white">{testimonial.author}</div>
                      <div className="text-sm text-navy-500 dark:text-gray-400">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}
        
        {/* CTA */}
        <section className="py-16 bg-navy-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t("clients.cta.title")}</h2>
              <p className="text-xl text-gray-300 mb-8">
                {t("clients.cta.description")}
              </p>
              <Link to="/contact">
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-3 text-lg">
                  {t("clients.cta.button")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Clients;
