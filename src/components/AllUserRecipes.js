import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';
import '../styles/AllUserRecipes.css';


const AllUserRecipes = (props)=>{
    // props.displayUserRecipes()
    return(
        <div className="userRecipes">
            <Link to="/profile">Volver a mi pefil</Link> <br/><br/>
            <h2>Mis recetas:</h2>
        
            {props.userRecipes.map((recipe, index)=>{
                return (
                    <div key={index}>
                        <RecipeCard recipe={recipe} deleteRecipe={props.deleteRecipe}/>
                        <button className="delete-button" onClick={()=>{props.deleteRecipe(recipe._id)}}> <img className="trash" src="/images/trash.svg" alt="trash icon"/> </button>
                    </div>
                    )
            })}
        
        </div>
  )
}

export default AllUserRecipes;