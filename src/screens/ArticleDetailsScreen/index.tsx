import React from 'react';
import { ArticleDetails } from '../../containers/articleDetails';
export function ArticleDetailsScreen({ navigation, route }: { navigation: any, route: any }) {
    console.log("routeee", route)
    return (
        <ArticleDetails navigation={navigation} 
        acrticleIndex={route.params.acrticleIndex}
        article={route.params.article} />
    )
}
