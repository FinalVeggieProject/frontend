import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NewRestaurant.css';

const NewRecipe = (props)=>{
  return(
    <div className="newrecipe">
      {
        props.isLogged.username
        ?<Link to="/profile">Volver a mi pefil</Link>
        :<Link to="/">Volver Inicio</Link> 
      }
             
      <h2>Add new recipe:</h2>
      <form onSubmit={props.submitRecipe}>

      <label htmlFor="title"></label>
        <input 
            type="text" 
            name="title" 
            placeholder="Titulo de la receta"
            value={props.newRecipe.title} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="difficulty"></label>
        <input 
            type="text" 
            name="difficulty" 
            placeholder="Dificultad (1-5)"
            value={props.newRecipe.difficulty} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="duration"></label>
        <input 
            type="text" 
            name="duration" 
            placeholder="Duración"
            value={props.newRecipe.duration} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="image"></label>
        <input 
            type="text" 
            name="image" 
            placeholder="Instertar url de imágen válida"
            value={props.newRecipe.image} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="ingredients"></label>
        <textarea 
            name="ingredients" 
            placeholder="Ingredientes"
            value={props.newRecipe.ingredients} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        /> <br/>
       
        <br/>
        <label htmlFor="process"></label>
        <textarea 
            name="process" 
            placeholder="Elaboración"
            value={props.newRecipe.process} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <button type="submit">Crear receta</button>
      </form><br/>

      
    </div>
  )
}

export default NewRecipe;