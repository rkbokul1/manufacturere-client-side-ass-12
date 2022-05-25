import React, { useEffect, useState } from 'react';
import Showorder from './Showorder';

const Order = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 className="text-center texxt-2xl font-bold my-3">Order Page</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    {
                        orders.map(( order, index) => <Showorder index={index} orders={orders} setOrders={setOrders} key={[order._id]} order={order} />)
                    }

                </table>
            </div>

        </div>
    );
};

export default Order;