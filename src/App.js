import './App.css';
import React from 'react';

import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import MisDatos from './components/MisDatos';
import EditRecipe from './components/EditRecipe';
import EditRestaurant from './components/editRestaurant';
import Home from './components/Home';

import { Link, Route, Redirect } from 'react-router-dom';
import UserService from './services/UserService';
import NewRecipe from './components/NewRecipe';
import AllUserRecipes from './components/AllUserRecipes';
import AllUserRestaurants from './components/AllUserRestaurants'
import Recipe from './components/Recipe';
import Restaurant from './components/Restaurant'
import NewRestaurant from './components/NewRestaurant';

class App extends React.Component {

	state = {
    isLogged: {},
		newUser: { username: '', password: '', email: '', image: '', name: '', lastName: '', birthdate: ''},
    loggingUser: { username: '', password: '', email: '', image: '', name: '', lastName: '', birthdate: ''},
    userToEdit: { username: '', password: '', email: '', image: '', name: '', lastName: '', birthdate: ''},
    newRecipe: {title: '', ingredients: '', process: '', difficulty: '', duration: '', author: '', image: '', id: ''},
    newRestaurant: {name: '',owner: '', address: '', schedule: '', contact: '', typeOfFood: '', recomendations: '', webUrl: '', image: ''},
    errorMessage: '',
    userRecipes: [],
    userRestaurants: [],
    redirectRecipes: false,
    redirectRestaurants: false
	};

  service = new UserService();

  //SIGNUP CONFIG
  submitSignUp = (event) => {
    event.preventDefault();
    this.service.signup(this.state.newUser.username, this.state.newUser.password, this.state.newUser.email, this.state.newUser.image)
      .then((result) => {
        this.setState({errorMessage: result.message})
        this.checkIfLoggedIn();
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
			.then((result) => {
        this.setState({errorMessage: result.message})
        this.checkIfLoggedIn();
        <Redirect to="/profile" />
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
      this.setState({isLogged: result});
    })
  };
  
  
  logOut = ()=>{
    this.service.logout()
    .then((result)=>{
      this.checkIfLoggedIn()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // EDIT PROFILE DATA
  submitEdit = (event) => {
    event.preventDefault();
		this.service
    .editUser(this.state.userToEdit, event.target[0].name)
      .then(()=>{
        this.checkIfLoggedIn();
        <Redirect to="/profile" />
      })
      .catch((err)=>{
        console.log('Sorry something went wrong on submit.', err);
      })
  };
  
  changeHandlerEdit = (_eventTarget) => {
		this.setState({ userToEdit: { ...this.state.userToEdit, [_eventTarget.name]: _eventTarget.value } });
  };

  

  // ADD RECIPE CONFIG
  submitRecipe = (event) => {
    event.preventDefault();
    this.service.addrecipe(this.state.newRecipe)
      .then(() => {
        this.setState({newRecipe: {title: '', ingredients: '', process: '', difficulty: '', duration: '', author: '', image: '', id: ''}, redirectRecipes: true});
      })
      .catch((err) => {
        console.log(err);
      });
    
  }; 

  changeHandlerRecipe = (_eventTarget) => {
      this.setState({ newRecipe: { ...this.state.newRecipe, [_eventTarget.name]: _eventTarget.value } });
    };
	

  // DISPLAY ALL USER RECIPES
  displayUserRecipes = () => {
    this.service.alluserrecipes()
      .then((result)=>{
        
        const newUserRecipesArr = result.map((recipe)=>{
          return recipe;
        })
        this.setState({userRecipes: newUserRecipesArr})
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  //EDIT RECIPES





  // DISPLAY ALL USER RESTAURANTS
  displayUserRestaurants = () => {
    this.service.alluserrestaurants()
      .then((result)=>{
        const newUserRestaurantsArr = result.map((restaurant) => {
          return restaurant;
        })
        this.setState({userRestaurants: newUserRestaurantsArr})
      })
      .catch((err)=>{
        console.log(err);
      })
  } 
 
  // ADD RESTAURANT CONFIG

  submitRestaurant = (event) => {
    event.preventDefault();
    this.service.addrestaurant(this.state.newRestaurant)
      .then(() => {
        this.setState({newRestaurant: {name: '',  owner: '', address: '', schedule: '', contact: '', typeOfFood: '', recomendations: '', webUrl: '', image:''}, redirectRestaurants: true});
        <Redirect to="/profile" />
      })
      .catch((err) => {
        console.log(err);
      });
    
  }; 

  changeHandlerRestaurant = (_eventTarget) => {
    this.setState({ newRestaurant: { ...this.state.newRestaurant, [_eventTarget.name]: _eventTarget.value } });
  };


  
  
	componentDidMount() {
    this.checkIfLoggedIn();
    // this.displayUserRecipes();
    // this.displayUserRestaurants();
  }


  render(){
    return (
      <div className="App">
        <nav>
          {!this.state.isLogged.username && <Link to="/signup">Unirse</Link>}
          <br />
          {!this.state.isLogged.username && <Link to="/login" className="login-button">Entrar</Link>}
          <br />
          {this.state.isLogged.username && <div><button className="logout-btn" onClick={()=>{this.logOut();}}>Log Out</button></div>}
          <br />        
        </nav>

      
        <Route
					exact path="/"
					render={() => (
							<Home />
					)}
				/>

        <Route
					path="/signup"
					render={() => (
						!this.state.isLogged.username
							? <SignUp 
                submitSignUp={this.submitSignUp} 
                newUser={this.state.newUser} 
                changeHandlerSignUp={this.changeHandlerSignUp}
                errorMessage={this.state.errorMessage}
                />
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
                errorMessage={this.state.errorMessage}
              />
            )}
          />




        <Route
					path="/recipe/:id"
					render={(props) => (
            
							<Recipe 
                {...props}
                changeHandlerEdit={this.changeHandlerEditRecipe}
                submitEdit={this.submitEditRecipe}
                recipeToEdit={this.state.recipeToEdit}
              />
					)}
				/>



        <Route
					path="/restaurant/:id"
					render={(props) => (
							<Restaurant 
                {...props}
                changeHandlerEdit={this.changeHandlerEditRestaurant}
                submitEdit={this.submitEditRestaurant}
                restaurantToEdit={this.state.restaurantToEdit}
              />
					)}
				/> 

        


        <Route
          path='/editrestaurant/:id'
          render={(props)=> (
            <EditRestaurant
              {...props}
            />
          )}
        /> 
        {
          !this.state.isLogged
          ?<Redirect to="/" />
          :<Route
            path="/profile"
            render={() => (
            
                <Profile 
                    isLogged={this.state.isLogged}
                    displayUserRecipes={this.displayUserRecipes}
                    displayUserRestaurants={this.displayUserRestaurants}
                  />
                
              
            )}
          /> 
        }
       
       <Route
					path="/misdatos"
					render={() => (
							<MisDatos 
                isLogged={this.state.isLogged}
                changeHandlerEdit={this.changeHandlerEdit}
                submitEdit={this.submitEdit}
                userToEdit={this.state.userToEdit}
              />
					)}
				/>

        <Route
					path="/addrecipe"
					render={() => (
            
         
							<NewRecipe 
                submitRecipe={this.submitRecipe}
                changeHandlerRecipe={this.changeHandlerRecipe}
                newRecipe={this.state.newRecipe}
              />
					)}
				/>
     
        <Route
					path="/allmyrecipes"
					render={() => (
							<AllUserRecipes 
                userRecipes={this.state.userRecipes}
                displayUserRecipes={this.displayUserRecipes}

              />
					)}
				/>
        <Route
          path='/editrecipe/:id'
          render={(props)=> (
            <EditRecipe
              {...props}
            />
          )}
        />

        <Route
					path="/addrestaurant"
					render={() => (
							<NewRestaurant
                submitRestaurant={this.submitRestaurant}
                changeHandlerRestaurant={this.changeHandlerRestaurant}
                newRestaurant={this.state.newRestaurant}
              />
					)}
				/> 

        <Route
					path="/allmyrestaurants"
					render={() => (
							<AllUserRestaurants 
                userRestaurants={this.state.userRestaurants}
                displayUserRestaurants={this.displayUserRestaurants}
              />
					)}
				/>  


       
        


      </div>
    );
  }
  
}

export default App;

       