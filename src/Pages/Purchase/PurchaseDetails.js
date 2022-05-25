import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.ini';

const PurchaseDetails = ({ singleTool }) => {
    const [user] = useAuthState(auth)
    return (
        <section>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form >
                        <input type="text" value={user.displayName} readOnly class="input input-bordered w-full max-w-xs mb-2" />
                        <input type="text" value={user.email} readOnly class="input input-bordered w-full max-w-xs" />
                        
                    </form>

                </div>
            </div>
        </section>
    );
};

export default PurchaseDetails;