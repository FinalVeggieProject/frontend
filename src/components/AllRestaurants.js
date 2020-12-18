import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard';

class AllRestaurants extends React.Component {

    service = new UserService();

    state = {
        globalRestaurants: [],
    }

    getGlobalRestaurants = () => {
        this.service.getglobalrestaurants()
            .then((result)=>{
                this.setState({globalRestaurants: result})
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    componentDidMount(){
        this.getGlobalRestaurants();
    }

    render(){
        return(
            <div className="userRecipes">
                {this.props.isLogged.username
                ?<Link to="/profile">Volver a mi pefil</Link> 
                :<Link to="/">Volver a Inicio</Link>
                }
            <br/><br/>
                <h2>Recetas:</h2>
            
                {this.state.globalRestaurants.map((restaurant, index)=>{
                    return (
                        <div key={index}>
                            <RestaurantCard restaurant={restaurant}/>
                        </div>
                        )
                })}
            </div>
        )
    }

   
} 

export default AllRestaurants;