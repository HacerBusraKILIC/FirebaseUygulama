import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ToastAndroid
} from 'react-native';
import firebase from 'react-native-firebase'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';


export default class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        phone_number: '',
        errorMessage: null
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    showToast = () =>{
        ToastAndroid.showWithGravityAndOffset(
            'Kayıt başarılı',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
     }

    onSignupSuccess() {
        this.showToast()
        this.props.navigation.navigate('Home')
    }

    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onSignupSuccess.bind(this))
            .catch(error => console.log(error)); 
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone Number'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.signUp}>
                    <Text style={styles.buttonText}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ paddingTop: 15 }}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{ color: '#7FACFA', fontSize: 18, fontWeight: '500' }}> Zaten bir hesabın var mı? </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: wp('84.5%'),
        height: hp('7%'),
        backgroundColor: '#7FACFA',//'#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
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
        //borderWidth: 2,
        borderColor: 'black',
        borderRadius: 14,
        padding: 10
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        //borderRadius: 14,
        fontWeight: '500',
    }
})