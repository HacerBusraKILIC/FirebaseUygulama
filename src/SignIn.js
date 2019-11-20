import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import { USER_KEY } from './config';
import firebase from 'react-native-firebase';

export default class SignIn extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        loading: true,
        error: '',
    }

    showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Giriş başarılı',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }

    onSigninSuccess() {
        console.log(this.email)
        this.showToast()
        this.props.navigation.navigate('Main')
    }

    onSigninFailure(errorMessage) {
        this.setState({ error: errorMessage, loading: false })
        console.log(this.state.error)
        ToastAndroid.showWithGravityAndOffset(
            this.state.error,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }

    signIn = async () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onSigninSuccess.bind(this))
            .catch((error) => {
                let errorCode = error.code
                let errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    this.onSigninFailure.bind(this)('Weak password!')
                } else {
                    this.onSigninFailure.bind(this)(errorMessage)
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({email: text})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({password: text})}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn}>
                    <Text style={styles.buttonText}> Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingTop: 15 }}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{ color: "lightblue", fontSize: 18, fontWeight: '500' }}> Henüz hesabın yok mu? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        color: 'white',
        padding: 8,
        borderRadius: 14
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        width: wp('35%'),
        height: hp('7%'),
        alignItems: 'center',
        backgroundColor: '#42A5F5',
        borderColor: 'black',
        borderRadius: 14,
        padding: 10
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
    }

})