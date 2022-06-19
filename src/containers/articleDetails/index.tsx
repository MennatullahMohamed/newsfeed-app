import React, { useEffect } from 'react'
import { Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { IArticle } from '../../dtos/article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'

import { styles } from './styles';
interface INewsFeedProps {
  navigation: any,
  article: IArticle
}
export function ArticleDetails(props: INewsFeedProps) {
  const { t } = useTranslation();
  const theme = useSelector((state: any) => state.theme);
  const { article } = props;
  useEffect(() => {
    console.log("article", props.article)
  }, [])
  return (
    <SafeAreaView style={[styles.mainContainer, theme.mode == 'dark' ? styles.darkModeBgColor : undefined]}>
      <ScrollView style={styles.detailsContainer}>
        <Image
          style={styles.articleImage}
          source={{ uri: article.urlToImage }}
          resizeMode="contain"
        />
        <Text style={[styles.title, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{article.title}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:author")} </Text>{article.author}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:publishedAt")} </Text>{article.publishedAt.split('T')[0]}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:source")} </Text>{article.source.name}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{article.content}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
