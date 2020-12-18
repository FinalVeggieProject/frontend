import React from 'react';
import UserService from '../services/UserService';

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
            <div className="allrecipes">
                {console.log(this.state.globalRecipes)}
            </div>
        )
    }

   
} 

export default AllRecipes;