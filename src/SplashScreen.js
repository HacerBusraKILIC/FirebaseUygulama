import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import firebase from 'react-native-firebase'


export default class SplashScreen extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Home' : 'Initializing')
        })
    }
    
    /*async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem(USER_KEY)
            console.log('user: ', user)

            if (user) {
                console.log('user')
                this.props.navigation.navigate('Home');
                /*const navigateAction = NavigationActions.navigate({
                    routeName: 'Home',
                    params: {},
                    // navigate can have a nested navigate action that will be run inside the child router
                    action: NavigationActions.navigate({ routeName: 'Home' }),
                });
                this.props.navigation.dispatch(navigateAction);*/
                
            /*} else {
                console.log('else')
                this.props.navigation.navigate('Initializing');
            }

        } catch (err) {
            console.log('error: ', err)
            this.props.navigation.navigate('Initializing');
        }
    }*/

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})