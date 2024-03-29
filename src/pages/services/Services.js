import React from 'react';
import Service from './Service';
import fluorid from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import thretment from "../../assets/images/treatment.png";

const Services = () => {
    return (

        <div className=''>
            <h1 className="text-secondary text-center py-7 text-2xl pt-15">Our Services</h1>
            <h1 className=" text-center py-5 text-3xl font-light">Services we Provided</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 mb-10">
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Fluoride Treatment" img={fluorid}></Service>
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Cavity Filling" img={cavity}></Service>
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Teeth Whitening" img={whitening}></Service>
            </div>



            <div className="hero min-h-screen container mx-auto ">
                <div className="hero-content max-w-4xl gap-16 flex-col lg:justify-center lg:flex-row">
                    <img src={thretment} className="max-w-xs  rounded-lg shadow-2xl" />
                    <div className="">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;