import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Enroll from './Enroll';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <Summary/>
            <Reviews/>
            <Enroll/>
            <Footer/>            
        </div>
    );
};

export default Home;