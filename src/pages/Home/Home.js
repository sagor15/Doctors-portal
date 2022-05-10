import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div class=" container">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;