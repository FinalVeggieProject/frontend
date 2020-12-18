import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
// import EditInput from './EditInput';

class Restaurant extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            restaurantInfo: {}
        }

        this.url = `/editrestaurant/${this.props.match.params.id}`
    }


    service = new UserService();

    displayRestaurant(){

        this.service.showrestaurant(this.props.match.params.id)
            .then((result)=>{
                if(result){
                    this.setState({restaurantInfo: result.data[0]});
                    return;
                }
            })
            .catch((err)=>{
                console.log(err);
            });
    };


    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }    

    componentDidMount(){
        this.displayRestaurant();
    }


    render(){
        return(
                <div className="recipe">
                    <div className="back-buttons">
                        {this.props.isLogged.username
                        ?<Link to="/allmyrecipes">Ir a mis Recetas</Link> 
                        :<Link to="/">Volver a Inicio</Link>
                        } 
                        {this.props.isLogged.username && <Link to="/allrecipes">Ir a las Recetas</Link> }
                    </div>

                    <img src={this.state.restaurantInfo.image} alt={this.state.restaurantInfo.name}/>



                    <h2>{this.state.restaurantInfo.name}</h2>




                    <p>{this.state.restaurantInfo.address}</p>



                    <p>{this.state.restaurantInfo.schedule}</p>



                    <p>{this.state.restaurantInfo.contact}</p>



                    <p>{this.state.restaurantInfo.typeOfFood}</p>



                    <p>{this.state.restaurantInfo.recomendations}</p>



                    <p>Sitio web: {this.state.restaurantInfo.webUrl} </p>


                    {this.props.isLogged.username===this.state.restaurantInfo.owner && <Link to={this.url}>Ir a editar restaurante</Link> } 

                    


                </div>
        )
    }
} 

    

export default Restaurant;