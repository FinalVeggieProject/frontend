
import React from 'react';
import EditInput from './EditInput';
import {Link} from 'react-router-dom';
import UserService from '../services/UserService';

class EditRecipe extends React.Component {

    constructor(){
        super()

        this.state = {
            recipeToDisplay: {},
            showEditImage: false,
            showEditTitle: false,
            showEditIngredients: false,
            showEditDifficulty: false,
            showEditAuthor: false,
            showEditDuration: false,
            showEditProcess: false
        }

    }

    service = new UserService();
    
    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }

    

    getRecipeInfo = ()=>{
      this.service.getRecipe(this.props.match.params.id)
        .then((result)=>{
          this.setState({recipeToDisplay: result[0]})
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    componentDidMount(){
      this.getRecipeInfo()
    }


    render(){
      console.log(this.state.recipeToDisplay)
        return(
            <div className="misdatos">

            <Link to="/profile">Back to Profile</Link> <br/><br/>

            <strong>Imagen de la receta:</strong> <img src={this.state.recipeToDisplay.image} alt={this.state.recipeToDisplay.title} />
            {this.state.showEditImage && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                                recipe
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditImage, 'showEditImage')}>Editar</button> <br /><br/><hr></hr>
    
            <strong>Titulo de la receta:</strong> <p>{this.state.recipeToDisplay.title}</p>
            {this.state.showEditTitle && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="title"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditTitle, 'showEditTitle')}>Editar</button>  <br /><br/><hr></hr>

    
            <strong>Ingredientes:</strong> <p>{this.state.recipeToDisplay.ingredients}</p>
            {this.state.showEditIngredients && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="ingredients"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditIngredients, 'showEditIngredients')}>Editar</button> <br /><br/><hr></hr>


            <strong>Dificultad:</strong> <p>{this.state.recipeToDisplay.difficulty}</p>
            {this.state.showEditDifficulty && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="difficulty"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditDifficulty, 'showEditDifficulty')}>Editar</button> <br /><br/><hr></hr>


            <strong>Duracion:</strong> <br/><br/> <p>{this.state.recipeToDisplay.duration}</p>
            {this.state.showEditDuration && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="duration"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                            />}
            <p><button onClick={()=>this.toggleShowEditName(this.state.showEditDuration, 'showEditDuration')}>Editar</button></p><br /><br/><hr></hr>


            <strong>Elaboración:</strong> <p>{this.state.recipeToDisplay.process}</p>
            {this.state.showEditProcess && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="process"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditProcess, 'showEditProcess')}>Editar</button> <br /><br/><hr></hr>




            </div>
        )
    }

   
} 

export default EditRecipe;