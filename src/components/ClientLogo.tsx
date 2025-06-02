
interface ClientLogoProps {
  name: string;
  logo: string;
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className="h-12 md:h-16 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
      />
    </div>
  );
}
