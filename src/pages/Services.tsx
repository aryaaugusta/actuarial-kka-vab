import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {BookMarked, Calculator, Receipt, ShieldCheck} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Services = () => {
    const {t} = useTranslation();
    const services = [
        {
            icon: <Calculator className="h-8 w-8"/>,
            title: t("services.welfare.title"),
            description: t("services.welfare.description"),
            benefits: [
                t("services.welfare.keyBenefit1"),
                t("services.welfare.keyBenefit2"),
                t("services.welfare.keyBenefit3"),
                t("services.welfare.keyBenefit4"),
                t("services.welfare.keyBenefit5"),
            ]
        },
        {
            icon: <Receipt className="h-8 w-8"/>,
            title: t("services.retirement.title"),
            description: t("services.retirement.description"),
            benefits: [
                t("services.retirement.keyBenefit1"),
                t("services.retirement.keyBenefit2"),
                t("services.retirement.keyBenefit3"),
                t("services.retirement.keyBenefit4"),
                t("services.retirement.keyBenefit5"),
            ]
        },
        {
            icon: <ShieldCheck className="h-8 w-8"/>,
            title: t("services.insurance.title"),
            description: t("services.insurance.description"),
            benefits: [
                t("services.insurance.keyBenefit1"),
                t("services.insurance.keyBenefit2"),
                t("services.insurance.keyBenefit3"),
                t("services.insurance.keyBenefit4"),
                t("services.insurance.keyBenefit5"),
            ]
        },
        {
            icon: <BookMarked className="h-8 w-8"/>,
            title: t("services.workshop.title"),
            description: t("services.workshop.description"),
            benefits: [
                t("services.workshop.keyBenefit1"),
                t("services.workshop.keyBenefit2"),
                t("services.workshop.keyBenefit3"),
                t("services.workshop.keyBenefit4"),
                t("services.workshop.keyBenefit5"),
            ]
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-navy-600 text-white py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.title")}</h1>
                            <p className="text-xl text-gray-200">
                                {t("services.description")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                                {t("services.overview.title")}
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                {t("services.overview.description")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                            {services.map((service, index) => (
                                <div key={index}
                                     className="bg-white dark:bg-navy-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-navy-700 flex flex-col">
                                    <div className="p-6 border-b border-gray-100 dark:border-navy-700">
                                        <div
                                            className="bg-navy-50 dark:bg-navy-700 rounded-full p-3 w-16 h-16 flex items-center justify-center text-navy-600 dark:text-gold-300 mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{service.title}</h3>
                                        <p className="text-navy-600 dark:text-gray-300">{service.description}</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 dark:bg-navy-700 flex-grow">
                                        <h4 className="font-bold text-navy-700 dark:text-white mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="w-8 h-8 text-gold-500 mr-2 mt-0.5" fill="none"
                                                         stroke="currentColor" viewBox="0 0 24 24"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                    </svg>
                                                    <span className="text-navy-600 dark:text-gray-300">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16 md:py-24 bg-navy-50 dark:bg-navy-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                                {t("services.process.title")}
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                {t("services.process.description")}
                            </p>
                        </div>

                        <div className="relative">
                            {/* Process steps */}
                            <div
                                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-navy-200 dark:bg-navy-700 transform -translate-x-1/2"></div>

                            <div className="space-y-24">
                                {/* Step 1 */}
                                <div className="relative">
                                    <div
                                        className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gold-500 transform -translate-x-1/2 border-4 border-white dark:border-navy-800"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div className="md:text-right md:pr-16">
                                            <div
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">{t("services.process.step1.name")}
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("services.process.step1.title")}</h3>
                                            <p className="text-navy-600 dark:text-gray-300">{t("services.process.step1.description")}</p>
                                        </div>
                                        <div className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md">
                                            <img
                                                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Discovery phase"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative">
                                    <div
                                        className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gold-500 transform -translate-x-1/2 border-4 border-white dark:border-navy-800"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div className="md:order-2 md:pl-16">
                                            <div
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">{t("services.process.step2.name")}
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("services.process.step2.title")}</h3>
                                            <p className="text-navy-600 dark:text-gray-300">{t("services.process.step2.description")}</p>
                                        </div>
                                        <div className="md:order-1 bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md">
                                            <img
                                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="Strategy development"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative">
                                    <div
                                        className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gold-500 transform -translate-x-1/2 border-4 border-white dark:border-navy-800"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div className="md:text-right md:pr-16">
                                            <div
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">{t("services.process.step3.name")}
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("services.process.step3.title")}</h3>
                                            <p className="text-navy-600 dark:text-gray-300">{t("services.process.step3.description")}</p>
                                        </div>
                                        <div className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md">
                                            <img
                                                src="/images/implementation-phase.jpg"
                                                alt="Implementation phase"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="relative">
                                    <div
                                        className="hidden md:block absolute left-1/2 top-6 w-6 h-6 rounded-full bg-gold-500 transform -translate-x-1/2 border-4 border-white dark:border-navy-800"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                        <div className="md:order-2 md:pl-16">
                                            <div
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">{t("services.process.step4.name")}
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("services.process.step4.title")}</h3>
                                            <p className="text-navy-600 dark:text-gray-300">{t("services.process.step4.description")}</p>
                                        </div>
                                        <div className="md:order-1 bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md">
                                            <img
                                                src="/images/actuarial-support.jpg"
                                                alt="Ongoing support"
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-24 bg-navy-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.transform.title")}</h2>
                            <p className="text-xl text-gray-300 mb-8">{t("services.transform.description")}</p>
                            <Link to="/contact">
                                <Button
                                    className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg">{t("services.transform.button")}</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Services;
