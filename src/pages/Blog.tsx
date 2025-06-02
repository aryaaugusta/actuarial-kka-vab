
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock blog data
const blogData = [
  {
    id: "1",
    title: "Understanding IFRS 17 Implementation for Insurers",
    excerpt: "A comprehensive guide to implementing IFRS 17 and its impact on insurance company financial reporting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-11-10"),
    author: "Dr. Joko Widodo",
    category: "Insurance"
  },
  {
    id: "2",
    title: "The Future of Pension Systems in Asia",
    excerpt: "Examining demographic challenges and innovative solutions for sustainable pension systems in Asian countries.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-10-25"),
    author: "Siti Rahayu",
    category: "Pension"
  },
  {
    id: "3",
    title: "Climate Risk and Actuarial Modeling",
    excerpt: "How actuaries are incorporating climate change risks into their financial models and projections.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-10-15"),
    author: "Ahmad Dhani",
    category: "Risk Management"
  },
  {
    id: "4",
    title: "AI and the Future of Actuarial Work",
    excerpt: "Exploring how artificial intelligence is transforming actuarial analysis and what it means for the profession.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-09-28"),
    author: "Maya Indira",
    category: "Technology"
  },
  {
    id: "5",
    title: "Capital Management Strategies for Insurers",
    excerpt: "Best practices for effective capital management in the current regulatory and economic environment.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-09-15"),
    author: "Dr. Joko Widodo",
    category: "Insurance"
  },
  {
    id: "6",
    title: "ESG Factors in Actuarial Valuation",
    excerpt: "How environmental, social, and governance factors are increasingly important in actuarial calculations.",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: new Date("2023-09-05"),
    author: "Siti Rahayu",
    category: "Sustainability"
  }
];

const categories = [
  "All",
  "Insurance",
  "Pension",
  "Risk Management",
  "Technology",
  "Sustainability"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search term and category
  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-navy-600 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Actuarial Insights</h1>
              <p className="text-xl text-gray-200">
                Explore our latest articles, research, and thought leadership on actuarial science and financial risk management
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full md:w-80"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={selectedCategory === category ? 
                      "bg-navy-600 hover:bg-navy-700 text-white" : 
                      "border-navy-200 text-navy-600 hover:bg-navy-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-navy-800"
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard 
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    author={post.author}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-navy-700 dark:text-white mb-2">No articles found</h3>
                <p className="text-navy-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
              </div>
            )}
            
            {/* Pagination - simplified for demo */}
            <div className="mt-16 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-navy-50 dark:bg-navy-700">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subscribe */}
        <section className="py-16 md:py-24 bg-navy-50 dark:bg-navy-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 dark:text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-navy-600 dark:text-gray-300 mb-8">
              Subscribe to our newsletter to receive exclusive content and updates on financial and actuarial trends.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Input type="email" placeholder="Your email address" className="md:flex-1" />
              <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-navy-500 dark:text-gray-400 mt-4">
              By subscribing, you agree to our privacy policy. We respect your privacy and will never share your information.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
