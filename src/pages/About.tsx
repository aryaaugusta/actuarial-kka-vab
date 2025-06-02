import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import {CheckCircle} from "lucide-react";

const About = () => {
    const teamMembers = [
        {
            name: " V. Agus Basuki FSAI",
            position: "Public Actuary and Company Leader",
            bio: " Agus Basuki is the company leader and public actuary who has experience in the actuarial field of expertise in pension  and post-employment benefits programs since 2007. He has a bachelor's degree in ITB Mathematics and has held the title of Fellow of the Society of Actuaries of Indonesia since 2016.",
            image: "/images/male_icon_4_edit.png"
        },
        {
            name: "Albert Charles Sompie, SE",
            position: "Senior Consultant",
            bio: "Albert is a senior consultant who has joined us since 2017 and has experience in the field of pension program, life insurance and post-employment benefits programs for more than 20 years at the Central Actuarial Bureau. He assists clients in the field of post-employment benefits consultation (PSAK 24)",
            image: "/images/male_icon_5_edit.png"
        },
        {
            name: "Serarindramulia, SE FSAI",
            position: "Life Insurance Expert",
            bio: "Rarindra is a life insurance expert who has experience in the actuarial field for more than 20 years in several joint venture life insurance companies in Jakarta and Singapore, including Sun Life Finance and Swiss Re Singapore. He has a bachelor's degree in extension economics and an actuarial diploma from the University of Indonesia and has held the title of Fellow of the Society of Actuaries of Indonesia since 2011.",
            image: "/images/male_icon_6_edit.png"
        },
        {
            name: "Arya Ananggadipa Augusta, SKOM",
            position: "IT Support",
            bio: "Arya is our IT support Expert Arya who graduated from Universitas Bina Nusantara.",
            image: "/images/male_icon_4_edit.png"
        },
        {
            name: "Rachel, SE",
            position: "Accounting, Finance and Tax Staff",
            bio: "Rachel has the expertise in Accounting, Finance, and Tax, who graduated From Universitas Trisakti.",
            image: "/images/female_icon_edit.png"
        },
        {
            name: "Skolastika Asclepias",
            position: "Telemarketing Staff",
            bio: "Ascle is our specialist in Telemarketing who graduated from Universitas Bina Nusantara.",
            image: "/images/female_icon_edit.png"
        },
        {
            name: "Jonathan, SE",
            position: "Admin Staff",
            bio: "Jonathan handles our administration and he graduated from Universitas Diponegoro.",
            image: "/images/male_icon_6_edit.png"
        }
    ];

    const coreValues = [
        {value: "Excellence", description: "Delivering the highest quality in every aspect of our work"},
        {value: "Integrity", description: "Maintaining unwavering honesty and ethical standards"},
        {value: "Innovation", description: "Continuously improving our methods and approaches"},
        {value: "Collaboration", description: "Working closely with clients to achieve their goals"}
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-navy-600 text-white py-20 md:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">About KKA VAB</h1>
                            <p className="text-xl text-gray-200">
                                Building financial resilience through expert actuarial analysis and strategic consulting
                            </p>
                        </div>
                    </div>
                </section>

                {/* Company Profile */}
                <section className="py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-navy-700 dark:text-white mb-6">Our Story</h2>
                                <p className="text-navy-600 dark:text-gray-300 mb-4">
                                    Actuary Consultant Office V. Agus Basuki or Kantor Konsultan Aktuaria V. Agus Basuki
                                    (KKA VAB) is a company that enganges in actuary services, such as post-employment
                                    benefit program, insurance and retiremend funds. It is led by V. Agus Basuki, FSAI
                                    with the following actuary license.
                                </p>
                                <p className="text-navy-600 dark:text-gray-300 mb-4">
                                    Ministry of Finance of Republic Indonesia No. 738/KM.1/2018 dated on November 28th,
                                    2018 and Public Actuary License: Act-1.18.00135.
                                </p>
                                <p className="text-navy-600 dark:text-gray-300">
                                    Certificate of registration in OJK : Actuarial Consultant for the Non-Bank Financial
                                    Industry No. 035/NB.122/STTD-KA/2021 dated on March 9th, 2021.
                                </p>
                                <p className="text-navy-600 dark:text-gray-300">
                                    We have previously worked on post-employment benefit program since 2010 with PT
                                    Lastika Dipa and continue to provide our serviice as KKA VAB on October 24th, 2019.
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
                                    <div className="text-navy-700 dark:text-white">Years of Excellence</div>
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
                                <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Our Vision</h3>
                                <p className="text-navy-600 dark:text-gray-300">
                                    To be the preeminent actuarial consultancy in Asia, recognized for our technical
                                    excellence, innovative solutions, and unwavering commitment to our clients' success.
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
                                <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-4">Our Mission</h3>
                                <p className="text-navy-600 dark:text-gray-300">
                                    To empower organizations to make informed financial decisions through expert
                                    actuarial analysis, strategic consulting, and innovative solutions that drive
                                    sustainable growth and create lasting value for our clients and communities.
                                </p>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-navy-700 dark:text-white mb-8 text-center">Our Core
                                Values</h3>
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
                                Meet Our Expert Team
                            </h2>
                            <p className="max-w-2xl mx-auto text-navy-600 dark:text-gray-300">
                                Our diverse team of certified actuaries and financial experts brings a wealth of
                                knowledge and experience to every client engagement.
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">3</div>
                                <div className="text-xl">Expert Actuaries</div>
                            </div>
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">20+</div>
                                <div className="text-xl">Years of Experience</div>
                            </div>
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">100+</div>
                                <div className="text-xl">Satisfied Clients</div>
                            </div>
                            <div>
                                <div className="font-merriweather font-bold text-5xl text-gold-500 mb-2">1</div>
                                <div className="text-xl">Countries Served</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default About;
