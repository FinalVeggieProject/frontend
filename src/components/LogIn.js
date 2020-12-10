import React from 'react'
import '../styles/LogIn.css'

const LogIn = (props)=>{
  return(
    <div className="LogIn">
      <h2>¡Entra en tu cuenta!</h2>
      <form onSubmit={props.submitLogIn}>

        <label htmlFor="username"></label>
        <input 
          type="text" 
          name="username" 
          placeholder="Introduce tu nombre de usuario"
          value={props.loggingUser.username} 
          onChange={(event)=>props.changeHandlerLogIn(event.target)}
        />

        <label htmlFor="password"></label>
        <input 
          type="password" 
          name="password" 
          placeholder="Introduce tu contraseña"
          value={props.loggingUser.password} 
          onChange={(event)=>props.changeHandlerLogIn(event.target)}
        />

        <button type="submit">Iniciar sesión</button>
        {props.errorMessage && <p>{props.errorMessage}</p>}
      </form>
    </div>
  )
}

export default LogIn;