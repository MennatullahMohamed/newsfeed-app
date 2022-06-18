import React from 'react';
import { ArticleDetails } from '../../containers/articleDetails';
export function ArticleDetailsScreen({ navigation, route }: { navigation: any, route: any }) {
    return (
        <ArticleDetails navigation={navigation} article={route.params.article} />
    )
}
