import {Link} from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import {BookMarked, Calculator, Receipt, ShieldCheck, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import RetirementCalculator from "@/components/RetirementCalculator";
import { useTranslation } from "react-i18next";

const Index = () => {
    const { t } = useTranslation();
    const featuredServices = [
        {
            icon: <ShieldCheck className="h-6 w-6"/>,
            title: t("featuredServices.insurance.title"),
            description: t("featuredServices.insurance.description")
        },
        {
            icon: <Receipt className="h-6 w-6"/>,
            title: t("featuredServices.retirement.title"),
            description: t("featuredServices.retirement.description")
        },
        {
            icon: <Calculator className="h-6 w-6"/>,
            title: t("featuredServices.welfare.title"),
            description: t("featuredServices.welfare.description")
        },
        {
            icon: <BookMarked className="h-6 w-6"/>,
            title: t("featuredServices.workshop.title"),
            description: t("featuredServices.workshop.description")
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                <Hero/>

                {/* About Section */}
                <section className="py-16 md:py-24 bg-white dark:bg-navy-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-6">
                                    {t("home.about.title")}
                                </h2>
                                <p className="text-navy-600 dark:text-gray-300 mb-6">
                                    {t("home.about.description1")}
                                </p>
                                <p className="text-navy-600 dark:text-gray-300 mb-8">
                                    {t("home.about.description2")}
                                </p>
                                <Link to="/about">
                                    <Button variant="outline"
                                            className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:border-gold-500 dark:text-gold-500 dark:hover:bg-navy-800">
                                        {t("home.about.button")}
                                    </Button>
                                </Link>
                            </div>

                            <div className="order-1 lg:order-2 relative">
                                <div className="aspect-[4/3] bg-navy-100 dark:bg-navy-800 rounded-lg overflow-hidden">
                                    <img
                                        src="/images/businessman-working.jpeg"
                                        alt="Team meeting"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-6 -left-6 bg-gold-500 rounded-lg shadow-xl p-6 max-w-xs">
                                    <div className="flex items-center mb-4">
                                        <Users className="h-8 w-8 text-white mr-4"/>
                                        <div className="text-2xl font-bold text-white">100+</div>
                                    </div>
                                    <p className="text-navy-900 font-medium">{t("home.countClient.title")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 md:py-24 bg-gray-50 dark:bg-navy-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                                {t("home.servicesTitle")}
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                {t("home.servicesDesc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {featuredServices.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    icon={service.icon}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <Link to="/services">
                                <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                                    {t("featuredServices.button")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/*<section className="py-16 md:py-24 bg-navy-700 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial
                            Strategy?</h2>
                        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
                            Our expert team of actuaries is ready to help you navigate complex financial challenges and
                            optimize your opportunities.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact">
                                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg">
                                    Contact Us Today
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="outline"
                                        className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:border-white dark:text-white dark:hover:bg-navy-700 px-8 py-6 text-lg">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>*/}
            </main>

            <Footer/>
        </div>
    );
};

export default Index;
