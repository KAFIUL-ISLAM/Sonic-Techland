import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const Dashboard = () => {


    return (
        <div>
            <Header></Header>
            <div class="drawer drawer-mobile">
                <input id="dashboard-menu" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col p-4">
                    <label htmlFor="dashboard-menu" class="my-4 text-2xl drawer-button lg:hidden w-fit"><i class="fa-solid fa-arrow-right-from-bracket"></i></label>
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard-menu" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to={"/dashboard"}>My Profile</Link></li>
                        <li><Link to={"/dashboard/orders"}>My Orders</Link></li>
                        <li><Link to={"/dashboard/additem"}>Add New Item</Link></li>
                        <li><Link to={"/dashboard/addreview"}>Add a review</Link></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;