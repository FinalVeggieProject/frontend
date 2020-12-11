import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';

const AllUserRecipes = (props)=>{
    return(
        <div>
         {props.displayUserRecipes()}
            <Link to="/profile">Back to Profile</Link> <br/><br/>
            <h2>All my recipes:</h2>
        
            {props.userRecipes.map((recipe, index)=>{
                return (
                    <div key={index}>
                        <RecipeCard recipe={recipe} deleteRecipe={props.deleteRecipe}/>
                        <button onClick={()=>{props.deleteRecipe(recipe._id)}}>Eliminar Receta</button>
                    </div>
                    )
            })}
        
        </div>
  )
}

export default AllUserRecipes;