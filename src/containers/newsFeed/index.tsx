import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { fetchNews } from '../../apis/newsfeed'
import { IArticle } from '../../dtos/article';
import { COLORS } from '../../assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsArticle from '../../components/newsArticle';
import { styles } from './styles';
interface INewsFeedProps {
    navigation: any,
}
export function NewsFeed(props: INewsFeedProps) {
    const [news, setNews] = useState<IArticle[]>([]);
    const [fetching, setFetching] = useState(false);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        setFetching(true)
        fetchNews(searchText).then((res) => {
            setFetching(false)
            setNews(res)
        });
    }, [searchText])
    const viewArticleDetails = (article: IArticle) => {
        props.navigation.navigate('Article Details', {
            article: article,
        });
    }
    const renderSearch = () => {
        return <View style={styles.searchContainer}>
            <TextInput
                style={{ width: '85%' }}
                onSubmitEditing={(e: any) => setSearchText(e.nativeEvent.text)}
                onChangeText={(text: string) => console.log("text", text)}
                placeholder="Search..." />
            <Icon name="search" size={24} color={COLORS.light_grey} />
        </View>
    }
    const renderList = () => {
        return <FlatList
            data={news}
            renderItem={(item: any) => {
                return <NewsArticle article={item.item} onPress={() => viewArticleDetails(item.item)} />
            }}
            numColumns={1}
            scrollEnabled
            refreshing={fetching}
            refreshControl={<RefreshControl
                colors={[COLORS.dark_blue]}
                refreshing={fetching}
            />}
            ListHeaderComponent={renderSearch()}
            onEndReachedThreshold={2}
            contentContainerStyle={{ backgroundColor: COLORS.white, padding: 10 }}
            ListEmptyComponent={(<Text>No Articles Found.</Text>)}
            bounces={false}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
        />
    }
    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: COLORS.white }}>
            {renderList()}
        </SafeAreaView>
    )
}
