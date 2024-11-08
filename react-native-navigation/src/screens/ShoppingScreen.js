import React from 'react';
import { Button,Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:#54b7f9;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color:#ffffff;
`;

export const HomeScreen = () => {
  return (
    <Container>
      <StyledText>Welcome to ShopApp</StyledText>
    </Container>
  );
};

export const CartScreen = () => {
    const handleAddItem = () => {
        Alert.alert(
          "장바구니 알림",
          "장바구니에 추가되었습니다!",
          [
            { text: "확인"}
          ]
        )
      }
  return (
    <Container>
      <StyledText>Your Cart is Empty</StyledText>
      <Button 
        title="Add Item" 
        onPress={handleAddItem}
        color="grey"
      />
    </Container>
  );
};

export const ProfileScreen = () => {
  return (
    <Container>
      <StyledText>Your Profile</StyledText>
    </Container>
  );
};