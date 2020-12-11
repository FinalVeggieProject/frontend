import React from 'react';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom';
import EditInput from './EditInput';

class Restaurant extends React.Component{
  state = {
    restaurantInfo: {},
  };

  service = new UserService();


  componentDidMount(){
    this.service.showrestaurant(this.props.match.params.id)
      .then((result)=>{
        this.setState({restaurantInfo: result[0]})
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  render(){
    return(
      <div>
        <h2>Hola</h2>
      </div>
    )
  }
}

export default Restaurant;