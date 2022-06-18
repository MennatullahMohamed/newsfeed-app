import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { IArticle } from '../../dtos/article';
import { COLORS } from '../../assets/styles/colors';
import NewsArticle from '../../components/newsArticle';
import { styles } from './styles';
interface INewsFeedProps {
  navigation: any,
  article: IArticle
}
export function ArticleDetails(props: INewsFeedProps) {
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
        <Text style={styles.details}><Text style={styles.headers}>Author: </Text>{article.author}</Text>
        <Text style={styles.details}><Text style={styles.headers}>Published at: </Text>{article.publishedAt.split('T')[0]}</Text>
        <Text style={styles.details}><Text style={styles.headers}>Source: </Text>{article.source.name}</Text>
        <Text style={styles.details}>{article.content}</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
