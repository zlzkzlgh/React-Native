import React, { useState } from "react";
import { View,Text,TextInput } from "react-native";

const SignUp = () => {

    //text를 저장할 state
    const [text,setText] = useState('');

    //event.nativeEvent를 통해 문자열을 얻어와야 한다.
    const _onChange = event => setText(event.nativeEvent.text);

    //컴포넌트의 텍스트가 변경됐을 때 문자열만 인수로 전달한다.
    const _onChangeText = text => setText(text);
    return(
        <View>
            <Text style={{margin:20,fontSize:25}}>회원가입</Text>
            
            <Text>이름</Text>
            <TextInput
                style={{borderWidth:1,padding:10,fontSize:20}}
                placeholder='이름을 입력하세요'
                //onChange={_onChange}
                onChangeText={_onChangeText}/>
            
            <Text>이메일</Text>
            <TextInput
                style={{borderWidth:1,padding:10,fontSize:20}}
                placeholder='이메일을 입력하세요'
                //onChange={_onChange}
                onChangeText={_onChangeText}/>

            <Text>비밀번호</Text>
            <TextInput
                style={{borderWidth:1,padding:10,fontSize:20}}
                placeholder='비밀번호를 입력하세요'
                //onChange={_onChange}
                onChangeText={_onChangeText}/>

            <Text>비밀번호 확인</Text>
            <TextInput
                style={{borderWidth:1,padding:10,fontSize:20}}
                placeholder='비밀번호를 다시 입력하세요'
                //onChange={_onChange}
                onChangeText={_onChangeText}/>
        </View>
    )
}

export default SignUp;