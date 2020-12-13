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
        showEditRecipeProcess: false,
};

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
                    {this.state.showEditRecipeImage && <EditInput 
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit, this.displayRecipe}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                                recipe
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeImage, 'showEditRecipeImage')}>Editar</button> 
                    <br /><br/><hr></hr>


                    <h2>{this.state.recipeInfo.title}</h2>
                    {this.state.showEditRecipeTitle && <EditInput 
                                                nameValue="title"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeTitle, 'showEditRecipeTitle')}>Editar</button> 
                    <br /><br/><hr></hr>



                    <p>{this.state.recipeInfo.ingredients}</p>

                    {this.state.showEditRecipeIngredients && <EditInput 
                                                nameValue="ingredients"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeImage, 'showEditRecipeImage')}>Editar</button> 
                    <br /><br/><hr></hr>



                    <p>{this.state.recipeInfo.difficulty}</p>
                    {this.state.showEditRecipeDifficulty && <EditInput 
                                                nameValue="difficulty"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeDifficulty, 'showEditRecipeDifficulty')}>Editar</button> 
                    <br /><br/><hr></hr>



                    <p>{this.state.recipeInfo.duration}</p>
                    {this.state.showEditRecipeDuration && <EditInput 
                                                nameValue="duration"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeDuration, 'showEditRecipeDuration')}>Editar</button> 
                    <br /><br/><hr></hr>



                    <p>{this.state.recipeInfo.process}</p>
                    {this.state.showEditRecipeProcess && <EditInput 
                                                nameValue="process"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.recipeToEdit}
                                                id={this.props.match.params.id}
                                                recipeInfo={this.state.recipeInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRecipeProcess, 'showEditRecipeProcess')}>Editar</button> 
                    <br /><br/><hr></hr>

                    


                </div>
        )
    }
} 

    

export default Recipe;