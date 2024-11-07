import React from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
    width: 80%;
    margin-bottom: 10px;
`;

const book = [
    { _id: 1, name: '홍길동전', description: '이것은 홍길동전의 설명입니다' },
    { _id: 2, name: '콩쥐팥쥐', description: '이것은 콩쥐팥쥐의 설명입니다' },
    { _id: 3, name: '신데렐라', description: '이것은 신데렐라의 설명입니다' },
];

const BookListScreen = ({ navigation }) => {
    const _onPress = (item) => {
        navigation.navigate('Detail', { 
            id: item._id, 
            name: item.name,
            description: item.description  // description 추가
        });
    };

    return (
        <Container>
            <StyledText>도서 목록</StyledText>
            {book.map(item => (
                <ButtonContainer key={item._id}>
                    <Button
                        title={item.name}
                        onPress={() => _onPress(item)}
                    />
                </ButtonContainer>
            ))}
        </Container>
    );
};

export default BookListScreen;