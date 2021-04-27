import React from 'react';

const Contact = () => {
    return (
       <section id="contact-form" className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-black mb-5">
                    <h5 className="text-secondary">Contact</h5>
                    <h1>Still Confuse? Let Us Help You Out!</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;