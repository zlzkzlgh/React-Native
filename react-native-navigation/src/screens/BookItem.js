import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
`;

const IdText = styled.Text`
    font-size: 16px;
    color: #888;
    margin-bottom: 10px;
`;

const Description = styled.Text`
    font-size: 18px;
    color: #666;
    text-align: center;
    margin-top: 20px;
    line-height: 24px;
`;

const DetailContainer = styled.View`
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    align-items: center;
`;

const BookItem = ({ route }) => {
    const { id, name, description } = route.params;

    return (
        <Container>
            <DetailContainer>
                <IdText>ID: {id}</IdText>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </DetailContainer>
        </Container>
    );
};

export default BookItem;