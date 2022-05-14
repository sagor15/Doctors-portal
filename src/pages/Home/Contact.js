import React from 'react';
import appointment from "../../assets/images/appointment.png"

const Contact = () => {
    
    return (
        <section style={{background:`url(${appointment})`,backgroundAttachment:'fixed'}} className=' mt-[150px] h-auto '>
            <h1 className='text-primary text-center font-bold text-xl'>contact us</h1>
            <h1 className='text-center py-5 text-3xl font-light text-white'>Stay connected with us</h1>
        <div className='py-20 text-center'>
            <input type="text" placeholder="Email Address" className="input input-bordered input-accent w-full max-w-xs" />
            <br/><br/>
            <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs" />
            <br/><br/>
            <textarea className="textarea textarea-accent w-full max-w-xs" placeholder="Your Messege"></textarea>
            <br/><br/><br/>
            <button className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Submit</button>
        </div>
        
        </section>
    );
};

export default Contact;