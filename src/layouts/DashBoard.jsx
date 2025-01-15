import { FaAddressCard, FaAppStoreIos, FaBabyCarriage, FaBook, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className=" container mx-auto flex gap-12">
            {/* dashBoard side bar  */}
            <div className="w-72 min-h-screen bg-brandPrimary p-4">
                <div className="text-center mt-4">
                    <h1 className="text-4xl font-bold">Tourism</h1>
                    <p className="text-2xl font-bold">Management system</p>
                </div>

                <ul className="menu mt-16 text-xl space-y-4 text-white">
                    <li>
                        <NavLink to="/dashboard/manageProfile">
                            <FaUser />
                            User Manage Profile
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
                </ul>

                <div className="divider"></div>

                {/* Navbar section  */}
                <ul className="menu mt-8 text-xl space-y-4 text-white">
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

            {/* dashboard content  */}
            <div className="flex-1 pt-20">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;