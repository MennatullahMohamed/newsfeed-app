import React, { useEffect } from 'react'
import { Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { IArticle } from '../../dtos/article';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
interface INewsFeedProps {
  navigation: any,
  article: IArticle
}
export function ArticleDetails(props: INewsFeedProps) {
  const { t } = useTranslation();
  const { article } = props;
  useEffect(() => {
    console.log("article", props.article)
  }, [])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.detailsContainer}>
        <Image
          style={styles.articleImage}
          source={{ uri: article.urlToImage }}
          resizeMode="contain"
        />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.details}><Text style={styles.headers}>{t("newsfeed:author")} </Text>{article.author}</Text>
        <Text style={styles.details}><Text style={styles.headers}>{t("newsfeed:publishedAt")} </Text>{article.publishedAt.split('T')[0]}</Text>
        <Text style={styles.details}><Text style={styles.headers}>{t("newsfeed:source")} </Text>{article.source.name}</Text>
        <Text style={styles.details}>{article.content}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
