import React from 'react';
import './OrderHistoryCard.css'

const OrderHistoryCard = ({data}) => {

    let color;
    if(data.status === 'pending'){
        color = '#f5f5f5';
    }
    else if(data.status === 'processing'){
        color = '#ffc7a8';
    }
    else{
        color = '#ccffd9';
    }
    return (
        <div id="history-card" className="col-md-4 col-sm-3 col-6 pl-4 history-card shadow mb-5 " >
            <h5>{data.prodName}</h5>
            <p>Payment ID: <small>{data.paymentId}</small></p>
            <p>Date: <small>{data.OrderDate}</small></p>
            <p>Current Status: {<span className="status rounded text-capitalize" style={{backgroundColor: color, color:'gray', width:'70%', padding: '7px'}}>{data.status}</span> }</p>
        </div>
    );
};

export default OrderHistoryCard;