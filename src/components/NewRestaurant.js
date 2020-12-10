import React from 'react';
import {Link} from 'react-router-dom';

const NewRestaurant = (props)=>{
  return(
    <div>
      <h2>Add new restaurant</h2>

      <form onSubmit={props.submitRestaurant}>

      <label htmlFor="name">Nombre del restaurante: </label>
        <input 
            type="text" 
            name="name" 
            value={props.newRestaurant.name} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>

        <label htmlFor="address">Direccion: </label>
        <input 
            type="text" 
            name="address" 
            value={props.newRestaurant.address} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="schedule">Horario: </label>
        <input 
            type="text" 
            name="schedule" 
            value={props.newRestaurant.schedule} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="contact">Contacto: </label>
        <input
            type="text"
            name="contact" 
            value={props.newRestaurant.contact} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        /> <br/>
       
        <br/>
        <label htmlFor="typeOfFood">Categoría: </label>
        <input
            type="text"
            name="typeOfFood" 
            value={props.newRestaurant.typeOfFood} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="recomendations">Especialidades: </label>
        <input
            type="text"
            name="recomendations" 
            value={props.newRestaurant.recomendations} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="webUrl">Sitio Web: </label>
        <input
            type="text"
            name="webUrl" 
            value={props.newRestaurant.webUrl} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <label htmlFor="image">Url de la imagen: </label>
        <input
            type="text"
            name="image" 
            value={props.newRestaurant.image} 
            onChange={(event)=>props.changeHandlerRestaurant(event.target)}
        />
        <br/>
        <button type="submit">Crear restaurante</button>
      </form><br/>





    </div>
  )
}

export default NewRestaurant;