import React from 'react';
import RestaurantCard from './RestaurantCard'
import {Link} from 'react-router-dom';

const AllUserRestaurants = (props)=>{

  

    
    return(
        <div>
        <Link to="/profile">Back to Profile</Link> <br/><br/>
        <h2>All my restaurants:</h2>
       
        {props.userRestaurants.map((restaurant, index)=>{
            return <RestaurantCard key={index} restaurant={restaurant}/>
        })}
    </div>
  )
}

export default AllUserRestaurants;