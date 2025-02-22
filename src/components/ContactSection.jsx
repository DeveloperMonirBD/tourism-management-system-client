//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import Lottie from 'lottie-react';
import contactLottieData from '../assets/Animation - 1736176462106.json';

const ContactSection = () => {
    return (
        <div id="contact" className="contact py-20 border-t dark:border-none bg-gray-50 dark:bg-gray-800">
            <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="container mx-auto px-6">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                        <Lottie animationData={contactLottieData} />
                    </div>

                    <div className="w-full lg:w-1/2 border dark:border-gray-700 px-10 py-12 rounded-2xl mt-6 lg:mt-0 shadow-sm bg-base-100 dark:bg-neutral">
                        <h2 className="text-4xl font-extrabold text-brandPrimary text-center mb-8 dark:text-white">Contact Us</h2>

                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="affcf978-2dba-4c37-90b4-c96a6fc47a92" />
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <div className="form-control w-full">
                                        <input
                                            type="text"
                                            name="name"
                                            className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-400"
                                            id="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <div className="form-control w-full">
                                        <input
                                            type="email"
                                            className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-400"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-400"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="form-control w-full">
                                    <textarea
                                        className="textarea textarea-bordered w-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-400"
                                        name="message"
                                        rows="6"
                                        placeholder="Message"
                                        required></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn bg-brandPrimary text-white px-6 py-3 rounded dark:bg-neutral dark:hover:text-gray-800" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactSection;
