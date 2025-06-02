
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-600 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-white font-merriweather font-bold text-xl">
                KKA<span className="text-gold-500"> VAB</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Professional actuarial consultancy services for insurance, pension, risk management, and financial planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.4 10.4 0 01-3.127 1.195c-.897-.964-2.177-1.562-3.594-1.562-2.718 0-4.923 2.205-4.923 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.16c-.42.72-.673 1.562-.673 2.458 0 1.686.878 3.15 2.19 4.02-.807-.032-1.566-.245-2.223-.617v.06a4.957 4.957 0 003.95 4.847c-.4.114-.842.174-1.29.174-.314 0-.616-.03-.916-.086a4.922 4.922 0 004.604 3.417c-1.695 1.32-3.825 2.105-6.14 2.105-.398 0-.79-.023-1.18-.069a10.018 10.018 0 005.457 1.59c6.55 0 10.13-5.42 10.13-10.125l-.01-.462a7.122 7.122 0 001.756-1.826z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-500">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Services</Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-gold-500">Client Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-500">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Employee Welfare Benefits</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Retirement Funds and Health Warranty</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Insurance Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Actuary Workshop</Link>
              </li>
              {/*<li>
                <Link to="/services" className="text-gray-300 hover:text-gold-500">Actuarial Auditing</Link>
              </li>*/}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Flamboyan II no.14 blok X-8 Taman Cimanggu, Kota Bogor
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300"> 081919056000 / 081919190560</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">agus05lastika@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} KKA VAB. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gold-500">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gold-500">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
