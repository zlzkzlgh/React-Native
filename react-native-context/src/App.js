import React from 'react'
import styled from 'styled-components'
import User from './components/User';
import UserContext,{UserProvider} from './contexts/User';
import Input from './components/Input';
import ThemedComponent from './components/ThemeComponent';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import CartScreen from './components/CartScreen';
import { UserProvider2 } from './contexts/UserContext';
import HomeScreen from './components/HomeScreen';

const Container = styled.View`
    flex : 1;
    background-color : #ffffff;
    justify-content : center;
    align-items : center;
`;

const App = () => {
    return (
        <UserProvider2>
            <Container>
                <HomeScreen />
            </Container>
        </UserProvider2>
    );
  };
export default App;