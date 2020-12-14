import React from 'react';
import UserService from '../services/UserService';
import AwesomeSlider from 'react-awesome-slider';
import {Link} from 'react-router-dom';
import 'react-awesome-slider/dist/styles.css';
import '../styles/Home.css';

class Home extends React.Component {


    service = new UserService();

    state = {
        globalRecipes: [],
        globalRestaurants: []
    }

    getGlobalRecipes = () => {
        this.service.getallrecipes()
            .then((result)=>{
                this.setState({globalRecipes: result})
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    getGlobalRestaurants = () => {
        this.service.getallrestaurants()
            .then((result)=>{
                this.setState({globalRestaurants: result})
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    componentDidMount(){
        this.getGlobalRecipes();
        this.getGlobalRestaurants();
    }

    render(){
        return(
            <div className="home">
                <AwesomeSlider className="recipesSlider">
                {
                    this.state.globalRecipes.map((recipe)=>{
                        return(<div data-src={recipe.image}> <Link to={`/recipe/` + recipe._id}>link</Link> </div>)
                    })
                }
                </AwesomeSlider>
                

                <AwesomeSlider className="restaurantsSlider">
                {
                    this.state.globalRestaurants.map((restaurant)=>{
                        return(<div data-src={restaurant.image}> <Link to={`/restaurant/` + restaurant._id}>link</Link> </div>)
                    })
                }
                </AwesomeSlider>
            </div>
        )
    }

   
} 

export default Home;