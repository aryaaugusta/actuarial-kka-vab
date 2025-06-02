import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Kamu bisa ganti dengan icon lain atau ↑

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Deteksi scroll
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-500 ease-in-out hover:bg-blue-700 hover:scale-105 ${
                isVisible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTopButton;
