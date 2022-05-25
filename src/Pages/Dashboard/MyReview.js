import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.ini';

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');

    console.log(user?.photoURL)

    const handleReviewSubmit = async (e) => {
        e.preventDefault()
        const review = {
            name: e.target.name.value,
            email: user.email,
            review: e.target.review.value,
            rating: e.target.rating.value,
            img: user.photoURL
        }

        const ratings = e.target.rating.value;
        if (ratings > 5) {
            setError(`you can't add more than 5`);
        }
        else {
            await fetch('http://localhost:5000/review', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Succesfully Added Review')
                    e.target.review.value = '';
                    e.target.rating.value = '';
                })
        }
    }

    return (
        <section className='grid justify-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-primary text-center font-bold">Add Your Review</h2>

                    <form onSubmit={handleReviewSubmit}>
                        <input name='name' type="text" value={user.displayName} disabled class="input input-bordered w-full max-w-xs mb-3" />
                        <textarea name='review' placeholder="Type Your Review" class="input input-bordered w-full max-w-xs mb-3" ></textarea>
                        <input name='rating' type="number" placeholder="Enter your rating 1 to 5" class="input input-bordered w-full max-w-xs mb-3" />
                        <p><small className='text-red-500 mb-3'>{error ? error : ''}</small></p>
                        <input className='btn btn-primary' type="submit" value='Send' />
                    </form>

                </div>
            </div>
            <form >

            </form>
        </section>
    );
};

export default MyReview;