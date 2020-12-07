import './App.css';
import React from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

import { Link, Route, Redirect } from 'react-router-dom';
import UserService from './services/UserService';

class App extends React.Component {

	state = {
		isLogged: {},
		newUser: { username: '', password: '', email: ''},
    loggingUser: { username: '', password: '', email: ''},
	};

  service = new UserService();

  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service.signup(this.state.newUser.username, this.state.newUser.password, this.state.newUser.email)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }; 

	changeHandlerSignUp = (_eventTarget) => {
		this.setState({ newUser: { ...this.state.newUser, [_eventTarget.name]: _eventTarget.value } });
  };
  
  //LOGIN CONFIG
	submitLogIn = (event) => {
		event.preventDefault();
		this.service
			.login(this.state.loggingUser.username, this.state.loggingUser.password)
			.then(() => {
				this.checkIfLoggedIn()
			})
			.catch((err) => {
				console.log('Sorry something went wrong on submit.', err);
			});
	};

	changeHandlerLogIn = (_eventTarget) => {
		this.setState({ loggingUser: { ...this.state.loggingUser, [_eventTarget.name]: _eventTarget.value } });
	};

	checkIfLoggedIn = () => {
    this.service.loggedin()
    .then((result)=>{
      this.setState({isLogged: result})
    })
  };
  
  logOut = ()=>{
    this.service.logout()
    .then((result)=>{
      console.log(result)
      this.checkIfLoggedIn()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

	componentDidMount() {
		this.checkIfLoggedIn();
	}


  render(){
    return (
      <div className="App">
        <h1>LANDING PAGE</h1>

        {!this.state.isLogged.username && <Link to="/signup">Sign Up</Link>}
        <br />
        {!this.state.isLogged.username && <Link to="/login">Log In</Link>}
        <br />
      

        <Route
					path="/signup"
					render={() => (
						!this.state.isLogged.username
							? <SignUp submitSignUp={this.submitSignUp} newUser={this.state.newUser} changeHandlerSignUp={this.changeHandlerSignUp}/>
							: <Redirect to='/' />
					)}
				/>

				<Route
					path="/login"
					render={() => (
						<LogIn
							submitLogIn={this.submitLogIn}
							loggingUser={this.state.loggingUser}
							changeHandlerLogIn={this.changeHandlerLogIn}
						/>
					)}
				/>

       
        {/* {this.state.isLogged.username && <button onClick={()=>this.logOut()}>Log Out</button>} */}
      </div>
    );
  }
  
}

export default App;
