import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer z-8">
            <input id="drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">                
                <Outlet />
                <label for="drawer" class=""><h1 className="text-3xl text-center font-bold">Welcome To DashBoard</h1></label>
            </div>

            <div class="drawer-side">
                <label for="drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/'>My Profile</Link></li>
                    <li><Link to='/'>My Orders</Link></li>
                    <li><Link to='/'>Add a Review</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;