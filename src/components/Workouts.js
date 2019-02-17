import React, { Component } from 'react';
import WorkoutExercise from './WorkoutExercise';
import PropTypes from 'prop-types';


class Workouts extends Component {
  render() {
      //console.log(this.props.workouts)
    return this.props.workouts.map((workout) => (
            <WorkoutExercise key={workout.id} workout={workout} delWorkout={this.props.delWorkout} />
    
    ));
  }
}

Workouts.propTypes = {
    workouts: PropTypes.array.isRequired
    
    
}
export default Workouts;
