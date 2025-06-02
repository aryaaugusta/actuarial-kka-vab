
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-2 border-gray-100 dark:border-navy-700 h-full transition-all duration-300 hover:border-gold-300 hover:shadow-lg dark:hover:border-gold-700">
      <CardHeader>
        <div className="bg-navy-50 dark:bg-navy-800 rounded-full p-3 w-14 h-14 flex items-center justify-center text-navy-600 dark:text-gold-300 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-navy-700 dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-navy-600 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
