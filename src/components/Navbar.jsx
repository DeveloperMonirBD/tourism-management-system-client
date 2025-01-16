import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li className="hover:text-brandPrimary ">
                <NavLink to="/" className="">
                    Home
                </NavLink>
            </li>
            <li className="hover:text-neutral">
                <NavLink to="/community">Community</NavLink>
            </li>
            <li className="hover:text-neutral">
                <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className="hover:text-neutral">
                <NavLink to="/trips">Trips</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar container mx-auto px-3 py-3">
            <div className="navbar-start">
                {/* mobile dropdown  */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-neutral lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-3 shadow bg-gray-100 text-neutral font-semibold gap-2 ">
                        {links}
                        {user && user?.email ? (
                            <button onClick={logOut} className="btn bg-neutral text-brandLight hover:text-brandPrimary font-bold">
                                Log out
                            </button>
                        ) : (
                            <>
                                <Link to="/auth/login" className="btn bg-brandPrimary text-neutral hover:text-brandPrimary font-bold ">
                                    Login
                                </Link>
                                <Link to="/auth/register" className="btn bg-brandSecondary text-brandLight hover:text-brandSecondary font-bold lg:ml-2">
                                    Register
                                </Link>
                            </>
                        )}
                    </ul>
                </div>

                <Link to="/" className="text-2xl font-extrabold text-neutral flex items-center gap-2 transform transition-all hover:scale-105 cursor-pointer duration-300">
                    <img className="w-14" src={logo} alt="" />
                    <h2>TMS</h2>
                </Link>
            </div>

            {/* desktop menu  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-neutral gap-2 font-bold ">{links}</ul>
            </div>

            {/* user */}
            <div className="navbar-end hidden md:flex gap-3">
                {/* profile img  */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 rounded-full">
                            <div>
                                {user && user?.email ? (
                                    <div className="flex items-center gap-2 group">
                                        <img className="w-14 h-14 rounded-full object-cover object-center" src={user?.photoURL} alt="" />
                                    </div>
                                ) : (
                                    <img className="rounded-full" src={userIcon} alt="user" />
                                )}
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-3 shadow space-y-2">
                        <li>
                            <Link to="/myProfile">Profile</Link>
                        </li>

                        <li>{user?.displayName}</li>
                        <li>{user?.email}</li>
                        <li>
                            <Link to="dashboard/manageProfile" className="btn font-bold w-full badge">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="btn font-bold w-full badge">
                                Offer
                            </Link>
                        </li>
                        <li>
                            {user && user?.email ? (
                                <button onClick={logOut} className="btn font-bold">
                                    Log out
                                </button>
                            ) : (
                                <div className="flex flex-col items-center p-0 bg-white">
                                    <Link to="/auth/login" className="btn font-bold w-full">
                                        Login
                                    </Link>
                                    <Link to="/auth/register" className="btn font-bold w-full">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
