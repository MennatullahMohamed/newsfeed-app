import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './src/screens/mainTabs';
import { ArticleDetailsScreen } from './src/screens/ArticleDetailsScreen';
function App() {
  useEffect(() => EStyleSheet.build())

  const routeNameRef = useRef<any>();
  const navigationRef = useRef<any>();

  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}>
      <stack.Navigator>
        <stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <stack.Screen name="Article Details" component={ArticleDetailsScreen} options={{ headerShown: true }} />
      </stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
