import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Workouts from './components/workouts/Workouts'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import axios from 'axios';
import About from './components/pages/About'
import AddWorkout from './components/addWorkout/AddWorkout'
import fire from './config/Fire';
import Login from './Login';
import uuid from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



import './App.css';

class App extends Component {
    
     constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
          this.logout = this.logout.bind(this);
  }
    state = {
        workouts: [ ]
    }
    
      logout() {
        fire.auth().signOut();
    }
    componentDidMount(){
        this.authListener();
        axios.get('https://raw.githubusercontent.com/davidanthonymalone/jsonserver/master/db.json')
        .then(res => this.setState({workouts: res.data }));
    }
    
    delWorkout = (id)=>{
        this.setState({workouts: [...this.state.workouts.filter(workout => workout.id !== id)] });
    }
    
    addWorkout = (location, type, length) =>{
        const newWorkout = {
            id: uuid.v4(),
            location,
            type,
            length,
        }
        console.log(newWorkout);
        this.setState({workouts: [...this.state.workouts, newWorkout] });
    }
    
    
     authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
    
    
  render() {
    return (
         <div className="jumbotron">
          <button className="btn" onClick={this.logout}>Logout</button>
         <div>{this.state.user ?  (   <Router>
       
            <div className="container">
            <Header />
        
            <Route exact path="/" render={ props =>(
                <React.Fragment>
            <AddWorkout addWorkout={this.addWorkout} />   
            <Workouts workouts={this.state.workouts}
            delWorkout={this.delWorkout}/>
                </React.Fragment>
    
            )} />
            <Route path="/about" component={About}/>
            <Footer />
            </div>
         
            
        </Router>) : (<Login />)}</div>
         
             </div>
           
    );
  }
}

export default App;
