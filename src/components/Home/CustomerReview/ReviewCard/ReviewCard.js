import { Rating } from '@material-ui/lab';
import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-2 shadow m-3 text-center">
            <img className="m-2 p-1" src={review.photo} alt="" style={{borderRadius:'50%'}}/>
            <br/>
            <p>{review.title}</p>
            <Rating name="half-rating-read" defaultValue={parseInt(review.stars)} precision={0.5} readOnly />
            <p><small>{review.description}</small></p>
        </div>
    );
};

export default ReviewCard;