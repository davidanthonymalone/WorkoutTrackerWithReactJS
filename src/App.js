import React, { Component } from 'react';
import Workouts from './components/Workouts'
import Header from './components/layout/Header'
import AddWorkout from './components/AddWorkout'


import './App.css';

class App extends Component {
    state = {
        workouts: [
            {
                id: 1,
                location: 'Waterford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: 2,
                location: 'Wexford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: 3,
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
        console.log(location)
    }
    
  render() {
      console.log(this.state.workouts)
    return (
      <div className="App">
        <div classNAme="container">
        <Header />
        <AddWorkout addWorkout={this.addWorkout} />   
        
        <Workouts workouts={this.state.workouts}
        delWorkout={this.delWorkout}/>
        </div>
      </div>
    );
  }
}

export default App;
