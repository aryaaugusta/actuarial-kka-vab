
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: Date;
  author: string;
}

export default function BlogCard({ id, title, excerpt, image, date, author }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${id}`} className="overflow-hidden">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </Link>
      <CardHeader className="pb-2">
        <div className="text-sm text-navy-400 dark:text-gray-400 mb-2">
          {format(date, 'MMMM d, yyyy')} • By {author}
        </div>
        <Link to={`/blog/${id}`} className="hover:underline decoration-gold-500 underline-offset-4">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white">{title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-navy-500 dark:text-gray-300">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          to={`/blog/${id}`}
          className="text-gold-500 hover:text-gold-600 dark:hover:text-gold-400 font-medium inline-flex items-center"
        >
          Read more
          <svg 
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}
