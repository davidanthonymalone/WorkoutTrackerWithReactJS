import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.css';

export class WorkoutExercise extends Component {
    

    render(){
        const {id, location} = this.props.workout;
        return(
        <div className="intro">
            <h2>Exercise</h2>
           <h3>{this.props.workout.location}</h3>
           <h3>{this.props.workout.type}</h3>
            <h3>{this.props.workout.length}</h3>
             <button className="button" onClick={this.props.delWorkout.bind(this,id)}>x</button>
        
        </div>
        
        
       
        )
    }
    
}

WorkoutExercise.propTypes = {
    workouts: PropTypes.array.isRequired
    
    
}



export default WorkoutExercise