import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native'
import { IArticle } from '../../dtos/article';
import { styles } from './styles'
interface INewsArticleProps {
    article: IArticle,
    onPress: () => any
}
export default function NewsArticle(props: INewsArticleProps) {
    const { article } = props;
    return (
        <TouchableOpacity style={styles.parent}
            onPress={props.onPress}>
            <Image source={{ uri: article.urlToImage }}
                style={styles.img} />
            <Text style={styles.title} numberOfLines={2}>{article.title}</Text>
        </TouchableOpacity>
    );
}
