import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // kamu bisa ganti dengan ikon lain

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        // Tampilkan tombol jika scroll > 300px
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // animasi smooth scroll
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all"
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default ScrollToTopButton;