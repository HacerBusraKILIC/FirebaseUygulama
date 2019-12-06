//  this file will hold our navigation functions.

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Initializing from './Initializing';
import Login from './Login';
import Register from './Register';
import SplashScreen from './SplashScreen';
import Home from './Home';
import NewsHeadlines from './NewsHeadlines';
import NewsCategory from './NewsCategory';
import NewsDetail from './NewsDetail';
import NewsWebView from './NewsWebView';
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
  
  NewsHeadlines: {
    screen: NewsHeadlines,
    navigationOptions: {
      headerTitle: `Dünya'dan Haberler`
    }
  },

  NewsCategory: {
    screen: NewsCategory
  },

  NewsDetail: {
    screen: NewsDetail
  },

  NewsWebView: {
    screen: NewsWebView
  },

  Screen2: { screen: Screen2 },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;