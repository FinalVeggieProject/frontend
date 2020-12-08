import React from 'react';
import {Link} from 'react-router-dom';

const Profile = (props)=>{
  const logout = props.logOut;
  return(
    <div>
      {
        props.isLogged.image
        ? <img src={props.isLogged.image} alt={props.isLogged.username} />
        :<img src="/images/profile.png" alt="default profile"/>
      }
      <h2>Bienvenido {props.isLogged.username}!</h2>
      <p>{props.isLogged.email}</p>

      <Link to="/misdatos">Mis Datos</Link> <br/><br/>


      <button onClick={()=>{
        logout();
      }}>Log Out</button>
    </div>
  )
}

export default Profile;