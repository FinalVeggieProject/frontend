import React from 'react';

const EditInput = (props)=>{
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

export default EditInput;