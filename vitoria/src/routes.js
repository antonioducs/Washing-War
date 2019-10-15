import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import StartScreen from './screens/StartScreen/StartScreen';
import CalendarScreen from './screens/CalendarScreen/CalendarScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import TimesScreen from './screens/TimesScreen/TimesScreen';

import theme from './styles/theme';


const AppNavigator = createStackNavigator(
  {
    StartScreen: {
      screen: StartScreen,
      navigationOptions: {
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    CalendarScreen: {
      screen: CalendarScreen,
      navigationOptions: {
        headerTintColor: theme.secondaryColor,
        headerStyle: {
          backgroundColor: theme.primaryColor
        }
      }
    },
    TimesScreen: {
      screen: TimesScreen,
      navigationOptions: {
        headerTintColor: theme.secondaryColor,
        headerStyle: {
          backgroundColor: theme.primaryColor
        }
      }
    }
  }
);

export default Routes = createAppContainer(AppNavigator);