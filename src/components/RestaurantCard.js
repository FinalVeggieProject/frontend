
import React from 'react';
import {Link} from 'react-router-dom';

const RestaurantCard = (props)=>{
    const {name, image, _id} = props.restaurant;
    const url = `restaurant/${_id}`
    
    return(
        <Link to={url}>    
            <div className="recipe-card">
            {
                image
                ?<img src={image} alt={name} />
                :<img src="/images/default.jpg" alt="default recipe pic"/>
                }
                <h3>{name}</h3>
            </div>
        </Link>
    )
}

export default RestaurantCard;