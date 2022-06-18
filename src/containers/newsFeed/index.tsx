import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { fetchNews } from '../../apis/newsfeed'
import { IArticle } from '../../dtos/article';
import { COLORS } from '../../assets/styles/colors';
import NewsArticle from '../../components/newsArticle';
interface INewsFeedProps {
    navigation: any,
}
export function NewsFeed(props: INewsFeedProps) {
    const [news, setNews] = useState<IArticle[]>([]);
    const [fetching, setFetching] = useState(false);
    useEffect(() => {
        setFetching(true)
        console.log("news feed")
        fetchNews().then((res) => {
            setFetching(false)
            setNews(res)
        });
    }, [])
    const renderList = () => {
        return <FlatList
            data={news}
            renderItem={(item: any) => {
                return <NewsArticle article={item.item} onPress={() => console.log(item.item)} />
            }}
            numColumns={1}
            scrollEnabled
            refreshing={fetching}
            refreshControl={<RefreshControl
                colors={[COLORS.dark_blue]}
                refreshing={fetching}
            />}
            onEndReachedThreshold={2}
            contentContainerStyle={{ marginTop: '2%' }}
            ListEmptyComponent={(<Text>No Articles Found.</Text>)}
            bounces={false}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
        />
    }
    return (
        <SafeAreaView style={{ backgroundColor: "white" }}>
            {renderList()}
        </SafeAreaView>
    )
}
