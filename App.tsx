import React, { useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './src/screens/mainTabs';

function App() {


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
      </stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
