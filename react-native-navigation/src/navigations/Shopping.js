import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeScreen,CartScreen,ProfileScreen } from '../screens/ShoppingScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ color, size, name }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const ShoppingNavigation = () => {
    return (
      <Tab.Navigator
      initialRouteName='HomeScreen'
      screenOptions={({route}) => ({
        tabBarIcon : props => {
          let name = '';
          if(route.name === 'Home') name = 'home';
          else if(route.name === 'Cart') name = 'cart';
          else name = 'account'
          return TabIcon({...props,name})
        },
        tabBarLabelPosition:'beside-icon',
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#ffffff',
        //   borderTopColor:'#ffffff',
        //   borderTopWidth:2,
        },
        tabBarActiveTintColor:'#0b92e9',
        tabBarInactiveTintColor:'grey',
      })}>
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{
            tabBarLabel:'Home',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'home' : 'home-outline',
              })
          }}
        />
        <Tab.Screen 
          name="CartScreen" 
          component={CartScreen}
          options={{
            tabBarLabel:'Cart',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'cart' : 'cart-outline',
              })
          }} 
        />
        <Tab.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
          options={{
            tabBarLabel:'Profile',
            tabBarIcon:props => 
              TabIcon({
                ...props, name:props.focused ? 'account' : 'account-outline',
              })
          }} 
        />
      </Tab.Navigator>
    );
  };

  export default ShoppingNavigation;