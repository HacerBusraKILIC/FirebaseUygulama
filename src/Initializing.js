// this file will hold the initialization logic and display a message to the user that the app is loading.

import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default class initializing extends React.Component {

    onPressSignin = () => {
        this.props.navigation.navigate('Login')
    }

    onPressSignout = () => {
        this.props.navigation.navigate('Register')
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
                            source={require('../assets/login.png')}
                            style={styles.ImageIconStyle}
                        />
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPressSignout}
                    >

                        <Image
                            source={require('../assets/register.png')}
                            style={styles.ImageIconStyle}
                        />
                        <Text style={styles.buttonText}> Register </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        //alignItems: 'flex-start',
        //backgroundColor: 'lightblue',
        padding: 40
    },
    buttonText: {
        color: 'lightblue',
        fontSize: 25,
        top: 20,
        //fontStyle: 'italic'
        fontFamily: 'Comfortaa-VariableFont_wght'
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 100,
        width: 100,
        resizeMode: 'stretch',
    },
});