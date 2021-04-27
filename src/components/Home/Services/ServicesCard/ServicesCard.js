import { faGamepad, faPooStorm, faShoppingBasket, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ServicesCard.css'

const ServicesCard = (props) => {
    const {name, description, image} = props.service;
    return (
        <div id="service-card" className="col-md-2 col-sm-3 col-6 service-card shadow mb-5" onClick={(event) => props.handleClick(event, props.service)} >
            <img style={{height: '50px'}} src={`data:image/png;base64,${image.img}`} alt=""/>
            <div id="card-info">
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            <FontAwesomeIcon id="cart-icon" icon={faShoppingBasket } style={{color: 'gray'}}></FontAwesomeIcon>
        </div>
    );
};

export default ServicesCard;