 import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import uuid from 'uuid';

let AllExercises = [ 
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
   
] ; 

export default AllExercises;