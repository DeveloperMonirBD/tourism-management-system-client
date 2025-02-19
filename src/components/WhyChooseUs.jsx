//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { FaMapMarkedAlt, FaUtensils, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us py-12 bg-gray-50 dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto px-3">
                {/* Header Section */}
                <motion.header variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex flex-col items-center text-center mb-10">
                    <h1 className="text-4xl  font-bold mb-4">Why Choose Us</h1>
                    <p className="text-base md:w-[750px]">
                        We are your ultimate travel companion for exploring Bangladesh. From uncovering hidden gems to experiencing local culture and cuisine, we provide everything you need to make
                        your trip unforgettable.
                    </p>
                </motion.header>

                {/* Cards Section */}
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Comprehensive Guides */}
                    <div className="service-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 dark:bg-neutral">
                        <div className="service-icon mb-4 text-5xl text-blue-500">
                            <FaMapMarkedAlt />
                        </div>
                        <div className="service-desc">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">Comprehensive Guides</h2>
                            <p className="text-gray-600 dark:text-white">Detailed guides on popular destinations, attractions, and hidden gems across Bangladesh.</p>
                        </div>
                    </div>

                    {/* Card 2: Local Culture & Cuisine */}
                    <div className="service-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 dark:bg-neutral dark:text-white">
                        <div className="service-icon mb-4 text-5xl text-green-500">
                            <FaUtensils />
                        </div>
                        <div className="service-desc">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">Local Culture & Cuisine</h2>
                            <p className="text-gray-600 dark:text-white">Explore the rich culture, traditions, and delicious cuisine of Bangladesh.</p>
                        </div>
                    </div>

                    {/* Card 3: Flexible Trip Planning */}
                    <div className="service-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 dark:bg-neutral dark:text-white">
                        <div className="service-icon mb-4 text-5xl text-purple-500">
                            <FaCalendarAlt />
                        </div>
                        <div className="service-desc">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">Flexible Trip Planning</h2>
                            <p className="text-gray-600 dark:text-white">Plan your trip with ease using our customizable itineraries and travel tips.</p>
                        </div>
                    </div>

                    {/* Card 4: 24/7 Support */}
                    <div className="service-box bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 dark:bg-neutral dark:text-white">
                        <div className="service-icon mb-4 text-5xl text-orange-500">
                            <FaHeadset />
                        </div>
                        <div className="service-desc">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-white">24/7 Support</h2>
                            <p className="text-gray-600 dark:text-white">Get round-the-clock assistance from our dedicated travel experts.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
