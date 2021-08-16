import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../views/Home';
import ListScreen from '../views/List';
import DetailScreen from '../views/Detail';

// 样式
import GlobalSkin from './skin';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case '首页':
              iconName = 'home';
              break;
            case '列表':
              iconName = 'bank';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'salmon',
        tabBarInactiveTintColor: 'gray',
        ...GlobalSkin,
      })}>
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="列表" component={ListScreen} />
    </Tab.Navigator>
  );
}

function TxCourse() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={GlobalSkin} initialRouteName="Tab">
        {/* Tab路由里嵌套了两个tab路由 */}
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TxCourse;
