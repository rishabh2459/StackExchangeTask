import React, {useState, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ReactScreen from './src/screens/react/React';
import ReactNativeScreen from './src/screens/reactNative/ReactNative';
import NodeScreen from './src/screens/node/Node';

import ReactIcon from 'react-native-vector-icons/Fontisto';
import ReactNativeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import NodeIcon from 'react-native-vector-icons/Fontisto';
import { LogBox } from 'react-native';
import SplashScreen from './src/screens/splashscreen/SplashScreen';

const Tab = createBottomTabNavigator();

function App() {
  LogBox.ignoreAllLogs()

  const [ShowSplashScreen, setShowSplashScreen] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [Duration, setDuration] = useState(2000);

  useEffect(() => {
      const loadApp = () => {
          setLoading(true);
          
          setTimeout(() => {
            setShowSplashScreen(false);
          }, Duration);

          setLoading(false);
      };

      loadApp();
  },[]);

  return (
    <>
    {ShowSplashScreen ? (
      <SplashScreen />
    ): (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={() => ({
        headerShown: true,
        headerTintColor: 'white',
        headerStyle:{backgroundColor: '#F2740D',},
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#F2740D',
        tabBarInactiveBackgroundColor: '#F2740D',
      })}>
        <Tab.Screen
          name="React"
          component={ReactScreen}
          options={{
            tabBarLabel: 'React',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
              <ReactIcon
                name="react"
                color={color}
                size= {20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="React Native"
          component={ReactNativeScreen}
          options={{
            tabBarLabel: 'React Native',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
              <ReactNativeIcon
                name="nativescript"
                color={color}
                size= {20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Node"
          component={NodeScreen}
          options={{
            tabBarLabel: 'Node',
            tabBarLabelStyle: {fontSize: 15},
            tabBarIcon: ({ color, size }) => (
              <NodeIcon
                name="nodejs"
                color={color}
                size= {20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    )}
    </>
  );
}

export default App;
