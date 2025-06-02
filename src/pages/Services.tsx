import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {BookMarked, Calculator, Receipt, ShieldCheck} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";

const Services = () => {
    const services = [
        {
            icon: <Calculator className="h-8 w-8"/>,
            title: "Employee Welfare Benefits",
            description: "Calculate the estimation of Defined Benefit Liabilities and Expenses based on the provisions " +
                "of employee benefit accounting standards for the requested period alongside the company policy, " +
                "Employment Law No. 13 of 2003, and other regulations applicable to the company to comply " +
                "the financial reports based on PSAK-24 (Employee Benefits), International Accounting Standards (IAS) " +
                "and other Accounting Standards, including SAK ETAP.",
            benefits: [
                "Regulatory Compliance – Aligned with PSAK 24, IAS, and Employment Law No. 13/2003.",
                "Accurate Financial Reporting – Ensures proper recognition of employee benefit liabilities and expenses.",
                "Legal Risk Mitigation – Complies with legal obligations to employees under applicable laws.",
                "Better Financial Planning – Provides a reliable basis for long-term budgeting and projections.",
                "Stakeholder Transparency – Enhances trust from investors and auditors through reliable disclosures."
            ]
        },
        {
            icon: <Receipt className="h-8 w-8"/>,
            title: "Retirement Funds and Health Warranty",
            description: "Assist in the preparation and establishment of Pension Funds as well as the dissolution of Pension Funds (DPPK & DPLK). Calculation and illustration of health program costs for active participants and retirees. Retirement fund valuation and simulation of retirement benefit calculations; study of employee’s health Insurance to get the best option for the Company including funding, institutional and operational implementation of health insurance.",
            benefits: [
                "End-to-End Pension Fund Support – Assistance in setting up or dissolving DPPK & DPLK schemes.",
                "Health Cost Forecasting – Cost estimation for healthcare programs for employees and retirees.",
                "Retirement Benefit Simulation – Accurate valuation and projection of employee retirement benefits.",
                "Health Insurance Optimization – Evaluation to select the most effective health insurance solution.",
                "Comprehensive Implementation – Guidance on funding, structure, and operations of health programs.",
            ]
        },
        {
            icon: <ShieldCheck className="h-8 w-8"/>,
            title: "Insurance Consulting",
            description: "Assist the preparation of Filing for New Life Insurance and General Insurance Products. " +
                "Re-checking the formulas and assumptions used for Life, General, & Health Insurance products, calculation and validation of Premium Reserves " +
                "for life and general insurance companies, calculation of claim reserves, UPR, and URR for Life, General and Health Insurance, " +
                "Calculation of Motor Vehicle Rates based on the previous company claims. Other services required according to the needs of each service user, " +
                "including a second opinion from an Actuary which may be needed as a comparison.",
            benefits: [
                "Product Filing Support – Assistance in preparing new Life and General Insurance product filings.",
                "Technical Accuracy – Review of formulas and assumptions to ensure compliance and soundness.",
                "Reserve Validation – Accurate calculation of premium, claim, UPR, and URR reserves.",
                "Rates Analysis  – Motor vehicle rates calculation based on historical claims data.",
                "Technical Accuracy – Review of formulas and assumptions to ensure compliance and soundness.",
            ]
        },
        {
            icon: <BookMarked className="h-8 w-8"/>,
            title: "Actuary Workshop",
            description: "Sophisticated financial models and projections to support strategic decision-making and long-term planning.",
            benefits: [
                "Exam Readiness – Support for Actuary exam preparation through focused workshops.",
                "Practical Skills – Training in retirement fund calculations and PSAK-24 applications.",
                "Technical Mastery – Deepened understanding of technical reserve calculations for insurance.",
                "Inclusive Training – Programs available for both actuarial and non-actuarial staff.",
                "Professional Development – Enhances competencies relevant to insurance and pensions sectors.",
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                            <p className="text-xl text-gray-200">
                                Comprehensive actuarial solutions tailored to the unique needs of your organization
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Overview */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                                Actuarial Excellence at Your Service
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                Our team of expert actuaries provides a comprehensive range of services designed to help
                                your organization navigate complex financial challenges and seize opportunities.
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
                                Our Consulting Process
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                We follow a structured yet flexible approach to ensure we deliver solutions that
                                precisely meet your needs
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
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">Step
                                                1
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Discovery
                                                & Analysis</h3>
                                            <p className="text-navy-600 dark:text-gray-300">We begin by thoroughly
                                                understanding your organization's unique needs, challenges, and
                                                objectives through in-depth consultations and data analysis.</p>
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
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">Step
                                                2
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Strategy
                                                Development</h3>
                                            <p className="text-navy-600 dark:text-gray-300">Our expert actuaries design
                                                tailored solutions and strategies based on rigorous analysis and
                                                industry best practices.</p>
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
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">Step
                                                3
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Implementation</h3>
                                            <p className="text-navy-600 dark:text-gray-300">We work closely with your
                                                team to implement solutions efficiently, providing clear guidance and
                                                support throughout the process.</p>
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
                                                className="inline-block mb-2 px-3 py-1 bg-gold-100 dark:bg-navy-700 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium">Step
                                                4
                                            </div>
                                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Ongoing
                                                Support & Optimization</h3>
                                            <p className="text-navy-600 dark:text-gray-300">We provide continuous
                                                monitoring, periodic reviews, and ongoing optimization to ensure
                                                long-term success and adaptation to changing circumstances.</p>
                                        </div>
                                        <div className="md:order-1 bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md">
                                            <img
                                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial
                                Strategy?</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Contact us today to discuss how our actuarial expertise can help your organization
                                thrive.
                            </p>
                            <Link to="/contact">
                                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-8 py-6 text-lg">
                                    Schedule a Consultation
                                </Button>
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
