import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
      <div className="relative bg-navy-50 dark:bg-navy-800 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <svg className="h-full w-full" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-navy-200 dark:text-navy-700" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-700 dark:text-white leading-tight animate-fade-in">
              {t("hero.titleLine1")} <br />
              <span className="text-gold-500">{t("hero.titleLine2")}</span>
            </h1>

            <p
                className="mt-6 text-lg text-navy-600 dark:text-gray-300 max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.2s" }}
            >
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/services">
                <Button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg">
                  {t("hero.buttonServices")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                    variant="outline"
                    className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:border-white dark:text-white dark:hover:bg-navy-700 px-8 py-6 text-lg"
                >
                  {t("hero.buttonContact")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 -mb-16 -mr-16 lg:mb-0 lg:mr-0 lg:right-12 lg:bottom-12 z-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gold-500/20 dark:bg-gold-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
  );
}
