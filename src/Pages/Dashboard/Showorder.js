import React from 'react';
import { toast } from 'react-toastify';

const Showorder = ({ orders, order, index, setOrders }) => {

    const handleProductDelete = async (id) => {        
        await fetch(`https://enigmatic-lake-18516.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter( od => od._id !== id)
                    setOrders(remaining);                    
                    toast('Succesfully Deleted')
                })
    }

    return (
        <tbody>
            <tr>
                <th>{index + 1} </th>
                <td>{order.user.product}</td>
                <td>{order.user.quantity}</td>
                <td><button onClick={() => handleProductDelete(order._id)} className='btn btn-ghost'><span className='text-red-500 font-bold text-xl mr-2'>x</span> Delete</button></td>
            </tr>
        </tbody>
    );
};

export default Showorder;