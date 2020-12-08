import React from 'react';
import EditInput from './EditInput';

class MisDatos extends React.Component {

    constructor(){
        super()

        this.state = {
            showEditName: false,
            showEditLastName: false,
            showEditUsername: false,
            showEditPassword: false,
            showEditBirthdate: false,
            showEditEmail: false
        }

    }
    
    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }

    // componentDidUpdate(){
    //     return(
    //         <div>
    //         <h2>Mis datos</h2>
    
    //         <strong>Nombre:</strong> <p>{this.props.isLogged.name}</p>
    //             {this.showEditName && <EditInput nameValue={this.props.isLogged.name}/>}
    //         <button onClick={this.toggleShowEditName}>Editar</button>  <br /><br/><hr></hr>
    
    //         <strong>Apellidos:</strong> <p>{this.props.isLogged.lastName}</p> <button>Editar</button> <br /><br/><hr></hr>
    //         <strong>Nombre de usuario:</strong> <p>{this.props.isLogged.username}</p> <button>Editar</button> <br /><br/><hr></hr>
    //         <strong>E-mail:</strong> <p>{this.props.isLogged.email}</p> <button>Editar</button> <br /><br/><hr></hr>
    //         <strong>Contraseña:</strong> <p> <button>Editar</button></p> <br /><br/><hr></hr>
    //         <strong>Fecha de nacimiento:</strong> <p>{this.props.isLogged.birtdate}</p> <button>Editar</button> <br /><br/><hr></hr>
    //         {/* <strong>Image:</strong> <p>{props.isLogged.username}</p> */}
    //         </div>
    //     )
    // }


    render(){
        return(
            <div>
            <h2>Mis datos</h2>
    
            <strong>Nombre:</strong> <p>{this.props.isLogged.name}</p>
                {this.state.showEditName && <EditInput nameValue={this.props.isLogged.name}/>}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditName, 'showEditName')}>Editar</button>  <br /><br/><hr></hr>

    
            <strong>Apellidos:</strong> <p>{this.props.isLogged.lastName}</p>
            {this.state.showEditLastName && <EditInput nameValue={this.props.isLogged.name}/>}
             <button onClick={()=>this.toggleShowEditName(this.state.showEditLastName, 'showEditLastName')}>Editar</button> <br /><br/><hr></hr>


            <strong>Nombre de usuario:</strong> <p>{this.props.isLogged.username}</p> 
            {this.state.showEditUsername && <EditInput nameValue={this.props.isLogged.name}/>}
             <button onClick={()=>this.toggleShowEditName(this.state.showEditUsername, 'showEditUsername')}>Editar</button> <br /><br/><hr></hr>



            <strong>E-mail:</strong> <p>{this.props.isLogged.email}</p> 
            {this.state.showEditEmail && <EditInput nameValue={this.props.isLogged.name}/>}
             <button onClick={()=>this.toggleShowEditName(this.state.showEditEmail, 'showEditEmail')}>Editar</button> <br /><br/><hr></hr>


            
            <strong>Contraseña:</strong> 
            {this.state.showEditPassword && <EditInput nameValue={this.props.isLogged.name}/>}
            <p>
             <button onClick={()=>this.toggleShowEditName(this.state.showEditPassword, 'showEditPassword')}>Editar</button></p> 
            <br /><br/><hr></hr>


            <strong>Fecha de nacimiento:</strong> <p>{this.props.isLogged.birtdate}</p>
            {this.state.showEditBirthdate && <EditInput nameValue={this.props.isLogged.name}/>}
              <button onClick={()=>this.toggleShowEditName(this.state.showEditBirthdate, 'showEditBirthdate')}>Editar</button> <br /><br/><hr></hr>



            {/* <strong>Image:</strong> <p>{props.isLogged.username}</p> */}
            </div>
        )
    }

   
} 

export default MisDatos;