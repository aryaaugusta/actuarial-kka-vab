
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-600 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200">
                Reach out to discuss how our actuarial expertise can help your organization thrive
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-navy-700 dark:text-white mb-8">Get In Touch</h2>
                <p className="text-navy-600 dark:text-gray-300 mb-8">
                  Have questions about our services or want to discuss how we can help your organization? 
                  Our team of experts is ready to assist you. Fill out the form or use the contact details below to reach out to us.
                </p>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-navy-50 dark:bg-navy-800 rounded-full p-3 mr-4">
                        <MapPin className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700 dark:text-white mb-1">Our Office</h3>
                        <p className="text-navy-600 dark:text-gray-300">Jl. Flamboyan II no.14 blok X-8 Taman Cimanggu<br />Kota Bogor, Indonesia</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-navy-50 dark:bg-navy-800 rounded-full p-3 mr-4">
                        <Phone className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700 dark:text-white mb-1">Phone</h3>
                        <p className="text-navy-600 dark:text-gray-300">+62 81919 056000</p>
                        <p className="text-navy-600 dark:text-gray-300">+62 81919 190560</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-navy-50 dark:bg-navy-800 rounded-full p-3 mr-4">
                        <Mail className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700 dark:text-white mb-1">Email</h3>
                        <p className="text-navy-600 dark:text-gray-300">agus05lastika@gmail.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex items-start p-6">
                      <div className="bg-navy-50 dark:bg-navy-800 rounded-full p-3 mr-4">
                        <Clock className="h-6 w-6 text-navy-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy-700 dark:text-white mb-1">Office Hours</h3>
                        <p className="text-navy-600 dark:text-gray-300">Monday-Friday: 9am - 6pm</p>
                        <p className="text-navy-600 dark:text-gray-300">Saturday-Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <Card className="border-2 border-gray-100 dark:border-navy-700">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-6">Send Us a Message</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name*</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service of Interest*</Label>
                        <Select value={formData.service} onValueChange={handleSelectChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employee-welfare-benefits">Employee Welfare Benefits</SelectItem>
                            <SelectItem value="retirement-funds-and-health-warranty">Retirement Funds and Health Warranty</SelectItem>
                            <SelectItem value="insurance-consulting">Insurance Consulting</SelectItem>
                            <SelectItem value="actuary-workshop">Actuary Workshop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message*</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-navy-600 hover:bg-navy-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      
                      <p className="text-sm text-navy-500 dark:text-gray-400">
                        By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        {/*<section className="py-16 bg-navy-50 dark:bg-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-700 dark:text-white mb-8 text-center">Find Us</h2>
            <div className="h-96 bg-gray-300 dark:bg-navy-700 rounded-lg overflow-hidden">
               In a real implementation, replace this with an actual map
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>
        </section>*/}
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
