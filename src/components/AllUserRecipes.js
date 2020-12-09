import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';

const AllUserRecipes = (props)=>{

  

    
    return(
        <div>
        <Link to="/profile">Back to Profile</Link> <br/><br/>
        <h2>All my recipes:</h2>
       
        {props.userRecipes.map((recipe, index)=>{
            return <RecipeCard key={index} recipe={recipe}/>
        })}
        
    </div>
  )
}

export default AllUserRecipes;