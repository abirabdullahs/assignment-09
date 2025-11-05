import React, { Suspense, useEffect } from "react";
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import SkillCard from './../../components/SkillCard';
import Loader from '../../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        });
    }, []);

    const skills = useLoaderData();
    return (
        <div>

            <Hero></Hero>

            <h1 className='text-center font-bold text-4xl my-5'>Explore Amaizing Skills</h1>

            <Suspense fallback={<Loader></Loader>}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 mb-5">
                    {
                        skills.map((skill, index) => (
                            <div key={skill.skillId} data-aos="zoom-in" data-aos-delay={index * 100}>
                                <SkillCard skill={skill} />
                            </div>
                        ))
                    }
                </div>
            </Suspense>

            <section>
                <h2 className="text-3xl font-semibold mb-6 text-center">Top Rated Providers</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-5">
                    <div className="card p-4 text-center shadow" data-aos="fade-left" data-aos-delay="100">
                        <img src="https://jtgt-static.b-cdn.net/images/justinguitar-social.jpg" alt="" className="rounded-full w-24 h-24 mx-auto" />
                        <h4 className="font-bold mt-3">Alex Martin</h4>
                        <p>Music Instructor</p>
                        <p>⭐ 4.9</p>
                    </div>
                    <div className="card p-4 text-center shadow" data-aos="fade-left" data-aos-delay="200">
                        <img src="https://eduurban.com/wp-content/uploads/2022/09/Rev_Web_Banner_Edu_Urban_a_Spoken_English_Main_Banner.jpg" alt="" className="rounded-full w-24 h-24 mx-auto" />
                        <h4 className="font-bold mt-3">Sarah Lee</h4>
                        <p>Frontend Web Developer</p>
                        <p>⭐ 4.8</p>
                    </div>
                    <div className="card p-4 text-center shadow" data-aos="fade-left" data-aos-delay="300">
                        <img src="https://as1.ftcdn.net/jpg/04/92/02/40/1000_F_492024046_1uDtrdqpWt3xos6F9m49J0XhZEcP3Lou.jpg" alt="" className="rounded-full w-24 h-24 mx-auto" />
                        <h4 className="font-bold mt-3">Anika Sultana</h4>
                        <p>Cooking Traditional Dishes</p>
                        <p>⭐ 4.7</p>
                    </div>
                    {/* More cards */}
                </div>
            </section>

            <section className="my-16" data-aos="fade-up">
                <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div data-aos="fade-right" data-aos-delay="100">
                        <h3 className="font-bold">1️⃣ Post Your Skill</h3>
                        <p>Offer something you're good at.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <h3 className="font-bold">2️⃣ Find a Match</h3>
                        <p>Browse listings from your area.</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300">
                        <h3 className="font-bold">3️⃣ Connect & Learn</h3>
                        <p>Trade skills and grow together!</p>
                    </div>
                </div>
            </section>

            <div>
                <section className="bg-purple-50 py-12">
                    <h2 className="text-3xl font-semibold text-center mb-8">What Our Users Say</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-6 bg-white rounded-xl shadow">
                            <p className="italic text-gray-700">“I learned guitar within 2 months! The best local platform for learning.”</p>
                            <h4 className="mt-3 font-semibold text-purple-600">— Alex D.</h4>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow">
                            <p className="italic text-gray-700">“Easy to find learners and share my yoga skills. Loved it!”</p>
                            <h4 className="mt-3 font-semibold text-purple-600">— Ravi P.</h4>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow">
                            <p className="italic text-gray-700">“A great initiative for community learning. Highly recommend!”</p>
                            <h4 className="mt-3 font-semibold text-purple-600">— Sara H.</h4>
                        </div>
                    </div>
                </section>

                <section className="bg-linear-to-r from-purple-600 to-indigo-600 text-white py-12">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">Our Growing Community</h2>
                        <p className="opacity-90">Together, we’re building a skill-sharing network.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                        <div>
                            <h3 className="text-4xl font-bold">2.5K+</h3>
                            <p>Registered Users</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">800+</h3>
                            <p>Skills Shared</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold">1.2K+</h3>
                            <p>Successful Exchanges</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16" data-aos="fade-up">
                    <h2 className="text-3xl font-semibold text-center mb-8">Why Choose SkillSwap?</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                        <div className="p-6 bg-white shadow rounded-xl" data-aos="fade-right" data-aos-delay="100">
                            <h4 className="font-bold text-purple-600 mb-2">Learn Locally</h4>
                            <p>Find people near you who can teach or learn skills with you.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded-xl" data-aos="fade-up" data-aos-delay="200">
                            <h4 className="font-bold text-purple-600 mb-2">Exchange Freely</h4>
                            <p>Trade skills instead of money. Share your knowledge with others.</p>
                        </div>
                        <div className="p-6 bg-white shadow rounded-xl" data-aos="fade-left" data-aos-delay="300">
                            <h4 className="font-bold text-purple-600 mb-2">Grow Together</h4>
                            <p>Join a supportive learning community and boost your confidence.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;