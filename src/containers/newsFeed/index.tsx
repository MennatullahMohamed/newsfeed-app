import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import { fetchNews } from '../../apis/newsfeed'
import { IArticle } from '../../dtos/article';
import { COLORS } from '../../assets/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewsArticle from '../../components/newsArticle';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'

interface INewsFeedProps {
    navigation: any,
}
export function NewsFeed(props: INewsFeedProps) {
    const { t } = useTranslation();
    const theme = useSelector((state: any) => state.theme);
    const [news, setNews] = useState<IArticle[]>([]);
    const [fetching, setFetching] = useState(false);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchNewsfeed();
    }, [searchText])
    const fetchNewsfeed = () => {
        setFetching(true)
        fetchNews(searchText).then((res) => {
            setFetching(false)
            setNews(res)
        });
    }
    const viewArticleDetails = (article: IArticle) => {
        props.navigation.navigate('Article Details', {
            article: article,
        });
    }
    const renderSearch = () => {
        return <View style={styles.searchContainer}>
            <TextInput
                style={{ width: '85%', color: theme.mode == 'dark' ? COLORS.white : COLORS.dark_blue }}
                placeholderTextColor={theme.mode == 'dark' ? COLORS.white : COLORS.light_grey}
                onSubmitEditing={(e: any) => setSearchText(e.nativeEvent.text)}
                onChangeText={(text: string) => console.log("text", text)}
                placeholder={t("newsfeed:search")} />
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
                onRefresh={() => fetchNewsfeed()}
            />}
            ListHeaderComponent={renderSearch()}
            onEndReachedThreshold={2}
            contentContainerStyle={[theme.mode == 'dark' ? styles.darkContainer : styles.lightContainer, { padding: 10 }]}
            ListEmptyComponent={(<Text>{t("newsfeed:noArticle")}</Text>)}
            bounces={false}
            alwaysBounceHorizontal={false}
            alwaysBounceVertical={false}
        />
    }
    return (
        <SafeAreaView style={[theme.mode == 'dark' ? styles.darkContainer : styles.lightContainer, { height: '100%' }]}>
            {renderList()}
        </SafeAreaView>
    )
}
