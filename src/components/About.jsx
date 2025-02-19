//motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

import { FaMapMarkedAlt, FaUsers, FaGlobe } from 'react-icons/fa';

const About = () => {
    return (
        <section className="my-20 px-3">
            <div className="container mx-auto text-center">
                {/* Header Section */}
                <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
                    <h2 className="text-4xl font-extrabold text-brandPrimary mb-8 dark:text-white">About Us</h2>
                    <p className="mb-8 max-w-3xl mx-auto leading-relaxed">
                        Welcome to our <strong>Tourism Management System</strong>! Our mission is to make travel planning seamless, enjoyable, and accessible for everyone. We believe that exploring
                        new destinations should be effortless, and we are here to help you discover the beauty of Bangladesh with ease and excitement.
                    </p>
                </motion.div>

                {/* Cards Section */}
                <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
                    {/* Card 1: Our Mission */}
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-green-100 dark:bg-neutral dark:text-white dark:hover:bg-neutral">
                        <div className="flex justify-center mb-4">
                            <FaMapMarkedAlt className="text-4xl text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 dark:bg-neutral dark:text-white">Our Mission</h3>
                        <p className="text-base text-neutralGrey dark:bg-neutral dark:text-white">
                            To provide a comprehensive platform for travelers to explore, plan, and experience the best of Bangladesh.
                        </p>
                    </div>

                    {/* Card 2: How It Works */}
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:bg-neutral dark:text-white dark:hover:bg-neutral">
                        <div className="flex justify-center mb-4">
                            <FaUsers className="text-4xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 dark:bg-neutral dark:text-white">How It Works</h3>
                        <p className="text-base text-neutralGrey dark:bg-neutral dark:text-white">
                            Users can explore destinations, create itineraries, and get real-time travel tips and recommendations.
                        </p>
                    </div>

                    {/* Card 3: Engaging Content */}
                    <div className="bg-white rounded-lg shadow-lg px-4 py-6 transform transition-all duration-300 hover:scale-105 hover:bg-purple-100 dark:bg-neutral dark:text-white dark:hover:bg-neutral">
                        <div className="flex justify-center mb-4">
                            <FaGlobe className="text-4xl text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4 dark:bg-neutral dark:text-white">Explore Bangladesh</h3>
                        <p className="text-base text-neutralGrey dark:bg-neutral dark:text-white">Discover hidden gems, cultural landmarks, and local cuisine with our curated guides and insights.</p>
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.p
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className="mt-10 text-base font-semibold max-w-2xl mx-auto leading-relaxed">
                    Start your journey with us today and experience the wonders of Bangladesh like never before! 🚀🌟
                </motion.p>
            </div>
        </section>
    );
};

export default About;
