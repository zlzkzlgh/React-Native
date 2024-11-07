import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import BookHome from "../screens/BookMainScreen";
import BookListScreen from "../screens/BookListScreen";
import BookItem from "../screens/BookItem";

const Stack = createStackNavigator();

const BookStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                cardStyle: { backgroundColor: '#ffffff' },
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95a5a6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495e',
                },
                headerTitleStyle: { color: '#ffffff', fontSize: 24 },
                headerTitleAlign: 'center',
                headerTitle: ({ style }) => (
                    <MaterialCommunityIcons name="react" style={style} />
                )
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={BookHome} 
                options={{ headerMode: 'none' }} 
            />
            <Stack.Screen 
                name="List" 
                component={BookListScreen} 
                options={{
                    headerTitle: 'List Screen',
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Prev',
                    headerTitleStyle: { fontSize: 24 },
                    headerTintColor: '#e74c3c',
                    headerBackImage: ({ tintColor }) => {
                        const style = {
                            marginRight: 5,
                            marginLeft: Platform.OS === 'ios' ? 11 : 0,
                        };
                        return (
                            <MaterialCommunityIcons
                                name="keyboard-backspace"
                                size={30}
                                color={tintColor}
                                style={style}
                            />
                        )
                    }
                }} 
            />
            <Stack.Screen 
                name="Detail" 
                component={BookItem}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <MaterialCommunityIcons 
                            name="react" 
                            size={30}
                            color="#ffffff"
                        />
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={{ marginRight: 15 }}
                        >
                            <MaterialCommunityIcons
                                name="home"
                                size={30}
                                color="#ffffff"
                            />
                        </TouchableOpacity>
                    )
                })}
            />
        </Stack.Navigator>
    )
}

export default BookStackNavigation;