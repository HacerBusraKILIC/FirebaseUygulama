import React from 'react';
import { SafeAreaView, StyleSheet, Image, Text, ImageBackground, View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { NewsWebView } from './NewsWebView';

const NewsDetail = ({ navigation }) => {

  const url = navigation.state.params && navigation.state.params.url;
  const urlToImage = navigation.state.params && navigation.state.params.urlToImage;
  const title = navigation.state.params && navigation.state.params.title;
  const description = navigation.state.params && navigation.state.params.description;
  const category = navigation.state.params && navigation.state.params.category;
  const publishedAt = navigation.state.params && navigation.state.params.publishedAt;

  return (
    <SafeAreaView style={styles.ContainerStyle}>

      <ImageBackground style={styles.ImageStyle} source={{ uri: urlToImage }}>
        <Image source={require('../assets/darkgradient.png')} style={styles.gradientImage} />
        <Text numberOfLines={2} style={[styles.baseText, styles.listRow_text]}>{title}></Text>
      </ImageBackground>

      <View style={styles.CategoryDateView}>
        <Text style={[styles.baseText, styles.subTitleText]}>{category}</Text>
        <Text style={[styles.baseText, styles.subTitleText]}>{"  •  "}</Text>
        <Text style={[styles.baseText, styles.subTitleText]}>{publishedAt}</Text>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </ScrollView>

      <View style={styles.webViewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            {<NewsWebView navigation={navigation} />}
            navigation.navigate('NewsWebView', {url: url} )}}>
          <Text style={styles.webViewButtonText}> Web'de görüntüle </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ContainerStyle: {
    position: 'relative',
    backgroundColor: '#f5f5f7',
    flex: 1,
    flexDirection: 'column'
  },
  ImageStyle: {
    width: wp('100%'),
    height: hp('35%'),
    /*borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,*/
  },
  gradientImage: {
    backgroundColor: 'transparent',
    width: wp('100%'),
    height: hp('35%'),
    /*borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,*/
  },
  baseText: {
    fontFamily: 'Comfortaa-VariableFont_wght',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#555',
  },
  listRow_text: {
    textAlign: 'left',
    left: wp('5%'),
    backgroundColor: 'transparent',
    maxWidth: wp('75%'),
    height: wp('7%'),
    position: 'absolute',
    bottom: hp('3%'),
    color: "#fff",
  },
  subTitleText: {
    fontSize: wp('3.5%'),
    fontWeight: 'bold',
    color: '#555'
  },
  CategoryDateView: {
    backgroundColor: '#f5f5f7',
    flexDirection: 'row',
    maxWidth: wp('75%'),
    height: hp('3%'),
    left: wp('5%'),
    top: hp('2%'),
  },
  body: {
    //backgroundColor: 'black',
    height: hp('45%'),
    top: wp('4%'),
    left: wp('3%'),
    width: wp('92%'),
  },
  descriptionText: {
    fontFamily: 'Comfortaa-VariableFont_wght',
    fontSize: wp('5%'),
    left: wp('2.5%'),
    width: wp('92%'),
    color: '#333',
  },
  webViewButton: {
    backgroundColor: 'lightgray',
    height: hp('5%'),
    //top: wp('1%'),
    left: wp('0.5%'),
    width: wp('99%'),
    bottom:hp('0.2%'),

    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 5,
    padding: 10
  },
  webViewButtonText: {
    fontFamily: 'Comfortaa-VariableFont_wght',
    color: 'gray',
    fontSize: hp('2.5%'),
}
})

export default withNavigation(NewsDetail);
