import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarButton from '../../components/tabBarButton'
import NewsFeedScreen from '../newsScreen';
import SettingsScreen from '../settingsScreen';
import { useTranslation } from 'react-i18next';

export function Tabs() {
    const tabs = [
        {
            id: 1,
            name: 'Newsfeed',
            title: 'Newsfeed',
            iconName: 'newspaper-o',
            component: NewsFeedScreen,
            headerShown: true
        },
        {
            id: 2,
            name: 'Settings',
            title:'Settings',
            iconName: 'gear',
            component: SettingsScreen,
            headerShown: true
        },

    ]
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            {tabs.map((tab: any, index: any) => {
                return <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: tab.headerShown,
                        tabBarButton: (props: any) => <TabBarButton {...props} title={tab.title} iconName={tab.iconName} />,
                    }} />
            })}
        </Tab.Navigator>
    )
}