import React from 'react';
import RecipeCard from './RecipeCard';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import '../styles/AllUserRecipes.css';


class AllUserRecipes extends React.Component {

    service = new UserService();

    componentDidMount(){
        this.props.displayUserRecipes();
    }


    // DELETE RECIPES:
    deleteRecipe = (id) => {
    this.service.deleteRecipe(id)
      .then(()=>{
        this.props.displayUserRecipes();
      })
      .catch((err)=>{
        console.log(err);
      });
  }

    render(){
        return(
            <div className="userRecipes">
            {this.props.isLogged.username
            ?<Link to="/profile">Volver a mi pefil</Link> 
            :<Link to="/">Volver a Inicio</Link>
            }
            <br/><br/>
                <h2>Mis recetas:</h2>
            
                {this.props.userRecipes.map((recipe, index)=>{
                    return (
                        <div key={index}>
                            <RecipeCard recipe={recipe} deleteRecipe={this.deleteRecipe}/>
                            <button className="delete-button" onClick={()=>{this.deleteRecipe(recipe._id)}}> <i className="delete-image fas fa-trash-alt"></i> </button>
                        </div>
                        )
                })}
            </div>
        )
    }
} 
    // this.props.displayUserRecipes()


export default AllUserRecipes;