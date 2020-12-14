import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
// import EditInput from './EditInput';
import '../styles/Recipe.css';

class Recipe extends React.Component{

    constructor(props){
        super(props)

        this.state = {
                recipeInfo: {}
        };

        this.url = `/editrecipe/${this.props.match.params.id}`
    }

    

    service = new UserService();

    displayRecipe = () => {
        
        this.service.showrecipe(this.props.match.params.id)
            .then((result)=>{
                if(result){
                    this.setState({recipeInfo: result[0]});
                    return;
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    }



    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }    

    componentDidMount(){
        this.displayRecipe() 
    }

    // componentDidUpdate(){
    //     this.displayRecipeAfter();
    // }
    
    


    render(){
        
        return(
                <div className="recipe">
                    <Link to="/allmyrecipes">Back to Recipes</Link> <br/><br/>

                    <img src={this.state.recipeInfo.image} alt={this.state.recipeInfo.title}/>



                    <h2>{this.state.recipeInfo.title}</h2>



                    <h4>Ingredientes:</h4>
                    <p>{this.state.recipeInfo.ingredients}</p>



                    <h4>Dificultad (1-5):</h4>
                    {
                        this.state.recipeInfo.difficulty===1 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeInfo.difficulty===2 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeInfo.difficulty===3 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeInfo.difficulty===4 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeInfo.difficulty===5 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }



                    <h4>Tiempo (min):</h4>
                    <p>{this.state.recipeInfo.duration}</p>



                    <h4>Elaboración:</h4>
                    <p>{this.state.recipeInfo.process}</p>
 

                    
                    <Link to={this.url}>Ir a editar receta</Link> 
                    


                </div>
        )
    }
} 

    

export default Recipe;