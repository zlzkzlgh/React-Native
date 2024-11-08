import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BookStackNavigation from './navigations/BookStack';
import StackNavigation from './navigations/Stack'
import UserStackNavigator from './navigations/UserStack';
import TabNavigation from './navigations/Tab';
import ShoppingNavigation from './navigations/Shopping';
import ChatTapNavigator from './navigations/ChatTab';

// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items : center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <ChatTapNavigator />
        </NavigationContainer>
    )
}

export default App;