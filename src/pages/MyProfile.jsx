//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png';
import useManageProfile from '../hook/useManageProfile';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [manageProfile] = useManageProfile();
    return (
        <>
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.7 }}
                className="text-brandPrimary text-3xl font-semibold text-center my-12  dark:text-white pb-3">
                <span className="text-neutral dark:text-gray-500">"Welcome To</span> My Profile"
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className="flex flex-col w-full mx-auto justify-center items-center text-center bg-base-200 x-10 py-14 rounded-2xl shadow-sm border dark:bg-gray-800 dark:text-white">
                <div>
                    {user && user?.email ? (
                        <div className="space-y-3">
                            <div className="w-40 mx-auto">
                                <img className="object-cover object-center w-full rounded-full" src={user?.photoURL} alt="" />
                            </div>
                            <p className="pt-4 text-lg">{user.email}</p>
                            <p className="text-lg">Welcome To {user.displayName}</p>
                        </div>
                    ) : (
                        <img src={userIcon} alt="" />
                    )}
                    <p className="text-lg mt-3">
                        <span className="font-semibold">Role: </span>
                        <span className="text-blue-600 font-semibold">{manageProfile.role}</span>
                    </p>
                </div>
                <div className="space-x-4 mt-4">
                    <Link to="/auth/profileUpdate" className="btn mt-4 bg-brandPrimary text-white hover:bg-gray-900 transition text-lg">
                        Update Profile
                    </Link>

                    <Link to="/dashboard/joinAsTourGuide" className="btn mt-4 bg-brandPrimary text-white hover:bg-gray-900 transition text-lg">
                        Apply For Tour Guide
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default MyProfile;
