import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import { Navigation } from 'react-navigation'
import firebase from 'react-native-firebase'

import { USER_KEY } from './config'

export default class Home extends React.Component {

  state = { currentUser: null }

  logout = async () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Initializing');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          title="View next screen"
          onPress={() => this.props.navigation.push('Screen2')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})