import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Workouts from './components/workouts/Workouts'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/pages/About'
import AddWorkout from './components/addWorkout/AddWorkout'
import uuid from 'uuid';


import './App.css';

class App extends Component {
    state = {
        workouts: [
            {
                id: uuid.v4(),
                location: 'Waterford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: uuid.v4(),
                location: 'Wexford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: uuid.v4(),
                location: 'Wicklow',
                type: 'walking',
                length: '3 miles'
            }
        ]
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
        <div className="App">
            <div classNAme="container">
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
