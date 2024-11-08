import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

//이름,크기,색깔만 주면 아이콘 컴포넌트를 만들어주는 함수
const TabIcon = ({ color, size, name }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabNavigation = () => {
    return (
      <Tab.Navigator
      initialRouteName='Settings'
      screenOptions={({route}) => ({
        tabBarIcon : props => {
          let name = '';
          if(route.name === 'Mail') name = 'email';
          else if(route.name === 'Meet') name = 'video';
          else name = 'cog'
          return TabIcon({...props,name})
        },
        tabBarLabelPosition:'beside-icon',
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#54b7f9',
          borderTopColor:'#ffffff',
          borderTopWidth:2,
        },
        tabBarActiveTintColor:'#ffffff',
        tabBarInactiveTintColor:'#0b92e9',
      })}>
        <Tab.Screen 
          name="Mail" 
          component={Mail}
          options={{
            tabBarLabel:'Inbox',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'email' : 'email-outline',
              })
          }}
        />
        <Tab.Screen 
          name="Meet" 
          component={Meet}
          options={{
            tabBarLabel:'Inbox',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'video' : 'video-outline',
              })
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarLabel:'Inbox',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'cog' : 'cog-outline',
              })
          }} 
        />
      </Tab.Navigator>
    );
  };

  export default TabNavigation;