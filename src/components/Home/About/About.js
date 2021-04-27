import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const About = () => {
    return (

        <section className="mb-5 mt-5 pt-5 bg-light">
            <div className="container">
                <h5 className="m-3"><FontAwesomeIcon icon={faGlobeAmericas} /> About NetBoost</h5>
                <div className="row d-flex justify-content-between">

                    <div className="col-md-5 mb-3">
                        <h2 className="m-3">Supercharge Your Mood With Gaming & Recreation </h2>
                        <p className="m-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum quia modi inventore ducimus in blanditiis. Iure delectus ex consequatur tenetur, eius quisquam. Sint, tempora incidunt. Optio corporis accusamus laudantium deserunt corrupti tempore, dicta, dolores quisquam expedita odio obcaecati, placeat perspiciatis? Et laboriosam autem possimus, velit perspiciatis beatae rerum culpa mollitia.
                    </p>
                        <hr />
                        <button className="btn btn-primary m-3">Need to Know More?</button>
                    </div>
                    <div className="col-md-5 about-right mt-3 mb-5">
                        <div className="d-flex justify-content-start align-items-start">
                            <div className="flex-payment text-center">
                                <h5>Flexible Payment</h5>
                                <h3>$15</h3>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end d-flex align-items-end">
                            <div className="net-speed text-center">
                                <h5>Up To</h5>
                                <h3>1 GB</h3>
                                <h5>Per Second</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;