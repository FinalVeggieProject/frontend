import React from 'react'

const SignUp = (props)=>{
  return(
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={props.submitSignUp}>

      <label htmlFor="username">Username: </label>
        <input 
          type="text" 
          name="username" 
          value={props.newUser.username} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />

      <label htmlFor="email">E-mail: </label>
        <input 
          type="text" 
          name="email" 
          value={props.newUser.email} 
          onChange={(event)=>props.changeHandlerSignUp(event.target)}
        />
        
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          name="password" 
          value={props.newUser.password} 
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