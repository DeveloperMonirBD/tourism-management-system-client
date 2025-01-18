import { useContext } from 'react';
import { FaAddressCard, FaAppStoreIos, FaBabyCarriage, FaBook, FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa6';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import useManageProfile from '../hook/useManageProfile';

const DashBoard = () => {
    const { user, logOut } = useContext(AuthContext);
    const [manageProfile] = useManageProfile()

    const userRole = manageProfile.role;

    return (
        <div className=" container mx-auto gap-12">
            {/* dashBoard side bar  */}
            <div className="w-full md:w-72 min-h-screen bg-gray-100 p-4 md:fixed">
                <div className="text-center mt-4">
                    <h1 className="text-4xl font-bold">Tourism</h1>
                    <p className="text-2xl font-bold">Management system</p>
                </div>

                <div>
                    <ul className="menu mt-16 text-xl space-y-4">
                        {userRole == 'Tourist' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/manageProfile">
                                        <FaUser />
                                        Manage Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myBookings">
                                        <FaBook />
                                        My Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageStories">
                                        <FaAppStoreIos />
                                        Manage Stories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addStories">
                                        <FaAddressCard />
                                        Add Stories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/joinAsTourGuide">
                                        <FaAddressBook />
                                        Join as tour guide
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {userRole == 'Guide' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/manageProfile">
                                        <FaUser />
                                        Manage Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myBookings">
                                        <FaBook />
                                        My Assigned Tour
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageStories">
                                        <FaAppStoreIos />
                                        Add Stories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addStories">
                                        <FaAddressCard />
                                        Manage Stories
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {userRole == 'Admin' && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminManageProfile">
                                        <FaUser />
                                        Manage Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myBookings">
                                        <FaBook />
                                        My Assigned Tour
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageStories">
                                        <FaAppStoreIos />
                                        Add Stories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addStories">
                                        <FaAddressCard />
                                        Manage Stories
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* shared navbar links  */}
                    <div className="divider"></div>
                    <ul className="menu mt-8 text-xl space-y-4">
                        <li>
                            <NavLink to="/">
                                <FaHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/community">
                                <FaUsers />
                                Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us">
                                <FaAddressCard />
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trips">
                                <FaBabyCarriage />
                                Trips
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="mt-14">
                    {user && user?.email ? (
                        <button onClick={logOut} className="btn bg-neutral text-gray-300 text-lg hover:text-brandPrimary font-bold  w-full">
                            Log out
                        </button>
                    ) : (
                        <>
                            <Link to="/auth/login" className="btn btn-neutral text-gray-300 text-lg font-bold w-full mb-2">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* dashboard content  */}
            <div className="flex-1 pt-14 md:ml-80 md:mt-0">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
