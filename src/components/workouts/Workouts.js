import React, { Component } from 'react';
import WorkoutExercise from '../workoutExercise/WorkoutExercise';
import PropTypes from 'prop-types';


class Workouts extends Component {

  render() {
   
   
    return this.props.workouts.map((workout) => (
      
            <WorkoutExercise key={workout._id} workout={workout} delWorkout={this.props.delWorkout} />
    
    ));
  }
}

Workouts.propTypes = {
 
    workouts: PropTypes.array
    
    
}
export default Workouts;
