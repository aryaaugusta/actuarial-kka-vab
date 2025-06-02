
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  /*{ name: "Blog", href: "/blog" },*/
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img src="/LOGO_KKA_VAB.png" alt="Logo KKA VAB" className="h-8 w-auto"/>
              <span className="text-navy-600 dark:text-white font-merriweather font-bold text-xl md:text-2xl">
                KKA<span className="text-gold-500"> VAB</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "font-medium transition-colors",
                  isActive(link.href)
                    ? "text-gold-500"
                    : "text-navy-600 dark:text-gray-300 hover:text-gold-500 dark:hover:text-gold-500"
                )}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              title="Menu"
              className="ml-2"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-navy-700",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium",
                isActive(link.href)
                  ? "bg-gold-500/10 text-gold-500"
                  : "text-navy-600 dark:text-gray-300 hover:bg-gold-500/10 hover:text-gold-500"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
