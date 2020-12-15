import React from 'react';
import EditInput from './EditInput';
import {Link} from 'react-router-dom';

class MisRecetas extends React.Component {

    constructor(){
        super()

        this.state = {
            showEditTitle: false,
            showEditIngredients: false,
            showEditProcess: false,
            showEditDifficulty: false,
            showEditDuration: false,
            showEditAuthor: false,
            showEditImage: false
        }

    }
    
    toggleShowEditName = (valueToLook, valueToChange) => {
        valueToLook
        ? this.setState({[valueToChange]: false})
        : this.setState({[valueToChange]: true})
    }


    render(){
        return(
            <div className="misdatos">
            <h2>Mis datos</h2>

            <Link to="/profile">Back to Profile</Link> <br/><br/>

            <strong>Imagen de perfil:</strong> <img src={this.props.isLogged.image} alt={this.props.isLogged.name} />
            {this.state.showEditImage && <EditInput 
                                                nameValue="image"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditImage, 'showEditImage')}>Editar</button> <br /><br/><hr></hr>
    
            <strong>Nombre:</strong> <p>{this.props.isLogged.name}</p>
            {this.state.showEditName && <EditInput 
                                                nameValue="name"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                                toggleShowEditName={this.toggleShowEditName}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditName, 'showEditName')}>Editar</button>  <br /><br/><hr></hr>

    
            <strong>Apellidos:</strong> <p>{this.props.isLogged.lastName}</p>
            {this.state.showEditLastName && <EditInput 
                                                nameValue="lastName"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditLastName, 'showEditLastName')}>Editar</button> <br /><br/><hr></hr>


            <strong>Nombre de usuario:</strong> <p>{this.props.isLogged.username}</p> 
            {this.state.showEditUsername && <EditInput 
                                                nameValue="username"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditUsername, 'showEditUsername')}>Editar</button> <br /><br/><hr></hr>



            <strong>E-mail:</strong> <p>{this.props.isLogged.email}</p> 
            {this.state.showEditEmail && <EditInput 
                                                nameValue="email"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditEmail, 'showEditEmail')}>Editar</button> <br /><br/><hr></hr>


            
            <strong>Contraseña:</strong> <br/><br/> <strong>*********</strong>
            {this.state.showEditPassword && <EditInput 
                                                nameValue="password"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <p><button onClick={()=>this.toggleShowEditName(this.state.showEditPassword, 'showEditPassword')}>Editar</button></p><br /><br/><hr></hr>


            <strong>Fecha de nacimiento:</strong> <p>{this.props.isLogged.birthdate}</p>
            {this.state.showEditBirthdate && <EditInput 
                                                nameValue="birthdate"
                                                changeHandlerEdit={this.props.changeHandlerEdit}
                                                submitEdit={this.props.submitEdit}
                                                userToEdit={this.props.userToEdit}
                                            />}
            <button onClick={()=>this.toggleShowEditName(this.state.showEditBirthdate, 'showEditBirthdate')}>Editar</button> <br /><br/><hr></hr>




            </div>
        )
    }

   
} 

export default MisRecetas;