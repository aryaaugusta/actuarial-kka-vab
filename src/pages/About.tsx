import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import {CheckCircle} from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const teamMembers = [
        {
            name: t("about.publicActuary.name"),
            position: t("about.publicActuary.position"),
            bio: t("about.publicActuary.bio"),
            image: "/images/male_icon_4_edit.png"
        },
        {
            name: t("about.seniorCons.name"),
            position: t("about.seniorCons.position"),
            bio: t("about.seniorCons.bio"),
            image: "/images/male_icon_5_edit.png"
        },
        {
            name: t("about.lifeIns.name"),
            position: t("about.lifeIns.position"),
            bio: t("about.lifeIns.bio"),
            image: "/images/male_icon_6_edit.png"
        },
        {
            name: t("about.it.name"),
            position: t("about.it.position"),
            bio: t("about.it.bio"),
            image: "/images/male_icon_4_edit.png"
        },
        {
            name: t("about.acc.name"),
            position: t("about.acc.position"),
            bio: t("about.acc.bio"),
            image: "/images/female_icon_edit.png"
        },
        {
            name: t("about.tele.name"),
            position: t("about.tele.position"),
            bio: t("about.tele.bio"),
            image: "/images/female_icon_edit.png"
        },
        {
            name: t("about.admin.name"),
            position: t("about.admin.position"),
            bio: t("about.admin.bio"),
            image: "/images/male_icon_6_edit.png"
        }
    ];

    const coreValues = [
        {value: t("about.coreValue.value1"), description: t("about.coreValue.description1")},
        {value: t("about.coreValue.value2"), description: t("about.coreValue.description2")},
        {value: t("about.coreValue.value3"), description: t("about.coreValue.description3")},
        {value: t("about.coreValue.value4"), description: t("about.coreValue.description4")}
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-navy-600 text-white py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h1>
                            <p className="text-xl text-gray-200">
                                {t("about.description")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Company Profile */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-navy-700 dark:text-white mb-6">{t("about.story")}</h2>
                                <p className="text-navy-600 dark:text-gray-300 mb-4">
                                    {t("about.storyDesc1")}
                                </p>
                                <p className="text-navy-600 dark:text-gray-300 mb-4">
                                    {t("about.storyDesc2")}
                                </p>
                                <p className="text-navy-600 dark:text-gray-300 mb-4">
                                    {t("about.storyDesc3")}
                                </p>
                                <p className="text-navy-600 dark:text-gray-300">
                                    {t("about.storyDesc4")}
                                </p>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Office meeting"
                                    className="rounded-lg shadow-lg"
                                />
                                <div
                                    className="absolute -bottom-8 -right-8 bg-white dark:bg-navy-800 p-6 rounded-lg shadow-xl">
                                    <div className="font-merriweather font-bold text-5xl text-gold-500">20+</div>
                                    <div className="text-navy-700 dark:text-white">{t("about.years")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision and Mission */}
                <section className="py-16 md:py-24 bg-navy-50 dark:bg-navy-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-white dark:bg-navy-700 p-8 md:p-10 rounded-lg shadow-md">
                                <div className="inline-block p-3 bg-navy-100 dark:bg-navy-600 rounded-full mb-6">
                                    <svg className="w-8 h-8 text-navy-600 dark:text-gold-500" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("about.ourVision")}</h3>
                                <p className="text-navy-600 dark:text-gray-300">
                                    {t("about.vision")}
                                </p>
                            </div>

                            <div className="bg-white dark:bg-navy-700 p-8 md:p-10 rounded-lg shadow-md">
                                <div className="inline-block p-3 bg-navy-100 dark:bg-navy-600 rounded-full mb-6">
                                    <svg className="w-8 h-8 text-navy-600 dark:text-gold-500" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">{t("about.ourMission")}</h3>
                                <p className="text-navy-600 dark:text-gray-300">
                                    {t("about.mission")}
                                </p>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-8 text-center">{t("about.coreValue.title")}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {coreValues.map((item, index) => (
                                    <div key={index}
                                         className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md border-t-4 border-gold-500">
                                        <div className="flex items-start mb-4">
                                            <CheckCircle className="h-5 w-5 text-gold-500 mr-2 mt-1 flex-shrink-0"/>
                                            <h4 className="text-xl font-bold text-navy-700 dark:text-white">{item.value}</h4>
                                        </div>
                                        <p className="text-navy-600 dark:text-gray-300">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 dark:text-white mb-4">
                                {t("about.team.title")}
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                {t("about.team.description")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <TeamMember
                                    key={index}
                                    name={member.name}
                                    position={member.position}
                                    bio={member.bio}
                                    image={member.image}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-16 md:py-24 bg-navy-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-4 sm:grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">1000+</div>
                                <div className="text-xl">{t("about.stats.completed")}</div>
                            </div>
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">20+</div>
                                <div className="text-xl">{t("about.stats.yearsExp")}</div>
                            </div>
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">100+</div>
                                <div className="text-xl">{t("about.stats.satClients")}</div>
                            </div>
                            {/*<div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">1</div>
                                <div className="text-xl">Countries Served</div>
                            </div>*/}
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default About;
