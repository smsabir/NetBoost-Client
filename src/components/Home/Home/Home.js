import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { OrderContext, UserContext } from '../../../App';
import Contact from '../../Dashboard/Dashboard/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    
    return (

        <div style={{height:'100vh'}}>
            <Header></Header>
            <div id="services">
            <Services></Services>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <About></About>
            <CustomerReview></CustomerReview>
            <div id="contact">
            <Contact></Contact>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;