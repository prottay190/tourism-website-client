import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Welcome from '../WelCome/Welcome';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Welcome></Welcome>
           <Services></Services> 
           <Gallery></Gallery>
        </div>
    );
};

export default Home;