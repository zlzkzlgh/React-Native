import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BookStackNavigation from './navigations/BookStack';
import StackNavigation from './navigations/Stack'
import UserStackNavigator from './navigations/UserStack';
import TabNavigation from './navigations/Tab';
import ShoppingNavigation from './navigations/Shopping';

// const Container = styled.View`
//     flex : 1;
//     background-color : #ffffff;
//     justify-content : center;
//     align-items : center;
// `

const App = () => {
    return(
        <NavigationContainer>
            <ShoppingNavigation />
        </NavigationContainer>
    )
}

export default App;