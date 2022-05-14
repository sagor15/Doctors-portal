// import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
// import { format } from 'date-fns';

const AppointmentBanner = ({date , setDate}) => {

    


    return (



        <section >
        <div className="hero min-h-screen" style={{background:`url(${chair})` , backgroundRepeat: 'no-repeat' , backgroundSize:'cover',backgroundAttachment:'fixed'} }>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md text-white font-bold">
            <DayPicker

                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />
            </div>
          </div>
        </div>
  
      </section>



    );
};

export default AppointmentBanner;