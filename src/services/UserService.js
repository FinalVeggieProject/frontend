  
import axios from "axios";


class UserService {

  state = {
    errorMessage: ''
  }

  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3000",
      withCredentials: true
    });


    this.service = service;
  }

  signup = (username, password, email, image) => {
    return this.service.post("/signup", {username, password, email, image})
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post("/login", {username, password})
      .then(response => {
        return response.data 
      })
  }

  loggedin = () =>{
    return this.service.get("/loggedin")
      .then(response => response.data)
  }

  logout = () =>{
    return this.service.post("/logout", {})
      .then(response => response.data)
  }

  editUser = (userToEdit, valueToEdit) => {
    return this.service.put("/edit-user", {userToEdit, valueToEdit})
      .then(response => {
        return response.data 
      })
  }

  editRecipe = (recipeToEdit, valueToEdit) => {
    return this.service.put("/edit-recipe", {recipeToEdit, valueToEdit})
      .then(response => {
        return response.data 
      })
  }

  addrecipe = (recipe) => {
    return this.service.post("/addrecipe", recipe)
      .then(response => response.data);
  }

  alluserrecipes = () => {
    return this.service.get('/alluserrecipes')
      .then(response => response.data);
  }

  showrecipe = (id) => {
    return this.service.get(`/recipe/${id}`, {id})
      .then(response => response.data);
  }

  addrestaurant = (restaurant) => {
    return this.service.post('/addrestaurant', restaurant)
      .then(response => response.data)
  }

  alluserrestaurants = () => {
    return this.service.get('/alluserrestaurants')
      .then(response => response.data)
  }

  showrestaurant = (id) => {
    return this.service.get(`/restaurant/${id}`, {id})
      .then(response => response)
  }



}

export default UserService;