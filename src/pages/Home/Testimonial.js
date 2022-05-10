import React from 'react';
import people from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import qoute from "../../assets/icons/quote.svg";
import TestimoCard from './TestimoCard';


const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "walson qury",
            loacation: "california",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people
        }
        ,  {
            _id: 2,
            name: "walson qury",
            loacation: "california",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "walson qury",
            loacation: "california",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]


    return (
        <section>
            <h1 className='text-3xl text-primary text-center py-28'>Testimonial</h1>
            <div className='flex justify-between align-items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-28 lg:max-w-48' src={qoute} alt=""/>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            {
                reviews.map(review => <TestimoCard 
                key={review._id}
                review={review}
                
                ></TestimoCard>)
            }
            </div>
        </section>
    );
};

export default Testimonial;