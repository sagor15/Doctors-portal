import React from 'react';
import Footer from '../../SharedPages/Navber/Footer';
import Banner from '../Banner/Banner';
import Services from '../services/Services';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=" container">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;