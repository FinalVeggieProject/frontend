import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';

class AllRecipes extends React.Component {

    service = new UserService();

    state = {
        globalRecipes: [],
    }

    getGlobalRecipes = () => {
        this.service.getglobalrecipes()
            .then((result)=>{
                this.setState({globalRecipes: result})
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    componentDidMount(){
        this.getGlobalRecipes();
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
            
                {this.state.globalRecipes.map((recipe, index)=>{
                    return (
                        <div key={index}>
                            <RecipeCard recipe={recipe}/>
                        </div>
                        )
                })}
            </div>
        )
    }

   
} 

export default AllRecipes;