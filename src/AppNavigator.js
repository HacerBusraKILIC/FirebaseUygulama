//  this file will hold our navigation functions.

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Initializing from './Initializing';
import Login from './Login';
import Register from './Register';
import SplashScreen from './SplashScreen';
import Home from './Home';
import Screen2 from './Screen2';

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },

  Initializing: {
    screen: Initializing,
    navigationOptions: {
      header: null
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login'
    }
  },

  Register: {
    screen: Register,
    navigationOptions: {
      headerTitle: 'Register'
    }
  },

  Home: { 
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  
  Screen2: { screen: Screen2 },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;