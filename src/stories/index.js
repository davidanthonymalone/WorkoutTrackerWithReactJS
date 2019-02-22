import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Workouts from '../components/workouts/Workouts.js';
import workoutList from '../components/Data/Data.js';
import WorkoutExercise from '../components/workoutExercise/WorkoutExercise.js';
import AddWorkout from '../components/addWorkout/AddWorkout.js';
import { Button, Welcome } from '@storybook/react/demo';
import Exercises from '../Data/Data.js';
import uuid from 'uuid';
const workoutEx = {
  id: 1,
  Location: "Waterford",
  Type: "walking",
  Length: "4"
}




 

 storiesOf('Phone Catalogue', module)
        .add('Add Workouts', 
            () =>  <AddWorkout /> 
        )

     .add('Workouts', 
       () =>     <Workouts />
    )     
        