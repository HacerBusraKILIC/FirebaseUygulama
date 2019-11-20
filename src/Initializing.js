// this file will hold the initialization logic and display a message to the user that the app is loading.

import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

export default class initializing extends React.Component {

    onPressSignin = () => {
        this.props.navigation.navigate('SignIn')
    }

    onPressSignout = () => {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressSignin}
                    >
                        <Image
                            source={require('../assets/sign-in.png')}
                            style={styles.ImageIconStyle}
                        />
                        <Text style={styles.buttonText}>  Sign in </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressSignout}
                    >

                        <Image
                            source={require('../assets/sign-out.png')}
                            style={styles.ImageIconStyle}
                        />
                        <Text style={styles.buttonText}>  Sign up </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        //backgroundColor: 'lightblue',
        padding: 10
    },
    buttonText: {
        color: 'lightblue'
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
    },
});