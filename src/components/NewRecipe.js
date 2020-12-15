import React from 'react';
import {Link} from 'react-router-dom';

const NewRecipe = (props)=>{
  return(
    <div>
      {
        props.isLogged.username
        ?<Link to="/profile">Volver a mi pefil</Link>
        :<Link to="/">Volver Inicio</Link> 
      }
             
      <h2>Add new recipe:</h2>
      <form onSubmit={props.submitRecipe}>

      <label htmlFor="title">Título de la receta: </label>
        <input 
            type="text" 
            name="title" 
            value={props.newRecipe.title} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="difficulty">Dificultad (1-5): </label>
        <input 
            type="text" 
            name="difficulty" 
            value={props.newRecipe.difficulty} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="duration">Duración (min): </label>
        <input 
            type="text" 
            name="duration" 
            value={props.newRecipe.duration} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="image">URL de la imagen: </label>
        <input 
            type="text" 
            name="image" 
            value={props.newRecipe.image} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        />
        <br/>
        <label htmlFor="ingredients">Ingredientes: </label>
        <textarea 
            name="ingredients" 
            value={props.newRecipe.ingredients} 
            onChange={(event)=>props.changeHandlerRecipe(event.target)}
        /> <br/>
       
        <br/>
        <label htmlFor="process">Elaboración: </label>
        <textarea 
            name="process" 
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