import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.ini';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);

    }

    const menu = <>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='purchase'>Purchase</Link></li>
        <li><Link to='blog'>BLog</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        {
            user ?
                <>
                    <div className="dropdown">
                        <label tabIndex="0"><button className="btn btn-md btn-ghost">Dashboard</button></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>My Profile</Link></li>
                            <li><Link to='/'>My Orders</Link></li>
                            <li><Link to='/'>Add a Review</Link></li>
                            <li><button onClick={handleSignOut} >Sign out</button></li>
                        </ul>
                    </div>
                    {/* <li><button onClick={handleSignOut} >Sign out</button></li> */}

                </>
                :
                <li><Link to='login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;