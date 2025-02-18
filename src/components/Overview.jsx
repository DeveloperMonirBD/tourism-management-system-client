//motion
import { motion } from 'framer-motion';

//variants
import ReactPlayer from 'react-player';
import { fadeIn } from '../variants';

const Overview = () => {
    return (
        <div className="my-20  container mx-auto md:px-3">
            <div className=" text-center flex flex-col justify-center items-center">
                <h2 className="text-4xl font-semibold mb-8">OverView</h2>

                <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.4 }} className="player  lg: w-full">
                    <div className='h-[300px] md:h-[400px] lg:h-[500px]'>
                        <ReactPlayer width="100%" height="100%" controls url="https://youtu.be/Z44fFqBQQtg?si=2Qdx7gU4J0hgwzoW" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Overview;
