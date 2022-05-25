import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className="text-3xl text-center font-bold">Welcome To DashBoard</h1>
                <Outlet />
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreview'>Add A Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;