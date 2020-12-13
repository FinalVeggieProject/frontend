import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RecipeCard.css';

const RecipeCard = (props)=>{
    const {title, image, _id} = props.recipe;
    const url = `recipe/${_id}`
    
    return(
        
        <Link to={url}>    
        
            <div className="recipe-card">
                {
                image
                ?<img src={image} alt={title} />
                :<img src="/images/default.jpg" alt="default recipe pic"/>
                }
                <h3>{title}</h3>
            </div>
        </Link>
        
    )
}

export default RecipeCard;