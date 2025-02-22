import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [mode, setMode] = useState('light');

    // Load theme from local storage on mount
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setMode(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, []);

    // Toggle Mode Function
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            setMode('light');
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    };

    const links = (
        <>
            <li className="hover:text-brandPrimary ">
                <NavLink to="/" className="dark:text-white">
                    Home
                </NavLink>
            </li>
            <li className="hover:text-neutral dark:text-white">
                <NavLink to="/community">Community</NavLink>
            </li>

            {user && user.email && (
                <>
                    <li className="hover:text-neutral dark:text-white">
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className="hover:text-neutral dark:text-white">
                        <NavLink to="/trips">Trips</NavLink>
                    </li>
                </>
            )}

            <li className="hover:text-neutral dark:text-white">
                <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar container mx-auto pl-3 pr-6 py-3">
            <div className="navbar-start ">
                {/* mobile dropdown  */}
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-neutral lg:hidden dark:bg-gray-800 dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-3 shadow bg-gray-100 text-neutral font-semibold gap-2 dark:bg-gray-800 dark:text-white">
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

                <Link
                    to="/"
                    className="text-2xl font-extrabold text-neutral flex items-center gap-2 transform transition-all hover:scale-105 cursor-pointer duration-300 dark:bg-gray-800 dark:text-white">
                    <img className="w-14" src={logo} alt="" />
                    <h2>TMS</h2>
                </Link>
            </div>

            {/* desktop menu  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-neutral gap-2 font-bold ">{links}</ul>
            </div>

            {/* user */}
            <div className="navbar-end md:flex gap-3">
                {/* profile img  */}
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 rounded-full shadow-md border ">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-3 shadow space-y-2 dark:bg-gray-800 dark:text-white">
                        <div className="ml-2 text-center space-y-2 mb-2 mt-2">
                            <li className="font-bold">{user?.displayName}</li>
                            <li className="font-bold">{user?.email}</li>
                        </div>
                        <li className="mb-2">
                            <Link to="dashboard/manageProfile" className="btn font-bold w-full badge dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            {user && user?.email ? (
                                <button onClick={logOut} className="btn font-bold dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800">
                                    Log out
                                </button>
                            ) : (
                                <div className="flex flex-col items-center p-0 bg-white dark:bg-gray-800 dark:text-white ">
                                    <Link to="/auth/login" className="btn font-bold w-full dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800">
                                        Login
                                    </Link>
                                    <Link to="/auth/register" className="btn font-bold w-full dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                {/* DarkMode Light Mode  */}
                <div>
                    {mode === 'light' ? (
                        <button onClick={toggleMode}>
                            <span className="text-3xl text-yellow-500">
                                <IoSunnyOutline />
                            </span>
                        </button>
                    ) : (
                        <button onClick={toggleMode}>
                            <span className="text-3xl text-gray-500">
                                <IoMoonOutline />
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
