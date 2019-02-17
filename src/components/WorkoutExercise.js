import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.css';

export class WorkoutExercise extends Component {
    

    render(){
        const {id, location} = this.props.workout;
        return(
        <div className="intro">
            
           <p>{this.props.workout.location}</p>
             <button className="button" onClick={this.props.delWorkout.bind(this,id)}>x</button>
        
        </div>
        
        
       
        )
    }
    
}

WorkoutExercise.propTypes = {
    workouts: PropTypes.array.isRequired
    
    
}



export default WorkoutExercise