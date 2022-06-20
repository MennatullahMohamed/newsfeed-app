import React, { useEffect, useRef } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './src/screens/mainTabs';
import { ArticleDetailsScreen } from './src/screens/ArticleDetailsScreen';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import './src/localization';
const linking = {
  prefixes: ['newsfeedapp://'],
  config: {
    screens: {
      'Tabs': 'home',
      'Article Details': 'article/:acrticleIndex',
    }
  }
};
function App() {
  useEffect(() => EStyleSheet.build())

  const routeNameRef = useRef<any>();
  const navigationRef = useRef<any>();

  const stack = createNativeStackNavigator();
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        }}>
        <stack.Navigator>
          <stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <stack.Screen name="Article Details" component={ArticleDetailsScreen} options={{ headerShown: true }} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
