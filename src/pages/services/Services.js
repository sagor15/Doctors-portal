import React from 'react';
import Service from './Service';
import fluorid from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import thretment from "../../assets/images/treatment.png";

const Services = () => {
    return (

        <div className=''>
            <h1 class="text-secondary text-center py-7 text-2xl pt-15">Our Services</h1>
            <h1 class=" text-center py-5 text-3xl font-light">Services we Provided</h1>

            <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 mb-10">
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Fluoride Treatment" img={fluorid}></Service>
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Cavity Filling" img={cavity}></Service>
                <Service text="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" title="Teeth Whitening" img={whitening}></Service>
            </div>



            <div class="hero min-h-screen container mx-auto ">
                <div class="hero-content max-w-4xl gap-16 flex-col lg:justify-center lg:flex-row">
                    <img src={thretment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div class="">
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;