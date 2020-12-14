import React from 'react';

const EditInput = (props)=>{



  if(props.id){
    return(
      <form onSubmit={props.submitEdit}>
          <input 
              type="text" 
              name={props.nameValue}
              id={props.id} 
              placeholder={'new ' + props.nameValue}
              value={props.userToEdit[props.nameValue]}
              onChange={(event)=>props.changeHandlerEdit(event.target)}   
              />
          <button type="submit">Editar {props.nameValue}</button>
      </form>
    )
  } else if(props.recipe){
    return(
      <form onSubmit={props.submitEdit}>
          <input 
              type="text" 
              name={props.nameValue}
              id={props.id} 
              placeholder={'new ' + props.nameValue}
              value={props.userToEdit[props.nameValue]}
              onChange={(event)=>props.changeHandlerEdit(event.target)}   
              />
          <button type="submit">Editar {props.nameValue}</button>
      </form>
    )
  }else if(props.getRecipeInfo){
    return(
      <form onSubmit={props.submitEdit}> NOS HEMOS QUEDADO AQUI
          <input 
              type="text" 
              name={props.nameValue}
              id={props.id} 
              placeholder={'new ' + props.nameValue}
              value={props.userToEdit[props.nameValue]}
              onChange={(event)=>props.changeHandlerEdit(event.target)}   
              />
          <button type="submit">Editar {props.nameValue}</button>
      </form>
    )
  } else {
    return(
      <form onSubmit={props.submitEdit}>
          <input 
              type="text" 
              name={props.nameValue}
              placeholder={'new ' + props.nameValue}
              value={props.userToEdit[props.nameValue]}
              onChange={(event)=>props.changeHandlerEdit(event.target)}   
              />
          <button type="submit">Editar {props.nameValue}</button>
      </form>
    )    
  }
}

export default EditInput;