
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
}

export default function TeamMember({ name, position, bio, image }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover object-center w-full h-full transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader className="bg-white dark:bg-navy-800">
        <CardTitle className="text-navy-700 dark:text-white">{name}</CardTitle>
        <CardDescription className="text-gold-600 dark:text-gold-400 font-medium">
          {position}
        </CardDescription>
      </CardHeader>
      <CardContent className="bg-white dark:bg-navy-800">
        <p className="text-navy-600 dark:text-gray-300">{bio}</p>
      </CardContent>
      <CardFooter className="bg-white dark:bg-navy-800 flex justify-start space-x-4 pt-0">
        <a href="#" className="text-navy-600 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-500">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="#" className="text-navy-600 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-500">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.4 10.4 0 01-3.127 1.195c-.897-.964-2.177-1.562-3.594-1.562-2.718 0-4.923 2.205-4.923 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.16c-.42.72-.673 1.562-.673 2.458 0 1.686.878 3.15 2.19 4.02-.807-.032-1.566-.245-2.223-.617v.06a4.957 4.957 0 003.95 4.847c-.4.114-.842.174-1.29.174-.314 0-.616-.03-.916-.086a4.922 4.922 0 004.604 3.417c-1.695 1.32-3.825 2.105-6.14 2.105-.398 0-.79-.023-1.18-.069a10.018 10.018 0 005.457 1.59c6.55 0 10.13-5.42 10.13-10.125l-.01-.462a7.122 7.122 0 001.756-1.826z" />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
}
