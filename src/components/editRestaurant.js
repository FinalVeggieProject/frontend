import React from 'react';
import EditInput from './EditInput';
import {Link} from 'react-router-dom';
import UserService from '../services/UserService';

class EditRestaurant extends React.Component {

    constructor(){
        super()

        this.state = {
            restaurantToDisplay: {},
            showEditRestaurantName: false,
            showEditRestaurantAddress: false,
            showEditRestaurantSchedule: false,
            showEditRestaurantContact: false,
            showEditRestaurantTypeOfFood: false,
            showEditRestaurantRecomendations: false,
            showEditRestaurantWebUrl: false,
            showEditRestaurantImage: false
        }

    }

    service = new UserService();
    
    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }

    

    getRestaurantInfo = ()=>{
      this.service.getRestaurant(this.props.match.params.id) 
        .then((result)=>{
          this.setState({restaurantToDisplay: result[0]})
        })
        .catch((err)=>{
          console.log(err);
        })
    }

    componentDidMount(){
      this.getRestaurantInfo();
    }


    render(){
        return(
            <div className="misdatos">

            {this.props.isLogged.username
            ?<Link to="/profile">Volver a mi pefil</Link> 
            :<Link to="/">Volver a Inicio</Link>
            }

            <img src={this.state.restaurantToDisplay.image} alt={this.state.restaurantToDisplay.name}/>
            {this.state.showEditRestaurantImage && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantImage, 'showEditRestaurantImage')}>Editar</button>  <br /><br/><hr></hr>

    
            <strong>Nombre del restaurante:</strong> <p>{this.state.restaurantToDisplay.name}</p>
            {this.state.showEditRestaurantName && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="name"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantName, 'showEditRestaurantName')}>Editar</button>  <br /><br/><hr></hr>


            <strong>Dirección:</strong>  <p>{this.state.restaurantToDisplay.address}</p>
            {this.state.showEditRestaurantAddress && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="address"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantAddress, 'showEditRestaurantAddress')}>Editar</button>  <br /><br/><hr></hr>


            <strong>Horario:</strong>  <p>{this.state.restaurantToDisplay.schedule}</p>
            {this.state.showEditRestaurantSchedule && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="schedule"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantSchedule, 'showEditRestaurantSchedule')}>Editar</button>  <br /><br/><hr></hr>


           
            <strong>Teléfono de contacto:</strong>  <p>{this.state.restaurantToDisplay.contact}</p>
            {this.state.showEditRestaurantContact && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="contact"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantContact, 'showEditRestaurantContact')}>Editar</button>  <br /><br/><hr></hr>


            
            <strong>Categoría del restaurante:</strong>  <p>{this.state.restaurantToDisplay.typeOfFood}</p>
            {this.state.showEditRestaurantTypeOfFood && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="typeOfFood"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantTypeOfFood, 'showEditRestaurantTypeOfFood')}>Editar</button>  <br /><br/><hr></hr>


            <strong>Especialidades y recomendaciones:</strong>  <p>{this.state.restaurantToDisplay.recomendations}</p>
            {this.state.showEditRestaurantRecomendations && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="recomendations"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantRecomendations, 'showEditRestaurantRecomendations')}>Editar</button>  <br /><br/><hr></hr>


            <strong>Sitio Web:</strong>  <p>{this.state.restaurantToDisplay.webUrl}</p>
            {this.state.showEditRestaurantWebUrl && <EditInput  
                                                id={this.props.match.params.id}
                                                nameValue="webUrl"
                                                changeHandlerEdit={this.props.changeHandlerEditRestaurant}
                                                getRestaurantInfo={this.getRestaurantInfo}
                                                restaurant
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantWebUrl, 'showEditRestaurantWebUrl')}>Editar</button>  <br /><br/><hr></hr>








            </div>
        )
    }

   
} 

export default EditRestaurant;