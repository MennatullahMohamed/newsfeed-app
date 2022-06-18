import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../assets/styles/colors';

interface ITabBarButtonProps {
    title: string;
    iconName: any;
    onPress: any;
    accessibilityState: any;
}
export default function TabBarButton(props: ITabBarButtonProps) {
    const { title, iconName, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    return <TouchableOpacity
        style={{ width: '50%', padding: 10, backgroundColor: COLORS.dark_blue }}
        onPress={onPress}>
        <View
            style={{ alignItems: 'center' }}>
            <Icon name={iconName} size={22} color={focused ? COLORS.white : COLORS.grey} />
        </View>
    </TouchableOpacity>
}
