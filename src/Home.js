import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import firebase from 'react-native-firebase'

import NewsCategory from './NewsCategory'

export default class Home extends React.Component {
  logout = async () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Initializing');
  }

  render() {
    return (
      <SafeAreaView>
        <NewsCategory />
      </SafeAreaView>
    )
  }
  /*return (
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
  )*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})