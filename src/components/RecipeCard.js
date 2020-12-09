import React from 'react';
import {Link} from 'react-router-dom';

const RecipeCard = (props)=>{

  const {title, image} = props.recipe;

    
    return(
        <Link to="/profile">
            <div className="recipe-card">
                <img src={image} alt={title}/>
                <h3>{title}</h3>
            </div>
        </Link>
    )
}

export default RecipeCard;