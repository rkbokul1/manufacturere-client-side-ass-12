import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Enroll from './Enroll';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <Reviews/>
            <Enroll/>
            <Footer/>            
        </div>
    );
};

export default Home;