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
                {/* mobile dropdown  */}
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
                    <img className="w-14" src={logo} alt="" />
                    <h2>TMS</h2>
                </Link>
            </div>

            {/* desktop menu  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-brandLight gap-2 font-bold ">{links}</ul>
            </div>

            {/* user */}
            <div className="navbar-end hidden md:flex gap-3">
                {/* cart  */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>

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
                            <Link to="/dashboard" className="btn font-bold w-full badge">
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
