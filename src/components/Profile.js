import React from 'react';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
 
    componentDidMount(){
      this.props.displayUserRecipes();
    }

  render(){
    console.log(this.props.isLogged);
    const logout = this.props.logOut;
    return(
      <div className="profile">
        {
          this.props.isLogged.image
          ? <img src={this.props.isLogged.image} alt={this.props.isLogged.username} />
          :<img src="/images/profile.png" alt="default profile"/>
        }
        <h2>Bienvenido {this.props.isLogged.username}!</h2>
        <p>{this.props.isLogged.email}</p>
  
        <Link to="/misdatos">Mis Datos</Link> <br/><br/>
        <Link to="/addrecipe">Añadir receta</Link> <br/><br/>
        <Link to="/allmyrecipes">Ver todas mis recetas</Link> <br/><br/>
  
  
        <button onClick={()=>{
          logout();
        }}>Log Out</button>
      </div>
    )

  }
}
export default Profile;