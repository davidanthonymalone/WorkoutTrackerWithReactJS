import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '../style.css';

export class WorkoutExercise extends Component {
    

    render(){
        const {id,location,type,length} = this.props.workout;
        return(
        <div className="intro">
	<h1>Exercise</h1>
	<h4> Location of Exercise: {this.props.workout.location}</h4>
	<h4>Type of Exercise: {this.props.workout.type}</h4>
	<h4>Length of Exercise: {this.props.workout.length} (KM)</h4>
	<button className="button" onClick={this.props.delWorkout.bind(this,id)}>x</button>
        </div>
        
        )
    }
    
}





export default WorkoutExercise