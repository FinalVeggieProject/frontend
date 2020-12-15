
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

            {this.props.isLogged.username
            ?<Link to="/profile">Volver a mi pefil</Link> 
            :<Link to="/">Volver a Inicio</Link>
            }

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
                                                recipe
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditTitle, 'showEditTitle')}>Editar</button>  <br /><br/><hr></hr>

    
            <strong>Ingredientes:</strong> <p>{this.state.recipeToDisplay.ingredients}</p>
            {this.state.showEditIngredients && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="ingredients"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                                recipe
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditIngredients, 'showEditIngredients')}>Editar</button> <br /><br/><hr></hr>


            <strong>Dificultad:</strong> 
            {
                        this.state.recipeToDisplay.difficulty===1 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeToDisplay.difficulty===2 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeToDisplay.difficulty===3 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeToDisplay.difficulty===4 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }
                    {
                        this.state.recipeToDisplay.difficulty===5 &&   <p className="rating">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </p>
                    }

            {this.state.showEditDifficulty && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="difficulty"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                                recipe
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditDifficulty, 'showEditDifficulty')}>Editar</button> <br /><br/><hr></hr>


            <strong>Duracion:</strong> <br/><br/> <p>{this.state.recipeToDisplay.duration}</p>
            {this.state.showEditDuration && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="duration"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                                recipe
                                            />}
            <p><button onClick={()=>this.toggleShowEditName(this.state.showEditDuration, 'showEditDuration')}>Editar</button></p><br /><br/><hr></hr>


            <strong>Elaboración:</strong> <p>{this.state.recipeToDisplay.process}</p>
            {this.state.showEditProcess && <EditInput 
                                                id={this.props.match.params.id}
                                                nameValue="process"
                                                changeHandlerEdit={this.props.changeHandlerEditRecipe}
                                                getRecipeInfo={this.getRecipeInfo}
                                                recipe
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditProcess, 'showEditProcess')}>Editar</button> <br /><br/><hr></hr>




            </div>
        )
    }

   
} 

export default EditRecipe;