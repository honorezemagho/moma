import React , {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import Movies from "./components/movies";
import MovieForm  from './components/movieForm';
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-Found";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import './App.css';


class App extends Component{
   render(){
  return (
    <React.Fragment>
      <NavBar/>
        <main className="container">
        <Switch>
        <Route path="/login" component={LoginForm}/>
        <Route path="/movies/:id" component={MovieForm}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/rentals" component={Rentals}/>
        <Route path="/not-found" component={NotFound}/>
         <Route exact path="/">
           <Redirect to="/movies"/>
         </Route>
          <Route>
            <Redirect to="/not-found"/>
          </Route>
        </Switch>
        </main>
    </React.Fragment>
  );
 }
}


export default App;
