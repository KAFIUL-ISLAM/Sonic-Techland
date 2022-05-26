import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-4">
                    <label htmlFor="dashboard-menu" className="my-4 text-2xl drawer-button lg:hidden w-fit"><i className="fa-solid fa-arrow-right-from-bracket"></i></label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to={"/dashboard"}>My Profile</Link></li>
                        {
                            !admin ?
                            <>
                                <li><Link to={"/dashboard/orders"}>My Orders</Link></li>
                                <li><Link to={"/dashboard/addreview"}>Add a review</Link></li>
                            </>
                            :
                            <>
                                <li><Link to={"/dashboard/additem"}>Add New Item</Link></li>
                                <li><Link to={"/dashboard/manageitem"}>Manage all items</Link></li>
                                <li><Link to={"/dashboard/manageorders"}>Manage all orders</Link></li>
                                <li><Link to={"/dashboard/manageusers"}>Manage users</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;