import React, {useContext} from 'react'
import {ThemeContext} from  'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import { Channel, ChannelCreation } from '../screens'
import MainTab from './MainTab'

//스택 생성하기
const Stack = createStackNavigator();

const MainStack = () => {

    const theme = useContext(ThemeContext);
    
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor : theme.headerTintColor,
                cardStyle : {backgroundColor : theme.background},
                headerBackTitleVisible : false,
            }}
        >
            <Stack.Screen name="Main" component={MainTab}
                options={{
                    headerShown:false,
                }}/>
            <Stack.Screen name="Channel Creation" component={ChannelCreation}/>
            <Stack.Screen name="Channel" component={Channel}/>
        </Stack.Navigator>
    )
}

export default MainStack;