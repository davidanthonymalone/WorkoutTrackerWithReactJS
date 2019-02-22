import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Workouts from './components/workouts/Workouts'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import axios from 'axios';
import About from './components/pages/About'
import AddWorkout from './components/addWorkout/AddWorkout'
import uuid from 'uuid';
import '../node_modules/bootstrap/dist/css/bootstrap.css';



import './App.css';

class App extends Component {
    state = {
        workouts: [ ]
    }
    
    
    componentDidMount(){
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
    
    
    
    
    
  render() {
    return (
            <Router>
        <div className="jumbotron">
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
          </div>
            
        </Router>
           
    );
  }
}

export default App;
