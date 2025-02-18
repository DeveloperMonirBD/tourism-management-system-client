//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';


const ContactSection = () => {
    return (
        <div id="contact" className="contact py-20">
            <motion.div variants={fadeIn('up', 0.2)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="container mx-auto md:px-3">
                <div>
                    <div className="w-full border dark:border-gray-700 px-10 py-12 rounded-2xl mt-6 lg:mt-0 shadow-sm">
                        <h2 className="text-4xl font-extrabold text-neutral text-center mb-8 dark:bg-gray-800 dark:text-white">Contact Us</h2>

                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="access_key" value="affcf978-2dba-4c37-90b4-c96a6fc47a92" />

                            <div className="w-full mb-6 md:mb-6">
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        name="name"
                                        className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-neutral dark:text-white"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="w-full mb-6">
                                <div className="form-control w-full">
                                    <input
                                        type="email"
                                        className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-neutral dark:text-white"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        className="input input-bordered w-full bg-gray-100 text-gray-700 dark:bg-neutral dark:text-white"
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
                                        className="textarea textarea-bordered w-full bg-gray-100 text-gray-700 dark:bg-neutral dark:text-white"
                                        name="message"
                                        rows="6"
                                        placeholder="Message"
                                        required></textarea>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-base text-gray-700 text-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-700" type="submit">
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
