import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
    FlatList,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import regularTime from './RegularTime'
import { withNavigation } from 'react-navigation';
import NewsDetail from './NewsDetail'

const NewsHeadlines = ({ navigation }) => {
    const [headlines, setHeadlines] = useState({});
    const query = navigation.state.params && navigation.state.params.category;
    const category = navigation.state.params.category;
    const language = 'tr';
    const API_KEY = 'abb0e31e39e24544bdce7a6d8fb83bf1';
    const url = `https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=${API_KEY}`;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        (await fetch(url))
            .json()
            .then(res => setHeadlines(res))
    }

    
    return (
        <SafeAreaView>
            <FlatList
                data={headlines.articles}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
            />
        </SafeAreaView>
    );

    function removeSourceInTitle(title) {
        if (title == null || title.indexOf(' - ') < 0)
            return title;
        var parts = title.split(' - ');
        parts.pop();
        return parts.join(' - ');
    }

    function renderItem({ item }) {
        return (
            <TouchableHighlight onPress={() => {
                {<NewsDetail navigation={navigation} />}
                navigation.navigate('NewsDetail', {url: item.url, urlToImage: item.urlToImage, title: item.title, description: item.description, publishedAt: regularTime(item.publishedAt), category: category} )}}>
                <View style={styles.flatListContainer}>
                    <Image style={styles.imageStyle} source={{ uri: item.urlToImage }} />
                    <View style={styles.newDetailStyle}>
                        <Text style={styles.newTitleStyle}>{removeSourceInTitle(item.title)}</Text>
                        <View style={styles.newSourceAndPublishedStyle}>
                            <View style={styles.newSourceStyle}>
                                <Icon name="newspaper" size={15} style={{ paddingRight: 5 }} />
                                <Text>{item.source.name}</Text>
                            </View>
                            <View style={styles.newSourceStyle}>
                                <Icon name="clock-outline" size={15} style={{ paddingRight: 5 }} />
                                <Text>{regularTime(item.publishedAt)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
};

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        //borderBottom: 1, 
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    newDetailStyle: {
        flex: 1,
        paddingLeft: 10
    },
    newTitleStyle: {
        flexWrap: 'wrap'
    },
    newSourceAndPublishedStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    newSourceStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

NewsHeadlines.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params && navigation.state.params.category} Haberleri`
});

export default withNavigation(NewsHeadlines);