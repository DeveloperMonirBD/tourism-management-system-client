import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li className="hover:text-brandPrimary ">
                <NavLink to="/" className="dark:text-white">
                    Home
                </NavLink>
            </li>
            <li className="hover:text-brandLight">
                <NavLink to="/community">Community</NavLink>
            </li>
            <li className="hover:text-brandLight">
                <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className="hover:text-brandLight">
                <NavLink to="/trips">Trips</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar container mx-auto px-3 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-brandLight lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content rounded-box z-[1] mt-3 w-52 p-3 shadow bg-[#0F766E] text-brandLight font-semibold gap-2 ">
                        {links}
                        {user && user?.email ? (
                            <button onClick={logOut} className="btn bg-neutral text-brandLight hover:text-brandPrimary font-bold">
                                Log out
                            </button>
                        ) : (
                            <>
                                <Link to="/auth/login" className="btn bg-brandPrimary text-brandLight hover:text-brandPrimary font-bold ">
                                    Login
                                </Link>
                                <Link to="/auth/register" className="btn bg-brandSecondary text-brandLight hover:text-brandSecondary font-bold lg:ml-2">
                                    Register
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-extrabold text-brandLight flex items-center gap-2 transform transition-all hover:scale-105 cursor-pointer duration-300">
                    {/* <img className="w-14" src={logo} alt="" /> */}
                    <h2>TMS</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-brandLight gap-2 font-bold ">{links}</ul>
            </div>
            <div className="navbar-end md:flex gap-3">
                <div>
                    {user && user?.email ? (
                        <div className="relative flex items-center gap-2 group">
                            <Link to="/myProfile" className="flex lg:ml-10 items-center gap-2">
                                <img className="w-14 h-14 rounded-full object-cover object-center" src={user?.photoURL} alt="" />
                            </Link>
                            <span className="absolute min-w-48 top-full right-0 lg:-right-10 mt-2 bg-brandLight text-brandPrimary font-bold border border-gray-200 rounded shadow-md p-3 text-sm hidden group-hover:block">
                                {user.displayName}
                            </span>
                        </div>
                    ) : (
                        <img className="rounded-full" src={userIcon} alt="user" />
                    )}
                </div>
                <div className="hidden lg:flex">
                    {user && user?.email ? (
                        <button onClick={logOut} className="btn bg-brandPrimary text-brandLight hover:text-brandPrimary font-bold">
                            Log out
                        </button>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link to="/auth/login" className="btn bg-brandPrimary text-brandLight hover:text-brandPrimary font-bold">
                                Login
                            </Link>
                            <Link to="/auth/register" className="btn bg-brandSecondary text-brandLight hover:text-brandSecondary font-bold">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
