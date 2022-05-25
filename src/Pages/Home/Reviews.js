import React from 'react';

const Reviews = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center text-primary'>Our Customer Reviews</h1>
            <div className='py-10 grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* 1 */}
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                            <h2 className="card-title ml-5">Jack Juck</h2>
                        </div>

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                                </div>
                            </div>
                            <h2 className="card-title ml-5">Kerry Belly</h2>
                        </div>

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked/>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex'>
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=40311" alt='' />
                                </div>
                            </div>
                            <h2 className="card-title ml-5">Thomas Hooks</h2>
                        </div>

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;