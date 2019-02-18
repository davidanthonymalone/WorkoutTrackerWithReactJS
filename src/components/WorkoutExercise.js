import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.css';

export class WorkoutExercise extends Component {
    

    render(){
        const {id, location} = this.props.workout;
        return(
        <div className="intro">
            <h2>Exercise</h2>
           <p>{this.props.workout.location}</p>
            <p>{this.props.workout.type}</p>
            <p>{this.props.workout.length}</p>
             <button className="button" onClick={this.props.delWorkout.bind(this,id)}>x</button>
        
        </div>
        
        
       
        )
    }
    
}

WorkoutExercise.propTypes = {
    workouts: PropTypes.array.isRequired
    
    
}



export default WorkoutExercise