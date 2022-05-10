import React from 'react';
import CardInfo from './CardInfo';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20 '>
            <CardInfo title='Opening Hours' bgColor='bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary' 
            text='Lorem Ipsum is simply dummy text of the pri' img={clock} ></CardInfo>
            <CardInfo title='Our Locations' bgColor='bg-accent ' text='Brooklyn, NY 10036, United States'
             img={marker}></CardInfo>
            <CardInfo title='Our Contact' bgColor='bg-gradient-to-r from-secondary to-primary hover:from-primary 
            hover:to-secondary' text='+000 123 456789'  img={phone}></CardInfo>
        </div>
    );
};

export default Info;