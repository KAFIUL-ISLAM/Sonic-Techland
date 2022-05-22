import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between bg-slate-200 px-4 py-2'>
                <div className='flex flex-col md:flex-row gap-2'>
                    <p>
                        <i className="far fa-envelope"></i>
                        info.sonic@techland.com</p>
                    <p>
                        <i className="fas fa-location-dot"></i>
                        Bogura sadar, Bangladesh</p>
                </div>
                <div className='hidden md:block'>
                    <ul className="flex gap-8">
                        <li>
                            <i className="fab fa-facebook-f"></i>
                        </li>
                        <li>
                            <i className="fab fa-linkedin-in"></i>
                        </li>
                        <li>
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i className="fab fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar bg-base-100 py-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-2xl">Sonic Techland</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='hidden md:block mx-4 text-lg font-semibold'>{user?.displayName}</p>
                    {user ?
                        <button onClick={handleLogout} className="btn text-white">Logout</button>
                        :
                        <Link to="/login" className="btn text-white">Login</Link>
                    }
                </div>
            </div>
         </div>
    );
};

export default Header;