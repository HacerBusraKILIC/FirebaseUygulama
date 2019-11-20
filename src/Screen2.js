// this will just hold another component for us to navigate to from our Home screen to demonstrate stack navigation.

import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { Navigation } from 'react-navigation';

export default class Screen2 extends React.Component {
    
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 2'
        },
      }
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button
          onPress={() => this.props.navigation.goBack(null)}
          title="Go Back"
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