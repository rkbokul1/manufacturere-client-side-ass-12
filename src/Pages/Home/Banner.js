import React from 'react';
import banner from '../../assests/banner.jpg'

const Banner = () => {
    return (
        <div style={{ background: `url(${banner})`, backgroundSize: 'cover' }} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                <img src={banner} alt='' className="max-w-md rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Box Office News!</h1>
                    <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;