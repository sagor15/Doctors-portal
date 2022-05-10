import React from 'react';

const CardInfo = ({img,bgColor,title,text}) => {
    return (
        <div class={`card card-side bg-base-100 shadow-xl px-5 place-content-center  ${bgColor}`}>
        <figure><img src={img} /></figure>
        <div class="card-body text-white">
          <h2 class="card-title ">{title}</h2>
          <p>{text}</p>
          
        </div>
      </div>
    );
};

export default CardInfo;