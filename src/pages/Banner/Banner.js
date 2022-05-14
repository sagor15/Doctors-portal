import React from 'react';
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";



const Banner = () => {
  return (
    <section >
      <div className="hero min-h-screen" style={{background:`url(${chair})` , backgroundRepeat: 'no-repeat' , backgroundSize:'cover',backgroundAttachment:'fixed'} }>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <h1 className="text-5xl text-white font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 text-light font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Get Started</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;