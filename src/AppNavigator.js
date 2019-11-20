//  this file will hold our navigation functions.

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Initializing from './Initializing';
import SignIn from './SignIn';
import SignUp from './SignUp';
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

  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: 'Sign In'
    }
  },

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: 'Sign Up'
    }
  },

  Home: { screen: Home },
  Screen2: {screen: Screen2 },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;