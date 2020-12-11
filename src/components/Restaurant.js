import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import EditInput from './EditInput';

class Restaurant extends React.Component{

    state = {
        restaurantInfo: {},
        showEditRestaurantName: false,
        showEditRestaurantAddress: false,
        showEditRestaurantSchedule: false,
        showEditRestaurantContact: false,
        showEditRestaurantTypeOfFood: false,
        showEditRestaurantRecomendations: false,
        howEditRestaurantWebUrl: false,
        howEditRestaurantImage: false
};

    service = new UserService();

    displayRestaurant(){
        this.service.showrestaurant(this.props.match.params.id)
            .then((result)=>{
                if(result){
                    this.setState({restaurantInfo: result.data[0]});
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    };

    // componentDidMount(){
        
    // };

    // componentDidUpdate(){
    //     this.displayRestaurant();
    // }

    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }    


    render(){
        this.displayRestaurant();
        return(
                <div className="recipe">
                    <Link to="/allmyrestaurants">Back to Restaurants</Link> <br/><br/>

                    <img src={this.state.restaurantInfo.image} alt={this.state.restaurantInfo.name}/>
                    {/* {this.state.showEditRestaurantImage && <EditInput 
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.restaurantToEdit}
                                                id={this.props.match.params.id}
                                                restaurantInfo={this.state.restaurantInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantImage, 'showEditRestaurantImage')}>Editar</button> 
                    <br /><br/><hr></hr> */}


                    <h2>{this.state.restaurantInfo.name}</h2>
                    {this.state.showEditRestaurantName && <EditInput 
                                                nameValue="name"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.restaurantToEdit}
                                                id={this.props.match.params.id}
                                                restaurantInfo={this.state.restaurantInfo}
                                            />}
                    <button onClick={()=>this.toggleShowEditName(this.state.showEditRestaurantName, 'showEditRestaurantName')}>Editar</button> 
                    <br /><br/><hr></hr>



                    <p>{this.state.restaurantInfo.address}</p>



                    <p>{this.state.restaurantInfo.schedule}</p>



                    <p>{this.state.restaurantInfo.contact}</p>



                    <p>{this.state.restaurantInfo.typeOfFood}</p>



                    <p>{this.state.restaurantInfo.recomendations}</p>



                    <p>Sitio web: {this.state.restaurantInfo.webUrl} </p>







                </div>
        )
    }
} 

    

export default Restaurant;