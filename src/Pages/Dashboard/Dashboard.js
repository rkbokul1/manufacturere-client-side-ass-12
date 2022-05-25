import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-5">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className="text-3xl text-center font-bold">Welcome To DashBoard</h1>
                <Outlet />
                

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;