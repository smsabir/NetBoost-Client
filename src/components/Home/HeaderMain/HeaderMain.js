import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Link } from 'react-router-dom';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className="container mb-5 text-white">
            <div className=" row mt-5 header-list d-flex align-items-center">
                <div className="col-md-6 mb-5">
                    <div className="row">
                        <h1>Experience Amazing Speed <br/>
                            <span className="text-danger">With NetBoost</span></h1>
                        <div className="col-md-6 p-3 ">
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Home Broadband</li>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Mobile Connection</li>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> 99% Internet Uptime</li>
                            </ul>
                        </div>
                        <div className="col-md-6 p-3">
                            <ul>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Cell Phone Connection</li>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> IP TV Box</li>
                                <li><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> Online Gaming</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                        <img src="image/game-streaming.jpg" alt=""/>
                        <Link to="/dashboard"><button className="btn btn-primary mt-3 mb-5">Check Packages!</button></Link>
                        
                </div>

            </div>

        </main>
    );
};

export default HeaderMain;