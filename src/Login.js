import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Image,
    ToastAndroid
} from 'react-native';
import CheckBox from 'react-native-modest-checkbox'
import Icon from 'react-native-vector-icons/FontAwesome'
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
        checkedRememberMe: false,
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

    checkRememberMe = value => {
        this.setState({
            checkedRememberMe: value.checked //? true : false
        });
        console.log('state.checkedRememberMe', this.state.checkedRememberMe)
        if (value.checked === true) {
            //user wants to be remembered. 
            //console.log('checkRememberMe true', value);
            this.rememberUser();
        } else {
            //console.log('checkRememberMe false', value);
            this.forgetUser();
        }
    }

    rememberUser = async () => {
        console.log('rememberUser');
        try {
            await AsyncStorage.setItem('USER-EMAIL', this.state.email);
        } catch (error) {
            // Error saving data
            console.log('Error saving data');
        }
    };

    getRememberedUser = async () => {
        try {
            const useremail = await AsyncStorage.getItem('USER-EMAIL');
            console.log('getRememberedUser', useremail);
            if (useremail !== null) {
                // We have useremail!!    
                return useremail;
            }
        } catch (error) {
            // Error retrieving data
            console.log('Error retrieving data');
        }
    };

    forgetUser = async () => {
        try {
            await AsyncStorage.removeItem('USER-EMAIL');
            //this.setState({ checkedRememberMe: false })
        } catch (error) {
            // Error removing  
            console.log('Error removing');
        }
    };

    async componentDidMount() {
        console.log('componentDidMount')
        const email = await this.getRememberedUser();
        this.setState({
            email: email || "",
            checkedRememberMe: email ? true : false
        });
        //console.log(this.state.checkedRememberMe);
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
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signIn}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <CheckBox
                        labelStyle={styles.RememberMeLabelStyle}
                        label='Beni hatırla'
                        checkedComponent={<Icon name="check-circle" size={25} color="#7FACFA" />}
                        uncheckedComponent={<Icon name="circle" size={25} color="#7FACFA" />}
                        checked= {this.state.checkedRememberMe}
                        onChange={(value) => this.checkRememberMe(value)}
                    />
                </View>

                <TouchableOpacity
                    style={{ paddingTop: 15 }}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={{ color: '#7FACFA', fontSize: 18, fontWeight: '500' }}> Henüz hesabın yok mu? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    RememberMeLabelStyle: {
        fontSize: 16,
        color: '#7FACFA'
    },
    input: {
        width: 350,
        fontSize: 18,
        fontWeight: '500',
        height: 55,
        backgroundColor: '#7FACFA',//'#42A5F5',
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
        backgroundColor: '#7FACFA',//'#42A5F5',
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