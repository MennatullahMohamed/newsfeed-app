import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { IArticle } from '../../dtos/article';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { fetchNews } from '../../apis/newsfeed'
import { styles } from './styles';
interface INewsFeedProps {
  navigation: any,
  article: IArticle,
  acrticleIndex?: number
}
export function ArticleDetails(props: INewsFeedProps) {
  const { t } = useTranslation();
  const { article, acrticleIndex } = props;
  const theme = useSelector((state: any) => state.theme);
  const [newsArticle, setNewsArticle] = useState<IArticle>(article);
  useEffect(() => {
    console.log("acrticleIndex", acrticleIndex)
    if (acrticleIndex) {
      fetchNews().then((res) => {
        setNewsArticle(res[acrticleIndex])
        console.log("acrticleIndex res", res[acrticleIndex])

      });
    }
    else {
      setNewsArticle(article)
    }
  }, [])
  return (
    <SafeAreaView style={[styles.mainContainer, theme.mode == 'dark' ? styles.darkModeBgColor : undefined]}>
      {newsArticle ? <ScrollView style={styles.detailsContainer}>
        <Image
          style={styles.articleImage}
          source={{ uri: newsArticle.urlToImage }}
          resizeMode="contain"
        />
        <Text style={[styles.title, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{newsArticle.title}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:author")} </Text>{newsArticle.author}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:publishedAt")} </Text>{newsArticle.publishedAt.split('T')[0]}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}><Text style={[styles.headers, , theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{t("newsfeed:source")} </Text>{newsArticle.source.name}</Text>
        <Text style={[styles.details, theme.mode == 'dark' ? styles.darkModeColor : undefined]}>{newsArticle.content}</Text>
      </ScrollView> : undefined}
    </SafeAreaView>
  )
}
