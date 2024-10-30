import React from "react";
import { Text, ScrollView} from 'react-native';
import { textStyles,viewStyles } from "./styles";
import { Header,Contents,Footer } from "./components/Layout";
import FlexDirectionTest from "./components/flexDirectionTest";
import JustifyContent from "./components/justifyContentTest";
import AlignItemsTest from "./components/AlignItemsTest";
import ShadowBox from "./components/ShadowBox";
import StyledComponent from "./components/StyledComponent";
import Button from "./components/Button";
import styled from "styled-components";


const Container = styled.View`
    flex: 1;
    background-color:#ffffff;
    align-items:center;
    justify-content:center;
`

export default function App() {
    return (
    // <ScrollView>
    //     {/* 인라인과 클래스 스타일 혼용사용 가능
    //      뒤에 오는 스타일이 앞의 스타일을 덮어쓴다 */}
    //     {/* <Text style={[textStyles.text, { color: 'green' }]}>Inline-Styling - Text</Text>
    //     <Text style={[textStyles.text , textStyles.error]}>Inline Styling - Error</Text> */}
    //     <Header />
    //     <Contents />
    //     <Footer />
    //     <FlexDirectionTest />
    //     <JustifyContent />
    //     <AlignItemsTest />
    //     <ShadowBox />
    //     <StyledComponent />
    //     <Button />
    // </ScrollView>
    <Container>
        <Button title = "Hanbit" />
        <Button title = "React Native" />
    </Container>
    );
  }

