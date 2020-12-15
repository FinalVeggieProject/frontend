import React from 'react';
import RestaurantCard from './RestaurantCard';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import '../styles/AllUserRestaurants.css';

class AllUserRestaurants extends React.Component {

    service = new UserService();

    componentDidMount(){
        this.props.displayUserRestaurants();
    }

    // DELETE RESTAURANTS:
    deleteRestaurant = (id) => {
        this.service.deleteRestaurant(id)
          .then(()=>{
            this.props.displayUserRestaurants();
          })
          .catch((err)=>{
            console.log(err);
          });
      }
    render(){
        return(
            <div className="userRestaurants">
                {this.props.isLogged.username
                ?<Link to="/profile">Volver a mi pefil</Link> 
                :<Link to="/">Volver a Inicio</Link>
                }
                <h2>All my restaurants:</h2>
       
                {this.props.userRestaurants.map((restaurant, index)=>{
                    return (
                        <div key={index}>
                            <RestaurantCard key={index} restaurant={restaurant}/>
                            <button className="delete-button" onClick={()=>{this.deleteRestaurant(restaurant._id)}}> <i className="delete-image fas fa-trash-alt"></i> </button>
                        </div>
                        )
                })}
            </div>
    )
    }
} 

  
        


export default AllUserRestaurants;