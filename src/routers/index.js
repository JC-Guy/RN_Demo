import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { StackNavigator } from 'react-navigation';

import Home from '../screens/home/index';

const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
});
export default () => <AppNavigator />;
