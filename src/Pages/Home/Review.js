import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    return (
        <div >
            <div className="card max-w-sm bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={review.user?.img} alt='' />
                            </div>
                        </div>
                        <h2 className="card-title ml-5">{review.user.name}</h2>
                    </div>

                    <p>{review.user.review}</p>
                    <div className="rating">
                        <Rating placeholderRating={review.user.rating} readonly />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;