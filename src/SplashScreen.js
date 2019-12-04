import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native'

export default class SplashScreen extends React.Component {
    
    async componentDidMount() {
        try {
            const user = await AsyncStorage.getItem('USER-EMAIL')

            if (user) {
                this.props.navigation.navigate('Home');
                
            } else {
                this.props.navigation.navigate('Initializing');
            }

        } catch (err) {
            console.log('error: ', err)
            this.props.navigation.navigate('Initializing');
        }
    }

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