//motion
import { motion } from 'framer-motion';

//variants
import ReactPlayer from 'react-player';
import { fadeIn } from '../variants';

const Overview = () => {
    return (
        <div className="my-20  container mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-12 text-center flex flex-col justify-center items-center">
                <motion.h2
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-5xl md:text-6xl font-semibold text-brandPrimary mb-8">
                    OverView
                </motion.h2>

                <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className="player  lg: w-full">
                    <ReactPlayer width="100%" controls url="https://youtu.be/Z44fFqBQQtg?si=2Qdx7gU4J0hgwzoW" />
                </motion.div>
            </div>
        </div>
    );
};

export default Overview;
