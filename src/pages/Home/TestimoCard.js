import React from 'react';

const TestimoCard = ({ review }) => {
    return (
        <div class="card shadow-xl bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white ">
            <div class="card-body">

                <p className='font-bold'>It is a long established fact that by the readable content of a lot layout. The point
                    of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div class="flex items-center justify-evenly">
                    <div class="avatar flex-none">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>{review.name}</h1>
                        <p>{review.loacation}</p>
                    </div>
                </div>
                <div class="rating justify-center py-7">
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-white-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-white-500" checked />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-white-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-white-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-white-500" />
                </div>
            </div>
        </div>


    );
};

export default TestimoCard;