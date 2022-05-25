import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center text-primary'>Our Customer Reviews</h1>
            <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;