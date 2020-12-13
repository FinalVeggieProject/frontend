import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Profile.css';

class Profile extends React.Component {


  render(){
    return(
      <div className="profile">
        {
          this.props.isLogged.image
          ? <img src={this.props.isLogged.image} alt={this.props.isLogged.username} />
          :<img src="/images/profile.png" alt="default profile"/>
        }
        <h2>Bienvenido <span>{this.props.isLogged.username}</span>!</h2>
        <p>{this.props.isLogged.email}</p>
  
        <Link to="/misdatos">Mis Datos</Link> <br/><br/>
        <Link to="/addrecipe">Añadir receta</Link> <br/><br/>
        <Link to="/allmyrecipes">Ver todas mis recetas</Link> <br/><br/>
        <Link to="/addrestaurant">Añadir restaurante</Link> <br/><br/>
        <Link to="/allmyrestaurants">Ver mis restaurantes</Link> <br/><br/>
  
        
        
      </div>
    )
 
  }
}
export default Profile;