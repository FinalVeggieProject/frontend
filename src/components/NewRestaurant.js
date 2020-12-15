import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NewRestaurant.css';

const NewRestaurant = (props)=>{
  return(
    <div className="newrecipe">
            
            <Link to="/profile">Volver a mi pefil</Link> 
            
      <h2>Add new restaurant</h2>

      <form onSubmit={props.submitRestaurant}>

      <label htmlFor="name"></label>
        <input 
            type="text" 
            name="name" 
            value={props.newRestaurant.name}
            placeholder="Nombre del restaurante" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>

        <label htmlFor="address"></label>
        <input 
            type="text" 
            name="address" 
            value={props.newRestaurant.address} 
            placeholder="Dirección" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="schedule"></label>
        <input 
            type="text" 
            name="schedule" 
            value={props.newRestaurant.schedule} 
            placeholder="Horario de atención al cliente" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="contact"></label>
        <input
            type="text"
            name="contact" 
            value={props.newRestaurant.contact} 
            placeholder="Teléfono de contacto" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        /> <br/>
       
        
        <label htmlFor="typeOfFood"></label>
        <input
            type="text"
            name="typeOfFood" 
            value={props.newRestaurant.typeOfFood} 
            placeholder="Categoría del restaurante" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="recomendations"></label>
        <input
            type="text"
            name="recomendations" 
            value={props.newRestaurant.recomendations} 
            placeholder="Especialidades / Recomendaciones" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="webUrl"></label>
        <input
            type="text"
            name="webUrl" 
            value={props.newRestaurant.webUrl} 
            placeholder="Sitio web del restaurante" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="image"></label>
        <input
            type="text"
            name="image" 
            value={props.newRestaurant.image} 
            placeholder="Url de imagen del restaurante" 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <button type="submit">Crear restaurante</button>
      </form><br/>


      

    </div>
  )
}

export default NewRestaurant;