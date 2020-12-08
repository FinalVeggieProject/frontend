import React from 'react';

const EditInput = (props)=>{
  return(
    <form>
        <input type="text" name={props.nameValue} />
        <button type="submit">Editar {props.nameValue}</button>
    </form>
  )
}

export default EditInput;