import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.ini';


const PurchaseDetails = ({ singleTool }) => {
    const [user] = useAuthState(auth);



    const onHandleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            product: event.target.pName.value,
            adress: event.target.adress.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast("Successful to place an order!");
                event.target.adress.value = '';
                event.target.phone.value = '';
                event.target.quantity.value = '';
            })
    };

    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form name='purchaseForm' onSubmit={onHandleSubmit}>
                        <input name='pName' type="text" value={singleTool.Name} readOnly class="input input-bordered w-full max-w-xs mb-2" />
                        <input name='name' type="text" value={user.displayName} readOnly class="input input-bordered w-full max-w-xs mb-2" />
                        <input name='email' type="email" value={user.email} readOnly class="input input-bordered w-full max-w-xs mb-2" />
                        <input name='adress' type="text" placeholder='Adress' required class="input input-bordered w-full max-w-xs mb-2" />
                        <input name='phone' type="text" placeholder='Phone' required class="input input-bordered w-full max-w-xs mb-2" />
                        <input name='quantity' type="number" placeholder='quantity' required class="input input-bordered w-full max-w-xs mb-2" />

                        <input type="submit" className='btn' value='PURCHASE' />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default PurchaseDetails;