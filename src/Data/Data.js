 import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import uuid from 'uuid';

workouts: [
            {
                id: uuid.v4(),
                location: 'Waterford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: uuid.v4(),
                location: 'Wexford',
                type: 'walking',
                length: '3 miles'
            },
               {
                id: uuid.v4(),
                location: 'Wicklow',
                type: 'walking',
                length: '3 miles'
            }
        ]