import React, { useContext, useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';
import { faBroadcastTower, faGamepad, faPooStorm, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderContext } from '../../../App';
import { useHistory } from 'react-router';

const Services = () => {
    let history = useHistory();
    const[services, setServices] = useState([]);
    const[orders, setOrders]= useContext(OrderContext);

    useEffect(() => {
        fetch('https://immense-thicket-36192.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleClick = (event, data) =>{
        setOrders(data);
        console.log(data)
        history.push('/addOrders');
    }
    

    return (
        <section id="services" className="container text-center mb-3">
                <h5><FontAwesomeIcon style={{fontSize: '50px'}} icon={faBroadcastTower}></FontAwesomeIcon></h5>
                <h5 className="p-3">NetBoost ISP Features</h5>
                <h2 className="p-3">Best Internet Service Provider <br/>in the City! </h2>
            <div className="row justify-content-center">
                {
                  services.length === 0? 
                  <div class="spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div> : services.map(service => <ServicesCard key={service._id} service={service} handleClick={handleClick}></ServicesCard> )
                }
                
            </div>
        </section>
    );
};

export default Services;