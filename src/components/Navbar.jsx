import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const Navbar = () => {

    const [toggleName, setToggleName] = useState(false);
    const Navigate = useNavigate();

    const handleLogout = () => {
        console.log("clicked");
        signOut(auth)
            .then(() => {
                toast("Logout Succesfull")
                Navigate("/");
            })
            .catch((err) => {
                toast(err);
            })
    }

    const { user } = useAuth();
    // console.log(user);
    const links = <>
        <NavLink to={'/'}
            className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
            }>
            <li>Home</li>
        </NavLink>
        <NavLink to={user ? "/profile" : "/login"}
            className={({ isActive }) =>
                isActive ? "text-purple-600 font-semibold" : ""
            }>
            <li>My Profile</li>
        </NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className=" relative flex items-center gap-4"
                        >
                            <img
                                src={user.photoURL || "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"}
                                alt="profile"
                                className="w-8 h-8 rounded-full border-2 border-primary object-cover"
                                onMouseEnter={() => setToggleName(true)}
                                onMouseLeave={() => setToggleName(false)}
                            />
                            <button className='btn-primary bg-red-700 text-white shadow-md px-5 rounded py-1' onClick={handleLogout}>Logout</button>


                            {
                                toggleName &&
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded shadow-md w-full justify-center items-center right-5">
                                    {user.displayName}
                                </div>
                            }
                        </div>

                    ) : (
                        <div className=' flex gap-5'>
                            <Link className="btn btn-primary" to="/login">Login Now</Link>
                            <Link className="btn btn-primary" to="/signup">Signup Now</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;