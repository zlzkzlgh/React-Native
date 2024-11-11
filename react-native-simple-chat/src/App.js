import React,{useEffect,useState} from 'react'
import { StatusBar,Image } from 'react-native'
import { Asset } from 'expo-asset'//이미지,오디오,동영상 등 다양한 리소스를 관리하고 미리 로드할 수 있도록 도와준다.
import * as Font from 'expo-font'//사용자 정의 글꼴을 미리 로드하고 사용할 수 있다.
import * as SplashScreen from 'expo-splash-screen'; // expo-splash-screen을 불러옴
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'

//스플래시 화면이 자동으로 숨겨지지 않도록 설정하여 초기화 작업이 완료될 때까지 유지
SplashScreen.preventAutoHideAsync();

const cacheImages = images => {
    // 이미지 캐싱 함수: 문자열로 전달된 URL 이미지와 로컬 파일 이미지에 따라 각각 적절한 캐싱 방식으로 처리
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image); // URL로 제공된 이미지의 경우, Image.prefetch로 캐싱
        } else {
            return Asset.fromModule(image).downloadAsync(); // 로컬 파일의 경우, expo-asset에서 제공하는 다운로드 방식으로 캐싱
        }
    });
};

const cacheFonts = fonts => {
    // 폰트 캐싱 함수: 폰트 배열을 받아 각 폰트를 로드
    return fonts.map(font => Font.loadAsync(font));
}

const App = () => {
    const [isReady, setIsReady] = useState(false); // 초기화 여부를 추적하는 상태 변수
    return(
        <ThemeProvider theme={theme}>
            {/* dark-content 글자와 아이콘이 어두운 색상으로 나온다 */}
            <StatusBar barStyle='dark-content' />
        </ThemeProvider>
    )
}

export default App;