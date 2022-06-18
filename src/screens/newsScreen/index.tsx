import React from 'react';
import { NewsFeed } from '../../containers/newsFeed';
export default function NewsFeedScreen({ navigation }: { navigation: any }) {
    return (
        <>
            <NewsFeed navigation={navigation} />
        </>
    )
}
