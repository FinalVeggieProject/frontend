import React from 'react';
import UserService from '../services/UserService';

class EditInput extends React.Component{
  
  service = new UserService();
  
  state = {
    recipeToEdit: {},
    recipeToDisplay: {},
    restaurantToEdit: {},
    restaurantToDisplay: {}
  }

// EDIT RECIPES
    submitEditRecipe = (event) => {
    event.preventDefault();
		this.service
    .editRecipe(this.state.recipeToEdit, event.target[0].name, event.target[0].id)
      .then((result)=>{
        this.props.getRecipeInfo();
      })
      .catch((err)=>{
        console.log('Sorry something went wrong on edit recipe.', err);
      })
  };

  changeHandlerEditRecipe = (_eventTarget) => {
    this.setState({ recipeToEdit: { ...this.state.recipeToEdit, [_eventTarget.name]: _eventTarget.value, id: _eventTarget.id} });
};

  // EDIT RESTAURANTS
  submitEditRestaurant = (event) => {
    event.preventDefault();
		this.service
    .editRestaurant(this.state.restaurantToEdit, event.target[0].name, event.target[0].id)
      .then((result)=>{
        this.props.getRestaurantInfo();
      })
      .catch((err)=>{
        console.log('Sorry something went wrong on edit restaurant.', err);
      })
  };

  changeHandlerEditRestaurant = (_eventTarget) => {
      this.setState({ restaurantToEdit: { ...this.state.restaurantToEdit, [_eventTarget.name]: _eventTarget.value, id: _eventTarget.id} });
  };

  render(){


    if(this.props.id && this.props.recipe){
      return(
        <form onSubmit={this.submitEditRecipe}>
            <input 
                type="text" 
                name={this.props.nameValue}
                id={this.props.id} 
                placeholder={'new ' + this.props.nameValue}
                value={this.state.recipeToEdit[this.props.nameValue]}
                onChange={(event)=>this.changeHandlerEditRecipe(event.target)}   
                />
            <button type="submit">Editar {this.props.nameValue}</button>
        </form>
      )
    } else if (this.props.id && this.props.restaurant){
      return(
        <form onSubmit={this.submitEditRestaurant}>
            <input 
                type="text" 
                name={this.props.nameValue}
                id={this.props.id} 
                placeholder={'new ' + this.props.nameValue}
                value={this.state.restaurantToEdit[this.props.nameValue]}
                onChange={(event)=>this.changeHandlerEditRestaurant(event.target)}   
                />
            <button type="submit">Editar {this.props.nameValue}</button>
        </form>
      )
    } else {
      return(
              <form onSubmit={this.props.submitEdit}>
                  <input 
                      type="text" 
                      name={this.props.nameValue}
                      placeholder={'new ' + this.props.nameValue}
                      value={this.props.userToEdit[this.props.nameValue]}
                      onChange={(event)=>this.props.changeHandlerEdit(event.target)}   
                      />
                  <button type="submit">Editar {this.props.nameValue}</button>
              </form>
      )  
    }
}

}

export default EditInput;