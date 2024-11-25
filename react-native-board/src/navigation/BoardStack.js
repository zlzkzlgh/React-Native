import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import WriteScreen from "../screens/WriteScreen";
import { Pressable, View ,StyleSheet,Text} from "react-native";
import {AntDesign} from '@expo/vector-icons'

const Stack = createStackNavigator();

const BoardStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1e1e1e',
                },
                headerTitleStyle: {
                    color:'white',
                },
                headerTitleAlign:'center',
            }}>
            <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={{
                    title:'게시글 목록',
                }}/>
            <Stack.Screen 
                name="Write" 
                component={WriteScreen}
                options={({navigation}) =>({
                    title:'글쓰기',
                    headerLeft:() => (
                        <Pressable onPress={()=> Navigation.goBack()} style={{marginLeft:20}}>
                            <AntDesign name="close" size={24} color="white" />
                        </Pressable>
                    ),
                })}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    saveButton:{
        backgroundColor:'#2ecc71',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:8,
    },
    saveButtonText:{
        color:'#fff',
        fontSize:16,
    },
})

export default BoardStack;