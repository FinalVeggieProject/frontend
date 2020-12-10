import React from 'react'
import '../styles/SignUp.css'

const SignUp = (props)=>{
  return(
    <div className="SignUp">
      <h2>¡Crea una cuenta y únete!</h2>
      <form onSubmit={props.submitSignUp}>

      <label htmlFor="username"></label>
        <input 
          type="text" 
          name="username" 
          value={props.newUser.username} 
          placeholder="Inserta un nombre válido"
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

      <label htmlFor="image"></label>
        <input 
          type="text" 
          name="image" 
          placeholder="Inserta una url válida"
          value={props.newUser.image} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

      <label htmlFor="email"></label>
        <input 
          type="text" 
          name="email" 
          placeholder="Inserta un e-mail válido"
          value={props.newUser.email} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />
        
        <label htmlFor="password"></label>
        <input 
          type="password" 
          name="password" 
          value={props.newUser.password} 
          placeholder="Al menos 8 carácteres y una mayúscula"
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

        <button type="submit">Crear Usuario</button>
        {props.errorMessage && <p>{props.errorMessage}</p>}

        {/* <p>{message}</p> */}

      </form>
    </div>
  )
}

export default SignUp;