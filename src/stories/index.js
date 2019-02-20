import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Workouts from '../components/workouts/Workouts.js';
import WorkoutExercise from '../components/workoutExercise/WorkoutExercise.js';
import AddWorkout from '../components/addWorkout/AddWorkout.js';
import { Button, Welcome } from '@storybook/react/demo';
import uuid from 'uuid';


const workoutExercise = {
    id: 1,
    location: 'Waterford',
    type: 'walking',
    length: '3 miles'
};

storiesOf('ewdassignment', module)
       .add('WorkoutExercise', 
        () =>  <WorkoutExercise key={workout.id} /> 
    ) 