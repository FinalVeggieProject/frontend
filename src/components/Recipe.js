import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import EditInput from './EditInput';

class Recipe extends React.Component{

    state = {
        recipeInfo: {},
        showEditRecipeImage: false,
        showEditRecipeTitle: false,
        showEditRecipeIngredients: false,
        showEditRecipeDifficulty: false,
        showEditRecipeDuration: false,
        showEditRecipeProcess: false
};

    service = new UserService();

    componentDidMount(){
        this.service.showrecipe(this.props.match.params.id)
            .then((result)=>{
                this.setState({recipeInfo: result[0]});
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


    render(){

        return(
                <div className="recipe">
                    <Link to="/allmyrecipes">Back to Recipes</Link> <br/><br/>

                    <img src={this.state.recipeInfo.image} alt={this.state.recipeInfo.title}/>
                    {this.state.showEditRecipeImage && <EditInput 
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeImage, 'showEditRecipeImage')}>Editar</button> 
                    <br /><br/><hr></hr>


                    <h2>{this.state.recipeInfo.title}</h2>



                    <p>{this.state.recipeInfo.ingredients}</p>



                    <p>{this.state.recipeInfo.difficulty}</p>



                    <p>{this.state.recipeInfo.duration}</p>



                    <p>{this.state.recipeInfo.process}</p>




                </div>
        )
    }
} 

    

export default Recipe;