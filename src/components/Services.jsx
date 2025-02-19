//motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../variants';

import { FaMapMarkedAlt, FaUsers, FaGlobe, FaHotel, FaUtensils, FaHeadset } from 'react-icons/fa';

const Services = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4 dark:text-white">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
                        We offer a wide range of services to make your travel experience seamless and unforgettable. Explore our offerings below.
                    </p>
                </motion.div>

                {/* Cards Section */}
                <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1: Destination Guides */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaMapMarkedAlt className="text-5xl text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4  dark:text-white">Destination Guides</h3>
                        <p className="text-gray-600 dark:text-white">Detailed guides on popular tourist spots, hidden gems, and cultural landmarks across Bangladesh.</p>
                    </div>

                    {/* Card 2: Trip Planning */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaGlobe className="text-5xl text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Trip Planning</h3>
                        <p className="text-gray-600 dark:text-white">Customizable itineraries, travel tips, and budget planning tools to make your trip hassle-free.</p>
                    </div>

                    {/* Card 3: Local Experiences */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaUtensils className="text-5xl text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Local Experiences</h3>
                        <p className="text-gray-600 dark:text-white">Discover local culture, cuisine, and traditions to enrich your travel experience.</p>
                    </div>

                    {/* Card 4: Accommodation Booking */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaHotel className="text-5xl text-orange-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Accommodation Booking</h3>
                        <p className="text-gray-600  dark:text-white">Find and book the best hotels, resorts, and guesthouses for your stay.</p>
                    </div>

                    {/* Card 5: 24/7 Support */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaHeadset className="text-5xl text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">24/7 Support</h3>
                        <p className="text-gray-600 dark:text-white">Get round-the-clock assistance from our dedicated travel experts.</p>
                    </div>

                    {/* Card 6: Group Tours */}
                    <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-neutral dark:text-white">
                        <div className="flex justify-center mb-6">
                            <FaUsers className="text-5xl text-teal-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 dark:text-white">Group Tours</h3>
                        <p className="text-gray-600 dark:text-white">Join our curated group tours and explore Bangladesh with fellow travelers.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
