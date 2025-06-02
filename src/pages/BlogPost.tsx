
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User } from "lucide-react";

// Mock blog post data
const blogPostData = {
  id: "1",
  title: "Understanding IFRS 17 Implementation for Insurers",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  date: new Date("2023-11-10"),
  author: "Dr. Joko Widodo",
  category: "Insurance",
  content: `
    <p class="mb-4">IFRS 17 represents one of the most significant changes to insurance accounting in decades. For insurers worldwide, implementation presents both challenges and opportunities to enhance financial reporting and operational processes.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Key Components of IFRS 17</h2>
    
    <p class="mb-4">At its core, IFRS 17 changes how insurance contracts are measured, introducing several key components:</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>The General Measurement Model (GMM) with its Building Block Approach</li>
      <li>The Variable Fee Approach (VFA) for contracts with direct participation features</li>
      <li>The Premium Allocation Approach (PAA) as a simplified model for short-term contracts</li>
      <li>New requirements for the presentation of insurance revenue and finance income or expenses</li>
    </ul>
    
    <p class="mb-4">These components aim to provide more consistent and comparable financial information across insurance entities globally, addressing the limitations of the previous standard, IFRS 4.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Challenges</h2>
    
    <p class="mb-4">Based on our work with numerous insurers across Asia, we've identified several common implementation challenges:</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">1. Data Management and Quality</h3>
    
    <p class="mb-4">IFRS 17 requires granular data that many insurers don't currently capture or store appropriately. Organizations must identify data gaps, enhance data quality controls, and potentially invest in new data storage solutions.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">2. System and Technology Requirements</h3>
    
    <p class="mb-4">Implementing IFRS 17 often necessitates significant system changes or new solutions to handle complex calculations, particularly for the Contractual Service Margin (CSM). Many insurers are finding their existing systems insufficient for these requirements.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">3. Accounting Policy Decisions</h3>
    
    <p class="mb-4">IFRS 17 contains numerous accounting policy choices that require careful consideration regarding their impact on financial statements and operational complexity.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">4. Resource Constraints</h3>
    
    <p class="mb-4">The standard demands expertise across actuarial, accounting, finance, and IT functions. Many organizations are struggling with resource allocation and knowledge gaps.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Strategic Implementation Approaches</h2>
    
    <p class="mb-4">In our consulting practice, we recommend insurers adopt the following strategic approaches:</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">1. Cross-Functional Implementation Teams</h3>
    
    <p class="mb-4">Successful implementation requires collaboration across actuarial, accounting, finance, IT, and business teams. Creating cross-functional working groups ensures comprehensive consideration of all aspects.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">2. Phased Implementation</h3>
    
    <p class="mb-4">Rather than attempting a "big bang" approach, consider implementing in phases with clear milestones and deliverables for each stage.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">3. Impact Assessment and Gap Analysis</h3>
    
    <p class="mb-4">Before making significant changes, conduct thorough impact assessments and gap analyses across systems, data, processes, and people to identify specific requirements.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">4. Leveraging Implementation as an Opportunity</h3>
    
    <p class="mb-4">Forward-thinking insurers are using IFRS 17 implementation as an opportunity to modernize systems, enhance data management capabilities, and streamline processes.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Looking Ahead</h2>
    
    <p class="mb-4">As the effective date approaches, insurers should focus on refining their implementation strategies, conducting parallel runs, and preparing stakeholders for the changes to financial reporting and KPIs.</p>
    
    <p class="mb-4">IFRS 17 represents not just a compliance exercise but an opportunity to enhance financial transparency and provide more meaningful information to investors and other stakeholders.</p>
    
    <p class="mb-4">For insurers still in the early stages of implementation, now is the time to accelerate efforts and ensure adequate resources are allocated to this significant transformational project.</p>
  `,
  relatedPosts: [
    {
      id: "2",
      title: "The Future of Pension Systems in Asia",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "5",
      title: "Capital Management Strategies for Insurers",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: "Climate Risk and Actuarial Modeling",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostData; // In a real app, you would fetch the post based on ID
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="w-full h-80 lg:h-96 relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
            <div className="flex items-center space-x-4 text-white mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{format(post.date, 'MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span className="text-sm">{post.author}</span>
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">{post.title}</h1>
          </div>
        </div>
        
        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <Link to="/blog" className="flex items-center text-navy-600 dark:text-gold-500 hover:text-navy-800 dark:hover:text-gold-400 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to all articles</span>
          </Link>
          
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-navy-700 dark:prose-headings:text-white prose-p:text-navy-600 dark:prose-p:text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Share this article</span>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-navy-600 dark:text-gray-300 hover:text-navy-800 dark:hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.4 10.4 0 01-3.127 1.195c-.897-.964-2.177-1.562-3.594-1.562-2.718 0-4.923 2.205-4.923 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.16c-.42.72-.673 1.562-.673 2.458 0 1.686.878 3.15 2.19 4.02-.807-.032-1.566-.245-2.223-.617v.06a4.957 4.957 0 003.95 4.847c-.4.114-.842.174-1.29.174-.314 0-.616-.03-.916-.086a4.922 4.922 0 004.604 3.417c-1.695 1.32-3.825 2.105-6.14 2.105-.398 0-.79-.023-1.18-.069a10.018 10.018 0 005.457 1.59c6.55 0 10.13-5.42 10.13-10.125l-.01-.462a7.122 7.122 0 001.756-1.826z" />
                    </svg>
                  </a>
                  <a href="#" className="text-navy-600 dark:text-gray-300 hover:text-navy-800 dark:hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-navy-600 dark:text-gray-300 hover:text-navy-800 dark:hover:text-white">
                    <span className="sr-only">Email</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="border-navy-300 text-navy-600 hover:bg-navy-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-navy-800">
                  Previous Article
                </Button>
                <Button variant="outline" className="border-navy-300 text-navy-600 hover:bg-navy-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-navy-800">
                  Next Article
                </Button>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <section className="bg-navy-50 dark:bg-navy-800 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-navy-700 dark:text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.id}`} className="group">
                  <div className="bg-white dark:bg-navy-700 rounded-lg overflow-hidden shadow-md">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={related.image} 
                        alt={related.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy-700 dark:text-white group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
